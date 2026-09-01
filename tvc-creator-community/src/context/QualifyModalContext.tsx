import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

type QualifyModalContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const QualifyModalContext = createContext<QualifyModalContextValue | null>(null)

export function QualifyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  )

  return <QualifyModalContext.Provider value={value}>{children}</QualifyModalContext.Provider>
}

export function useQualifyModal() {
  const ctx = useContext(QualifyModalContext)
  if (!ctx) {
    throw new Error('useQualifyModal must be used within a QualifyModalProvider')
  }
  return ctx
}
