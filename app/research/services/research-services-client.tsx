'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Layers,
  FileText,
  Users,
  Cpu,
  GraduationCap,
  Sparkles,
  GitPullRequest,
  Check,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { cn } from '@/lib/utils'

type Faq = { q: string; a: string }

const workflowSteps = [
  { step: '01', title: 'Idea & Conceptualization', desc: 'Defining research scope, novelty, and theoretical backing.' },
  { step: '02', title: 'Literature Review', desc: 'Systematic survey of existing literature to map the state of the art.' },
  { step: '03', title: 'Gap Identification', desc: 'Pinpointing concrete research gaps and formulation of core hypotheses.' },
  { step: '04', title: 'Methodology Design', desc: 'Architecting experimental protocols, mathematical frameworks, and baselines.' },
  { step: '05', title: 'Implementation', desc: 'Writing clean, modular code, model architectures, and data pipelines.' },
  { step: '06', title: 'Experiments & Benchmarking', desc: 'Running rigorous multi-seed experiments, ablation studies, and evaluation metrics.' },
  { step: '07', title: 'Scientific Writing', desc: 'Drafting high-quality manuscripts with LaTeX figures, tables, and citations.' },
  { step: '08', title: 'Submission Strategy', desc: 'Selecting target SCI/Scopus indexed journals or top AI conferences.' },
  { step: '09', title: 'Revision & Peer Review', desc: 'Formulating point-by-point author responses to reviewer feedback.' },
  { step: '10', title: 'Publication & Artifact Release', desc: 'Shipping reproducible code, datasets, and permanent DOI links.' },
]

export default function ResearchServicesClient({ faqs }: { faqs: Faq[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Research Output
            </Link>

            <div className="mt-8">
              <SectionLabel>Scientific &amp; Technical Support</SectionLabel>
            </div>

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Research Services
            </h1>

            <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              From research idea to publication, we collaborate with students, universities, researchers,
              and industry partners to deliver rigorous, reproducible scientific research.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/research/collaborate"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
              >
                Start a Research Collaboration
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-foreground/30 hover:bg-card"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1: Academic Research */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-brand" />
              <SectionLabel>Section 1</SectionLabel>
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Academic Research</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Comprehensive guidance tailored for graduate students, PhD candidates, and academic faculty.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">MS Research Support</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  End-to-end guidance for Master&apos;s research, including topic selection, literature review, and experimental design.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">PhD Research Support</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  Structured assistance with doctoral research planning, mathematical formulation, ablation studies, and publication strategies.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">Research Mentorship</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  One-to-one technical mentorship throughout your project lifecycle to ensure scientific rigor and publication readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Research Development */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-brand" />
              <SectionLabel>Section 2</SectionLabel>
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Research Development</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Engineering the foundation of your scientific work with robust methodologies.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Research Idea Validation', desc: 'Assessing novelty, technical feasibility, and alignment with conference/journal calls.' },
                { title: 'Research Gap Identification', desc: 'Systematic literature mapping to pinpoint unaddressed problems in current literature.' },
                { title: 'Methodology Design', desc: 'Architecting novel mathematical models, algorithms, and experimental protocols.' },
                { title: 'Experimental Design', desc: 'Setting up multi-seed baselines, controls, evaluation metrics, and ablation suites.' },
                { title: 'Dataset Strategy', desc: 'Curation, annotation pipelines, privacy-preserving techniques, and synthetic data generation.' },
                { title: 'Statistical Analysis', desc: 'Hypothesis testing, statistical significance (p-values, confidence intervals), and correlation analysis.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Scientific Writing */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-brand" />
              <SectionLabel>Section 3</SectionLabel>
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Scientific Writing &amp; Review</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Ensuring your manuscript meets international academic publication standards.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Manuscript Review & Enhancement', desc: 'In-depth peer review of technical content, logical coherence, clarity, and contribution.' },
                { title: 'Experimental Quality & Rigor Check', desc: 'Verifying baseline fairness, metric soundness, multi-seed variance, and reproducibility.' },
                { title: 'LaTeX Formatting & Visuals', desc: 'Professional typography, IEEE/Springer template structuring, high-resolution vector diagrams.' },
                { title: 'Response to Reviewers', desc: 'Drafting point-by-point rebuttal letters and revision matrices for journal revisions.' },
                { title: 'Thesis Consultation', desc: 'Comprehensive alignment and structuring support for MS theses and PhD dissertations.' },
                { title: 'Journal Targeting', desc: 'Scouting SCI/Scopus indexed journals with matching scope, realistic turnaround times, and high impact.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: 10-Step Workflow */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-brand" />
              <SectionLabel>Section 6</SectionLabel>
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">10-Step Research Workflow</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              A disciplined, reproducible methodology from initial concept to permanent DOI publication.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {workflowSteps.map((s) => (
                <div key={s.step} className="flex flex-col rounded-xl border border-border bg-card p-5">
                  <span className="font-mono text-xl font-bold text-brand">{s.step}</span>
                  <h3 className="mt-2 font-semibold text-sm text-foreground">{s.title}</h3>
                  <p className="mt-2 flex-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Who We Work With */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>Section 7</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Who We Work With</h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Students', desc: 'MS and PhD candidates seeking technical guidance, experimental code, or thesis review.' },
                { title: 'Researchers', desc: 'Independent academics looking for computational resources, datasets, or co-authorship.' },
                { title: 'Universities', desc: 'Academic departments collaborating on multi-institutional studies and joint research.' },
                { title: 'Industry', desc: 'Startups and enterprises requiring custom AI R&D, evaluation, or production deployment.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQs Accordion */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Research Services FAQs</h2>

            <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-card">
              {(faqs || []).map((faq, i) => (
                <div key={i} className="p-6">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between text-left font-semibold text-foreground"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={cn('h-5 w-5 text-muted-foreground transition-transform', openFaq === i && 'rotate-180')}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground border-t border-border pt-4">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build impactful research together.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Whether you&apos;re starting your first MS thesis or leading an industrial R&amp;D project,
              we&apos;re ready to collaborate with technical excellence and scientific integrity.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/research/collaborate"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground hover:opacity-90"
              >
                Start a Research Collaboration <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
