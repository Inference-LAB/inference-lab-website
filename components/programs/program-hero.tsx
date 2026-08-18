import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

export function ProgramHero({
  label,
  title,
  tagline,
  description,
  formUrl,
  metadata,
  secondaryAnchor = '#program-structure',
  secondaryText = 'View Program Structure ↓',
}: {
  label: string
  title: string
  tagline: string
  description: string
  formUrl: string
  metadata: Record<string, string>
  secondaryAnchor?: string
  secondaryText?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <Link
          href="/curriculum"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
          All Programs
        </Link>

        <div className="mt-8">
          <SectionLabel>{label}</SectionLabel>
        </div>

        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {tagline || title}
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>

        {/* Metadata Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          {Object.entries(metadata).map(([key, val]) => (
            <span
              key={key}
              className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm"
            >
              {val}
            </span>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-7 py-3 font-mono text-xs font-bold uppercase tracking-wider text-brand-foreground shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
          >
            Apply to {title.includes('AI Builder') ? 'AI Builder' : 'Program'} <ExternalLink className="h-4 w-4" />
          </a>

          {secondaryAnchor && (
            <a
              href={secondaryAnchor}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {secondaryText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
