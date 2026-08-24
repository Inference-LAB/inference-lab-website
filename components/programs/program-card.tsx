import Link from 'next/link'
import { ArrowRight, Clock, ExternalLink, Sparkles } from 'lucide-react'

export function ProgramCard({
  badgeNumber,
  title,
  tagline,
  description,
  duration,
  trackType,
  outcome,
  href,
  formUrl,
  structureHref,
  feeHref,
}: {
  badgeNumber: string
  title: string
  tagline: string
  description: string
  duration: string
  trackType: string
  outcome: string
  href: string
  formUrl?: string
  structureHref?: string
  feeHref?: string
}) {
  const shortName = title.includes('AI Builder')
    ? 'AI Builder'
    : title.includes('Applied AI')
    ? 'Applied AI'
    : 'Program'

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

      <div className="mt-8 space-y-3 border-t border-border pt-6">
        <div className="flex flex-wrap items-center gap-2">
          {formUrl && (
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-brand-foreground shadow transition-all hover:opacity-90"
            >
              Apply <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          <Link
            href={href}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
          >
            Explore <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
          {structureHref && (
            <Link
              href={structureHref}
              className="inline-flex items-center justify-center rounded-md border border-border/80 bg-muted/30 px-3 py-2 text-center font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              View Structure ↓
            </Link>
          )}
          {feeHref && (
            <Link
              href={feeHref}
              className="inline-flex items-center justify-center rounded-md border border-border/80 bg-muted/30 px-3 py-2 text-center font-semibold text-brand transition-colors hover:bg-brand/10 hover:border-brand/40"
            >
              Fee Structure ↓
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
