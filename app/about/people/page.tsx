import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, User, ExternalLink, ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { getPeople, getJournals } from '@/lib/data-store'

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'People · INFERENCE Lab',
  description:
    'The people behind INFERENCE Lab — leadership, core team, researchers, and Engineering Fellows building production AI systems.',
  alternates: { canonical: 'https://www.inference-lab.org/about/people' },
  openGraph: {
    title: 'People · INFERENCE Lab',
    description:
      'The people behind INFERENCE Lab — leadership, core team, researchers, and Engineering Fellows building production AI systems.',
    url: 'https://www.inference-lab.org/about/people',
  },
}

export default async function PeoplePage() {
  const people = await getPeople()
  const journals = await getJournals()

  const leadership = people.find((p) => p.isLeadership) || people[0]
  const coreTeam = people.filter((p) => p.teamType === 'core' && !p.isLeadership)
  const fellows = people.filter((p) => p.teamType === 'fellow' || p.teamType === 'fellowship')
  const researchCollaborators = people.filter((p) => p.teamType === 'research')
  const openSourceCollaborators = people.filter((p) => p.teamType === 'opensource')

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
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
              <SectionLabel>Our Team &amp; Cohorts</SectionLabel>
            </div>

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              People of INFERENCE Lab
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Engineers, researchers, fellows, and open-source contributors dedicated to reproducible research, open-source software,
              and production-grade AI systems.
            </p>
          </div>
        </section>

        {/* Section 1: Leadership */}
        {leadership && (
          <section className="border-b border-border py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionLabel>Leadership</SectionLabel>
              <div className="mt-8 rounded-2xl border border-border bg-card p-8 sm:p-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  {leadership.photo ? (
                    <img
                      src={leadership.photo}
                      alt={leadership.name}
                      className="h-28 w-28 shrink-0 rounded-2xl object-cover border border-border"
                    />
                  ) : (
                    <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-brand/10 font-mono text-3xl font-bold text-brand">
                      {leadership.name[0]}
                    </div>
                  )}

                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                        {leadership.name}
                      </h2>
                      {leadership.rank && (
                        <p className="font-mono text-xs text-brand font-semibold mt-1 uppercase tracking-wider">
                          {leadership.rank}
                        </p>
                      )}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {leadership.roles.map((role) => (
                          <span
                            key={role}
                            className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-brand"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-base leading-relaxed text-muted-foreground max-w-3xl">
                      {leadership.bio}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {leadership.github && (
                        <a
                          href={leadership.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3.5 py-1.5 font-mono text-xs font-semibold hover:bg-muted"
                        >
                          <GithubIcon className="h-4 w-4" /> GitHub
                        </a>
                      )}
                      {leadership.linkedin && (
                        <a
                          href={leadership.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3.5 py-1.5 font-mono text-xs font-semibold hover:bg-muted"
                        >
                          <ExternalLink className="h-4 w-4" /> LinkedIn
                        </a>
                      )}
                      <Link
                        href={`/people/${leadership.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-md bg-brand px-4 py-1.5 font-mono text-xs font-semibold text-brand-foreground hover:opacity-90"
                      >
                        View Full Profile <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 2: Core Team */}
        {coreTeam.length > 0 && (
          <section className="border-b border-border py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionLabel>Core Team</SectionLabel>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Engineers &amp; Researchers</h2>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {coreTeam.map((p) => (
                  <div key={p.slug} className="flex flex-col justify-between rounded-xl border border-border bg-card p-6">
                    <div>
                      <div className="flex items-center gap-4">
                        {p.photo ? (
                          <img
                            src={p.photo}
                            alt={p.name}
                            className="h-14 w-14 shrink-0 rounded-xl object-cover border border-border"
                          />
                        ) : (
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 font-mono text-xl font-bold text-brand">
                            {p.name[0]}
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{p.name}</h3>
                          <p className="font-mono text-xs text-brand">{p.rank || p.roles[0]}</p>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {p.bio}
                      </p>

                      {p.expertise && p.expertise.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {p.expertise.map((exp) => (
                            <span
                              key={exp}
                              className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase text-muted-foreground"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 border-t border-border pt-4">
                      <Link
                        href={`/people/${p.slug}`}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-background py-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-muted"
                      >
                        View Profile <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Engineering Fellows */}
        {fellows.length > 0 && (
          <section className="border-b border-border py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionLabel>Engineering Fellows</SectionLabel>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Engineering Fellows &amp; Cohort</h2>

              {/* Cohort Statistics */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-border bg-card p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Cohort</span>
                  <p className="mt-2 font-mono text-3xl font-bold text-foreground">Cohort 2026</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Engineering Fellows</span>
                  <p className="mt-2 font-mono text-3xl font-bold text-foreground">{fellows.length}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Projects Completed</span>
                  <p className="mt-2 font-mono text-3xl font-bold text-foreground">7+</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Journals Published</span>
                  <p className="mt-2 font-mono text-3xl font-bold text-brand">{journals.length}</p>
                </div>
              </div>

              {/* Fellows Grid */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {fellows.map((f) => (
                  <div key={f.slug} className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3">
                      {f.photo ? (
                        <img
                          src={f.photo}
                          alt={f.name}
                          className="h-12 w-12 shrink-0 rounded-full object-cover border border-border"
                        />
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 font-mono font-bold text-brand">
                          {f.name[0]}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{f.name}</h4>
                        <p className="font-mono text-[11px] text-brand">{f.rank || 'Engineering Fellow'}</p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">{f.bio}</p>

                    <div className="mt-4 border-t border-border pt-3">
                      <Link
                        href={`/people/${f.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-brand hover:underline"
                      >
                        View Fellow Profile &amp; Journals <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 4: Research Collaborations */}
        {researchCollaborators.length > 0 && (
          <section className="border-b border-border py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionLabel>Collaborations</SectionLabel>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Research Collaboration</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                Academic partners, co-authors, and joint laboratory research fellows collaborating on publications and datasets.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {researchCollaborators.map((r) => (
                  <div key={r.slug} className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3">
                      {r.photo ? (
                        <img
                          src={r.photo}
                          alt={r.name}
                          className="h-12 w-12 shrink-0 rounded-xl object-cover border border-border"
                        />
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 font-mono font-bold text-brand">
                          {r.name[0]}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{r.name}</h4>
                        <p className="font-mono text-[11px] text-brand">{r.rank || 'Research Collaborator'}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">{r.bio}</p>
                    <div className="mt-4 border-t border-border pt-3">
                      <Link
                        href={`/people/${r.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-brand hover:underline"
                      >
                        View Profile <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Open-Source Collaborators */}
        {openSourceCollaborators.length > 0 && (
          <section className="py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionLabel>Open Source</SectionLabel>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Open-Source Collaborators</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                Developers and engineers actively contributing to INFERENCE Lab open-source repositories and PyPI packages.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {openSourceCollaborators.map((os) => (
                  <div key={os.slug} className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3">
                      {os.photo ? (
                        <img
                          src={os.photo}
                          alt={os.name}
                          className="h-12 w-12 shrink-0 rounded-xl object-cover border border-border"
                        />
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 font-mono font-bold text-brand">
                          {os.name[0]}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{os.name}</h4>
                        <p className="font-mono text-[11px] text-brand">{os.rank || 'Open-Source Contributor'}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">{os.bio}</p>
                    <div className="mt-4 border-t border-border pt-3">
                      <Link
                        href={`/people/${os.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-brand hover:underline"
                      >
                        View Profile <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
