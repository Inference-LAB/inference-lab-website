'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  DollarSign,
  ExternalLink,
  GraduationCap,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import type { EducationProgramItem } from '@/lib/data-store'
import { cn } from '@/lib/utils'

function ExpandableDescription({
  text,
  threshold = 130,
}: {
  text: string
  threshold?: number
}) {
  const [expanded, setExpanded] = useState(false)
  const isLong = (text || '').length > threshold

  return (
    <div>
      <div
        className={cn(
          'text-sm leading-relaxed text-muted-foreground transition-all sm:text-base',
          !expanded && isLong && 'line-clamp-2',
        )}
      >
        <MarkdownRenderer content={text} />
      </div>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 inline-flex items-center gap-1 font-mono text-xs font-semibold text-brand hover:underline"
        >
          {expanded ? 'Show Less ↑' : 'See Details ↓'}
        </button>
      )}
    </div>
  )
}

export default function ProgramsClient({
  dbPrograms,
}: {
  dbPrograms: EducationProgramItem[]
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back home
            </Link>

            <div className="mt-8">
              <SectionLabel>Education &amp; Mentorship</SectionLabel>
            </div>

            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Programs
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Structured, deployment-focused AI engineering programs offered by INFERENCE Lab.
              Explore our active curriculum tracks, download syllabi, and apply directly.
            </p>
          </div>
        </section>

        {/* Programs List Section (Directly from Admin) */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <SectionLabel>Active Syllabi</SectionLabel>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Available Programs ({dbPrograms.length})
                </h2>
              </div>
            </div>

            {dbPrograms.length > 0 ? (
              <div className="mt-12 space-y-8">
                {dbPrograms.map((prog, index) => {
                  const formUrl = prog.formUrl || 'https://forms.gle/YQ1kiyvqYiu8TAho9'
                  return (
                    <article
                      key={prog.id || index}
                      className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-foreground/30 sm:p-8 lg:p-10"
                    >
                      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                        {/* Poster Image (if uploaded in Admin) */}
                        {prog.poster && (
                          <div className="w-full shrink-0 lg:w-72">
                            <img
                              src={prog.poster}
                              alt={prog.name}
                              className="h-48 w-full rounded-xl border border-border object-cover shadow-sm sm:h-56 lg:h-48"
                            />
                          </div>
                        )}

                        {/* Program Content */}
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                              <Clock className="h-3.5 w-3.5" />
                              {prog.tenure || 'Duration on Request'}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-xs font-semibold text-green-600 dark:text-green-400">
                              <DollarSign className="h-3.5 w-3.5" />
                              {prog.totalCost || 'Fee on Request'}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            {prog.name}
                          </h3>

                          {/* Description with See Details toggle if > 2 lines */}
                          <div className="pt-1">
                            <ExpandableDescription
                              text={prog.description}
                              threshold={130}
                            />
                          </div>

                          {/* Action Button: Fill Form */}
                          <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
                            <a
                              href={formUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-brand-foreground shadow-md transition-all hover:opacity-90 hover:shadow-lg"
                            >
                              Fill Form <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* PROGRAM INVESTMENT & PHASES DETAILS TABLE */}
                      {prog.phases && prog.phases.length > 0 && (
                        <div className="mt-10 border-t border-border pt-8 lg:mt-12 lg:pt-10">
                          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                            {/* Left Description Column */}
                            <div className="lg:col-span-5 space-y-4">
                              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                <span className="h-px w-4 bg-muted-foreground" /> PROGRAM INVESTMENT
                              </div>
                              <h4 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                Pay as you progress.
                              </h4>
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                Each phase is billed independently — you commit one phase at a time,
                                not the full program upfront. Fees are set per phase based on depth, tooling,
                                and mentorship intensity. Continuation into the next phase is confirmed after capstone review.
                              </p>
                              <p className="text-xs leading-relaxed text-muted-foreground/80 font-mono">
                                All fees are in PKR. Payment plans are available — discussed during the application conversation.
                              </p>
                            </div>

                            {/* Right Phases Table */}
                            <div className="lg:col-span-7">
                              <div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
                                <div className="overflow-x-auto">
                                  <table className="w-full text-left">
                                    <thead>
                                      <tr className="border-b border-border bg-muted/60 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                                        <th className="py-3.5 pl-5 pr-4 font-semibold">Phases</th>
                                        <th className="py-3.5 px-4 font-semibold">Duration</th>
                                        <th className="py-3.5 px-4 font-semibold">Fee/Month</th>
                                        <th className="py-3.5 pl-4 pr-5 text-right font-semibold">Total Fee</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border font-mono text-xs">
                                      {prog.phases.map((ph, pIdx) => (
                                        <tr key={pIdx} className="transition-colors hover:bg-muted/30">
                                          <td className="py-3.5 pl-5 pr-4">
                                            <span className="font-bold uppercase text-foreground">
                                              {ph.phaseNumber}
                                            </span>
                                            <span className="ml-2 font-sans font-medium text-foreground">
                                              {ph.name}
                                            </span>
                                          </td>
                                          <td className="py-3.5 px-4 text-muted-foreground whitespace-nowrap">
                                            {ph.duration}
                                          </td>
                                          <td className="py-3.5 px-4 text-muted-foreground whitespace-nowrap">
                                            {ph.feePerMonth}
                                          </td>
                                          <td className="py-3.5 pl-4 pr-5 text-right font-bold text-foreground whitespace-nowrap">
                                            {ph.totalFee}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                    <tfoot>
                                      <tr className="border-t-2 border-border bg-muted/40 font-mono text-xs">
                                        <td colSpan={3} className="py-3.5 pl-5 pr-4 font-bold uppercase tracking-wider text-muted-foreground">
                                          Full Program
                                        </td>
                                        <td className="py-3.5 pl-4 pr-5 text-right font-bold text-foreground sm:text-sm">
                                          {prog.totalCost}
                                        </td>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="mt-12 rounded-2xl border border-dashed border-border bg-card/40 p-12 text-center">
                <GraduationCap className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  No Programs Listed
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Education programs will appear here once published from the Admin Panel.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 font-mono text-xs font-semibold uppercase text-brand-foreground hover:opacity-90"
                  >
                    Contact Us for Inquiries <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
