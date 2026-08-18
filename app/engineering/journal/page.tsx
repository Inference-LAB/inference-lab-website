import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { getJournals } from '@/lib/data-store'

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Engineering Journal',
  description:
    'Technical reports documenting how engineering projects at INFERENCE Lab were designed, implemented, benchmarked, and deployed by Engineering Fellows.',
  alternates: { canonical: 'https://www.inference-lab.org/engineering/journal' },
  openGraph: {
    title: 'Engineering Journal · INFERENCE Lab',
    description:
      'Technical reports documenting how engineering projects at INFERENCE Lab were designed, implemented, benchmarked, and deployed by Engineering Fellows.',
    url: 'https://www.inference-lab.org/engineering/journal',
  },
}

export default async function EngineeringJournalListingPage() {
  const journals = await getJournals()

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
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
              <SectionLabel>Technical Publications</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Engineering Journal
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Detailed Lab Notes and engineering reports documenting how our projects are designed,
              architected, benchmarked, and deployed. Built by Engineering Fellows and lab contributors.
            </p>
          </div>
        </section>

        {/* Listing Grid */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            {journals.map((j) => (
              <article
                key={j.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg"
              >
                {/* Content Details */}
                <div className="flex flex-1 flex-col">
                  {/* Badges & Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-brand">
                        {j.programBadge}
                      </span>
                      <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {j.cohortBadge}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {j.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {j.readingTime}
                      </span>
                    </div>
                  </div>

                  {/* Titles & Summary */}
                  <div className="mt-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                      {j.projectName}
                    </span>
                    <h2 className="mt-1 text-xl font-semibold leading-tight tracking-tight text-foreground group-hover:text-brand transition-colors">
                      {j.journalTitle}
                    </h2>
                    <MarkdownRenderer 
                      content={j.summary} 
                      className="mt-3 text-sm text-muted-foreground [&>p]:leading-relaxed [&>p:first-child]:mt-0 [&>p:last-child]:mb-0" 
                    />
                  </div>

                  {/* Contributors */}
                  <div className="mt-6 border-t border-border pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Contributors
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(Array.isArray(j.contributors) ? j.contributors : []).map((c) => (
                        <div
                          key={c.name}
                          className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs shadow-sm"
                        >
                          <span className="font-medium text-foreground">{c.name}</span>
                          <span className="text-[10px] text-muted-foreground">({c.role})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {(Array.isArray(j.tags) ? j.tags : []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Button CTA */}
                  <div className="mt-6 border-t border-border pt-5">
                    <Link
                      href={`/engineering/journal/${j.slug}`}
                      className="group/btn inline-flex w-full items-center justify-between rounded-md bg-brand/10 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
                    >
                      <span>Read Report</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
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
