import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useQualifyModal } from '../context/QualifyModalContext'
import { submitQualifyLead } from '../server/leads'

type YesNo = '' | 'yes' | 'no'

function YesNoToggle({
  value,
  onChange,
  yesLabel = 'Yes',
  noLabel = 'No',
}: {
  value: YesNo
  onChange: (v: YesNo) => void
  yesLabel?: string
  noLabel?: string
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {(['yes', 'no'] as const).map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={
            value === opt
              ? 'gradient-bg rounded-lg py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-transform active:scale-95'
              : 'rounded-lg border border-white/15 bg-black/30 py-2.5 text-sm font-bold uppercase tracking-wide text-white/60 transition-colors hover:border-white/30 active:border-white/30'
          }
        >
          {opt === 'yes' ? yesLabel : noLabel}
        </button>
      ))}
    </div>
  )
}

export function QualifyModal() {
  const { isOpen, close } = useQualifyModal()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [brand, setBrand] = useState('')
  const [selling, setSelling] = useState<YesNo>('')
  const [samples, setSamples] = useState<YesNo>('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !brand.trim() || !selling || !samples) {
      setError('Please fill out every question so we can route you correctly.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }

    setError('')
    setSubmitting(true)

    try {
      sessionStorage.setItem('tvc_lead_name', name.trim())
      sessionStorage.setItem('tvc_lead_email', email.trim())
    } catch {
      // sessionStorage unavailable — non-fatal, personalization just degrades.
    }

    try {
      await submitQualifyLead({
        data: {
          name: name.trim(),
          email: email.trim(),
          brand: brand.trim(),
          sellingOnTiktokShop: selling,
          sendingSamples: samples,
          referrer: typeof window !== 'undefined' ? window.location.href : undefined,
        },
      })
    } catch (err) {
      console.error('Lead submission failed', err)
    } finally {
      setSubmitting(false)
      close()
      navigate({ to: '/book' })
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 cursor-default"
      />

      <div className="gradient-border relative w-full max-w-md rounded-2xl bg-[var(--tvc-card)] p-6 shadow-2xl shadow-fuchsia-950/40 sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white active:bg-white/10"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.29 1.41 1.41 6.3-6.29 6.3 6.29 1.41-1.41-6.3-6.29 6.3-6.3z" />
          </svg>
        </button>

        <p className="text-xs font-bold uppercase tracking-wide text-fuchsia-400">
          Quick Qualification
        </p>
        <h2 className="font-display mt-2 text-2xl uppercase leading-tight text-white sm:text-3xl">
          See If You Qualify
        </h2>
        <p className="mt-2 text-sm text-white/60">
          Answer a few quick questions and we'll take you straight to the calendar.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              className="w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-fuchsia-500"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@brand.com"
              className="w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-fuchsia-500"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
              Brand / TikTok Shop Name
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Your brand name"
              className="w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-fuchsia-500"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
              Are you already selling on TikTok Shop?
            </label>
            <YesNoToggle value={selling} onChange={setSelling} />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
              Are you already sending samples to creators?
            </label>
            <YesNoToggle value={samples} onChange={setSamples} />
          </div>

          {error && <p className="text-sm font-medium text-rose-400">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="gradient-bg mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-fuchsia-900/40 transition-transform hover:scale-[1.02] active:scale-[1.02] disabled:opacity-60"
          >
            {submitting ? 'Checking...' : 'Continue to Booking →'}
          </button>
        </form>
      </div>
    </div>
  )
}
