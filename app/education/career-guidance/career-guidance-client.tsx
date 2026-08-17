'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Briefcase,
  ChevronDown,
  CheckCircle,
  Users,
  CalendarCheck,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { cn } from '@/lib/utils'

const targetAudiences = [
  {
    title: 'Fresh Graduates',
    desc: 'University graduates in CS, SE, or engineering looking to break into AI. We help you identify your strongest strengths and build an actionable pathway toward your first high-impact AI role.',
  },
  {
    title: 'Career Switchers',
    desc: 'Software engineers, backend developers, or analysts transitioning into specialized AI, ML, or MLOps engineering without getting stuck in endless online tutorial loops.',
  },
  {
    title: 'AI Practitioners',
    desc: 'Developers already working with machine learning who want to level up into production LLM engineering, Speech AI, autonomous agent design, and enterprise-grade deployment.',
  },
  {
    title: 'Tech Founders & Builders',
    desc: 'Founders and product builders evaluating which AI stack, architectures, and technical competencies are required to build and scale their product vision.',
  },
]

type Faq = { q: string; a: string }

export default function CareerGuidanceClient({ faqs }: { faqs: Faq[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              <SectionLabel>1-on-1 Mentorship &amp; Advisory</SectionLabel>
            </div>

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Book a Career Guidance Session
            </h1>

            <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Find which career role and technical goal works best for you. Our mentors will help you create clear, actionable pathways to your dream career role in Artificial Intelligence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90 shadow-md"
              >
                <CalendarCheck className="h-4 w-4" />
                Book a Guidance Session
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/curriculum"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-foreground/30 hover:bg-card"
              >
                Explore Lab Programs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1: Who is this for? */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-brand" />
              <SectionLabel>Personalized Advisory</SectionLabel>
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Who is this for?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Whether you are taking your first steps or transitioning into production AI engineering, guidance sessions are tailored to your stage.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {targetAudiences.map((item) => (
                <div key={item.title} className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Career Pathways We Help You Map */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-brand" />
              <SectionLabel>Career Roles</SectionLabel>
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Career Roles &amp; Pathways</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              We help you build the concrete skills, projects, and portfolio proof required for modern AI specializations.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Machine Learning Engineer', focus: 'Model architectures, evaluation, pipeline optimization' },
                { title: 'MLOps & Platform Engineer', focus: 'Model registries, CI/CD automation, cloud deployment, telemetry' },
                { title: 'LLM & GenAI Systems Engineer', focus: 'RAG systems, vector search, agent loops, prompt engineering' },
                { title: 'Applied AI Product Builder', focus: 'Full-stack AI SaaS development, FastAPI backends, web integration' },
                { title: 'Speech AI & Audio Specialist', focus: 'Acoustic feature extraction, voice biometric analysis, PyTorch' },
                { title: 'AI Research Engineer', focus: 'Reproducible empirical studies, dataset curation, paper publication' },
              ].map((role) => (
                <div key={role.title} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                  <CheckCircle className="h-5 w-5 shrink-0 text-brand mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground text-sm block">{role.title}</span>
                    <span className="font-mono text-xs text-muted-foreground mt-1 block">{role.focus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: FAQs */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>Guidance FAQs</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>

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

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Ready to map out your AI career path?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Book a 1-on-1 career guidance session with our engineering mentors today.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground hover:opacity-90 shadow-md"
              >
                Schedule a Guidance Session <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
