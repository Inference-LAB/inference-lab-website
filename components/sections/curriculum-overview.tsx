import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { phases } from '@/lib/content'

export function CurriculumOverview() {
  return (
    <section id="education" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Engineering education</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              From Python syntax to deployed AI systems.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              A structured, deployment-focused curriculum across 6 phases and
              12.5 months. Every 1.5-hour session is live coding — Saturday
              introduces the concept, Sunday goes deeper into edge cases, and
              assignments ship to GitHub by Friday.
            </p>
          </div>
          <Link
            href="/curriculum"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest transition-colors hover:border-foreground/30 hover:bg-card"
          >
            Full curriculum
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase) => (
            <li
              key={phase.id}
              className="group relative flex flex-col bg-background p-7 transition-colors hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-brand">
                  {phase.index}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {phase.duration}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {phase.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {phase.blurb}
              </p>
              <p className="mt-5 border-t border-border pt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {phase.weeks.length} weeks
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
