import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Database } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'

export const metadata: Metadata = {
  title: 'Datasets',
  description:
    'Open datasets from INFERENCE Lab — Roman Urdu Sentiment Corpus (RUDaSA) and RUEmoCorp, published on Harvard Dataverse with companion models on HuggingFace.',
  alternates: { canonical: 'https://inference-lab.dev/research/datasets' },
  openGraph: {
    title: 'Datasets · INFERENCE Lab',
    description: 'Open datasets from INFERENCE Lab — Roman Urdu Sentiment Corpus (RUDaSA) and RUEmoCorp, published on Harvard Dataverse with companion models on HuggingFace.',
    url: 'https://inference-lab.dev/research/datasets',
  },
}

const datasets = [
  {
    name: 'Roman Urdu Sentiment Corpus (RUDaSA)',
    description:
      'A large-scale Roman Urdu sentiment dataset built via privacy-preserving embedding pipelines. Competitive benchmarking of state-of-the-art Transformer models. Addresses a critical gap in low-resource South Asian NLP.',
    stats: [
      { k: 'Task',          v: 'Sentiment Analysis' },
      { k: 'Language',      v: 'Roman Urdu' },
      { k: 'Models tested', v: 'XLM-RoBERTa, mBERT, and others' },
      { k: 'Privacy',       v: 'Privacy-preserving embedding pipeline' },
      { k: 'DOI',           v: '10.21203/rs.3.rs-9827763/v1' },
    ],
    doiLabel: 'Preprint: 10.21203/rs.3.rs-9827763/v1',
    doiUrl: 'https://doi.org/10.21203/rs.3.rs-9827763/v1',
    dataverseUrl: 'https://doi.org/10.7910/DVN/TMXDCL',
    huggingfaceUrl: 'https://huggingface.co/Khubaib01',
    tags: ['Sentiment Analysis', 'Roman Urdu', 'Low-Resource NLP', 'Harvard Dataverse'],
  },
  {
    name: 'RUEmoCorp',
    description:
      'The first large-scale Roman Urdu emotion corpus. Multi-institute annotation with substantial inter-annotator agreement (Fleiss κ = 0.658). 134K labeled samples across multiple emotion categories — fully open-source.',
    stats: [
      { k: 'Task',         v: 'Emotion Classification' },
      { k: 'Language',     v: 'Roman Urdu' },
      { k: 'Size',         v: '134K labeled samples' },
      { k: 'Agreement',    v: 'Fleiss κ = 0.658 (substantial)' },
      { k: 'Annotation',   v: 'Multi-institute' },
      { k: 'DOI',          v: '10.21203/rs.3.rs-9759243/v1' },
    ],
    doiLabel: 'Preprint: 10.21203/rs.3.rs-9759243/v1',
    doiUrl: 'https://doi.org/10.21203/rs.3.rs-9759243/v1',
    dataverseUrl: 'https://doi.org/10.7910/DVN/BPWHOZ',
    huggingfaceUrl: 'https://huggingface.co/Khubaib01',
    tags: ['Emotion Classification', 'Roman Urdu', 'Multi-institute', 'Harvard Dataverse'],
  },
]

export default function DatasetsPage() {
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
              <SectionLabel>Open datasets</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Open, citable, and reproducible.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              All lab datasets are published with permanent DOIs on Harvard
              Dataverse, with companion models on HuggingFace. Every dataset
              ships with a data card, loading scripts, and documented
              annotation methodology.
            </p>
          </div>
        </section>

        {/* Datasets */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:gap-10">
            {datasets.map((d) => (
              <article
                key={d.name}
                className="overflow-hidden rounded-lg border border-border bg-background"
              >
                {/* Header */}
                <div className="border-b border-border p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card">
                        <Database className="h-5 w-5 text-brand" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold tracking-tight">
                          {d.name}
                        </h2>
                        <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                          Harvard Dataverse · HuggingFace
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {d.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid gap-px bg-border sm:grid-cols-3">
                  {d.stats.map((s) => (
                    <div key={s.k} className="bg-background px-5 py-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {s.k}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {s.v}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 border-t border-border px-6 py-4 sm:px-8">
                  <a
                    href={d.dataverseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-card/40 px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:border-foreground/30 hover:bg-card"
                  >
                    Harvard Dataverse
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={d.huggingfaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-card/40 px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:border-foreground/30 hover:bg-card"
                  >
                    HuggingFace
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={d.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {d.doiLabel}
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
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
