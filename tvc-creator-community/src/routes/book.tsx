import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

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
  const [name, setName] = useState('')

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

          {/* Booking widget — space reserved for now */}
          <div className="gradient-border relative mx-auto mt-10 min-h-[420px] overflow-hidden rounded-2xl bg-[var(--tvc-card)] sm:min-h-[560px]" />
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
