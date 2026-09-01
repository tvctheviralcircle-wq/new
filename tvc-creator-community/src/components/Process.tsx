const STEPS = [
  {
    n: '01',
    title: 'Recruit',
    desc: 'We find and onboard 150+ TikTok Shop creators who actually fit your product and your customer, not just whoever clicks "join."',
    icon: (
      <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z" />
    ),
  },
  {
    n: '02',
    title: 'Activate',
    desc: "We coach them to actually post, not just sign up and disappear. Real follow-through, real guidance, every step of the way.",
    icon: (
      <path d="M9 21h6v-1H9v1Zm3-19a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2Zm2 13H10v-1.5h4V15Zm.36-3.1-.86.62V14h-3v-1.48l-.86-.62A5 5 0 1 1 14.36 11.9Z" />
    ),
  },
  {
    n: '03',
    title: 'Prove & Own',
    desc: '30\u201335% stay active inside 30 days. The whole community gets handed to you, yours to keep, not something you keep renting.',
    icon: (
      <path d="M19 3h-2V1H7v2H5a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4 5 5 0 0 0 3 3.87V17H9v2H7v2h10v-2h-2v-2h-2v-2.13A5 5 0 0 0 16 11a4 4 0 0 0 4-4V4a1 1 0 0 0-1-1ZM6 7V5h1v4.9A2 2 0 0 1 6 7Zm12 0a2 2 0 0 1-1 1.9V5h1v2Z" />
    ),
  },
]

function TimelineCard() {
  return (
    <div className="gradient-border relative overflow-hidden rounded-2xl bg-[var(--tvc-card)] p-6 text-center shadow-2xl shadow-fuchsia-950/30 sm:p-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(236,31,160,0.25) 0%, rgba(6,1,7,0) 70%)',
        }}
      />
      <div className="relative">
        <div className="mb-2 flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white/50 sm:text-xs">
          <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="currentColor">
            <path d="M12 2 3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5Zm4.59 8.59L11 16.17l-2.59-2.58L7 15l4 4 7-7-1.41-1.41Z" />
          </svg>
          In Just
        </div>
        <div className="font-display gradient-text text-5xl sm:text-6xl md:text-7xl">30 Days</div>
        <p className="mx-auto mt-3 max-w-[240px] text-xs text-white/60 sm:mt-4 sm:text-sm">
          From cold outreach to a posting community you own outright
        </p>
      </div>
    </div>
  )
}

export function Process() {
  return (
    <section className="bg-dot-grid relative border-t border-white/10 bg-[var(--tvc-bg-soft)] px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(45% 55% at 90% 0%, rgba(124,42,248,0.22) 0%, rgba(6,1,7,0) 70%), radial-gradient(40% 45% at 5% 100%, rgba(236,31,160,0.18) 0%, rgba(6,1,7,0) 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
              The Process
            </p>
            <h2 className="font-display text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
              Recruited. Activated. Posting. That's the whole system.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
              Not a sample blast and a prayer. A structured pipeline that turns a cold creator
              into someone who's still posting for your brand three months from now, without you
              lifting a finger to chase them.
            </p>
          </div>

          <TimelineCard />
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className="group relative rounded-2xl border border-white/10 bg-black/40 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-fuchsia-500/50 hover:bg-black/60 active:-translate-y-1.5 active:border-fuchsia-500/50 active:bg-black/60 sm:p-7"
            >
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <div
                  className="animate-icon-float gradient-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-lg shadow-fuchsia-900/40 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 group-active:scale-125 group-active:rotate-6 sm:h-12 sm:w-12"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="currentColor">
                    {step.icon}
                  </svg>
                </div>
                <span className="font-display gradient-text text-2xl sm:text-3xl">{step.n}</span>
              </div>
              <h3 className="font-display text-base uppercase text-white sm:text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
