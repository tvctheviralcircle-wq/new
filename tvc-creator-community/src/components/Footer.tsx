export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-8 text-center sm:px-6 sm:py-10">
      <p className="font-display text-xs uppercase tracking-wide text-white/60 sm:text-sm">
        The Viral Circle
      </p>
      <p className="mt-2 text-[11px] text-white/30 sm:text-xs">
        © {new Date().getFullYear()} The Viral Circle. All rights reserved.
      </p>
    </footer>
  )
}
