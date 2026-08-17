import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, BookOpen, Code, Award, User, ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { getPersonBySlug, getJournals } from '@/lib/data-store'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const person = await getPersonBySlug(slug)
  if (!person) return { title: 'Profile Not Found' }

  const url = `https://www.inference-lab.org/people/${slug}`
  const title = `${person.name} · ${person.rank || person.roles[0] || 'Team'}`
  const description = person.bio || `${person.name} is a member of the INFERENCE Lab team.`

  return {
    title,
    description,
    keywords: [
      person.name,
      person.rank || '',
      ...person.roles,
      ...(person.expertise || []),
      'INFERENCE Lab',
    ].filter(Boolean),
    alternates: { canonical: url },
    openGraph: {
      title: `${person.name} · INFERENCE Lab`,
      description,
      url,
      type: 'profile',
      siteName: 'INFERENCE Lab',
      images: person.photo ? [{ url: person.photo, alt: person.name }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${person.name} · INFERENCE Lab`,
      description,
    },
  }
}

export default async function IndividualProfilePage({ params }: Props) {
  const { slug } = await params
  const person = await getPersonBySlug(slug)
  if (!person) notFound()

  const allJournals = await getJournals()
  // Match journals where contributor name contains person's name
  const personJournals = allJournals.filter((j) =>
    (j.contributors || []).some((c) => c.name.toLowerCase() === person.name.toLowerCase()),
  )

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.rank || person.roles[0],
    worksFor: {
      '@type': 'Organization',
      name: 'INFERENCE Lab',
      url: 'https://www.inference-lab.org',
    },
    url: `https://www.inference-lab.org/people/${slug}`,
    image: person.photo || undefined,
    description: person.bio,
    knowsAbout: person.expertise,
    sameAs: [person.github, person.linkedin].filter(Boolean),
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <SiteHeader />
      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
            <Link
              href="/about/people"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              People &amp; Cohorts
            </Link>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-28 w-28 shrink-0 rounded-2xl object-cover border border-border shadow-lg"
                />
              ) : (
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-brand/10 font-mono text-4xl font-bold text-brand shadow-lg">
                  {person.name[0]}
                </div>
              )}

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  {person.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-brand"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {person.name}
                </h1>

                <div className="flex flex-wrap gap-4 pt-1 font-mono text-xs">
                  {person.github && (
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-muted-foreground hover:text-foreground"
                    >
                      <GithubIcon className="h-4 w-4" /> GitHub
                    </a>
                  )}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Content */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
          {/* Biography & Expertise */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 rounded-xl border border-border bg-card p-6 sm:p-8">
              <SectionLabel>Biography</SectionLabel>
              <p className="mt-4 text-base leading-relaxed text-foreground">
                {person.bio}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <SectionLabel>Areas of Expertise</SectionLabel>
              <div className="mt-4 flex flex-wrap gap-2">
                {person.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="rounded-md border border-border bg-background px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Published Engineering Journals */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-2 border-b border-border pb-4 mb-6">
              <BookOpen className="h-5 w-5 text-brand" />
              <h2 className="font-mono text-sm font-bold uppercase tracking-wider">
                Engineering Journals &amp; Technical Reports ({personJournals.length})
              </h2>
            </div>

            {personJournals.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {personJournals.map((j) => (
                  <Link
                    key={j.slug}
                    href={`/engineering/journal/${j.slug}`}
                    className="group rounded-xl border border-border bg-background p-5 transition-colors hover:border-brand/40"
                  >
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                      {j.projectName}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-foreground group-hover:text-brand transition-colors">
                      {j.journalTitle}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{j.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-brand">
                      Read Journal <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No published Engineering Journals linked yet for this profile.
              </p>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
