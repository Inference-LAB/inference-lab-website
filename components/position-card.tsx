import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type Position, statusConfig } from '@/lib/positions'

interface PositionCardProps {
  position: Position
  variant?: 'default' | 'compact'
}

export function PositionCard({ position, variant = 'default' }: PositionCardProps) {
  const badge = statusConfig[position.status]
  const hideActions = position.status === 'closed' || position.status === 'soon'
  if (variant === 'compact') {
    return (
      <div className="flex flex-col bg-background p-6 transition-colors hover:bg-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold tracking-tight">
              {position.title}
            </h3>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">
              {position.type}
            </p>
          </div>
          <span
            className={cn(
              'shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest',
              badge.className,
            )}
          >
            {badge.label}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {position.summary}
        </p>
        {!hideActions && ( 
        <div className="mt-4 flex items-center gap-3">
         
          {position.applicationsOpen && (
            <a
              href={position.applyHref}
              target={position.applyHref.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-brand transition-opacity hover:opacity-80"
            >
              Apply
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col rounded-lg border border-border bg-background p-6 sm:p-8 transition-colors hover:border-border/80 hover:bg-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{position.title}</h3>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{position.type}</p>
        </div>
        <span
          className={cn(
            'rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest',
            badge.className,
          )}
        >
          {badge.label}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {position.summary}
      </p>

      <ul className="mt-5 space-y-1.5">
        {position.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            {h}
          </li>
        ))}
      </ul>
      {!hideActions && (
      <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
      
        {position.applicationsOpen && (
          <a
            href={position.applyHref}
            target={position.applyHref.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-md bg-brand px-4 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
          >
            Apply now
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
      )}
    </div>
  )
}
