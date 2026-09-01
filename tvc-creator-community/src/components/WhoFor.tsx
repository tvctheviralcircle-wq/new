const FIT = [
  "You're already selling on TikTok Shop",
  "You're already sending samples to creators",
  "You've got traction, you just need the system to turn it into consistent distribution",
]

const NOT_FIT = ["You haven't made a sale yet", "You're still setting up your shop"]

const CHECK_ICON = (
  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
)
const DASH_ICON = <path d="M19 13H5v-2h14v2Z" />

export function WhoFor() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(45% 55% at 10% 20%, rgba(16,185,129,0.16) 0%, rgba(6,1,7,0) 70%), radial-gradient(40% 45% at 90% 80%, rgba(124,42,248,0.2) 0%, rgba(6,1,7,0) 70%)',
        }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="mb-2.5 text-center text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
          Who This Is For
        </p>
        <h2 className="font-display mx-auto max-w-2xl text-center text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          Is this you?
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          <div className="group rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/60 active:-translate-y-1.5 active:border-emerald-400/60 sm:p-8">
            <h3 className="mb-4 font-display text-base uppercase text-emerald-400 sm:mb-5 sm:text-lg">
              This is for you if:
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {FIT.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85 sm:text-base">
                  <span
                    className="animate-icon-float flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 transition-transform duration-300 group-hover:scale-125 group-active:scale-125 sm:h-6 sm:w-6"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  >
                    <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="currentColor">
                      {CHECK_ICON}
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 active:-translate-y-1.5 active:border-white/20 sm:p-8">
            <h3 className="mb-4 font-display text-base uppercase text-white/50 sm:mb-5 sm:text-lg">
              Not the right fit yet if:
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {NOT_FIT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/50 sm:text-base">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/40 sm:h-6 sm:w-6">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="currentColor">
                      {DASH_ICON}
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-base text-white/70 sm:mt-10 sm:text-lg">
          Get some traction first. This will still be the next step when you're ready.
        </p>
      </div>
    </section>
  )
}
