import { useEffect, useRef } from 'react'

// Turnstile sitekeys are public by design — they appear in the HTML of every
// site using Turnstile. Hardcoding the default means a missing or wiped build
// variable can no longer silently ship a bundle with no widget, which pairs
// with a configured TURNSTILE_SECRET_KEY to reject every submission.
const DEFAULT_SITE_KEY = '0x4AAAAAAEtbJhlT7NpeaAHu'
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || DEFAULT_SITE_KEY
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

/**
 * True once a sitekey is configured at build time. When it is absent the
 * widget renders nothing and forms submit without a token — which the Worker
 * accepts only while its own TURNSTILE_SECRET_KEY is unset. That pairing lets
 * the two halves be rolled out independently without breaking submissions.
 */
export const turnstileEnabled = Boolean(SITE_KEY)

let scriptPromise = null

function loadTurnstile() {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'))
  if (window.turnstile) return Promise.resolve()
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = SCRIPT_SRC
      script.async = true
      script.defer = true
      script.onload = resolve
      script.onerror = () => reject(new Error('turnstile script failed to load'))
      document.head.appendChild(script)
    })
  }
  return scriptPromise
}

/**
 * Renders the Turnstile widget and hands tokens back through onToken.
 * Tokens are single-use and expire after 5 minutes, so bump resetSignal
 * after any submit that did not succeed to get a fresh one.
 */
export default function Turnstile({ onToken, resetSignal = 0, className = '' }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const onTokenRef = useRef(onToken)

  // Keep the latest callback without re-rendering the widget.
  useEffect(() => {
    onTokenRef.current = onToken
  }, [onToken])

  useEffect(() => {
    if (!SITE_KEY) return
    let cancelled = false

    loadTurnstile()
      .then(() => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) return
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          callback: (token) => onTokenRef.current(token),
          'expired-callback': () => onTokenRef.current(''),
          'error-callback': () => onTokenRef.current(''),
        })
      })
      .catch(() => {
        // Script blocked or offline: leave the token empty. The Worker
        // rejects the submission and the form shows its error state.
        onTokenRef.current('')
      })

    return () => {
      cancelled = true
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!resetSignal) return
    if (widgetIdRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
      onTokenRef.current('')
    }
  }, [resetSignal])

  if (!SITE_KEY) return null
  return <div ref={containerRef} className={className} />
}
