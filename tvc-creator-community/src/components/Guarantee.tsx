const STATS = [
  {
    value: '150+',
    label: 'Creators recruited into your owned community',
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
    ),
  },
  {
    value: '30–35%',
    label: 'Actively posting for your brand',
    icon: <path d="M5 9h3v11H5V9Zm6-6h3v17h-3V3Zm6 10h3v7h-3v-7Z" />,
  },
  {
    value: '30',
    suffix: 'days',
    label: 'Or you don\u2019t pay a dollar',
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 11h4v2h-6V7h2v6Z" />
    ),
  },
]

export function Guarantee() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[var(--tvc-bg-soft)] px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(50% 60% at 50% 100%, rgba(124,42,248,0.35) 0%, rgba(6,1,7,0) 70%)',
        }}
      />
      <div className="mx-auto max-w-5xl text-center">
        <div className="gradient-bg mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-fuchsia-900/40 sm:mb-6 sm:h-14 sm:w-14">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white sm:h-7 sm:w-7" fill="currentColor">
            <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Zm-1.2 13.6-3.2-3.2 1.4-1.4 1.8 1.8 4.8-4.8 1.4 1.4-6.2 6.2Z" />
          </svg>
        </div>
        <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
          The Guarantee
        </p>
        <h2 className="font-display mx-auto max-w-3xl text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          150+ creators. 30–35% active. 30 days. Or you keep your money.
        </h2>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="group gradient-border rounded-2xl bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 active:-translate-y-1.5 sm:p-8"
            >
              <div
                className="gradient-bg animate-icon-float mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg shadow-fuchsia-900/40 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 group-active:scale-125 group-active:rotate-6 sm:mb-4 sm:h-11 sm:w-11"
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="currentColor">
                  {s.icon}
                </svg>
              </div>
              <div className="font-display gradient-text text-4xl sm:text-5xl md:text-6xl">
                {s.value}
                {s.suffix && (
                  <span className="ml-1 text-lg uppercase text-white/70 sm:text-2xl">{s.suffix}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-white/70 sm:mt-4 sm:text-base">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-base text-white/70 sm:mt-12 sm:text-lg">
          No trust required here. Just a number, and a guarantee behind it. If we don't hit it,
          you don't pay for it. That's the whole deal.
        </p>
      </div>
    </section>
  )
}
