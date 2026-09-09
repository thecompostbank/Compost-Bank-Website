/**
 * Cloudflare Worker backing the site's two enquiry forms.
 *
 * Browsers no longer talk to Web3Forms directly. They post here, the Worker
 * rate limits by client IP, validates the payload, and only then forwards it
 * using WEB3FORMS_ACCESS_KEY — a Worker secret rather than a value shipped in
 * the JS bundle.
 */

const ENDPOINT = 'https://api.web3forms.com/submit'
const TURNSTILE_VERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

// Turnstile tokens cap out at 2048 chars.
const MAX_TOKEN_LENGTH = 2_048

const MAX_BODY_BYTES = 20_000
const MAX_FIELD_LENGTH = 5_000

// Deliberately loose: reject obvious junk, not unusual-but-valid addresses.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * One entry per form. Only listed fields are forwarded, so a client cannot
 * inject extra keys (including its own access_key) into the upstream request.
 */
const FORMS = {
  '/api/contact': {
    subject: 'New Consultation Request — The Compost Bank',
    required: ['name', 'email', 'businessType', 'interest', 'message'],
    optional: ['company', 'phone'],
    booleans: [],
    requiredBooleans: [],
  },
  '/api/interest': {
    subject: 'New Registration of Interest — Centralized Processing & Collection',
    required: ['contactName', 'position', 'email', 'businessType', 'wasteVolume', 'participation'],
    optional: ['businessName', 'phone', 'comments'],
    booleans: ['consent'],
    requiredBooleans: ['consent'],
  },
}

function json(body, status, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  })
}

function tooManyRequests(retryAfterSeconds) {
  return json(
    {
      success: false,
      error: 'rate_limited',
      retryAfter: retryAfterSeconds,
      message: 'Too many enquiries from this connection. Please try again shortly.',
    },
    429,
    { 'Retry-After': String(retryAfterSeconds) }
  )
}

function validate(payload, form) {
  if (typeof payload !== 'object' || payload === null || Array.isArray(payload)) {
    return 'Malformed submission.'
  }

  const textFields = [...form.required, ...form.optional]

  for (const field of textFields) {
    const value = payload[field]
    if (value === undefined || value === null) continue
    if (typeof value !== 'string') return `Invalid value for ${field}.`
    if (value.length > MAX_FIELD_LENGTH) return `${field} is too long.`
  }

  for (const field of form.booleans) {
    const value = payload[field]
    if (value !== undefined && typeof value !== 'boolean') {
      return `Invalid value for ${field}.`
    }
  }

  for (const field of form.required) {
    const value = payload[field]
    if (typeof value !== 'string' || value.trim() === '') {
      return 'Please complete all required fields.'
    }
  }

  for (const field of form.requiredBooleans) {
    if (payload[field] !== true) return 'Please complete all required fields.'
  }

  if (!EMAIL_RE.test(payload.email.trim())) {
    return 'Please enter a valid email address.'
  }

  return null
}

/**
 * Verifies a Turnstile token. Tokens are single-use and valid for 5 minutes,
 * so a replayed one comes back as timeout-or-duplicate.
 */
async function verifyTurnstile(token, secret, remoteip) {
  const body = new FormData()
  body.append('secret', secret)
  body.append('response', token)
  if (remoteip && remoteip !== 'unknown') body.append('remoteip', remoteip)

  const res = await fetch(TURNSTILE_VERIFY, { method: 'POST', body })
  if (!res.ok) throw new Error(`siteverify returned ${res.status}`)

  const result = await res.json()
  return { success: result.success === true, errorCodes: result['error-codes'] || [] }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const form = FORMS[url.pathname]

    if (!form) {
      return json({ success: false, error: 'not_found' }, 404)
    }

    if (request.method !== 'POST') {
      return json({ success: false, error: 'method_not_allowed' }, 405, { Allow: 'POST' })
    }

    // CF-Connecting-IP is set by the edge and cannot be spoofed by the client
    // in production. Absent only in local dev, where callers share one bucket.
    const clientIp = request.headers.get('CF-Connecting-IP') || 'unknown'

    // Both forms share the limiters, so one sender cannot get a fresh budget
    // by switching forms.
    const burst = await env.CONTACT_BURST.limit({ key: clientIp })
    if (!burst.success) return tooManyRequests(10)

    const sustained = await env.CONTACT_SUSTAINED.limit({ key: clientIp })
    if (!sustained.success) return tooManyRequests(60)

    if (Number(request.headers.get('Content-Length') || 0) > MAX_BODY_BYTES) {
      return json({ success: false, error: 'payload_too_large' }, 413)
    }

    let payload
    try {
      const raw = await request.text()
      if (raw.length > MAX_BODY_BYTES) {
        return json({ success: false, error: 'payload_too_large' }, 413)
      }
      payload = JSON.parse(raw)
    } catch {
      return json({ success: false, error: 'invalid_json' }, 400)
    }

    const invalid = validate(payload, form)
    if (invalid) {
      return json({ success: false, error: 'invalid_input', message: invalid }, 400)
    }

    // Captcha is enforced only once a secret is configured, so the Worker can
    // be deployed before the widget exists without rejecting real enquiries.
    if (env.TURNSTILE_SECRET_KEY) {
      const token = payload.cfTurnstileToken
      if (typeof token !== 'string' || token === '' || token.length > MAX_TOKEN_LENGTH) {
        return json({ success: false, error: 'captcha_missing' }, 403)
      }

      let verdict
      try {
        verdict = await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, clientIp)
      } catch (err) {
        console.error('turnstile verification failed', err)
        return json({ success: false, error: 'captcha_unavailable' }, 502)
      }

      if (!verdict.success) {
        console.warn('turnstile rejected token', verdict.errorCodes.join(','))
        return json({ success: false, error: 'captcha_failed' }, 403)
      }
    } else {
      console.warn('TURNSTILE_SECRET_KEY is not set — captcha verification is disabled')
    }

    if (!env.WEB3FORMS_ACCESS_KEY) {
      console.error('WEB3FORMS_ACCESS_KEY is not configured')
      return json({ success: false, error: 'not_configured' }, 500)
    }

    const forwarded = {
      access_key: env.WEB3FORMS_ACCESS_KEY,
      subject: form.subject,
    }
    for (const field of [...form.required, ...form.optional]) {
      if (typeof payload[field] === 'string') forwarded[field] = payload[field].trim()
    }
    for (const field of form.booleans) {
      if (typeof payload[field] === 'boolean') forwarded[field] = payload[field]
    }

    let upstream
    try {
      upstream = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(forwarded),
      })
    } catch (err) {
      console.error('web3forms request failed', err)
      return json({ success: false, error: 'upstream_unreachable' }, 502)
    }

    let result = {}
    try {
      result = await upstream.json()
    } catch {
      // Fall through to the ok check below.
    }

    if (!upstream.ok || !result.success) {
      console.error('web3forms rejected submission', upstream.status, result && result.message)
      return json({ success: false, error: 'upstream_rejected' }, 502)
    }

    return json({ success: true }, 200)
  },
}
