import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Research With Us',
  description:
    'End-to-end research partnerships with INFERENCE Lab — theory through deployment. PhD research support, industry R&D, and institutional collaboration.',
  alternates: { canonical: 'https://inference-lab.dev/research/collaborate' },
  openGraph: {
    title: 'Research With Us · INFERENCE Lab',
    description: 'End-to-end research partnerships with INFERENCE Lab — theory through deployment. PhD research support, industry R&D, and institutional collaboration.',
    url: 'https://inference-lab.dev/research/collaborate',
  },
}

const tracks = [
  {
    index: '01',
    title: 'PhD Research Support',
    summary: 'For doctoral researchers who need engineering depth.',
    items: [
      'Experimental design and baseline development',
      'Dataset curation, annotation pipelines, and IAA analysis',
      'Model implementation from theory to working code',
      'Evaluation framework and statistical testing',
      'Reproducible pipeline for submission and peer review',
      'Preprint preparation and journal-ready formatting',
    ],
  },
  {
    index: '02',
    title: 'Industry Research',
    summary: 'For organisations running applied AI R&D.',
    items: [
      'Problem formulation — turning a business question into a research question',
      'Literature survey and state-of-the-art benchmarking',
      'Proof-of-concept through production prototype',
      'Proprietary model training on internal data',
      'Technical documentation and reproducibility package',
      'Optional co-publication with proper attribution',
    ],
  },
  {
    index: '03',
    title: 'Institutional Collaboration',
    summary: 'For universities and research institutes.',
    items: [
      'Joint research project design',
      'Shared dataset curation and annotation workflows',
      'Cross-institutional evaluation and benchmarking',
      'Co-authorship on published work',
      'Student supervision and technical mentorship',
      'Conference and workshop coordination',
    ],
  },
]

const process = [
  { step: '01', label: 'Initial inquiry', body: 'Send a brief description of your research problem and what kind of support you need.' },
  { step: '02', label: 'Scoping call', body: 'We discuss the problem, timeline, data, and expected outputs in detail.' },
  { step: '03', label: 'Proposal', body: 'We send a written scope: objectives, methodology, deliverables, timeline, and terms.' },
  { step: '04', label: 'Execution', body: 'Regular check-ins, shared codebase, versioned experiments, and documented decisions throughout.' },
  { step: '05', label: 'Delivery', body: 'Full reproducibility package — code, data cards, evaluation results, and any publication artefacts.' },
]

const outputs = [
  'Published preprint with permanent DOI',
  'Journal-ready manuscript draft',
  'Reproducible code + data pipeline',
  'Trained model on HuggingFace',
  'Technical report or white paper',
  'Presented findings at agreed venue',
]

export default function CollaboratePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Research
            </Link>
            <div className="mt-8">
              <SectionLabel>Research with us</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              From theory and notebooks to deployment and publication.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Collaborate with us on end-to-end research, from problem formulation to reproducible pipelines, deployed models, and formal publications. We welcome PhD research, industry R&D, and institutional collaboration.
            </p>
          </div>
        </section>

        {/* What end-to-end means */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>End-to-end means exactly that</SectionLabel>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: '01', t: 'Problem formulation', b: 'Research question, scope, dataset requirements, and baseline definition.' },
                { n: '02', t: 'Data & experimentation', b: 'Dataset curation, annotation, model implementation, ablations, and evaluation.' },
                { n: '03', t: 'Reproducible pipeline', b: 'Versioned code, documented dependencies, and a pipeline anyone can re-run.' },
                { n: '04', t: 'Deployment & publication', b: 'Deployed model or API, preprint with DOI, and journal-ready manuscript.' },
              ].map((s) => (
                <div key={s.n} className="flex flex-col bg-background p-6">
                  <span className="font-mono text-sm font-semibold text-brand">{s.n}</span>
                  <h3 className="mt-3 text-sm font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research tracks */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Collaboration tracks</SectionLabel>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {tracks.map((t) => (
                <div key={t.index} className="rounded-lg border border-border bg-background p-6">
                  <span className="font-mono text-sm font-semibold text-brand">{t.index}</span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical outputs */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionLabel>Typical deliverables</SectionLabel>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Exact deliverables depend on scope and agreed objectives —
                  these are the most common outputs from a full collaboration.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {outputs.map((o) => (
                    <li key={o} className="flex items-start gap-2 rounded-md border border-border bg-background p-4 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionLabel>How it starts</SectionLabel>
                <ol className="mt-8 space-y-4">
                  {process.map((p, i) => (
                    <li key={p.step} className="flex gap-4">
                      <span className="mt-0.5 font-mono text-sm font-semibold text-brand">{p.step}</span>
                      <div>
                        <p className="text-sm font-semibold tracking-tight">{p.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                        {i < process.length - 1 && (
                          <div className="mt-4 ml-0 h-px w-8 bg-border" />
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            <div className="relative flex flex-col items-center text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">
                Start a conversation
              </span>
              <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold sm:text-4xl">
                Describe your research problem. We'll take it from there.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Send a brief description of your problem, what data you have,
                and what you need as output. We respond within a few days.
              </p>
              <a
                href={`mailto:${siteConfig.email}?subject=Research Collaboration Inquiry`}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
