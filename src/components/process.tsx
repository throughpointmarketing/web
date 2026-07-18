'use client'

import { ScanSearch, Map, Handshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: ScanSearch,
    number: '01',
    title: 'The Personalized Signal Scan',
    description:
      'We run a focused, deep-dive scan of your digital footprint to see exactly how AI search engines perceive your business today.',
  },
  {
    icon: Map,
    number: '02',
    title: 'The Custom Roadmap',
    description:
      'You get a step-by-step blueprint to optimize your data for AI discovery — not a cookie-cutter template.',
  },
  {
    icon: Handshake,
    number: '03',
    title: 'The Partner Plan',
    description:
      'Ongoing consulting and execution support to keep your business ahead of the curve as AI continues to evolve.',
  },
]

export function Process() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Three Steps to Your AI Readiness Framework
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            Understand where your business stands today and what needs to happen next.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                <span className="font-heading text-5xl font-extrabold text-navy/10 leading-none">
                  {step.number}
                </span>
                <span className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-coral/10 text-coral">
                  <step.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-body">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
