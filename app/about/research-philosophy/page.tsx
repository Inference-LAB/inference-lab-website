import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'

export const metadata: Metadata = {
  title: 'Research Philosophy',
  description:
    'INFERENCE Lab research philosophy: reproducible by default, permanent DOIs, deployable inference code, and honest evaluation. No leaderboard chasing.',
  alternates: { canonical: 'https://inference-lab.dev/about/research-philosophy' },
  openGraph: {
    title: 'Research Philosophy · INFERENCE Lab',
    description: 'INFERENCE Lab research philosophy: reproducible by default, permanent DOIs, deployable inference code, and honest evaluation. No leaderboard chasing.',
    url: 'https://inference-lab.dev/about/research-philosophy',
  },
}

const pillars = [
  {
    index: '01',
    title: 'Reproducible by default',
    body: 'Every research release ships with a complete pipeline anyone can run. Not a table of numbers — actual code, data loading scripts, evaluation notebooks, and documented dependencies. If a reviewer cannot reproduce the result, it does not ship.',
  },
  {
    index: '02',
    title: 'Permanent, verifiable identity',
    body: 'Every release gets a permanent DOI — via Zenodo, Harvard Dataverse, or a journal. This is not optional ceremony. A DOI means the work is findable and citable long after a GitHub repo might move or a profile might disappear.',
  },
  {
    index: '03',
    title: 'Deployable inference code',
    body: 'Research papers describe models. Lab releases also ship production inference code — a pip-installable library, a REST API, or a HuggingFace Space. The test of a model is whether a downstream engineer can actually use it.',
  },
  {
    index: '04',
    title: 'Honest evaluation',
    body: 'We report the full evaluation breakdown — not just the headline number. If a model performs well on one class and poorly on another, that gets published. Macro-F1 alongside class-level scores. Confusion matrices. Ablation tables.',
  },
  {
    index: '05',
    title: 'No leaderboard chasing',
    body: "A 0.001 improvement on a benchmark is not a paper. Research earns its place by addressing a genuine gap — an underrepresented language, a clinical population that hasn't been studied, a tool that practitioners actually need.",
  },
  {
    index: '06',
    title: 'Open by default',
    body: 'Models on HuggingFace. Datasets on Harvard Dataverse. Code on GitHub. Papers on preprint servers with open DOIs. Not because it is fashionable, but because science that cannot be checked is not science.',
  },
]

const collaborations = [
  'King Saud University — Saudi Arabia',
  'Engineering and Petroleum University of Kuwait (EPU Kuwait)',
  'Doane University — USA',
  'Hanyang University — Republic of Korea',
  'Emerson University — Multan, Pakistan',
]

export default function ResearchPhilosophyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              About
            </Link>
            <div className="mt-8">
              <SectionLabel>Research Philosophy</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Research that can be checked, run, and used.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every principle below is a concrete commitment — not a values
              statement. Each one constrains what the lab ships and what it
              refuses to publish.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Six pillars</SectionLabel>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.index} className="flex flex-col bg-background p-6">
                  <span className="font-mono text-lg font-semibold text-brand">
                    {p.index}
                  </span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborations */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Academic collaborations</SectionLabel>
            <h2 className="mt-5 max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight">
              International, multi-institutional, and open.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Research at the lab is conducted independently and through formal
              collaboration with institutions across four countries. Every
              collaboration adheres to the same standards of reproducibility
              and open publication.
            </p>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {collaborations.map((c) => (
                <li key={c} className="bg-background px-6 py-4 font-mono text-sm text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
