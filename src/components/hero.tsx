'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { SignalAnimation } from '@/components/signal-animation'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-light-gray pt-28 lg:pt-32"
    >
      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-28">
        {/* Left copy */}
        <div className="py-14 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-coral"
          >
            AI Readiness for Local Businesses
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-pretty text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]"
          >
            Get Found By AI.{' '}
            <span className="text-coral">Get Chosen</span>{' '}
            By Customers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-body"
          >
            AI is changing how customers discover and choose businesses. Today&apos;s
            growth comes from building the trust, authority, and visibility signals
            that AI and people rely on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral/25 transition-all hover:bg-coral-dark"
            >
              Get Your Signal Scan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-background"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Right — animated signal diagram */}
        <div className="flex items-center justify-center py-6 lg:py-0">
          <SignalAnimation className="w-full" />
        </div>
      </div>
    </section>
  )
}
