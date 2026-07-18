'use client'

import { motion } from 'motion/react'
import { ShieldCheck, Lightbulb, Award, MapPin, Star } from 'lucide-react'

const CENTER = 100

const nodes = [
  { label: 'Trust', icon: ShieldCheck, x: 100, y: 30, left: '50%', top: '15%' },
  { label: 'Expertise', icon: Lightbulb, x: 166.6, y: 78.4, left: '83.3%', top: '39.2%' },
  { label: 'Authority', icon: Award, x: 141.1, y: 156.6, left: '70.6%', top: '78.3%' },
  { label: 'Visibility', icon: MapPin, x: 58.9, y: 156.6, left: '29.4%', top: '78.3%' },
  { label: 'Experience', icon: Star, x: 33.4, y: 78.4, left: '16.7%', top: '39.2%' },
]

export function SignalAnimation({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative mx-auto aspect-square w-full max-w-[460px]">
        {/* connection lines + flowing pulses */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {nodes.map((n) => (
            <line
              key={`line-${n.label}`}
              x1={n.x}
              y1={n.y}
              x2={CENTER}
              y2={CENTER}
              stroke="var(--navy)"
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle
              key={`pulse-${n.label}`}
              r="3.2"
              fill="var(--coral)"
              initial={{ cx: n.x, cy: n.y, opacity: 0 }}
              animate={{
                cx: [n.x, CENTER],
                cy: [n.y, CENTER],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.8,
                delay: i * 0.36,
                repeat: Infinity,
                repeatDelay: 0.9,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>

        {/* center hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full bg-navy text-center shadow-xl shadow-navy/20 sm:h-32 sm:w-32">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-coral/40"
              animate={{ scale: [1, 1.25], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
            <span className="px-3 text-[0.7rem] font-bold uppercase leading-tight tracking-wide text-white sm:text-xs">
              Get Found.
              <br />
              Get Chosen.
            </span>
          </div>
        </div>

        {/* signal nodes */}
        {nodes.map((n, i) => (
          <motion.div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: n.left, top: n.top }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-coral shadow-md shadow-navy/5 sm:h-14 sm:w-14">
                <n.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <span className="rounded-full bg-background/90 px-2 py-0.5 text-[0.7rem] font-semibold text-navy sm:text-xs">
                {n.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
