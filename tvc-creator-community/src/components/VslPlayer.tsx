import { useEffect, useRef, useState } from 'react'

export function VslPlayer({ src, className = '' }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
  const hasUnmutedBefore = useRef(false)
  const [muted, setMuted] = useState(true)
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
      if (!hasUnmutedBefore.current) {
        video.currentTime = 0
        hasUnmutedBefore.current = true
      }
      video.play().catch(() => {})
    }
    setMuted(false)
  }

  const mute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = true
    }
    setMuted(true)
  }

  const isFloating = docked && !dismissed

  return (
    <div ref={anchorRef} className={className}>
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
          src={src}
          className="aspect-video h-full w-full"
          controls
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {muted ? (
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
        ) : (
          <button
            type="button"
            onClick={mute}
            aria-label="Mute"
            className={
              isFloating
                ? 'absolute left-1 top-1 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[10px]'
                : 'absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-transform hover:scale-105 active:scale-105 sm:left-4 sm:top-4 sm:text-xs'
            }
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.42.05-.63Zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L18.73 21 20 19.73l-9-9L4.27 3ZM12 4l-1.88 1.88L12 7.76V4Z" />
            </svg>
            <span className={isFloating ? 'hidden sm:inline' : ''}>Mute</span>
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
  )
}
