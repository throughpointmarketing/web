'use client'

import { Reveal } from '@/components/reveal'

const beliefs = [
  {
    heading: 'Customers compare you before they call.',
    body: 'AI needs clear proof that your business is credible. Weak listings, thin content, and inconsistent signals make you harder to recommend.',
  },
  {
    heading: 'Trust is the new competitive advantage.',
    body: 'The businesses that earn the strongest signals earn the strongest recommendations — from people and from AI.',
  },
  {
    heading: 'Clarity beats complexity.',
    body: 'A clear, honest picture of where you stand is worth more than a long report full of numbers that do not translate to action.',
  },
]

export function WhyThroughPoint() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
              Who We Are
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Marketing built for the way customers choose today
            </h2>
            <p className="mt-6 leading-relaxed text-body">
              ThroughPoint Marketing helps owner-led and service-based businesses build
              the trust, authority, and visibility signals that shape how they are
              discovered and recommended — by customers and by AI.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              The way people find businesses is changing. Search engines, review sites,
              and AI assistants all rely on signals to decide who to surface and who to
              recommend. We help you make those signals clear, consistent, and credible.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="rounded-3xl border border-border bg-light-gray p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-gray">
                What we believe
              </p>
              <div className="mt-6 space-y-6">
                {beliefs.map((item) => (
                  <div key={item.heading} className="border-l-2 border-coral pl-5">
                    <p className="font-semibold text-navy">{item.heading}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-body">{item.body}</p>
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
