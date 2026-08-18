'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft, Filter } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import type { PublicationItem } from '@/lib/data-store'
import { cn } from '@/lib/utils'

const statusStyles: Record<string, string> = {
  'Under Review':       'border-brand/40 text-brand bg-brand/5',
  'Published Preprint': 'border-border text-foreground',
  'Published':          'border-green-500/40 text-green-600 dark:text-green-400 bg-green-50/10',
  'Accepted':           'border-green-500/40 text-green-600 dark:text-green-400 bg-green-50/10',
  'In Progress':        'border-border text-muted-foreground',
}

const filterOptions = ['All', 'Published', 'Under Review', 'Published Preprint', 'In Progress']

const researchAreas = [
  {
    id: 'speech-intelligence',
    tag: 'Domain 01',
    title: 'Low-Resource Speech Intelligence & Acoustic Biomarkers',
    description:
      'Pioneering clinical-grade vocal fatigue screening, speaker verification, and emotion recognition from raw speech. Developing novel neural representations (e.g. ECAPA-TDNN-VHE) that operate robustly with minimal training data.',
    focus: ['Vocal Fatigue Quantification', 'Acoustic Feature Extraction', 'Disentangled Speech Representations', 'Real-Time Inference Engines'],
  },
  {
    id: 'low-resource-nlp',
    tag: 'Domain 02',
    title: 'Low-Resource NLP & Regional Language Corpora',
    description:
      'Curating large-scale foundational corpora and benchmarking language models for Roman Urdu and under-represented South Asian dialects. We build data-centric pipelines that enforce high inter-annotator agreement and privacy-preserving embeddings.',
    focus: ['RUEmoCorp & RUDaSA Datasets', 'Subjective NLP & Disagreement Weighting', 'Transformer Calibration', 'Multi-Seed Empirical Benchmarks'],
  },
  {
    id: 'human-centered-sensing',
    tag: 'Domain 03',
    title: 'Human-Centered Sensing & Cognitive Ergonomics',
    description:
      'Investigating unobtrusive digital biomarkers—such as cursor kinematics and workstation interaction logs—as indicators of cognitive workload, acute stress, and fatigue in knowledge work and clinical environments.',
    focus: ['Workplace Interaction Logs', 'Explainable ML for Ergonomics', 'Joint Cognitive Systems Reconfiguration', 'Privacy-Preserving Telemetry'],
  },
  {
    id: 'reproducible-ai-systems',
    tag: 'Domain 04',
    title: 'Deployable AI Systems & Security',
    description:
      'Bridging scientific discovery and production engineering. Every research artifact is packaged into pip-installable libraries (PyPI), verifiable registries, and benchmarked cryptographic schemes.',
    focus: ['Image Encryption Algorithms', 'Deterministic Model Pipelines', 'Open-Source Python Libraries'],
  },
]

export default function ResearchClient({ publications }: { publications: PublicationItem[] }) {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filteredPublications = selectedFilter === 'All'
    ? publications
    : publications.filter((p) => {
        const normalized = p.status === 'Accepted' ? 'Published' : p.status
        return normalized === selectedFilter
      })

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
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
              Where rigorous research meets real-world impact
            </h1>
            <p className="mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              INFERENCE Lab publishes across speech intelligence, natural language processing, human-centered sensing,
              and applied AI — with each study designed from the ground up to be reproducible, citable, and deployable.
              Our work spans clinical voice diagnostics, low-resource corpora, cognitive fatigue detection, and post-quantum cryptography.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#publications"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand-foreground hover:opacity-90 transition-opacity"
              >
                View Publications ↓
              </a>
              <a
                href="#areas"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-muted transition-colors"
              >
                Research Areas ↓
              </a>
            </div>
          </div>
        </section>

        {/* Core Research Areas Section */}
        <section id="areas" className="scroll-mt-16 border-b border-border bg-card/20 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>Core Focus</SectionLabel>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Research Areas & Domains
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Our lab focuses on fundamental problems where theoretical rigor can be translated into open software, benchmarks, and clinical-grade tools.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {researchAreas.map((area) => (
                <div
                  key={area.id}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 sm:p-8 shadow-sm transition-all hover:border-foreground/30"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-brand font-semibold">
                      {area.tag}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-foreground">
                      {area.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                      Key Topics &amp; Pipelines:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.focus.map((f) => (
                        <span
                          key={f}
                          className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground/90"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section with Filter Bar */}
        <section id="publications" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <SectionLabel>Publications &amp; Preprints</SectionLabel>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Original Papers ({filteredPublications.length})
                </h2>
              </div>

              {/* Status Filter Bar */}
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground mr-1 hidden sm:block" />
                {filterOptions.map((status) => {
                  const active = selectedFilter === status
                  return (
                    <button
                      key={status}
                      onClick={() => setSelectedFilter(status)}
                      className={cn(
                        'rounded-md px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors',
                        active
                          ? 'bg-brand text-brand-foreground font-semibold'
                          : 'border border-border text-muted-foreground hover:bg-muted hover:text-foreground',
                      )}
                    >
                      {status}
                    </button>
                  )
                })}
              </div>
            </div>

            <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
              {filteredPublications.map((p) => {
                const displayStatus = p.status === 'Accepted' ? 'Published' : p.status
                return (
                  <li key={p.id || p.title} className="flex flex-col bg-background p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={cn(
                          'rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest',
                          statusStyles[displayStatus] || 'border-border text-foreground',
                        )}
                      >
                        {displayStatus}
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
                )
              })}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
