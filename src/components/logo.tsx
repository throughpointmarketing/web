import { cn } from '@/lib/utils'

/**
 * ThroughPoint brand symbol — a broken navy circle with an upward-right coral arrow.
 * Extracted from the master brand SVG (symbol group), centered on (297, 364) r176.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="105 172 384 384"
      fill="none"
      className={cn(className)}
      role="img"
      aria-label="ThroughPoint Marketing logo"
    >
      <path
        d="M430.83 249.7A176 176 0 0 1 182.7 497.83"
        fill="none"
        stroke="currentColor"
        strokeWidth="28"
        strokeLinecap="butt"
      />
      <path
        d="M163.17 478.3A176 176 0 0 1 411.3 230.17"
        fill="none"
        stroke="currentColor"
        strokeWidth="28"
        strokeLinecap="butt"
      />
      <path
        d="M217 452L360 309"
        fill="none"
        stroke="var(--coral)"
        strokeWidth="22"
        strokeLinecap="square"
      />
      <path
        d="M250 304H364V402"
        fill="none"
        stroke="var(--coral)"
        strokeWidth="22"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}
