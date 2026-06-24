import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, GraduationCap } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { phases } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Engineering Curriculum',
  description:
    'The INFERENCE Lab engineering curriculum — 6 phases, 12.5 months. From Python foundations to production MLOps. Deployment-focused AI engineering education by Muhammad Khubaib Ahmad.',
  alternates: { canonical: 'https://inference-lab.dev/curriculum' },
  openGraph: {
    title: 'Engineering Curriculum · INFERENCE Lab',
    description:
      'Six-phase, 12.5-month curriculum producing deployment-ready AI engineers. Each phase ends with a capstone you can show in a job interview.',
    url: 'https://inference-lab.dev/curriculum',
  },
}

const sessionFormat = [
  { time: '0:00–0:10', label: 'Recap + last week’s assignment review' },
  { time: '0:10–0:55', label: 'Core concept teaching with live coding' },
  { time: '0:55–1:10', label: 'Guided exercise — code alongside the mentor' },
  { time: '1:10–1:30', label: 'Assignment briefing + Q&A' },
]

export default function CurriculumPage() {
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
              <SectionLabel>Engineering education</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Developing deployment-ready Applied AI Engineers.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              A complete, deployment-focused curriculum across 6 phases. Every
              concept is taught through live coding, every week ends with a
              GitHub submission, and every phase ends with a capstone that
              proves you can build the real thing.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Clock className="h-4 w-4 text-brand" /> 12.5 months
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-brand" /> 6 phases
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Calendar className="h-4 w-4 text-brand" /> Sat + Sun live · 1.5h
              </span>
            </div>
          </div>
        </section>

        {/* Session format */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <SectionLabel>Every week, without exception</SectionLabel>
                <h2 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  The session structure.
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Saturday introduces a new concept with a live coding
                  walkthrough. Sunday is a deeper dive into edge cases where you
                  attempt problems and we debug together. Monday–Friday is
                  self-paced assignment work, submitted on GitHub by Friday
                  night.
                </p>
              </div>
              <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
                {sessionFormat.map((s) => (
                  <li
                    key={s.time}
                    className="flex items-center gap-5 bg-background p-5"
                  >
                    <span className="w-24 shrink-0 font-mono text-sm font-semibold text-brand">
                      {s.time}
                    </span>
                    <span className="text-sm text-foreground/90">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Phases */}
        <section>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-12 lg:gap-16">
              {phases.map((phase) => (
                <article
                  key={phase.id}
                  id={phase.id}
                  className="scroll-mt-24 border-t border-border pt-10 first:border-t-0 first:pt-0"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div className="lg:sticky lg:top-24 lg:self-start">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-sm uppercase tracking-widest text-brand">
                          {phase.index}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {phase.duration}
                        </span>
                      </div>
                      <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                        {phase.title}
                      </h2>
                      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                        {phase.blurb}
                      </p>
                      <div className="mt-6 rounded-lg border border-brand/30 bg-brand/5 p-4">
                        <p className="font-mono text-xs uppercase tracking-widest text-brand">
                          Capstone
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                          {phase.capstone}
                        </p>
                      </div>
                    </div>

                    <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                      {phase.weeks.map((week, i) => (
                        <li
                          key={week}
                          className="flex items-start gap-4 bg-background p-5"
                        >
                          <span className="font-mono text-xs font-semibold tabular-nums text-muted-foreground">
                            W{String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm leading-snug text-foreground/90">
                            {week}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Ready to build, deploy, and maintain real AI systems?
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                The first online cohort is live. Join the next intake or apply
                for the Engineering Fellowship.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
