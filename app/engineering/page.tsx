import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'

export const metadata: Metadata = {
  title: 'Engineering',
  description:
    'INFERENCE Lab engineering — open-source AI projects, production ML engineering services, and the philosophy behind how we build AI systems.',
  alternates: { canonical: 'https://inference-lab.dev/engineering' },
  openGraph: {
    title: 'Engineering · INFERENCE Lab',
    description: 'INFERENCE Lab engineering — open-source AI projects, production ML engineering services, and the philosophy behind how we build AI systems.',
    url: 'https://inference-lab.dev/engineering',
  },
}

const sections = [
  {
    href: '/engineering/projects',
    label: 'Engineering Projects',
    index: '01',
    summary:
      'Open-source libraries, deployed APIs, and production systems — auralis-vfs, VocalID, faker-pk, QueryVault, and more.',
  },
  {
    href: '/engineering/services',
    label: 'Services',
    index: '02',
    summary:
      'Speech AI, LLM and RAG systems, computer vision, NLP, MLOps, and full-stack AI product development for clients.',
  },
  {
    href: '/engineering/philosophy',
    label: 'Engineering Philosophy',
    index: '03',
    summary:
      'Production-first from day one, benchmarks not impressions, own the full lifecycle. Concrete principles, not a values statement.',
  },
]

export default function EngineeringPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Home
            </Link>
            <div className="mt-8">
              <SectionLabel>Engineering</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Systems that run, can be read, and can be maintained.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Open-source software, engineering services, and the philosophy
              behind how the lab builds AI systems.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col bg-background p-8 transition-colors hover:bg-card"
              >
                <span className="font-mono text-xs text-muted-foreground">{s.index}</span>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">{s.label}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-brand transition-opacity group-hover:opacity-80">
                  Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
