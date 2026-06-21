import { cn } from '@/lib/utils'

/**
 * Inference Lab geometric pillar mark — a stylized "I" / inference column
 * with circuit nodes, rendered in the brand signal color.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn('h-7 w-7', className)}
    >
      {/* pediment */}
      <path
        d="M12 13L24 5L36 13"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* outer columns */}
      <path
        d="M14 14V41H34V14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* center inference channel */}
      <path
        d="M24 9V41"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 22L17 16M24 22L31 16M24 30L17 36M24 30L31 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* base */}
      <path d="M11 41H37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* nodes */}
      <circle cx="14" cy="26" r="2.6" fill="currentColor" />
      <circle cx="34" cy="26" r="2.6" fill="currentColor" />
    </svg>
  )
}

export function Logo({
  className,
  withText = true,
}: {
  className?: string
  withText?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <LogoMark className="h-7 w-7 text-brand" />
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="font-mono text-sm font-semibold tracking-[0.18em] text-foreground">
            INFERENCE
          </span>
          <span className="font-mono text-sm font-semibold tracking-[0.42em] text-muted-foreground">
            LAB
          </span>
        </span>
      )}
    </span>
  )
}
