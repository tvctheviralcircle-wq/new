const STEPS = [
  {
    label: 'Send Samples',
    note: 'Thousands a month in product',
    icon: (
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Zm-9-2.8L18.5 9 12 12.6 5.5 9 12 5.2ZM5 10.6l6 3.3v6.9l-6-3.3v-6.9Zm8 10.2v-6.9l6-3.3v6.9l-6 3.3Z" />
    ),
  },
  {
    label: 'Chase DMs',
    note: '"Hey, any update on that video?"',
    icon: (
      <path d="M4 4h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8l-4.4 3.3A1 1 0 0 1 2 20.5V5a1 1 0 0 1 1-1Zm3 5v2h10V9H7Zm0 4v2h7v-2H7Z" />
    ),
  },
  {
    label: 'Maybe 1 Post',
    note: 'If it was even good enough to use',
    icon: (
      <path d="M10 8.64 15.27 12 10 15.36V8.64ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
    ),
  },
  {
    label: 'Month Resets',
    note: 'Back to zero, same spend',
    icon: (
      <path d="M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 13c0-4.42-3.58-8-8-8Zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 8.74A7.93 7.93 0 0 0 4 13c0 4.42 3.58 8 8 8v3l4-4-4-4v3Z" />
    ),
  },
]

function SampleCycle() {
  return (
    <div className="gradient-border rounded-2xl bg-[var(--tvc-card)] p-4 sm:p-8 md:p-10">
      <p className="gradient-text mb-5 text-center text-xs font-bold uppercase tracking-widest sm:mb-8 sm:text-sm">
        The Cycle You're Stuck In
      </p>
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        {STEPS.map((step, i) => (
          <div
            key={step.label}
            className="group rounded-xl border border-white/10 bg-black/40 p-4 transition-colors duration-300 hover:border-fuchsia-500/60 hover:bg-black/60 active:border-fuchsia-500/60 active:bg-black/60 sm:p-6"
          >
            <div
              className="gradient-bg animate-icon-float mb-2.5 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg shadow-fuchsia-900/30 transition-transform duration-300 group-hover:scale-125 group-active:scale-125 sm:mb-3 sm:h-10 sm:w-10"
              style={{ animationDelay: `${i * 0.35}s` }}
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="currentColor">
                {step.icon}
              </svg>
            </div>
            <p className="font-display text-sm uppercase text-white sm:text-base">{step.label}</p>
            <p className="mt-1.5 text-xs text-white/60 sm:mt-2 sm:text-sm">{step.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 text-center text-sm font-semibold text-rose-400 sm:mt-7 sm:text-base">
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.36 12.95L12 11.41l-3.36 3.54-1.41-1.41L10.59 10 7.23 6.46l1.41-1.41L12 8.59l3.36-3.54 1.41 1.41L13.41 10l3.36 3.54Z" />
        </svg>
        Then it loops back to the start. Every month.
      </div>
    </div>
  )
}

export function Problem() {
  return (
    <section className="bg-dot-grid relative border-t border-white/10 bg-[var(--tvc-bg-soft)] px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(45% 55% at 15% 10%, rgba(124,42,248,0.25) 0%, rgba(6,1,7,0) 70%), radial-gradient(40% 45% at 90% 90%, rgba(236,31,160,0.18) 0%, rgba(6,1,7,0) 70%)',
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
        <div>
          <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
            The Problem
          </p>
          <h2 className="font-display text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
            You've been told the system is: sample more, hope more.
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-white/70 sm:mt-8 sm:space-y-5 sm:text-lg">
            <p>
              You know how this goes. Samples go out, you're spending thousands a month on
              product, and half of what comes back either never gets posted or isn't good enough
              to use anyway. You're in someone's DMs trying to get a status update on a video that
              was supposed to go up two weeks ago. A few posts trickle in eventually. Then the
              month resets, and you're doing the exact same thing all over again.
            </p>
            <p>
              Or it's worse than that. You're still paying to keep a list of affiliates
              technically active, people who signed up once, took the product, and never posted a
              single thing since. That's not a creator community. That's a spreadsheet you're
              subsidizing.
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between">
          <SampleCycle />

          <p className="mt-6 border-l-2 border-fuchsia-500 pl-4 text-base font-semibold leading-snug text-white sm:mt-8 sm:pl-6 sm:text-xl">
            This was never actually a sampling problem. You don't need more creators saying yes.
            You need the ones who already said yes to still be posting three months from now, not
            just once.
          </p>
        </div>
      </div>
    </section>
  )
}
