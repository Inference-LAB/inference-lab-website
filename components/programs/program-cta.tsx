import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export function ProgramCTA({
  heading,
  description,
  primaryBtnText,
  primaryBtnUrl,
  secondaryBtnText,
  secondaryBtnUrl,
  metadata,
}: {
  heading: string
  description: string
  primaryBtnText: string
  primaryBtnUrl: string
  secondaryBtnText?: string
  secondaryBtnUrl?: string
  metadata?: string[]
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-lg sm:p-12 lg:p-16">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-3xl space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>

        {metadata && metadata.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {metadata.map((item, idx) => (
              <span
                key={idx}
                className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={primaryBtnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-brand-foreground shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
          >
            {primaryBtnText} <ExternalLink className="h-4 w-4" />
          </a>

          {secondaryBtnText && secondaryBtnUrl && (
            <Link
              href={secondaryBtnUrl}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {secondaryBtnText} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
