function BetVsOwned() {
  const months = ['Month 1', 'Month 2', 'Month 3']
  return (
    <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
      <div className="group/card rounded-2xl border border-white/10 bg-black/40 p-5 transition-colors duration-300 hover:border-white/20 active:border-white/20 sm:p-6">
        <p className="font-display text-xs uppercase text-white/50 sm:text-sm">One-Time Bet</p>
        <p className="mt-1 text-[11px] text-white/40 sm:text-xs">A single sample, hoping it hits</p>
        <div className="mt-5 flex items-center justify-between sm:mt-6">
          {months.map((m, i) => (
            <div key={m} className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div
                className={
                  i === 0
                    ? 'flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-black transition-transform duration-300 group-hover/card:scale-110 group-active/card:scale-110 sm:h-10 sm:w-10'
                    : 'flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-white/20 text-white/20 sm:h-10 sm:w-10'
                }
              >
                {i === 0 ? (
                  <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  '—'
                )}
              </div>
              <span className="text-[9px] uppercase text-white/40 sm:text-[11px]">{m}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-white/50 sm:mt-6 sm:text-sm">One post. Then silence.</p>
      </div>

      <div className="gradient-border rounded-2xl bg-[var(--tvc-card)] p-5 sm:p-6">
        <p className="font-display gradient-text text-xs uppercase sm:text-sm">Owned Community</p>
        <p className="mt-1 text-[11px] text-white/40 sm:text-xs">The same creator, posting again and again</p>
        <div className="mt-5 flex items-center justify-between sm:mt-6">
          {months.map((m, i) => (
            <div key={m} className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div
                className="gradient-bg animate-icon-float flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg shadow-fuchsia-900/40 transition-transform duration-300 hover:scale-125 active:scale-125 sm:h-10 sm:w-10"
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[9px] uppercase text-white/60 sm:text-[11px]">{m}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-white/70 sm:mt-6 sm:text-sm">Posting again. And again. Without the chase.</p>
      </div>
    </div>
  )
}

export function Shift() {
  return (
    <section className="bg-dot-grid relative border-t border-white/10 bg-[var(--tvc-bg-soft)] px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(45% 55% at 85% 10%, rgba(236,31,160,0.2) 0%, rgba(6,1,7,0) 70%), radial-gradient(40% 45% at 10% 90%, rgba(124,42,248,0.22) 0%, rgba(6,1,7,0) 70%)',
        }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
          The Shift
        </p>
        <h2 className="font-display text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          Does winning on TikTok Shop mean recruiting more creators? It doesn't.
        </h2>

        <div className="mt-5 space-y-4 text-base leading-relaxed text-white/70 sm:mt-8 sm:space-y-5 sm:text-lg">
          <p>
            Look at the brands actually pulling ahead on TikTok Shop right now, and it's not
            what you'd expect. They're not adding new names to a list every week. They're
            keeping the creators they already have posting, again and again.
          </p>
          <p>That's it really. That's the whole thing almost nobody's doing with purpose.</p>
          <p>
            Think about what that means for your samples specifically. Right now, every box you
            send out is a one-time bet, it either hits or it doesn't. What if it wasn't? What if
            the same creator who posted for you once was still posting three months from now,
            without you having to chase them for it?
          </p>
        </div>

        <BetVsOwned />

        <p className="mt-6 border-l-2 border-fuchsia-500 pl-4 text-base font-semibold leading-snug text-white sm:mt-10 sm:pl-6 sm:text-xl">
          That's what an owned community actually is. And it has to be yours, not an agency's,
          because the day you stop paying someone to run it, it doesn't pause, it leaves. With
          them, not with you.
        </p>
      </div>
    </section>
  )
}
