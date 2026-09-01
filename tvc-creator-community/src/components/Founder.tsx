export function Founder() {
  return (
    <section className="bg-dot-grid relative border-t border-white/10 bg-[var(--tvc-bg-soft)] px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(45% 55% at 85% 15%, rgba(236,31,160,0.2) 0%, rgba(6,1,7,0) 70%), radial-gradient(40% 45% at 10% 85%, rgba(124,42,248,0.2) 0%, rgba(6,1,7,0) 70%)',
        }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="mb-2.5 text-center text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
          Who's Behind It
        </p>
        <h2 className="font-display mx-auto max-w-2xl text-center text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          Built by someone who's lived both sides of this.
        </h2>

        <div className="mt-8 flex flex-col items-center gap-6 sm:mt-12 sm:flex-row sm:items-start sm:gap-8">
          <div className="relative shrink-0">
            <div className="gradient-border h-24 w-24 overflow-hidden rounded-full shadow-xl shadow-fuchsia-900/40 sm:h-28 sm:w-28">
              <img
                src="https://assets-2-prod.whop.com/public/uploads/2026-08-31/d56054a9-ad85-4394-aed4-0fcbf29dd1e8/image.png"
                alt="James, Co-Founder of The Viral Circle"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="animate-icon-float absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--tvc-bg-soft)] bg-emerald-500 text-white shadow-lg sm:-bottom-2 sm:-right-2 sm:h-9 sm:w-9"
              title="Certified TikTok Shop Partner"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor">
                <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Zm-1.2 13.6-3.2-3.2 1.4-1.4 1.8 1.8 4.8-4.8 1.4 1.4-6.2 6.2Z" />
              </svg>
            </div>
          </div>
          <div className="gradient-border rounded-2xl bg-[var(--tvc-card)] p-5 sm:p-8">
            <p className="text-sm leading-relaxed text-white/80 sm:text-lg">
              I'm James, co-founder of The Viral Circle. I started as an affiliate myself,
              testing products, watching most of them flop, figuring out the hard way what
              actually makes this algorithm pick winners. Then I built my own brand from zero to
              $100K in a month, and close to $700K in 180 days.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
              I'm a certified TikTok Shop partner. I've chased a payout as a creator, and I've
              chased a creator as a brand. I built this because I know exactly how both sides of
              that feels.
            </p>
            <p className="mt-5 font-display text-xs uppercase tracking-wide text-fuchsia-400 sm:mt-6 sm:text-sm">
              James — Co-Founder, The Viral Circle
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
