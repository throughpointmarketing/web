'use client'

import Link from 'next/link'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Company', href: '/about' },
  { label: 'Learn', href: '/learn' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-8">
          <Link href="/" className="flex items-center" aria-label="ThroughPoint Marketing home">
            <img
              src="/throughpoint-logo.png"
              alt="ThroughPoint Marketing"
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>

          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-8">
            <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-7 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-white/40">
              Copyright {year} ThroughPoint Marketing. All rights reserved.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/company/throughpoint-marketing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ThroughPoint Marketing on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-coral hover:text-coral"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
