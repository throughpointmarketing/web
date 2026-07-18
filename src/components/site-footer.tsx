'use client'

import Link from 'next/link'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.56-3.68 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.91h-2.2V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.725-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.84.56 9.38.56 9.38.56s7.54 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
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

const socialLinks = [
  {
    label: 'ThroughPoint Marketing on LinkedIn',
    href: 'https://www.linkedin.com/company/throughpoint-marketing',
    Icon: LinkedInIcon,
  },
  {
    label: 'ThroughPoint Marketing on Facebook',
    href: 'https://www.facebook.com/throughpointmarketing',
    Icon: FacebookIcon,
  },
  {
    label: 'ThroughPoint Marketing on X',
    href: 'https://x.com/throughpointmkt',
    Icon: XIcon,
  },
  {
    label: 'ThroughPoint Marketing on YouTube',
    href: 'https://www.youtube.com/@throughpointmarketing',
    Icon: YouTubeIcon,
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:gap-8">
            <Link href="/" className="flex items-center" aria-label="ThroughPoint Marketing home">
              <img
                src="/throughpoint-logo.png"
                alt="ThroughPoint Marketing"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>

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

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-coral hover:text-coral"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-white/40">
            Copyright {year} ThroughPoint Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
