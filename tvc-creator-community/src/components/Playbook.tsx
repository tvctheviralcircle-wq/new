import { useEffect, useRef } from 'react'

const LOGO_URL =
  'https://assets-2-prod.whop.com/public/uploads/2025-05-14/user_3134765_25927faf-e31d-42f4-87d5-4a0552277e08.jpeg'

function BookMockup() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const bookRef = useRef<HTMLDivElement>(null)
  const ring1Ref = useRef<HTMLDivElement>(null)
  const ring2Ref = useRef<HTMLDivElement>(null)
  const ring3Ref = useRef<HTMLDivElement>(null)

  // Drives the book's tilt/scale and the rings' rotation purely off scroll
  // position, so scrolling down plays it forward and scrolling back up
  // reverses it automatically — no hover or touch required.
  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const el = wrapRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const total = rect.height + vh
      const traveled = vh - rect.top
      const progress = Math.min(1, Math.max(0, traveled / total))

      const rotate = 22 - progress * 44
      const scale = 1 + Math.sin(progress * Math.PI) * 0.16
      if (bookRef.current) {
        bookRef.current.style.transform = `rotate(${rotate}deg) scale(${scale})`
      }

      const ringRotate = progress * 70
      if (ring1Ref.current) ring1Ref.current.style.transform = `rotate(${ringRotate}deg)`
      if (ring2Ref.current) ring2Ref.current.style.transform = `rotate(${-ringRotate}deg)`
      if (ring3Ref.current) ring3Ref.current.style.transform = `rotate(${ringRotate * 1.6}deg)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="group/book relative mx-auto flex h-full min-h-[280px] w-full max-w-[300px] items-center justify-center sm:min-h-[340px]"
    >
      {/* decorative concentric rings behind the book */}
      <div
        ref={ring1Ref}
        className="pointer-events-none absolute right-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-white/15 sm:h-96 sm:w-96"
      />
      <div
        ref={ring2Ref}
        className="pointer-events-none absolute right-[-10%] top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border border-white/15 sm:h-72 sm:w-72"
      />
      <div
        ref={ring3Ref}
        className="pointer-events-none absolute right-[-10%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-white/10 sm:h-48 sm:w-48"
      />

      {/* hover glow */}
      <span
        className="pointer-events-none absolute h-56 w-44 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover/book:opacity-80 sm:h-64 sm:w-52"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(236,31,160,0.4) 55%, transparent 80%)',
        }}
      />

      <div
        ref={bookRef}
        className="gradient-border relative w-full max-w-[220px] cursor-pointer rounded-xl bg-[var(--tvc-bg-soft)] p-4 shadow-2xl shadow-black/50 transition-transform duration-75 ease-out sm:max-w-[240px] sm:p-5"
      >
        {/* perimeter glow — fades in all the way around the book's edges on hover or touch */}
        <span
          className="pointer-events-none absolute -inset-4 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover/book:opacity-90 group-active/book:opacity-90 sm:-inset-5"
          style={{
            background:
              'linear-gradient(135deg, rgba(236,31,160,0.8) 0%, rgba(124,42,248,0.8) 50%, rgba(236,31,160,0.8) 100%)',
          }}
        />

        <img src={LOGO_URL} alt="The Viral Circle" className="relative h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9" />

        <p className="mt-4 text-[9px] font-bold uppercase tracking-widest text-white/50 sm:mt-5 sm:text-[10px]">
          Free Playbook
        </p>
        <p className="font-display mt-1.5 text-base uppercase leading-snug text-white sm:text-lg">
          Why The Second Post Never Comes
        </p>
        <div className="mt-4 h-px w-full bg-white/15 sm:mt-5" />

        <div className="mt-6 flex justify-center sm:mt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 sm:h-16 sm:w-16">
            <div className="gradient-bg flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white sm:h-5 sm:w-5" fill="currentColor">
                <path d="M12 2 4 6v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-4Z" />
              </svg>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[8px] font-bold uppercase tracking-widest text-white/40 sm:mt-8 sm:text-[9px]">
          TikTok Shop Certified Agency
        </p>
      </div>
    </div>
  )
}

export function Playbook() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
          The Playbook
        </p>
        <h2 className="font-display text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          Why the second post never comes, and what changes it
        </h2>
        <p className="mt-4 text-base text-white/70 sm:mt-6 sm:text-lg">
          <span className="font-bold uppercase text-fuchsia-400">Free Playbook.</span> The exact
          one we're running for brands right now.
        </p>

        <div className="bg-dot-grid gradient-bg relative mt-8 overflow-hidden rounded-2xl sm:mt-12 sm:rounded-3xl">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(50% 60% at 90% 20%, rgba(6,1,7,0.35) 0%, transparent 70%)',
            }}
          />

          <div className="relative grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 sm:items-center sm:gap-6 sm:p-10 md:p-14">
            <div className="flex flex-col justify-center text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-fuchsia-400 sm:text-xs">
                What's Inside
              </p>
              <h3 className="font-display mt-2 text-xl uppercase leading-snug text-white sm:mt-3 sm:text-2xl">
                Everything That Happens After A Creator Says Yes
              </h3>

              <div className="mt-6 sm:mt-8">
                <button
                  type="button"
                  className="gradient-bg inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-fuchsia-900/40 transition-transform hover:scale-105 active:scale-105 sm:w-auto sm:px-8"
                >
                  Get My Free Playbook
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <BookMockup />
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-6 bg-black/25 px-6 py-6 sm:flex-row sm:justify-between sm:px-10">
            <span className="inline-flex items-center rounded-full border border-white/25 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-fuchsia-400 sm:text-xs">
              Free Playbook
            </span>

            <div className="flex items-center gap-6 sm:gap-10">
              <div className="text-center">
                <p className="font-display text-xl text-fuchsia-400 sm:text-2xl">4</p>
                <p className="mt-0.5 text-[9px] uppercase tracking-wide text-white/60 sm:text-[10px]">
                  Creator Stages Mapped
                </p>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <p className="font-display text-xl text-fuchsia-400 sm:text-2xl">48H</p>
                <p className="mt-0.5 text-[9px] uppercase tracking-wide text-white/60 sm:text-[10px]">
                  The Activation Window
                </p>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <p className="font-display text-xl text-fuchsia-400 sm:text-2xl">4 min</p>
                <p className="mt-0.5 text-[9px] uppercase tracking-wide text-white/60 sm:text-[10px]">
                  Start To Finish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
