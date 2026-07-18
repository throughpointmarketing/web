'use client'

import { ScanSearch, Map, Handshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: ScanSearch,
    title: 'Signal Scan™',
    description:
      'A focused audit of your digital footprint. See exactly how AI search engines and customers perceive your business today — and where the gaps are.',
  },
  {
    icon: Map,
    title: 'Custom AI Readiness Roadmap',
    description:
      'A step-by-step blueprint to optimize your signals for AI discovery. No cookie-cutter templates — built specifically for your business.',
  },
  {
    icon: Handshake,
    title: 'Ongoing Partner Support',
    description:
      'Consulting and execution support to implement your roadmap and keep your business ahead as AI continues to evolve.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            How we help your business get found and chosen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            We start with a clear picture of where you stand, then build a path forward.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-xl hover:shadow-navy/5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-coral/10 text-coral">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-body">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
