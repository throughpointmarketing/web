'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'What does ThroughPoint Marketing do?',
    a: 'ThroughPoint Marketing helps local businesses improve the digital trust, authority, visibility, expertise, and customer experience signals that influence how customers and AI search systems evaluate a business.',
  },
  {
    q: 'What is a Signal Scan?',
    a: 'A Signal Scan is a focused audit of your digital footprint. It identifies where your business is visible, trusted, authoritative, and easy to understand for AI search engines and prospective customers.',
  },
  {
    q: 'Who is the AI readiness framework for?',
    a: 'The AI readiness framework is built for local businesses, including dental practices, MedSpas, health and wellness companies, local service businesses, financial services, and professional services firms.',
  },
  {
    q: 'What is generative engine optimization?',
    a: "Generative engine optimization focuses on making your business information clear, consistent, credible, and easy for AI systems to retrieve and cite. ThroughPoint's process strengthens those signals across search, maps, reviews, content, and business profiles.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
            FAQs
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <Reveal delay={1} className="mt-12">
          <dl className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={faq.q}>
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base font-semibold text-navy">{faq.q}</span>
                      <Plus
                        className={cn(
                          'h-5 w-5 shrink-0 text-coral transition-transform duration-300',
                          isOpen && 'rotate-45',
                        )}
                      />
                    </button>
                  </dt>
                  <dd
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-body">
                        {faq.a}
                      </p>
                    </div>
                  </dd>
                </div>
              )
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
