import { useState } from 'react'

const ROW_1_IMAGES = [
  'https://assets-2-prod.whop.com/public/uploads/2026-09-04/ef492f97-8bf3-49b5-a01f-417c5a474714/image.png',
  'https://assets-2-prod.whop.com/public/uploads/2026-09-04/c8a8dbb5-b88f-4008-87ed-c8fd6e0e0937/image.png',
]

const ROW_2_IMAGES = [
  'https://assets-2-prod.whop.com/public/uploads/2026-09-04/0d176176-4752-4c75-b3b9-d29153a479dc/image.png',
  'https://assets-2-prod.whop.com/public/uploads/2026-09-04/ac68b28b-23ad-4420-9947-fe91fd0fe7d1/image.png',
]

function ScreenshotCard({ src, onOpen }: { src: string; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="group relative block w-full text-left">
      <span
        className="pointer-events-none absolute -inset-2 rounded-2xl opacity-40 blur-xl transition-all duration-300 group-hover:-inset-4 group-hover:opacity-90 sm:rounded-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(124,42,248,0.55) 0%, rgba(236,31,160,0.45) 55%, transparent 80%)',
        }}
      />
      <div className="gradient-border relative overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.02] sm:rounded-2xl">
        <img src={src} alt="TVC creator community dashboard" className="w-full object-cover" />
      </div>
    </button>
  )
}

export function CommunityInAction() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-4 py-14 sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(50% 50% at 15% 10%, rgba(124,42,248,0.2) 0%, rgba(6,1,7,0) 70%), radial-gradient(45% 45% at 90% 90%, rgba(236,31,160,0.2) 0%, rgba(6,1,7,0) 70%)',
        }}
      />

      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-fuchsia-400 sm:mb-3 sm:text-sm">
          Creators Community In Action
        </p>
        <h2 className="font-display mx-auto max-w-3xl text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          Same shops, same samples, different system.
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8">
          {ROW_1_IMAGES.map((src, i) => (
            <ScreenshotCard key={i} src={src} onOpen={() => setSelected(src)} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8">
          {ROW_2_IMAGES.map((src, i) => (
            <ScreenshotCard key={i} src={src} onOpen={() => setSelected(src)} />
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 active:bg-white/20 sm:left-6 sm:top-6"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.29 1.41 1.41 6.3-6.29 6.3 6.29 1.41-1.41-6.3-6.29 6.3-6.3z" />
            </svg>
          </button>
          <img
            src={selected}
            alt="TVC creator community dashboard, expanded"
            className="max-h-[85vh] max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
