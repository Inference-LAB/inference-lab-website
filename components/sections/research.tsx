import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { publications } from '@/lib/content'
import { cn } from '@/lib/utils'

const statusStyles: Record<string, string> = {
  'Under Review': 'border-brand/40 text-brand',
  'Published Preprint': 'border-border text-foreground',
  'In Progress': 'border-border text-muted-foreground',
}

export function Research() {
  return (
    <section id="research" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Research output</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Low-resource NLP & speech intelligence.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Independent and international research — every release ships
            reproducible pipelines, evaluation documentation and a permanent
            DOI.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {publications.map((p) => (
            <li key={p.title} className="flex flex-col bg-background p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span
                  className={cn(
                    'rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest',
                    statusStyles[p.status],
                  )}
                >
                  {p.status}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {p.year}
                </span>
              </div>
              <h3 className="mt-4 text-balance text-base font-semibold leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.highlight}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {p.venue}
                </span>
                {p.doi && (
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-mono text-xs text-foreground transition-colors hover:text-brand"
                  >
                    DOI
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
