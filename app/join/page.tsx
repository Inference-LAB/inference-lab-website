import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { PositionCard } from '@/components/position-card'
import { positions } from '@/lib/positions'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Join the Lab',
  description:
    'Join INFERENCE Lab — Engineering Fellowship, Research Internship, Volunteer Contributor, and Industry Collaboration. Work on real AI systems with researchers and engineers.',
  alternates: { canonical: 'https://inference-lab.dev/join' },
  openGraph: {
    title: 'Join the Lab · INFERENCE Lab',
    description: 'Join INFERENCE Lab — Engineering Fellowship, Research Internship, Volunteer Contributor, and Industry Collaboration. Work on real AI systems with researchers and engineers.',
    url: 'https://inference-lab.dev/join',
  },
}

const whyJoin = [
  {
    title: 'Real systems, not toy projects',
    body: 'Every fellowship and internship involves code that ships — libraries that real researchers install, APIs that serve real traffic, research that gets published.',
  },
  {
    title: 'Research you can put your name on',
    body: 'Contributors to research work receive attribution. We publish with permanent DOIs and open-source every artefact — your work is verifiable by anyone.',
  },
  {
    title: 'Mentorship that goes both ways',
    body: "You get direct access to the lab founder — not a mentor who reviews your PRs once a week. You're expected to push back, ask hard questions, and own your work.",
  },
  {
    title: 'Portfolio that speaks for itself',
    body: 'GitHub history, published models on HuggingFace, co-authored papers. Not a certificate. The kind of proof that holds up to a technical interview.',
  },
]

const process = [
  { step: '01', title: 'Submit application', body: 'Fill the application form — takes about 10 minutes. Tell us what you want to build.' },
  { step: '02', title: 'Screening review', body: "We read every application. If there's a fit, we reach out within a week." },
  { step: '03', title: 'Technical assessment', body: 'A short, relevant task — not a LeetCode gauntlet. We want to see how you think, not how you memorize.' },
  { step: '04', title: 'Interview', body: 'A conversation with the lab founder about your interests, goals, and the work you want to do.' },
  { step: '05', title: 'Selection', body: "If it's a fit, we agree on scope, timeline, and start date. No trailing paperwork." },
]

export default function JoinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back home
            </Link>
            <div className="mt-8">
              <SectionLabel>Join INFERENCE Lab</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Work on real AI systems, research, and open-source.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              We&apos;re building AI systems, conducting research, and training
              the next generation of AI engineers. Every position involves
              shipped work — not busy-work.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {positions.filter(p => p.status === 'open').length} position currently open
              </span>
            </div>
          </div>
        </section>

        {/* Current Opportunities */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Current opportunities</SectionLabel>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {positions.map((position) => (
                <PositionCard key={position.id} position={position} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Why join?</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              The lab is built on the same standard as its research.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {whyJoin.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-background p-6">
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Application process</SectionLabel>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Five steps, no surprises.
            </h2>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-5">
              {process.map((p) => (
                <li key={p.step} className="flex flex-col bg-background p-6">
                  <span className="font-mono text-2xl font-semibold tabular-nums text-brand">
                    {p.step}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            <div className="relative flex flex-col items-center text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">
                Ready to apply?
              </span>
              <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                Start with the Engineering Fellowship.
              </h2>
              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                The fellowship is the best entry point — real projects, real
                mentorship, real impact. Applications are currently open.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/join/engineering-fellowship"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
                >
                  Engineering Fellowship
                </Link>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest transition-colors hover:border-foreground/30 hover:bg-card"
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
