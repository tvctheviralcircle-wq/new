const ICONS = {
  users: (
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
  ),
  repeat: (
    <path d="M17 1 21 5l-4 4V6h-6a5 5 0 0 0-5 5c0 .74.16 1.44.44 2.06l-1.47 1.47A6.97 6.97 0 0 1 5 11a7 7 0 0 1 7-7h5V1ZM7 23l-4-4 4-4v3h6a5 5 0 0 0 5-5c0-.74-.16-1.44-.44-2.06l1.47-1.47A6.97 6.97 0 0 1 19 13a7 7 0 0 1-7 7H7v3Z" />
  ),
  chart: (
    <path d="M5 9h3v11H5V9Zm6-6h3v17h-3V3Zm6 10h3v7h-3v-7Z" />
  ),
  gift: (
    <path d="M20 7h-2.18A3 3 0 0 0 18 5.5 3.5 3.5 0 0 0 12 4a3.5 3.5 0 0 0-6 1.5A3 3 0 0 0 6.18 7H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-8-1.5a1.5 1.5 0 1 1 3 0V7h-3V5.5Zm-4 0a1.5 1.5 0 1 1 3 0V7H9.5A1.5 1.5 0 0 1 8 5.5ZM6 12h5v7H6v-7Zm7 7v-7h5v7h-5Z" />
  ),
}

const ITEMS = [
  {
    icon: ICONS.users,
    text: '150+ TikTok Shop creators, recruited into a community that\u2019s yours',
  },
  {
    icon: ICONS.chart,
    text: '30\u201335% actively posting for your brand within 30 days',
  },
  {
    icon: ICONS.repeat,
    text: 'Creators who post consistently, not names sitting untouched on a spreadsheet',
  },
  {
    icon: ICONS.gift,
    text: 'Handed to you as something you keep, not something you rent month to month',
  },
]

export function WhatWeBuild() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            'radial-gradient(55% 65% at 50% 0%, rgba(124,42,248,0.28) 0%, rgba(6,1,7,0) 70%), radial-gradient(35% 40% at 90% 100%, rgba(236,31,160,0.2) 0%, rgba(6,1,7,0) 70%)',
        }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="mb-2.5 text-center text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
          What We Build
        </p>
        <h2 className="font-display mx-auto max-w-2xl text-center text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          A creator community your brand owns outright.
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="group gradient-border rounded-2xl bg-[var(--tvc-card)] p-5 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 active:-translate-y-1.5 sm:p-6"
            >
              <div
                className="gradient-bg animate-icon-float mb-3 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg shadow-fuchsia-900/40 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 group-active:scale-125 group-active:rotate-6 sm:mb-4 sm:h-11 sm:w-11"
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="currentColor">
                  {item.icon}
                </svg>
              </div>
              <p className="text-base font-medium leading-snug text-white/90 sm:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
