type Logo = { src: string; big?: boolean }

const ROW_1_LOGOS: Logo[] = [
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/d11434ab-661e-4ba2-8dc4-3907c51d569a/image.png' },
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/2155855c-d8ef-4c1b-8cd8-3279cd90fa02/image.png' },
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/986094aa-9bd5-4a5d-a6b3-dbbdfb81a391/image.png' },
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/3b0ddd79-63bb-4398-a10a-44f62d10841d/image.png' },
  {
    src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/e138dfe6-f3fd-4cc6-a079-2afaeb4f6ab8/image.png',
    big: true,
  },
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/25c6e2e5-fbe0-4023-8c19-7df314f7ed9c/image.png' },
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/7d7303b1-d733-4eb9-b1d1-175af23ba366/image.png' },
]

const ROW_2_LOGOS: Logo[] = [
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/a8a4df08-a928-443d-bd88-3ce5524a5909/image.png' },
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/a1cc6e7c-6a1f-4237-a6ee-e0bfadc014b7/image.png' },
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/09fe0680-932a-4f66-b395-912fedba8823/image.png' },
  { src: 'https://assets-2-prod.whop.com/public/uploads/2026-09-03/b8972710-68aa-4dc5-9757-f61c21e66b48/image.png' },
]

function LogoItem({
  src,
  size,
  big,
  spacingClass,
}: {
  src: string
  size: 'md' | 'lg'
  big?: boolean
  spacingClass: string
}) {
  const boxClass = size === 'md' ? 'h-14 w-28 sm:h-16 sm:w-32' : 'h-24 w-48 sm:h-28 sm:w-56'
  const imgMaxClass =
    size === 'md'
      ? big
        ? 'max-h-9 sm:max-h-10'
        : 'max-h-7 sm:max-h-8'
      : 'max-h-14 sm:max-h-16'

  return (
    <div
      className={`group/logo relative flex shrink-0 items-center justify-center ${boxClass} ${spacingClass}`}
    >
      <span
        className="pointer-events-none absolute inset-0 scale-75 rounded-full opacity-0 blur-lg transition-all duration-300 group-hover/logo:scale-100 group-hover/logo:opacity-100"
        style={{
          background:
            'radial-gradient(circle, rgba(124,42,248,0.45) 0%, rgba(236,31,160,0.35) 55%, transparent 80%)',
        }}
      />
      <img
        src={src}
        alt="Partner brand logo"
        className={`relative w-auto object-contain opacity-60 brightness-0 invert transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:opacity-100 ${imgMaxClass}`}
      />
    </div>
  )
}

// Repeat the base set enough times that a single "half" is wider than any real
// screen, then mirror that half once more. That keeps the two halves exactly
// identical (so the -50% loop point lines up perfectly) while guaranteeing the
// belt never runs out of logos before the loop point, on any screen width.
const REPEAT = 6

function buildTrack(logos: Logo[]) {
  const half = Array.from({ length: REPEAT }, () => logos).flat()
  return [...half, ...half]
}

export function TrustedBy() {
  const row1 = buildTrack(ROW_1_LOGOS)
  const row2 = buildTrack(ROW_2_LOGOS)

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs uppercase tracking-wide text-white sm:text-base">
          <span className="gradient-text text-sm tracking-normal sm:text-lg">★★★★★</span>
          <span className="font-bold">4.9</span>
          <span className="font-normal">Trusted by 50+ Brands</span>
        </p>
      </div>

      <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
        {/* Row 1 — average size, right to left */}
        <div className="group/row1 overflow-hidden">
          <div className="animate-marquee-brands flex w-max items-center group-hover/row1:[animation-play-state:paused]">
            {row1.map((logo, i) => (
              <LogoItem
                key={i}
                src={logo.src}
                size="md"
                big={logo.big}
                spacingClass="mr-4 sm:mr-6"
              />
            ))}
          </div>
        </div>

        {/* Row 2 — bigger size, left to right */}
        <div className="group/row2 overflow-hidden">
          <div className="animate-marquee-brands-reverse flex w-max items-center group-hover/row2:[animation-play-state:paused]">
            {row2.map((logo, i) => (
              <LogoItem key={i} src={logo.src} size="lg" spacingClass="mr-3 sm:mr-4" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
