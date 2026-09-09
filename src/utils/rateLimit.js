/**
 * Client-side submission limiter.
 *
 * Enforces two rules against a persisted list of attempt timestamps:
 *   - cooldownMs: minimum gap between two consecutive attempts
 *   - maxAttempts per windowMs: sliding-window cap
 *
 * State lives in localStorage so a page reload does not reset the limit,
 * falling back to module memory where storage is unavailable (private mode).
 */

const memoryStore = new Map()

function storageAvailable() {
  if (typeof window === 'undefined') return false
  try {
    const probe = '__cb_rl_probe__'
    window.localStorage.setItem(probe, '1')
    window.localStorage.removeItem(probe)
    return true
  } catch {
    return false
  }
}

export function createRateLimiter({ key, maxAttempts, windowMs, cooldownMs }) {
  const persist = storageAvailable()

  const read = () => {
    if (!persist) return memoryStore.get(key) || []
    try {
      const parsed = JSON.parse(window.localStorage.getItem(key) || '[]')
      return Array.isArray(parsed) ? parsed.filter((t) => typeof t === 'number') : []
    } catch {
      return []
    }
  }

  const write = (stamps) => {
    if (!persist) {
      memoryStore.set(key, stamps)
      return
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(stamps))
    } catch {
      memoryStore.set(key, stamps)
    }
  }

  // Drop anything outside the window, and anything dated in the future
  // (a backwards clock change should not lock the form for hours).
  const recent = (now) => read().filter((t) => t <= now && now - t < windowMs)

  return {
    check(now = Date.now()) {
      const stamps = recent(now)

      if (stamps.length >= maxAttempts) {
        const oldest = Math.min(...stamps)
        return { allowed: false, reason: 'window', retryAfterMs: windowMs - (now - oldest) }
      }

      if (stamps.length) {
        const last = Math.max(...stamps)
        if (now - last < cooldownMs) {
          return { allowed: false, reason: 'cooldown', retryAfterMs: cooldownMs - (now - last) }
        }
      }

      return { allowed: true, reason: null, retryAfterMs: 0 }
    },

    record(now = Date.now()) {
      write([...recent(now), now])
    },

    reset() {
      write([])
    },
  }
}
