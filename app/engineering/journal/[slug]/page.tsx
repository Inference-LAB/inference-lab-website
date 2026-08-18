import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, BookOpen, Clock, Calendar, ExternalLink, User, ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { getJournalBySlug, getJournals, getPeople } from '@/lib/data-store'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const journal = await getJournalBySlug(slug)
  if (!journal) return { title: 'Journal Not Found' }

  const url = `https://www.inference-lab.org/engineering/journal/${slug}`
  const title = `${journal.journalTitle} · Engineering Journal`
  const description = journal.summary || `Technical report on ${journal.projectName} at INFERENCE Lab.`

  return {
    title,
    description,
    keywords: [
      journal.projectName,
      journal.programBadge,
      'Engineering Journal',
      'INFERENCE Lab',
      'AI Engineering',
      ...(journal.contributors || []).map((c) => c.name),
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${journal.journalTitle} · INFERENCE Lab`,
      description,
      url,
      type: 'article',
      siteName: 'INFERENCE Lab',
      authors: (journal.contributors || []).map((c) => c.name),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${journal.journalTitle} · INFERENCE Lab`,
      description,
    },
  }
}

export default async function EngineeringJournalDetailPage({ params }: Props) {
  const { slug } = await params
  const [journal, allJournals, people] = await Promise.all([
    getJournalBySlug(slug),
    getJournals(),
    getPeople(),
  ])
  if (!journal) notFound()

  const relatedJournals = allJournals.filter((j) => j.slug !== slug).slice(0, 2)

  // Map for fast person lookup
  const personByName: Record<string, any> = {}
  people.forEach((p) => {
    personByName[p.name.toLowerCase().trim()] = p
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: journal.journalTitle,
    description: journal.summary,
    url: `https://www.inference-lab.org/engineering/journal/${slug}`,
    proficiencyLevel: 'Expert',
    author: (journal.contributors || []).map((c) => ({
      '@type': 'Person',
      name: c.name,
      jobTitle: c.role,
    })),
    publisher: {
      '@type': 'Organization',
      name: 'INFERENCE Lab',
      url: 'https://www.inference-lab.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.inference-lab.org/inference-lab-logo.png',
      },
    },
    about: {
      '@type': 'SoftwareSourceCode',
      name: journal.projectName,
      codeRepository: journal.githubUrl,
    },
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SiteHeader />
      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
            <Link
              href="/engineering/journal"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back to Engineering Journals
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-brand">
                {journal.programBadge}
              </span>
              <span className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {journal.cohortBadge}
              </span>
            </div>

            <span className="mt-4 block font-mono text-sm font-bold uppercase tracking-widest text-brand">
              {journal.projectName}
            </span>

            <h1 className="mt-2 text-balance font-sans text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {journal.journalTitle}
            </h1>

            <MarkdownRenderer 
              content={journal.summary} 
              className="mt-6 text-lg text-muted-foreground [&>p]:leading-relaxed [&>p:first-child]:mt-0 [&>p:last-child]:mb-0" 
            />

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-brand" /> Published: {journal.publishedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand" /> {journal.readingTime}
              </span>
            </div>
          </div>
        </section>

        {/* Content & Contributor Sidebar */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Lab Note Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-2 border-b border-border pb-4 mb-6">
                  <BookOpen className="h-5 w-5 text-brand" />
                  <h2 className="font-mono text-sm font-bold uppercase tracking-wider">
                    Lab Note & Technical Documentation
                  </h2>
                </div>

                <MarkdownRenderer content={journal.labNote} />
              </div>

              {/* Related Repository Links */}
              {journal.repositoryLinks && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Project Repositories & Artifacts
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {journal.repositoryLinks.github && (
                      <a
                        href={journal.repositoryLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand-foreground hover:opacity-90"
                      >
                        <GithubIcon className="h-4 w-4" /> GitHub Repository
                      </a>
                    )}
                    {journal.repositoryLinks.pypi && (
                      <a
                        href={journal.repositoryLinks.pypi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-muted"
                      >
                        <ExternalLink className="h-4 w-4" /> PyPI Package
                      </a>
                    )}
                    {journal.repositoryLinks.docs && (
                      <a
                        href={journal.repositoryLinks.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-muted"
                      >
                        <ExternalLink className="h-4 w-4" /> Documentation
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar: Contributors & Tech Tags */}
            <div className="space-y-6">
              {/* Contributor Cards */}
              <div className="rounded-xl border border-border bg-card p-6">
                <SectionLabel>Contributors</SectionLabel>
                <div className="mt-4 space-y-4">
                  {(Array.isArray(journal.contributors) ? journal.contributors : []).map((c) => {
                    const matchedPerson = personByName[c.name.toLowerCase().trim()]
                    const photo = c.photo || matchedPerson?.photo
                    const github = c.github || matchedPerson?.github
                    const linkedin = c.linkedin || matchedPerson?.linkedin
                    const profileSlug = matchedPerson?.slug

                    return (
                      <div key={c.name} className="rounded-lg border border-border bg-background p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          {photo ? (
                            <img
                              src={photo}
                              alt={c.name}
                              className="h-11 w-11 shrink-0 rounded-full object-cover border border-border"
                            />
                          ) : (
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 font-mono text-sm font-bold text-brand">
                              {c.name[0]}
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            {profileSlug ? (
                              <Link
                                href={`/people/${profileSlug}`}
                                className="font-semibold text-sm text-foreground hover:text-brand transition-colors block truncate"
                              >
                                {c.name}
                              </Link>
                            ) : (
                              <h4 className="font-semibold text-sm text-foreground truncate">{c.name}</h4>
                            )}
                            <p className="text-xs text-muted-foreground truncate">{c.role}</p>
                          </div>
                        </div>

                        {(github || linkedin || profileSlug) && (
                          <div className="mt-3 flex flex-wrap gap-2 border-t border-border pt-3">
                            {github && (
                              <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1"
                              >
                                <GithubIcon className="h-3 w-3" /> GitHub
                              </a>
                            )}
                            {linkedin && (
                              <a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1"
                              >
                                <ExternalLink className="h-3 w-3" /> LinkedIn
                              </a>
                            )}
                            {profileSlug && (
                              <Link
                                href={`/people/${profileSlug}`}
                                className="font-mono text-[11px] text-brand hover:underline flex items-center gap-1 ml-auto"
                              >
                                View Profile →
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Technology Tags */}
              <div className="rounded-xl border border-border bg-card p-6">
                <SectionLabel>Technologies</SectionLabel>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(Array.isArray(journal.tags) ? journal.tags : []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border bg-background px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Journals Section */}
          {relatedJournals.length > 0 && (
            <div className="mt-16 border-t border-border pt-12">
              <SectionLabel>Related Engineering Journals</SectionLabel>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {relatedJournals.map((rj) => (
                  <Link
                    key={rj.slug}
                    href={`/engineering/journal/${rj.slug}`}
                    className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
                  >
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                      {rj.projectName}
                    </span>
                    <h3 className="mt-1 font-semibold text-foreground group-hover:text-brand transition-colors">
                      {rj.journalTitle}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{rj.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-brand font-semibold">
                      Read Report <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
