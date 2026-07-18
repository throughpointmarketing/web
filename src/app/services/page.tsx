import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Services } from '@/components/services'
import { Industries } from '@/components/industries'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'From the Signal Scan™ to hands-on signal building, ThroughPoint helps local businesses strengthen the trust, authority, and visibility signals that AI and customers rely on.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Building the signals that get you found and chosen"
        subtitle="We help local and service-based businesses strengthen the signals that shape how they are discovered and recommended — by customers and by AI."
      />
      <Services />
      <Industries />
      <Faq />
      <Contact />
    </>
  )
}
