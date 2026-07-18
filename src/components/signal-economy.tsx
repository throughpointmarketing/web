'use client'

import { ShieldCheck, Lightbulb, Award, MapPin, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const signals = [
  {
    icon: ShieldCheck,
    name: 'Trust Signal',
    items: ['Reviews', 'Testimonials', 'Certifications', 'Licenses', 'Social Proof', 'Years in Business'],
  },
  {
    icon: Lightbulb,
    name: 'Expertise Signal',
    items: ['Blogs', 'Video', 'FAQs', 'Education', 'Guides', 'Thought Leadership'],
  },
  {
    icon: Award,
    name: 'Authority Signal',
    items: ['Media Mentions', 'Citations', 'Speaking Engagements', 'Partnerships', 'Awards', 'Memberships'],
  },
  {
    icon: MapPin,
    name: 'Visibility Signal',
    items: ['SEO', 'Maps', 'Directory Listings', 'Google Business Profile', 'Local Listing'],
  },
  {
    icon: Star,
    name: 'Experience Signal',
    items: ['Referrals', 'NPS', 'Retention', 'Response Time', 'Customer Satisfaction'],
  },
]

export function SignalEconomy() {
  return (
    <section
      id="signal-economy"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
            The Signal Economy™
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Five Signals. One Outcome.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/65">
            At the center of every recommendation are five critical signals. Together
            they influence how customers, search engines, and AI platforms discover
            and recommend businesses.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {signals.map((signal, i) => (
            <Reveal key={signal.name} delay={i}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-coral/15 text-coral">
                  <signal.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{signal.name}</h3>
                <ul className="mt-3 space-y-1.5">
                  {signal.items.map((item) => (
                    <li key={item} className="text-sm text-white/55">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3} className="mt-12 text-center">
          <p className="text-base text-white/60">
            Customers choose businesses they trust. AI recommends businesses it trusts.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
