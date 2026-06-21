import { Terminal } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { software } from '@/lib/content'

export function SoftwareSection() {
  return (
    <section id="engineering" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Software & systems released</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Open source, deployed, and used by researchers.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Libraries, APIs and platforms spanning speech AI, LLM
            observability, RAG, agents and MLOps infrastructure.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {software.map((s) => (
            <article
              key={s.name}
              className="group flex flex-col bg-background p-6 transition-colors hover:bg-card"
            >
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Terminal className="h-4 w-4 text-brand" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  {s.category}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {s.name}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
