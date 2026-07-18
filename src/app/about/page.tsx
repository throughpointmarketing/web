import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { WhyThroughPoint } from '@/components/why-throughpoint'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'ThroughPoint Marketing helps owner-led and service-based businesses build the trust, authority, and visibility signals that shape how they are discovered and recommended.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Helping businesses win in the Signal Economy™"
        subtitle="The way customers discover and choose businesses is changing. We help you build the signals that matter."
      />
      <WhyThroughPoint />
      <Contact />
    </>
  )
}
