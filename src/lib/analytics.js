const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

function loadScript(src) {
  const existing = document.querySelector(`script[src="${src}"]`)
  if (existing) return
  const script = document.createElement('script')
  script.src = src
  script.async = true
  document.head.appendChild(script)
}

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined') return
  if (window.gtag) return

  loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)

  const inline = document.createElement('script')
  inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { send_page_view: true });`
  document.head.appendChild(inline)
}

export function trackEvent(action, params = {}) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', action, {
    event_category: 'engagement',
    ...params,
  })
}

export function trackOutboundLink(label) {
  trackEvent('click', { label, transport_type: 'beacon' })
}
