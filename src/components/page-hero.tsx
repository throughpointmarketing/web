'use client'

import { motion } from 'motion/react'

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 lg:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 pb-16 text-center lg:pb-20 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-coral"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </section>
  )
}
