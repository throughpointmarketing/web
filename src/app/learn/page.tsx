import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Radar, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Learn',
  description:
    'Learn how AI readiness, Signal Scan™, and the Signal Economy™ help local businesses get found by AI and chosen by customers.',
}

const topics = [
  {
    icon: Radar,
    title: 'What is a Signal Scan™?',
    body: 'A focused audit of your digital footprint that shows where your business is visible, trusted, and easy for AI systems to recommend.',
    href: '/#ai-signal-quiz',
    cta: 'Take the free scan',
  },
  {
    icon: Sparkles,
    title: 'The Signal Economy™',
    body: 'Customers and AI rely on trust, expertise, authority, visibility, and experience signals. Strengthen those, and you get found and chosen.',
    href: '/#signal-economy',
    cta: 'Explore the signals',
  },
  {
    icon: BookOpen,
    title: 'AI readiness for local businesses',
    body: 'Practical guidance for owner-led and service-based businesses that want clearer profiles, stronger proof, and better AI discovery.',
    href: '/services',
    cta: 'See our services',
  },
]

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Understand the signals that get you found"
        subtitle="Short explainers on AI readiness, Signal Scan™, and how ThroughPoint helps local businesses show up with clarity and trust."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
              Start here
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Guides for owners who want to win with AI
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Prefer a quick self-check? Take the AI Signal quiz, then request a
              personalized Signal Scan when you&apos;re ready for next steps.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {topics.map((topic, index) => (
              <Reveal key={topic.title} delay={index}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-light-gray p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <topic.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy">{topic.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-body">{topic.body}</p>
                  <Link
                    href={topic.href}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-colors hover:text-coral-dark"
                  >
                    {topic.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <Contact />
    </>
  )
}
