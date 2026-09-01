import { useEffect, useRef, useState } from 'react'
import { useQualifyModal } from '../context/QualifyModalContext'

const VSL_URL = 'https://assets-2-prod.whop.com/public/uploads/2026-08-31/1ca0cafc-a140-4706-a55f-557584f5044f/video.mp4'

export function Hero() {
  const { open } = useQualifyModal()
  const videoRef = useRef<HTMLVideoElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [showUnmute, setShowUnmute] = useState(true)
  const [docked, setDocked] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const anchor = anchorRef.current
    if (!anchor) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isDocked = !entry.isIntersecting
        setDocked(isDocked)
        if (!isDocked) setDismissed(false)
      },
      { rootMargin: '-88px 0px 0px 0px', threshold: 0 },
    )
    observer.observe(anchor)
    return () => observer.disconnect()
  }, [])

  const unmute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = false
      video.currentTime = 0
      video.play().catch(() => {})
    }
    setShowUnmute(false)
  }

  const isFloating = docked && !dismissed

  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-14 text-center sm:px-6 sm:pt-16 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(124,42,248,0.35) 0%, rgba(6,1,7,0) 70%), radial-gradient(40% 40% at 85% 20%, rgba(236,31,160,0.25) 0%, rgba(6,1,7,0) 70%)',
        }}
      />

      <div className="mx-auto max-w-4xl">
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase leading-snug tracking-wide text-white/70 sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs">
          <span className="animate-live-pulse h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 sm:h-2 sm:w-2" />
          <span className="text-left">For established TikTok Shop brands already selling and sampling</span>
        </div>

        <h1 className="font-display text-[28px] uppercase leading-[1.15] text-white sm:text-5xl sm:leading-[1.1] md:text-6xl">
          We'll build you a{' '}
          <span className="gradient-text">150+ member TikTok Shop creator community</span>,{' '}
          <span className="gradient-text">30–35% actively posting</span> for your brand within 30
          days, or you don't pay a dollar.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:mt-6 sm:text-lg">
          An asset you own outright. Recruited, activated, posting. Yours to keep, not something
          you're borrowing month to month.
        </p>

        {/* VSL anchor: reserves the video's normal layout spot so nothing jumps when it docks */}
        <div ref={anchorRef} className="mx-auto mt-7 max-w-3xl sm:mt-10">
          {isFloating && <div className="aspect-video w-full" />}

          <div
            className={
              isFloating
                ? 'fixed right-3 top-[76px] z-40 w-40 overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl shadow-fuchsia-950/50 transition-all duration-300 sm:right-5 sm:top-[92px] sm:w-64 sm:rounded-xl'
                : 'relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1a0b22] to-[#0d0410] shadow-2xl shadow-fuchsia-950/40 sm:rounded-2xl'
            }
          >
            <video
              ref={videoRef}
              src={VSL_URL}
              className="aspect-video h-full w-full"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />

            {showUnmute && (
              <button
                type="button"
                onClick={unmute}
                aria-label="Tap for sound"
                className={
                  isFloating
                    ? 'absolute bottom-1 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-white backdrop-blur-sm sm:bottom-2 sm:px-3 sm:py-1.5 sm:text-[10px]'
                    : 'absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-transform hover:scale-105 active:scale-105 sm:bottom-4 sm:text-xs'
                }
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" fill="currentColor">
                  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-3.5ZM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77ZM3 9v6h4l5 5V4L7 9H3Z" />
                </svg>
                <span className={isFloating ? 'hidden sm:inline' : ''}>Tap for sound</span>
              </button>
            )}

            {isFloating && (
              <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label="Close video"
                className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-white/80 backdrop-blur-sm transition-transform hover:text-white hover:scale-110 active:scale-110 active:text-white sm:h-6 sm:w-6"
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                  <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.29 1.41 1.41 6.3-6.29 6.3 6.29 1.41-1.41-6.3-6.29 6.3-6.3z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={open}
          className="gradient-bg mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-fuchsia-900/40 transition-transform hover:scale-105 active:scale-105 sm:mt-10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
        >
          See If You Qualify →
        </button>
      </div>
    </section>
  )
}
