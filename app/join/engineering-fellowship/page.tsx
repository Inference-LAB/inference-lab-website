import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Clock, Globe, Calendar } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { siteConfig } from '@/lib/site'
import { positions } from '@/lib/positions'

export const metadata: Metadata = {
  title: 'Engineering Fellowship',
  description:
    'The Inference Lab Engineering Fellowship — 6 months of real AI systems work, open-source contribution, and mentorship. Applications open.',
}

const fellowship = positions.find((p) => p.id === 'engineering-fellowship')!

const workOn = [
  { label: 'Agentic AI Systems',    body: 'Multi-agent orchestration pipelines using CrewAI, AutoGen, and n8n.' },
  { label: 'LLM Applications',      body: 'Production LLM integrations with hallucination detection and structured logging.' },
  { label: 'RAG Pipelines',         body: 'End-to-end retrieval-augmented generation with vector search (Pinecone, Qdrant).' },
  { label: 'Speech AI',             body: 'Vocal fatigue scoring, speaker verification, and audio embedding systems.' },
  { label: 'MLOps',                 body: 'Containerization, CI/CD, cloud deployment, and production monitoring.' },
  { label: 'Production Deployment', body: 'FastAPI, Docker, and GitHub Actions — real infrastructure, not toy servers.' },
]

const requirements = [
  { label: 'Python',                       body: 'Comfortable writing clean, well-structured Python.' },
  { label: 'ML fundamentals',              body: 'Understanding of core machine learning concepts and common architectures.' },
  { label: 'Git & GitHub',                 body: 'Branching, PRs, commit discipline — collaborative workflow.' },
  { label: 'Problem-solving mindset',      body: 'Able to debug independently and read documentation.' },
  { label: 'Strong learning orientation',  body: 'You want to get better, not just get through tasks.' },
]

const benefits = [
  { label: 'Mentorship',               body: 'Direct, weekly access to the lab founder — not a ticket queue.' },
  { label: 'Real projects',            body: 'Code that ships to real users: libraries on PyPI, APIs in production, papers under review.' },
  { label: 'Open-source credit',       body: 'Your name on contributions — GitHub history, model cards, library changelogs.' },
  { label: 'Research exposure',        body: 'Potential co-authorship on lab publications if your contribution reaches that level.' },
  { label: 'Certificate of completion','body': 'Issued at the end — but the GitHub history is the real proof.' },
]

const selectionProcess = [
  { step: '01', label: 'Apply', body: 'Submit the application form — 10 minutes, honest answers.' },
  { step: '02', label: 'Review', body: 'We read every application and reply within one week.' },
  { step: '03', label: 'Assessment', body: 'A short technical task relevant to actual lab work.' },
  { step: '04', label: 'Interview', body: 'A direct conversation with the lab founder about your goals and the work.' },
  { step: '05', label: 'Selection', body: 'Scope, timeline, and start date agreed. No trailing paperwork.' },
]

export default function EngineeringFellowshipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/join"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              All opportunities
            </Link>
            <div className="mt-8">
              <SectionLabel>Engineering Fellowship</SectionLabel>
            </div>

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Six months. Real projects. Real impact.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Work on AI systems that ship — agentic pipelines, LLM
              applications, speech AI, and production MLOps — alongside the
              lab&apos;s researchers and engineers.
            </p>

            {/* Meta pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Clock className="h-4 w-4 text-brand" /> 6 months
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Globe className="h-4 w-4 text-brand" /> Remote
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Calendar className="h-4 w-4 text-brand" /> Flexible commitment
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-brand">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
                Applications open
              </span>
            </div>

            <div className="mt-8">
              <a
                href={fellowship.applyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* What you'll work on */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>What you&apos;ll work on</SectionLabel>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {workOn.map((item) => (
                <div key={item.label} className="bg-background p-6 transition-colors hover:bg-card">
                  <h3 className="font-semibold tracking-tight">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements + Benefits side by side */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <SectionLabel>Requirements</SectionLabel>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We care more about how you think than how many frameworks
                  you know. The list below is a floor, not a ceiling.
                </p>
                <ul className="mt-8 space-y-4">
                  {requirements.map((r) => (
                    <li key={r.label} className="flex items-start gap-4 rounded-lg border border-border bg-background p-4">
                      <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                      <div>
                        <p className="text-sm font-semibold tracking-tight">{r.label}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{r.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionLabel>What you get</SectionLabel>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The things that actually matter when you need to prove
                  yourself to the next team.
                </p>
                <ul className="mt-8 space-y-4">
                  {benefits.map((b) => (
                    <li key={b.label} className="flex items-start gap-4 rounded-lg border border-border bg-background p-4">
                      <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                      <div>
                        <p className="text-sm font-semibold tracking-tight">{b.label}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selection process */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Selection process</SectionLabel>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight">
              Five steps, no surprises.
            </h2>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-5">
              {selectionProcess.map((p) => (
                <li key={p.step} className="flex flex-col bg-background p-6">
                  <span className="font-mono text-2xl font-semibold tabular-nums text-brand">
                    {p.step}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold tracking-tight">{p.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            <div className="relative flex flex-col items-center text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">
                Applications open
              </span>
              <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold sm:text-4xl">
                Apply now. We read every submission.
              </h2>
              <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                Takes about 10 minutes. Tell us what you want to build and
                why the lab is the right place to build it.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={fellowship.applyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
                >
                  Apply Now
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest transition-colors hover:border-foreground/30 hover:bg-card"
                >
                  Ask a question
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
