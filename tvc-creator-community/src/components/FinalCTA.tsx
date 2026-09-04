import { Link } from '@tanstack/react-router'

export function FinalCTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden border-t border-white/10 px-4 py-14 text-center sm:px-6 sm:py-24"
      style={{
        background:
          'radial-gradient(60% 60% at 50% 20%, rgba(124,42,248,0.4) 0%, rgba(6,1,7,0) 70%)',
      }}
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl uppercase leading-tight text-white sm:text-4xl md:text-5xl">
          A year from now, this is either your advantage or your gap.
        </h2>

        <div className="mx-auto mt-5 max-w-2xl space-y-3 text-sm text-white/70 sm:mt-8 sm:space-y-4 sm:text-lg">
          <p>
            The brands building this right now will be operating on a completely different
            level than the ones still renting creators month to month.
          </p>
          <p>
            So, are you still going to be sending samples out and hoping a year from now? Or are
            you going to own the thing your competitors are still paying to rent?
          </p>
        </div>

        <Link
          to="/book"
          className="gradient-bg mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-fuchsia-900/40 transition-transform hover:scale-105 active:scale-105 sm:mt-10 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
        >
          Book Your Call →
        </Link>

        <p className="mx-auto mt-5 max-w-xl text-xs text-white/50 sm:mt-6 sm:text-sm">
          We'll look at your shop, your samples, and your current creators, and map out exactly
          what this looks like for your brand. No obligation either way. We only take on a few
          brands at a time, so if this is you, move on it now.
        </p>
      </div>
    </section>
  )
}
