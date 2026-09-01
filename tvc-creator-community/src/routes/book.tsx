import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const CALENDLY_URL = 'https://calendly.com/tvc-theviralcircle/tvc-brand-launch-plan-clone'

export const Route = createFileRoute('/book')({
  head: () => ({
    meta: [
      { title: 'Book Your Call — The Viral Circle' },
      {
        name: 'description',
        content: 'Pick a time that works for you and we\u2019ll map out your TikTok Shop creator community.',
      },
    ],
  }),
  component: BookPage,
})

function BookPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [widgetReady, setWidgetReady] = useState(false)

  useEffect(() => {
    try {
      setName(sessionStorage.getItem('tvc_lead_name') ?? '')
      setEmail(sessionStorage.getItem('tvc_lead_email') ?? '')
    } catch {
      // sessionStorage unavailable — personalization/prefill just degrades.
    }
  }, [])

  // Load Calendly's embed assets once.
  useEffect(() => {
    if (!document.querySelector('link[data-calendly-css]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.setAttribute('data-calendly-css', 'true')
      document.head.appendChild(link)
    }

    const existingScript = document.querySelector('script[data-calendly-js]')
    if (existingScript) {
      setWidgetReady(true)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.setAttribute('data-calendly-js', 'true')
    script.onload = () => setWidgetReady(true)
    document.body.appendChild(script)
  }, [])

  // Auto-advance to the thank-you page the moment a call is actually booked.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data?.event === 'string' && e.data.event === 'calendly.event_scheduled') {
        navigate({ to: '/thank-you' })
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [navigate])

  const params = new URLSearchParams({
    hide_gdpr_banner: '1',
    background_color: '0d0410',
    text_color: 'ffffff',
    primary_color: 'ec1fa0',
  })
  if (typeof window !== 'undefined' && window.location.hostname) {
    params.set('embed_domain', window.location.hostname)
    params.set('embed_type', 'Inline')
  }
  if (name) params.set('name', name)
  if (email) params.set('email', email)
  const calendlyUrl = `${CALENDLY_URL}?${params.toString()}`

  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://assets-2-prod.whop.com/public/uploads/2025-05-14/user_3134765_25927faf-e31d-42f4-87d5-4a0552277e08.jpeg"
              alt="The Viral Circle"
              className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9"
            />
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-wide text-white/40 sm:text-xs">
            Step 2 of 3 — Book Your Call
          </span>
        </div>
        <div className="animate-nav-shimmer h-[2px] w-full opacity-70" />
      </header>

      <section className="relative overflow-hidden px-4 py-14 text-center sm:px-6 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 0%, rgba(124,42,248,0.35) 0%, rgba(6,1,7,0) 70%), radial-gradient(40% 40% at 85% 20%, rgba(236,31,160,0.25) 0%, rgba(6,1,7,0) 70%)',
          }}
        />

        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:text-sm">
            {name ? `You're In, ${name.split(' ')[0]}.` : "You're In."}
          </p>
          <h1 className="font-display text-3xl uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            Pick A Time That Works For You.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-lg">
            30 minutes. We'll look at your shop, your samples, and your current creators, and map
            out exactly what this looks like for your brand.
          </p>

          {/* Calendly embed */}
          <div className="gradient-border relative mx-auto mt-10 overflow-hidden rounded-2xl bg-[var(--tvc-card)]">
            {!widgetReady && (
              <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 p-6 text-center sm:min-h-[560px] sm:p-8">
                <div className="gradient-bg flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-fuchsia-900/40">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 16H5V8h14Z" />
                  </svg>
                </div>
                <p className="font-display text-lg uppercase text-white">Loading Calendar...</p>
              </div>
            )}
            <div
              className="calendly-inline-widget"
              data-url={calendlyUrl}
              style={{ minWidth: '280px', height: '680px', display: widgetReady ? 'block' : 'none' }}
            />
          </div>

          <p className="mx-auto mt-8 max-w-xl text-xs text-white/40">
            Already booked but the page didn't move?{' '}
            <Link to="/thank-you" className="text-fuchsia-400 underline underline-offset-2">
              Continue →
            </Link>
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-4 py-8 text-center sm:px-6 sm:py-10">
        <p className="font-display text-xs uppercase tracking-wide text-white/60 sm:text-sm">
          The Viral Circle
        </p>
        <p className="mt-2 text-[11px] text-white/30 sm:text-xs">
          © {new Date().getFullYear()} The Viral Circle. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
