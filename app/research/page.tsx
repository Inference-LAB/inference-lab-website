import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { publications } from '@/lib/content'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Research publications, preprints, and output from INFERENCE Lab — low-resource NLP, Roman Urdu, speech intelligence, and vocal health AI. Every release ships reproducible pipelines and a permanent DOI.',
  alternates: { canonical: 'https://inference-lab.dev/research' },
  openGraph: {
    title: 'Research · INFERENCE Lab',
    description:
      'Original research in low-resource NLP and speech intelligence — with international academic collaboration across Saudi Arabia, Kuwait, USA, and South Korea.',
    url: 'https://inference-lab.dev/research',
  },
}

const statusStyles: Record<string, string> = {
  'Under Review':      'border-brand/40 text-brand bg-brand/5',
  'Published Preprint':'border-border text-foreground',
  'In Progress':       'border-border text-muted-foreground',
}

const areas = [
  {
    label: 'Low-Resource NLP',
    description:
      'Datasets, annotation pipelines, and fine-tuned models for Roman Urdu — filling the gap between major-language NLP and underrepresented South Asian languages.',
  },
  {
    label: 'Speech Intelligence',
    description:
      'Vocal fatigue estimation, speaker verification, and continuous vocal load monitoring — deployed as open libraries and production REST APIs.',
  },
  {
    label: 'Cognitive & Ergonomic Systems',
    description:
      'Multi-institutional research applying Cognitive Systems Engineering to real-world healthcare settings.',
  },
]


// JSON-LD for this page: list of ScholarlyArticles so Google can index each paper
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Research Publications — INFERENCE Lab',
  url: 'https://inference-lab.dev/research',
  description:
    'Publications, preprints, and research output from INFERENCE Lab.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: publications.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'ScholarlyArticle',
        name: p.title,
        author: { '@type': 'Organization', name: 'INFERENCE Lab' },
        datePublished: p.year,
        publisher: p.venue,
        ...(p.doi ? { identifier: `https://doi.org/${p.doi}` } : {}),
        description: p.highlight,
      },
    })),
  },
}

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
              <SectionLabel>Research output</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Low-resource NLP &amp; speech intelligence.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              We merge academic theory with real-world application through 
              independent research. By collaborating with partners 
              such as King Saud University (KSA), EPU Kuwait, Doane University (USA),
              KU Leuven (Belgium), and Hanyang University (Republic of Korea), we ensure
              every discovery is actionable, backed by reproducible pipelines, evaluation documentation, and a permanent, transparent DOI.
            </p>
          </div>
        </section>

        {/* Research areas */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {areas.map((a) => (
                <div key={a.label} className="bg-background p-6">
                  <h3 className="font-semibold tracking-tight">{a.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Publications &amp; preprints</SectionLabel>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
              {publications.map((p) => (
                <li key={p.title} className="flex flex-col bg-background p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={cn(
                        'rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest',
                        statusStyles[p.status],
                      )}
                    >
                      {p.status}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.year}
                    </span>
                  </div>
                  <h3 className="mt-4 text-balance text-base font-semibold leading-snug tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.highlight}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.venue}
                    </span>
                    {p.doi && (
                      <a
                        href={`https://doi.org/${p.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 font-mono text-xs text-foreground transition-colors hover:text-brand"
                      >
                        DOI
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
