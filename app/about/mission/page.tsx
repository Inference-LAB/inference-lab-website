import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'

export const metadata: Metadata = {
  title: 'Our Mission',
  description:
    'INFERENCE Lab exists to close the gap between AI concepts and engineers who can actually build, deploy, and maintain AI systems. Engineering discipline over hype.',
  alternates: { canonical: 'https://inference-lab.dev/about/mission' },
  openGraph: {
    title: 'Our Mission · INFERENCE Lab',
    description: 'INFERENCE Lab exists to close the gap between AI concepts and engineers who can actually build, deploy, and maintain AI systems. Engineering discipline over hype.',
    url: 'https://inference-lab.dev/about/mission',
  },
}

const tracks = [
  {
    index: '01',
    title: 'Research',
    body: 'Original work in low-resource NLP and speech intelligence — conducted independently and through international academic collaboration. Every release ships reproducible pipelines and a permanent DOI.',
  },
  {
    index: '02',
    title: 'Engineering Services',
    body: 'AI/ML systems, LLM and RAG pipelines, computer vision, speech AI, and full-stack development for organisations that need working systems, not slide decks.',
  },
  {
    index: '03',
    title: 'Engineering Education',
    body: 'A structured, deployment-focused curriculum — 6 phases, 12.5 months — from Python fundamentals to deployed AI systems. Graduates leave with real projects on GitHub, not a certificate.',
  },
]

const principles = [
  {
    title: 'Engineering discipline over hype',
    body: 'Real, deployed output — not demos that break the moment they leave a notebook. Every project we release has to run, be testable, and be deployable by someone else.',
  },
  {
    title: 'Evidence over branding',
    body: 'Reproducible pipelines, proper evaluation documentation, and a permanent DOI on every research release. We do not publish for a leaderboard number.',
  },
  {
    title: 'Output over certificates',
    body: 'People who train with the lab leave with systems on GitHub and models on HuggingFace — things that can be verified by any technical interviewer or collaborator.',
  },
  {
    title: 'Three reinforcing tracks',
    body: 'Research credibility validates education quality. Education rigor validates engineering services. Engineering services fund and inform real-world research. Each track makes the others stronger.',
  },
]

export default function MissionPage() {
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
              <SectionLabel>Our Mission</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Close the gap between knowing AI and building with it.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Inference Lab exists to close the gap between people who know AI
              concepts and engineers who can actually build, deploy, and
              maintain AI systems — while producing research that is
              reproducible, publicly verifiable, and genuinely useful.
            </p>
          </div>
        </section>

        {/* Three tracks */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>What the lab does</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              One organization. Three reinforcing tracks.
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {tracks.map((t) => (
                <div key={t.index} className="flex flex-col bg-background p-6">
                  <span className="font-mono text-sm font-semibold text-brand">
                    {t.index}
                  </span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">
                    {t.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>What drives us</SectionLabel>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-lg border border-border bg-background p-6"
                >
                  <h3 className="font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
