function ClosingWindowChart() {
  return (
    <div className="gradient-border relative mt-8 overflow-hidden rounded-2xl bg-[var(--tvc-card)] p-4 sm:mt-12 sm:p-8">
      <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
        <span className="animate-icon-float flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-400 sm:h-9 sm:w-9">
          <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 11h4v2h-6V7h2v6Z" />
          </svg>
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 sm:text-xs">
            Creators Available In Your Category
          </p>
          <p className="text-xs text-white/50 sm:text-sm">
            Every creator a competitor locks in is one that stops being available to you.
          </p>
        </div>
      </div>

      <svg viewBox="0 0 400 160" className="w-full">
        <defs>
          <linearGradient id="windowFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec1fa0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ec1fa0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="windowLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#ec1fa0" />
          </linearGradient>
        </defs>

        {/* baseline */}
        <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        {/* area + line: declining availability */}
        <path
          d="M0,20 C100,35 150,55 200,80 C280,115 340,135 400,145 L400,150 L0,150 Z"
          fill="url(#windowFill)"
        />
        <path
          d="M0,20 C100,35 150,55 200,80 C280,115 340,135 400,145"
          fill="none"
          stroke="url(#windowLine)"
          strokeWidth="3"
        />

        {/* markers */}
        <circle cx="0" cy="20" r="5" fill="#c084fc" />
        <circle cx="200" cy="80" r="5" fill="#ec1fa0" />
        <circle cx="400" cy="145" r="5" fill="#f472b6" />
      </svg>

      <div className="mt-2 flex items-center justify-between text-[8px] uppercase text-white/40 sm:text-[11px]">
        <span>Now — window's open</span>
        <span>6 months</span>
        <span>12 months — closed</span>
      </div>
    </div>
  )
}

export function WhyNow() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(50% 60% at 90% 10%, rgba(236,31,160,0.22) 0%, rgba(6,1,7,0) 70%), radial-gradient(40% 45% at 5% 95%, rgba(124,42,248,0.2) 0%, rgba(6,1,7,0) 70%)',
        }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
          Why Moving Now Matters
        </p>
        <h2 className="font-display text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          Someone in your category is going to build this first.
        </h2>

        <div className="mt-5 space-y-4 text-base leading-relaxed text-white/70 sm:mt-8 sm:space-y-5 sm:text-lg">
          <p>
            There are only so many creators who'll actually post about products like yours.
            Every one a competitor locks in and keeps is one that gets harder for you to reach
            later.
          </p>
          <p>
            Right now, most of your competitors are doing exactly what you've been doing,
            sampling, chasing, hoping something sticks. That's your window. The first brand in a
            category to build a real, owned creator community becomes the brand creators want to
            work with. Once that's running, your competitor isn't just selling more than you,
            they've got a reach you can't touch.
          </p>
        </div>

        <ClosingWindowChart />

        <p className="mt-6 border-l-2 border-fuchsia-500 pl-4 text-base font-semibold leading-snug text-white sm:mt-10 sm:pl-6 sm:text-xl">
          The brand that owns its creators owns the category. A year from now, that's either
          you, or whoever moved first while you were still sampling into the void.
        </p>
      </div>
    </section>
  )
}
