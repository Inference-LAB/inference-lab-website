import Link from 'next/link'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'

export function ProgramCard({
  badgeNumber,
  title,
  tagline,
  description,
  duration,
  trackType,
  outcome,
  href,
}: {
  badgeNumber: string
  title: string
  tagline: string
  description: string
  duration: string
  trackType: string
  outcome: string
  href: string
}) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl sm:p-8">
      <div className="space-y-4">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
          {badgeNumber}
        </span>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand sm:text-3xl">
            {title}
          </h3>
          <p className="mt-1 font-sans text-sm font-semibold text-foreground/80">
            {tagline}
          </p>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {description}
        </p>

        {/* Metadata Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <Clock className="h-3 w-3" /> {duration}
          </span>
          <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {trackType}
          </span>
          <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Project-Based
          </span>
        </div>

        {/* Outcome Box */}
        <div className="rounded-xl border border-border bg-muted/30 p-4">
          <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Main Outcome
          </span>
          <p className="mt-1 text-xs font-medium text-foreground">
            {outcome}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-brand-foreground shadow transition-all group-hover:shadow-md hover:opacity-90"
        >
          View Program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
