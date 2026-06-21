import { SectionLabel } from '@/components/section-label'

const principles = [
  {
    k: 'Engineering discipline over hype',
    v: 'Real, deployed output — not demos that break the moment they leave a notebook.',
  },
  {
    k: 'Evidence over branding',
    v: 'Reproducible pipelines, proper evaluation, and a permanent DOI on every research release.',
  },
  {
    k: 'Output over certificates',
    v: 'You leave with systems on GitHub and models on HuggingFace, not a PDF.',
  },
]

export function Mission() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionLabel>What we are</SectionLabel>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              One organization, three reinforcing tracks.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Inference Lab is an applied AI research and engineering
              organization founded by Muhammad Khubaib Ahmad. It operates as
              original research, AI/software engineering services, and
              structured engineering education — under one identity, each track
              reinforcing the others&apos; credibility.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-balance text-xl font-medium leading-snug sm:text-2xl">
              Our aim: close the gap between people who{' '}
              <span className="text-muted-foreground">know AI concepts</span>{' '}
              and engineers who can{' '}
              <span className="text-brand">build, deploy and maintain</span> AI
              systems.
            </p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
              {principles.map((p) => (
                <div
                  key={p.k}
                  className="grid gap-1 bg-background p-5 sm:grid-cols-[1fr_1.4fr] sm:gap-6"
                >
                  <h3 className="font-mono text-sm font-semibold tracking-tight text-foreground">
                    {p.k}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
