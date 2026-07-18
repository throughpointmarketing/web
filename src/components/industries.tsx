'use client'

import { Stethoscope, Sparkles, Briefcase, HeartPulse, Wrench, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const industries = [
  { icon: Stethoscope, name: 'Dental Practices', description: 'Attract more patients and earn more 5-star reviews.' },
  { icon: Sparkles, name: 'MedSpas & Aesthetics', description: 'Build credibility, showcase results, and drive bookings.' },
  { icon: TrendingUp, name: 'Mortgage & Financial Services', description: 'Strengthen trust and become the obvious choice.' },
  { icon: HeartPulse, name: 'Health & Wellness', description: 'Build the signals that bring patients to your door.' },
  { icon: Wrench, name: 'Local Service Businesses', description: 'Stand out in a competitive local market.' },
  { icon: Briefcase, name: 'Professional Services', description: 'Differentiate your expertise and grow referrals.' },
]

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
            Who We Help
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Built for owner-led and service-based businesses
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            We help local businesses that rely on local trust, reviews, referrals,
            and search visibility — the businesses that need to be found and chosen.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={i}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <industry.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{industry.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">{industry.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4} className="mt-10 text-center">
          <p className="text-sm text-body">
            Organizations that rely on trust, visibility, and referrals to drive growth.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
