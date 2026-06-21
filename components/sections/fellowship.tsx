import { SectionLabel } from '@/components/section-label'
import { fellowshipProjects } from '@/lib/content'

export function Fellowship() {
  return (
    <section id="fellowship" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionLabel>Engineering Fellowship</SectionLabel>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Contribute to real, shipped work.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Beyond the cohort, the Fellowship is hands-on, project-based
              contribution to the lab&apos;s open-source surface. The first
              Fellowship runs across three active projects — you write code that
              real users depend on.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-brand/40 bg-brand/5 px-3.5 py-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand">
                First cohort live · Python Engineering phase
              </span>
            </div>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
            {fellowshipProjects.map((project, i) => (
              <li
                key={project.name}
                className="flex items-start gap-5 bg-background p-6"
              >
                <span className="font-mono text-2xl font-semibold tabular-nums text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
