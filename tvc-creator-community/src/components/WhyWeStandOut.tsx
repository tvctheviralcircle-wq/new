const AGENCY_ITEMS = [
  'Add creators blindly, no onboarding, no context',
  'One giant chaotic chat',
  'Creators ask a question, wait three days for a response',
  'Same treatment for every creator, irrespective of their level',
  'Spammy and too many notifications',
]

const OUR_ITEMS = [
  'Proper welcoming + give creators a reason to stay active',
  'Intentional segregation and onboarding',
  'Creators get answered, fast, every time',
  'Customised support + guidance based on their level',
  'A community creators want to stay in',
]

function NumberBadge({ n, variant, delay }: { n: string; variant: 'muted' | 'brand'; delay: number }) {
  if (variant === 'brand') {
    return (
      <div
        className="gradient-bg animate-icon-float flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-lg shadow-fuchsia-900/30 transition-transform duration-300 group-hover:scale-125 group-active:scale-125"
        style={{ animationDelay: `${delay}s` }}
      >
        {n}
      </div>
    )
  }
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/50">
      {n}
    </div>
  )
}

export function WhyWeStandOut() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(40% 60% at 15% 50%, rgba(239,68,68,0.12) 0%, rgba(6,1,7,0) 70%), radial-gradient(40% 60% at 85% 50%, rgba(236,31,160,0.22) 0%, rgba(6,1,7,0) 70%)',
        }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="mb-2.5 text-center text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
          Why We're Different
        </p>
        <h2 className="font-display mx-auto max-w-2xl text-center text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          The problem with creator communities today.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm italic text-white/60 sm:mt-4 sm:text-lg">
          On most platforms, community activity is an afterthought.
        </p>

        <div className="relative mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8">
          {/* VS badge */}
          <div className="gradient-bg pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold uppercase text-white shadow-xl shadow-fuchsia-900/40 sm:flex">
            vs
          </div>

          {/* What most agencies do */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 active:-translate-y-1.5 active:border-white/20 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-rose-400 sm:h-5 sm:w-5" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.36 12.95L12 11.41l-3.36 3.54-1.41-1.41L10.59 10 7.23 6.46l1.41-1.41L12 8.59l3.36-3.54 1.41 1.41L13.41 10l3.36 3.54Z" />
              </svg>
              <span className="font-display text-xs uppercase text-white sm:text-sm">
                What Most Agencies Do
              </span>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {AGENCY_ITEMS.map((item, i) => (
                <li key={item} className="group flex items-start gap-3">
                  <NumberBadge n={String(i + 1).padStart(2, '0')} variant="muted" delay={i * 0.3} />
                  <span className="mt-1 text-sm text-white/60 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our system */}
          <div className="group gradient-border rounded-2xl bg-[var(--tvc-card)] p-5 transition-all duration-300 hover:-translate-y-1.5 active:-translate-y-1.5 sm:p-8">
            <div className="gradient-bg mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white sm:h-5 sm:w-5" fill="currentColor">
                <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Zm-1.2 13.6-3.2-3.2 1.4-1.4 1.8 1.8 4.8-4.8 1.4 1.4-6.2 6.2Z" />
              </svg>
              <span className="font-display text-xs uppercase text-white sm:text-sm">
                The Viral Circle System
              </span>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {OUR_ITEMS.map((item, i) => (
                <li key={item} className="group flex items-start gap-3">
                  <NumberBadge n={String(i + 1).padStart(2, '0')} variant="brand" delay={i * 0.3} />
                  <span className="mt-1 text-sm font-medium text-white/85 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
