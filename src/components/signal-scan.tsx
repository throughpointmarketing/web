'use client'

import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const included = [
  'No obligation',
  'Personalized to your website',
  'Delivered with clear next steps',
]

export function SignalScan() {
  return (
    <section id="signal-scan" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
              The ThroughPoint Signal Scan™
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Can AI Find Your Business?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Every customer decision is shaped by signals — proof points that answer
              &ldquo;Can I trust this business?&rdquo; before a single word is spoken.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              The ThroughPoint Signal Scan™ evaluates your business across five signals
              — from visibility to authority to customer experience — and shows you
              exactly where you&apos;re strong and where you&apos;re invisible.
            </p>

            <ul className="mt-7 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-medium text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral/20 transition-all hover:bg-coral-dark"
            >
              Request My Signal Scan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          {/* Right — signal scan card visual */}
          <Reveal delay={1}>
            <div className="rounded-3xl border border-border bg-light-gray p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-gray">
                What we evaluate
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Trust', desc: 'Can customers trust you?' },
                  { label: 'Expertise', desc: 'Do you demonstrate expertise?' },
                  { label: 'Authority', desc: 'Do others validate you?' },
                  { label: 'Visibility', desc: 'Can customers find you?' },
                  { label: 'Experience', desc: 'Do customers have a great experience?' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-navy">{item.label} Signal™</p>
                      <p className="mt-0.5 text-xs text-body">{item.desc}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-coral" aria-hidden />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
