import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Terminal } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { software } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Engineering Projects',
  description:
    'Open-source software and systems released by INFERENCE Lab — auralis-vfs, VocalID, faker-pk, QueryVault, DataForge and more. pip-installable and production-deployed.',
  alternates: { canonical: 'https://inference-lab.dev/engineering/projects' },
  openGraph: {
    title: 'Engineering Projects · INFERENCE Lab',
    description: 'Open-source software and systems released by INFERENCE Lab — auralis-vfs, VocalID, faker-pk, QueryVault, DataForge and more. pip-installable and production-deployed.',
    url: 'https://inference-lab.dev/engineering/projects',
  },
}

export default function EngineeringProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/engineering"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Engineering
            </Link>
            <div className="mt-8">
              <SectionLabel>Engineering projects</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Open source, deployed, and used by researchers.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Libraries, APIs, and platforms spanning speech AI, LLM
              observability, RAG, agents, and developer tooling — all open and
              pip-installable where applicable.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mt-4 font-mono text-lg font-semibold tracking-tight">
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
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
