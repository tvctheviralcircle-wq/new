import { VslPlayer } from './VslPlayer'

const VSL_URL = 'https://assets-2-prod.whop.com/public/uploads/2026-08-31/1ca0cafc-a140-4706-a55f-557584f5044f/video.mp4'

export function Hero() {
  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

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

        <VslPlayer src={VSL_URL} className="mx-auto mt-7 max-w-3xl sm:mt-10" />

        <button
          type="button"
          onClick={scrollToBook}
          className="gradient-bg mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-fuchsia-900/40 transition-transform hover:scale-105 active:scale-105 sm:mt-10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
        >
          See If You Qualify →
        </button>
      </div>
    </section>
  )
}
