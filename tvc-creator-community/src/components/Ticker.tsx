const ITEMS = [
  'MORE CREATORS POSTING',
  'AN ASSET YOU OWN',
  'ACTIVE, NOT ABANDONED',
  '30 DAY GUARANTEE',
  'RECRUITED. ACTIVATED. POSTING.',
]

export function Ticker() {
  const track = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-y border-black/10 bg-white py-2.5 sm:py-4">
      <div className="animate-marquee flex w-max items-center gap-6 whitespace-nowrap sm:gap-10">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-6 text-xs uppercase tracking-wide sm:gap-10 sm:text-base"
          >
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, var(--tvc-purple) 0%, var(--tvc-pink) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {item}
            </span>
            <span className="h-4 w-px shrink-0 bg-black/20" />
          </span>
        ))}
      </div>
    </div>
  )
}
