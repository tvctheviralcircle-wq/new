import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/thank-you')({
  head: () => ({
    meta: [
      { title: "You're Booked! — The Viral Circle" },
      {
        name: 'description',
        content: "Thanks for booking your call. Here's exactly what happens next.",
      },
    ],
  }),
  component: ThankYouPage,
})

const EXPECTATIONS = [
  'We review your shop, your samples, and your current creator activity',
  'We map out exactly what a 150+ member owned creator community looks like for your brand',
  'You leave with a clear next step, no obligation either way',
]

function ThankYouPage() {
  const [name, setName] = useState('')
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    try {
      setName(sessionStorage.getItem('tvc_lead_name') ?? '')
    } catch {
      // sessionStorage unavailable — personalization just degrades.
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-start justify-between px-4 pt-0 pb-[0.5cm] sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://assets-2-prod.whop.com/public/uploads/2025-05-14/user_3134765_25927faf-e31d-42f4-87d5-4a0552277e08.jpeg"
              alt="The Viral Circle"
              className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9"
            />
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-wide text-white/40 sm:text-xs">
            Step 3 of 3 — You're Booked
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
          <div className="gradient-bg mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-fuchsia-900/40 sm:h-16 sm:w-16">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-white sm:h-8 sm:w-8" fill="currentColor">
              <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
            </svg>
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:text-sm">
            You're Booked
          </p>
          <h1 className="font-display text-3xl uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            {name ? `Thanks, ${name.split(' ')[0]}. See You On The Call.` : "Thanks. See You On The Call."}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-lg">
            A calendar invite is on its way to your inbox. While you wait, here's exactly what to
            expect.
          </p>

          {/* Explainer video */}
          <div className="relative mx-auto mt-9 aspect-video max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1a0b22] to-[#0d0410] shadow-2xl shadow-fuchsia-950/40 sm:mt-10 sm:rounded-2xl">
            {playing ? (
              <video
                className="h-full w-full"
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            ) : (
              <button
                type="button"
                aria-label="Play video"
                onClick={() => setPlaying(true)}
                className="flex h-full w-full flex-col items-center justify-center gap-3 sm:gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-black shadow-lg transition-transform hover:scale-110 active:scale-110 sm:h-16 sm:w-16">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wide text-white/50 sm:text-sm">
                  Watch: What Happens On Your Call
                </span>
              </button>
            )}
          </div>

          {/* What happens next */}
          <div className="gradient-border mx-auto mt-10 max-w-2xl rounded-2xl bg-[var(--tvc-card)] p-6 text-left sm:p-8">
            <p className="font-display mb-5 text-center text-sm uppercase tracking-widest text-white/50 sm:text-base">
              What Happens On The Call
            </p>
            <ul className="space-y-4">
              {EXPECTATIONS.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="animate-icon-float gradient-bg flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-lg shadow-fuchsia-900/30"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  >
                    {i + 1}
                  </span>
                  <span className="mt-0.5 text-sm text-white/80 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-sm text-white/50">
            We only take on a few brands at a time — see you soon.
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
