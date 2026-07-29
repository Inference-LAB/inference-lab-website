import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, GraduationCap } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { phases } from '@/lib/content'
import { siteConfig } from '@/lib/site'
export const metadata: Metadata = {
  title: 'Engineering Curriculum',
  description:
    'The INFERENCE Lab engineering curriculum — 6 phases, 12.5 months. From Python foundations to production MLOps. Deployment-focused AI engineering education by Muhammad Khubaib Ahmad.',
  alternates: { canonical: 'https://www.inference-lab.org/curriculum' },
  openGraph: {
    title: 'Engineering Curriculum · INFERENCE Lab',
    description:
      'Six-phase, 12.5-month curriculum producing deployment-ready AI engineers. Each phase ends with a capstone you can show in a job interview.',
    url: 'https://www.inference-lab.org/curriculum',
  },
}

const sessionFormat = [
  { time: '0:00–0:10', label: 'Recap + last week’s assignment review' },
  { time: '0:10–0:55', label: 'Core concept teaching with live coding' },
  { time: '0:55–1:10', label: 'Guided exercise — code alongside the mentor' },
  { time: '1:10–1:30', label: 'Assignment briefing + Q&A' },
]

export default function CurriculumPage() {
  const totalFee = phases.reduce((sum:number, phase) => sum + phase.totalFee, 0)
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back home
            </Link>
            <div className="mt-6 sm:mt-8">
              <SectionLabel>Engineering education</SectionLabel>
            </div>
            <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:mt-5 sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              Developing deployment-ready Applied AI Engineers.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base lg:text-lg">
              A complete, deployment-focused curriculum across 6 phases. <br className="hidden sm:block" />
              Every concept is taught through live coding, every week ends with a
              GitHub submission, and every phase ends with a capstone that proves 
              you can build the real thing. 
             <br className="hidden sm:block" />
              This is a paid, limited-capacity mentorship engagement — fee details 
              are shared directly during the application conversation.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:px-3.5 sm:py-2 sm:text-xs">
                <Clock className="h-3.5 w-3.5 text-brand sm:h-4 sm:w-4" /> 12.5 months
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:px-3.5 sm:py-2 sm:text-xs">
                <GraduationCap className="h-3.5 w-3.5 text-brand sm:h-4 sm:w-4" /> 6 phases
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:px-3.5 sm:py-2 sm:text-xs">
                <Calendar className="h-3.5 w-3.5 text-brand sm:h-4 sm:w-4" /> Sat + Sun live · 1.5h
              </span>
            </div>
          </div>
        </section>

        {/* Session format */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <SectionLabel>Every week, without exception</SectionLabel>
                <h2 className="mt-4 text-balance text-xl font-semibold leading-tight tracking-tight sm:mt-5 sm:text-2xl lg:text-3xl">
                  The session structure.
                </h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
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
                    className="flex flex-col gap-1 bg-background p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5"
                  >
                    <span className="shrink-0 font-mono text-xs font-semibold text-brand sm:w-24 sm:text-sm">
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
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
              {phases.map((phase) => (
                <article
                  key={phase.id}
                  id={phase.id}
                  className="scroll-mt-24 border-t border-border pt-8 first:border-t-0 first:pt-0 sm:pt-10"
                >
                  <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div className="lg:sticky lg:top-24 lg:self-start">
                      <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                        <span className="font-mono text-xs uppercase tracking-widest text-brand sm:text-sm">
                          {phase.index}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {phase.duration}
                        </span>
                      </div>
                      <h2 className="mt-3 text-balance text-xl font-semibold leading-tight tracking-tight sm:mt-4 sm:text-2xl lg:text-3xl">
                        {phase.title}
                      </h2>
                      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                        {phase.blurb}
                      </p>
                      <div className="mt-5 rounded-lg border border-brand/30 bg-brand/5 p-4 sm:mt-6">
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
                          className="flex items-start gap-3 bg-background p-4 sm:gap-4 sm:p-5"
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

        {/* Investment */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

              <div className="lg:sticky lg:top-24 lg:self-start">
                <SectionLabel>Program investment</SectionLabel>
                <h2 className="mt-4 text-balance text-xl font-semibold leading-tight tracking-tight sm:mt-5 sm:text-2xl lg:text-3xl">
                  Pay as you progress.
                </h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                  Each phase is billed independently — you commit one phase at a
                  time, not the full 12.5 months upfront. Fees are set per phase
                  based on depth, tooling, and mentorship intensity. Continuation
                  into the next phase is confirmed after capstone review.
                </p>
                <p className="mt-3 text-pretty text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm">
                  All fees are in PKR. Payment plans are available — discussed
                  during the application conversation.
                </p>
              </div>

              <div className="overflow-hidden rounded-lg border border-border">
                {/* ---- Mobile: stacked cards (below sm) ---- */}
                <ol className="grid gap-px bg-border sm:hidden">
                  {phases.map((phase) => (
                    <li key={phase.id} className="flex flex-col gap-3 bg-background p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-baseline gap-2">
                          <span className="shrink-0 font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                            {phase.index}
                          </span>
                        </div>
                        <span className="shrink-0 font-mono text-[11px] text-muted-foreground whitespace-nowrap">
                          {phase.duration}
                        </span>
                      </div>
                      <span className="text-sm leading-snug text-foreground/90">
                        {phase.title}
                      </span>
                      <div className="flex items-center justify-between border-t border-border pt-3">
                        <span className="font-mono text-xs text-muted-foreground">
                          PKR {phase.feePerMonth.toLocaleString()}/mo
                        </span>
                        <span className="font-mono text-sm font-semibold text-foreground">
                          PKR {phase.totalFee.toLocaleString()}
                        </span>
                      </div>
                    </li>
                  ))}

                  {/* Total row */}
                  <li className="flex items-center justify-between bg-card/40 p-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Full program
                    </span>
                    <span className="font-mono text-sm font-semibold text-brand whitespace-nowrap">
                      PKR {totalFee.toLocaleString()}
                    </span>
                  </li>
                </ol>

                {/* ---- sm and up: table layout ---- */}
                <div className="hidden sm:block">
                  {/* Table header */}
                  <div className="grid grid-cols-[1fr_auto_auto_auto] gap-px bg-border">
                    <div className="bg-card/60 px-3 py-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:px-4 sm:text-xs">
                      Phases
                    </div>
                    <div className="bg-card/60 px-3 py-3 text-right font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:px-4 sm:text-xs">
                      Duration
                    </div>
                    <div className="hidden bg-card/60 px-4 py-3 text-right font-mono text-xs uppercase tracking-widest text-muted-foreground md:block">
                      Fee/Month
                    </div>
                    <div className="bg-card/60 px-3 py-3 text-right font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:px-4 sm:text-xs">
                      Total Fee
                    </div>
                  </div>

                  {/* Rows */}
                  <ol className="grid gap-px bg-border">
                    {phases.map((phase) => (
                      <li
                        key={phase.id}
                        className="grid grid-cols-[1fr_auto_auto_auto] gap-px bg-background"
                      >
                        <div className="flex items-center gap-2 px-3 py-3 sm:gap-3 sm:px-4 sm:py-4">
                          <span className="shrink-0 font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                            {phase.index}
                          </span>
                          <span className="text-sm leading-snug text-foreground/90">
                            {phase.title}
                          </span>
                        </div>
                        <div className="flex items-center justify-end px-3 py-3 sm:px-4 sm:py-4">
                          <span className="whitespace-nowrap font-mono text-xs text-muted-foreground">
                            {phase.duration}
                          </span>
                        </div>
                        <div className="hidden items-center justify-end px-4 py-4 md:flex">
                          <span className="whitespace-nowrap font-mono text-sm text-foreground/80">
                            PKR {phase.feePerMonth.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-end px-3 py-3 sm:px-4 sm:py-4">
                          <span className="whitespace-nowrap font-mono text-sm font-semibold text-foreground">
                            PKR {phase.totalFee.toLocaleString()}
                          </span>
                        </div>
                      </li>
                    ))}

                    {/* Total row */}
                    <li className="grid grid-cols-[1fr_auto_auto_auto] bg-card/40">
                      <div className="px-3 py-3 sm:px-4 sm:py-4">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                          Full program
                        </span>
                      </div>
                      <div className="px-3 py-3 sm:px-4 sm:py-4" />
                      <div className="hidden px-4 py-4 md:block" />
                      <div className="flex items-center justify-end px-3 py-3 sm:px-4 sm:py-4">
                        <span className="whitespace-nowrap font-mono text-sm font-semibold text-brand">
                          PKR {totalFee.toLocaleString()}
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="max-w-2xl text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Ready to build, deploy, and maintain real AI systems?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                The first online cohort is live. Join the next intake or apply
                for the Engineering Fellowship.
              </p>
              <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Get in touch
                </Link>
                <a
                  href="https://forms.gle/YQ1kiyvqYiu8TAho9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-card sm:w-auto"
                >
                  Apply now
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