'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { pushDataLayerEvent } from '@/lib/analytics'

const businessTypes = [
  'Dental practice',
  'MedSpa or aesthetics',
  'Health and wellness',
  'Local service business',
  'Professional services',
  'Other',
]

type SubmitState = 'idle' | 'submitting' | 'error'

export function Contact() {
  const router = useRouter()
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    website: '',
    businessType: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitState('submitting')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/signal-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { message?: string }
          | null
        throw new Error(payload?.message ?? 'Unable to submit request')
      }

      pushDataLayerEvent('signal_scan_submit', {
        form_name: 'signal_scan',
        form_location: 'contact',
      })
      sessionStorage.setItem('signalScanSubmitted', '1')
      router.push('/thank-you')
    } catch (error) {
      setSubmitState('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      )
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
              Get Started
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Request a personalized Signal Scan
            </h2>
            <p className="mt-5 leading-relaxed text-body">
              See exactly where your business stands — and what it will take to get
              found and chosen in the age of AI.
            </p>
            <ul className="mt-8 space-y-4">
              {['No obligation', 'Personalized to your website', 'Delivered with clear next steps'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-light-gray p-8 lg:p-10"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-gray focus:border-coral"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-gray focus:border-coral"
                    placeholder="you@yourbusiness.com"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-navy">
                    Business website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    autoComplete="url"
                    value={form.website}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-gray focus:border-coral"
                    placeholder="https://yourbusiness.com"
                  />
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-navy">
                    Business type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={form.businessType}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-coral"
                  >
                    <option value="">Select one</option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral/20 transition-all hover:bg-coral-dark disabled:opacity-60"
              >
                {submitState === 'submitting' ? 'Sending...' : 'Request My Signal Scan'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              {submitState === 'error' && (
                <p className="mt-4 text-sm font-medium text-destructive" role="alert">
                  {errorMessage ??
                    'Something went wrong. Please try again or contact ThroughPoint Marketing.'}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
