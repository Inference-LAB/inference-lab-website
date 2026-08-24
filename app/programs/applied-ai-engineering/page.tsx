import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { ProgramHero } from '@/components/programs/program-hero'
import { AudienceGrid } from '@/components/programs/audience-grid'
import { PhaseAccordion } from '@/components/programs/phase-accordion'
import { CareerPathways } from '@/components/programs/career-pathways'
import { InvestmentTable } from '@/components/programs/investment-table'
import { ProgramPolicies } from '@/components/programs/program-policies'
import { ProgramFAQ } from '@/components/programs/program-faq'
import { ProgramCTA } from '@/components/programs/program-cta'
import { appliedAIData } from '@/data/programs/applied-ai'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Applied AI Engineering Program · INFERENCE Lab',
  description:
    'A 12.5-month, project-driven program progressing from Python engineering through production AI systems. 6 phases, small cohorts, and public GitHub portfolio.',
  alternates: { canonical: 'https://www.inference-lab.org/programs/applied-ai-engineering' },
  openGraph: {
    title: 'Applied AI Engineering Program · INFERENCE Lab',
    description:
      'A 12.5-month, project-driven program progressing from Python engineering through production AI systems. 6 phases, small cohorts, and public GitHub portfolio.',
    url: 'https://www.inference-lab.org/programs/applied-ai-engineering',
  },
}

export default function AppliedAIEngineeringPage() {
  const data = appliedAIData

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Applied AI Engineering Program',
    description: data.heroDescription,
    provider: {
      '@type': 'Organization',
      name: 'INFERENCE Lab',
      sameAs: 'https://www.inference-lab.org',
    },
    educationalCredentialAwarded: 'Certificate of Completion with QR Code Verification',
    timeRequired: 'P12.5M',
    occupationalCredentialAwarded: 'Applied AI Engineer Certificate',
    offers: {
      '@type': 'Offer',
      price: '99000',
      priceCurrency: 'PKR',
      category: 'Paid',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      courseWorkload: 'PT3H',
    },
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <SiteHeader />
      <main className="flex-1">
        {/* Section 1: Hero */}
        <ProgramHero
          label={data.label}
          title={data.title}
          tagline={data.tagline}
          description={data.heroDescription}
          formUrl={data.formUrl}
          metadata={data.metadata}
          secondaryAnchor="#engineering-journey"
          secondaryText="View Program Structure ↓"
          investmentAnchor="#program-investment"
          investmentText="Program Investment ↓"
        />

        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {/* Section 2: What Is Applied AI Engineering? */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Philosophy &amp; Scope</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.whatIs.heading}
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {data.whatIs.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* System Lifecycle Flowchart */}
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="block font-mono text-xs font-bold uppercase tracking-wider text-brand mb-4">
                The Complete AI Systems Lifecycle
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {data.whatIs.lifecycleSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs font-semibold text-foreground">
                      {step}
                    </span>
                    {idx < data.whatIs.lifecycleSteps.length - 1 && (
                      <span className="font-mono text-xs text-muted-foreground">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Who Is It For? */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Target Learners</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.audience.heading}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                {data.audience.intro}
              </p>
            </div>
            <AudienceGrid
              cards={data.audience.cards}
              prerequisite={data.audience.prerequisite}
            />
          </section>

          {/* Section 4: What You Will Learn (6 Domains) */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Technical Domains</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.domains.heading}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.domains.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-5 transition-all hover:border-brand/40"
                >
                  <span className="font-mono text-xs font-bold text-brand">
                    {item.number}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                    {item.topics}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: The 12.5-Month Engineering Journey */}
          <section id="engineering-journey" className="space-y-8">
            <div>
              <SectionLabel>Curriculum Journey</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                The 12.5-Month Journey
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                The curriculum is progressive. Each phase builds on the previous one, moving from software and data foundations toward increasingly complete AI systems.
              </p>
            </div>
            <PhaseAccordion phases={data.phases} />
          </section>

          {/* Section 6: Project-Driven Learning */}
          <section className="rounded-2xl border border-brand/30 bg-card p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-2 text-brand font-mono text-xs font-bold uppercase tracking-widest">
              <Rocket className="h-4 w-4" /> Practical Rigor
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {data.projectDriven.heading}
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base whitespace-pre-line">
              {data.projectDriven.copy}
            </div>
          </section>

          {/* Section 7: Engineering Workflow */}
          <section className="space-y-6">
            <div>
              <SectionLabel>System Lifecycle</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.engineeringWorkflow.heading}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                {data.engineeringWorkflow.copy}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-card p-6">
              {data.engineeringWorkflow.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="rounded border border-border bg-background px-3 py-1.5 font-mono text-xs font-semibold text-foreground">
                    {step}
                  </span>
                  {idx < data.engineeringWorkflow.steps.length - 1 && (
                    <span className="font-mono text-xs text-brand">→</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: What You Build Throughout the Program */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Deliverables</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.outcomes.heading}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.outcomes.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-5 transition-all hover:border-brand/40"
                >
                  <div className="flex items-center gap-2 text-brand">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="font-mono text-xs font-bold uppercase">Capability 0{idx + 1}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: Career Pathways */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Career Trajectories</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.careers.heading}
              </h2>
            </div>
            <CareerPathways
              intro={data.careers.intro}
              roles={data.careers.roles}
              footnote={data.careers.footnote}
            />
          </section>

          {/* Section 10 & 11: Program Structure & Cohort Model */}
          <section className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <SectionLabel>Structure</SectionLabel>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  {data.structure.heading}
                </h2>
              </div>
              <div className="space-y-3">
                {data.structure.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border bg-card p-4 transition-all"
                  >
                    <h3 className="font-mono text-xs font-bold uppercase text-brand">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div>
                <div className="flex items-center gap-2 text-brand">
                  <Users className="h-5 w-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    Cohort Model
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-foreground">
                  {data.cohortModel.heading}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {data.cohortModel.description}
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-brand/40 bg-brand/10 p-4 text-center">
                <span className="font-mono text-xs font-bold tracking-widest text-brand">
                  {data.cohortModel.badge}
                </span>
              </div>
            </div>
          </section>

          {/* Section 12: Investment */}
          <section id="program-investment" className="space-y-8">
            <div>
              <SectionLabel>Tuition &amp; Fee Structure</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.investment.heading}
              </h2>
            </div>
            <InvestmentTable
              intro={data.investment.intro}
              phases={data.investment.phases}
              totalFee={data.investment.fullProgramTotal}
              columns="detailed"
              notes={[data.investment.paymentNote]}
            />
          </section>

          {/* Section 13: Policies (Collapsible) */}
          <section className="space-y-6">
            <div>
              <SectionLabel>Academic Standards</SectionLabel>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Policies &amp; Requirements
              </h2>
            </div>
            <ProgramPolicies policies={data.policies} />
          </section>

          {/* Section 14: FAQ */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Common Questions</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <ProgramFAQ faqs={data.faqs} />
          </section>

          {/* Section 15: Final CTA */}
          <ProgramCTA
            heading="Ready to Engineer AI Systems?"
            description="Build the technical foundation to move from experimenting with AI to engineering complete, production-grade AI systems."
            primaryBtnText="Apply to Applied AI Engineering"
            primaryBtnUrl={data.formUrl}
            secondaryBtnText="← View AI Builder Program"
            secondaryBtnUrl="/programs/ai-builder"
            metadata={['12.5 Months', '6 Phases', 'Project-Based', 'Mentor-Guided']}
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
