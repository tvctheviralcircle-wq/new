import { useQualifyModal } from '../context/QualifyModalContext'

export function Nav() {
  const { open } = useQualifyModal()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="group flex items-center gap-2">
          <div className="gradient-border rounded-full p-[1.5px] transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
            <img
              src="https://assets-2-prod.whop.com/public/uploads/2025-05-14/user_3134765_25927faf-e31d-42f4-87d5-4a0552277e08.jpeg"
              alt="The Viral Circle"
              className="h-7 w-7 rounded-full object-cover sm:h-9 sm:w-9"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={open}
          className="gradient-bg whitespace-nowrap rounded-full px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg shadow-fuchsia-900/30 transition-transform hover:scale-105 active:scale-105 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          See If You Qualify →
        </button>
      </div>
      <div className="animate-nav-shimmer h-[2px] w-full opacity-70" />
    </header>
  )
}
