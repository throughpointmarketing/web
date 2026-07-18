'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

export default function ThankYouPage() {
  const router = useRouter()
  const [isAllowed, setIsAllowed] = useState(false)

  useEffect(() => {
    const submitted = sessionStorage.getItem('signalScanSubmitted') === '1'

    if (!submitted) {
      router.replace('/#contact')
      return
    }

    sessionStorage.removeItem('signalScanSubmitted')
    setIsAllowed(true)
  }, [router])

  if (!isAllowed) {
    return null
  }

  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-xl px-5 text-center lg:px-8">
        <div className="rounded-3xl border border-border bg-background p-10 shadow-sm lg:p-12">
          <Image
            src="/throughpoint-logo.png"
            alt="ThroughPoint Marketing"
            width={170}
            height={48}
            className="mx-auto h-10 w-auto"
            priority
          />
          <span className="mx-auto mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-coral/10 text-coral">
            <Check className="h-7 w-7" aria-hidden />
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-navy">
            Thank you for your request
          </h1>
          <p className="mt-4 leading-relaxed text-body">
            Your Signal Scan request has been received. Our team will review your
            business signals and follow up with clear next steps.
          </p>
          <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left">
            {['Request received', 'Personalized review', 'Follow-up with next steps'].map(
              (item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-charcoal">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ),
            )}
          </ul>
          <Link
            href="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-coral px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral/20 transition-all hover:bg-coral-dark"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
