import { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import { createRateLimiter } from '../utils/rateLimit'
import Turnstile, { turnstileEnabled } from '../components/Turnstile'

const ContourPattern = ({ opacity = '0.06' }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 700"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <g stroke="#2E3A2F" strokeWidth="1">
      {[60, 110, 160, 210, 260, 310, 360, 410, 460, 510, 560, 610].map((y, i) => (
        <path
          key={y}
          d={`M-200,${y} C${150 + i * 20},${y - 12} ${400 - i * 10},${y + 15} ${700 + i * 5},${y - 8} C${1000 - i * 8},${y + 10} ${1280 + i * 6},${y - 5} 1640,${y}`}
        />
      ))}
    </g>
  </svg>
)

const inputClass =
  'w-full bg-transparent border-b border-charcoal/25 py-3 text-sm font-lato text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-forest transition-colors duration-200'

const labelClass = 'block text-[9px] font-lato tracking-ultra uppercase text-charcoal/60 font-bold mb-2'

const selectClass =
  'w-full bg-transparent border-b border-charcoal/25 py-3 text-sm font-lato text-charcoal focus:outline-none focus:border-forest transition-colors duration-200 appearance-none cursor-pointer'

// Throttles enquiry submissions from this browser: one every 30s,
// and at most 3 in any 15-minute window.
const submitLimiter = createRateLimiter({
  key: 'cb:contact-submits',
  maxAttempts: 3,
  windowMs: 15 * 60 * 1000,
  cooldownMs: 30 * 1000,
})

function formatWait(ms) {
  const secs = Math.max(0, Math.ceil(ms / 1000))
  if (secs < 60) return `${secs} second${secs === 1 ? '' : 's'}`
  const mins = Math.ceil(secs / 60)
  return `${mins} minute${mins === 1 ? '' : 's'}`
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [blockedUntil, setBlockedUntil] = useState(0)
  const [blockReason, setBlockReason] = useState(null)
  const [now, setNow] = useState(() => Date.now())
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaNonce, setCaptchaNonce] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')

  // Set both clocks from one reading, so the first rendered countdown
  // is not measured against a stale `now`.
  const startCooldown = (retryAfterMs, reason) => {
    const t = Date.now()
    setNow(t)
    setBlockedUntil(t + retryAfterMs)
    setBlockReason(reason)
  }

  // A limit reached before a reload still applies when the page comes back.
  useEffect(() => {
    const { allowed, retryAfterMs, reason } = submitLimiter.check()
    if (!allowed) startCooldown(retryAfterMs, reason)
  }, [])

  useEffect(() => {
    if (!blockedUntil) return
    setNow(Date.now())
    const id = setInterval(() => {
      const t = Date.now()
      if (t >= blockedUntil) setBlockedUntil(0)
      else setNow(t)
    }, 1000)
    return () => clearInterval(id)
  }, [blockedUntil])

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return

    // Fast local check first: avoids a pointless round trip and gives
    // instant feedback. The Worker enforces the real limit by IP.
    const { allowed, retryAfterMs, reason } = submitLimiter.check()
    if (!allowed) {
      startCooldown(retryAfterMs, reason)
      setError(false)
      return
    }

    submitLimiter.record()
    setSending(true)
    setError(false)

    let serverCooldownMs = 0
    let succeeded = false
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formState, cfTurnstileToken: captchaToken }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.status === 429) {
        const retryAfter = Number(res.headers.get('Retry-After')) || data.retryAfter || 60
        serverCooldownMs = retryAfter * 1000
      } else if (data.success) {
        succeeded = true
        setSubmitted(true)
      } else if (data.error === 'captcha_missing' || data.error === 'captcha_failed') {
        setErrorMsg("We couldn't verify that you're human. Please try again.")
        setError(true)
      } else if (data.error === 'captcha_unavailable') {
        setErrorMsg('Our verification check is unavailable right now. Please try again shortly.')
        setError(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
      // Tokens are single-use, so anything short of success needs a new one.
      if (!succeeded) {
        setCaptchaToken('')
        setCaptchaNonce((n) => n + 1)
      }
      // A server limit outranks the local one; do not shorten it.
      if (serverCooldownMs) {
        startCooldown(serverCooldownMs, 'server')
      } else {
        const next = submitLimiter.check()
        if (!next.allowed) startCooldown(next.retryAfterMs, next.reason)
      }
    }
  }

  const waitMs = blockedUntil ? blockedUntil - now : 0
  const throttled = waitMs > 0

  return (
    <main>
      <SEO
        title="Book a Consultation | The Compost Bank Phuket"
        description="Book a consultation with The Compost Bank in Phuket. We help hotels, restaurants, farms, and developments manage food waste, composting, and organic waste recovery."
        path="/contact"
      />
      {/* Hero */}
      <section data-nav-dark className="bg-forest pt-32 pb-14 sm:pt-40 sm:pb-20 lg:pt-52 lg:pb-28 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/35 text-[13px] tracking-ultra uppercase font-lato mb-8">Contact</p>
          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-sand leading-[1.04] max-w-3xl">
            Let's start a conversation.
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="relative bg-cream py-20 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <ContourPattern opacity="0.04" />
        <div className="max-w-screen-xl mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_580px] gap-16 lg:gap-24 items-start">

            {/* Left — brand content */}
            <div className="max-w-sm">
              <div className="w-8 h-px bg-forest/15 mb-8" />
              <p className="font-cormorant text-2xl lg:text-3xl text-forest leading-snug italic mb-8">
                "We work with businesses across Phuket to reduce waste, recover value, and build the infrastructure for a circular economy."
              </p>
              <div className="w-8 h-px bg-sand/15 mb-10" />

              <div className="space-y-8">
                <div>
                  <p className="text-sm font-lato tracking-ultra uppercase text-olive font-bold mb-2">Location</p>
                  <p className="text-sm font-lato text-charcoal/65">Phuket, Thailand</p>
                </div>
                <div>
                  <p className="text-sm font-lato tracking-ultra uppercase text-olive font-bold mb-2">Email</p>
                  <a
                    href="mailto:raeann@thecompostbank.com"
                    className="text-sm font-lato text-charcoal/65 hover:text-forest transition-colors block"
                  >
                    raeann@thecompostbank.com
                  </a>
                  <a
                    href="mailto:tom@thecompostbank.com"
                    className="text-sm font-lato text-charcoal/65 hover:text-forest transition-colors block mt-1"
                  >
                    tom@thecompostbank.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-lato tracking-ultra uppercase text-olive font-bold mb-2">Response Time</p>
                  <p className="text-sm font-lato text-charcoal/65">Within 2 business days</p>
                </div>
              </div>

              <div className="mt-14">
                <div className="h-px bg-forest/10 mb-10" />
                <p className="text-sm font-lato tracking-ultra uppercase text-charcoal/35 font-bold mb-5">
                  What to expect
                </p>
                <div className="space-y-4">
                  {[
                    'A brief discovery call to understand your situation',
                    'A clear summary of options and recommendations',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-3 h-px bg-olive/40 flex-shrink-0 mt-[10px]" />
                      <p className="text-xs font-lato text-charcoal/55 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="border-t lg:border-t-0 lg:border-l border-forest/10 pt-12 lg:pt-0 lg:pl-16">
              {submitted ? (
                <div className="bg-white p-10 lg:p-12 py-16 text-center">
                  <div className="w-8 h-px bg-olive mx-auto mb-8" />
                  <h2 className="font-cormorant font-semibold text-3xl text-forest mb-4">
                    Thank you for reaching out.
                  </h2>
                  <p className="text-charcoal/65 text-sm font-lato leading-relaxed max-w-xs mx-auto">
                    We'll review your enquiry and be in touch within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="bg-white p-8 sm:p-10 lg:p-12">
                  <p className="text-[10px] font-lato tracking-ultra uppercase text-charcoal/50 font-bold mb-10">
                    Enquiry Form
                  </p>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-8">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Business name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+66 xx xxx xxxx"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="businessType" className={labelClass}>Type of Business *</label>
                    <div className="relative">
                      <select
                        required
                        id="businessType"
                        name="businessType"
                        value={formState.businessType}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="" disabled>Select your business type</option>
                        <option>Hotel or Resort</option>
                        <option>Restaurant or Café</option>
                        <option>Farm or Agricultural Business</option>
                        <option>New Property Development</option>
                        <option>Government or Municipality</option>
                        <option>Community Organisation</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-forest/50">
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                          <path d="M4 6l4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="interest" className={labelClass}>What Are You Interested In? *</label>
                    <div className="relative">
                      <select
                        required
                        id="interest"
                        name="interest"
                        value={formState.interest}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="" disabled>Select a service area</option>
                        <option>Waste Audit</option>
                        <option>On-Site Composting</option>
                        <option>Centralized Organic Waste Processing</option>
                        <option>Sustainability Consultancy</option>
                        <option>New Development / Bio-Generator Project</option>
                        <option>Not sure — help me figure it out</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-forest/50">
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                          <path d="M4 6l4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <label htmlFor="message" className={labelClass}>Message *</label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your situation, volumes, or any specific questions..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Turnstile
                    onToken={setCaptchaToken}
                    resetSignal={captchaNonce}
                    className="mb-6 flex justify-center"
                  />

                  <button
                    type="submit"
                    disabled={sending || throttled || (turnstileEnabled && !captchaToken)}
                    className="w-full bg-forest hover:bg-forest/85 disabled:opacity-60 disabled:hover:bg-forest text-sand text-[10px] tracking-ultra uppercase font-lato py-4 transition-colors duration-200"
                  >
                    {sending ? 'Sending…' : throttled ? `Please wait ${formatWait(waitMs)}` : 'Send Enquiry'}
                  </button>

                  {throttled && (
                    <p aria-live="polite" className="text-[10px] font-lato text-charcoal/60 text-center mt-4">
                      {blockReason === 'server'
                        ? "We've received several enquiries from your connection."
                        : blockReason === 'window'
                          ? "You've sent a few enquiries already."
                          : "You've just sent an enquiry."}{' '}
                      You can send another in {formatWait(waitMs)}, or email us directly at
                      raeann@thecompostbank.com.
                    </p>
                  )}

                  {error && !throttled && (
                    <p className="text-[10px] font-lato text-terracotta text-center mt-4">
                      {errorMsg || 'Something went wrong. Please try again or email us directly.'}
                    </p>
                  )}

                  <p className="text-[9px] font-lato text-charcoal/45 text-center mt-5">
                    We respond to all enquiries within 2 business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
