import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Presentation,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { ProgramHero } from '@/components/programs/program-hero'
import { AudienceGrid } from '@/components/programs/audience-grid'
import { CapabilitiesGrid } from '@/components/programs/capabilities-grid'
import { PhaseAccordion } from '@/components/programs/phase-accordion'
import { InvestmentTable } from '@/components/programs/investment-table'
import { ProgramFAQ } from '@/components/programs/program-faq'
import { ProgramCTA } from '@/components/programs/program-cta'
import { aiBuilderData } from '@/data/programs/ai-builder'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'AI Builder Program · INFERENCE Lab',
  description:
    'Build and ship a real AI-powered product. A practical, beginner-friendly program for students, professionals, and curious builders.',
  alternates: { canonical: 'https://www.inference-lab.org/programs/ai-builder' },
  openGraph: {
    title: 'AI Builder Program · INFERENCE Lab',
    description:
      'Build and ship a real AI-powered product. A practical, beginner-friendly program for students, professionals, and curious builders.',
    url: 'https://www.inference-lab.org/programs/ai-builder',
  },
}

export default function AIBuilderPage() {
  const data = aiBuilderData

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'AI Builder Program',
    description: data.heroDescription,
    provider: {
      '@type': 'Organization',
      name: 'INFERENCE Lab',
      sameAs: 'https://www.inference-lab.org',
    },
    educationalCredentialAwarded: 'Certificate of Completion with Verifiable QR Code',
    timeRequired: 'P5.5M',
    occupationalCredentialAwarded: 'AI Builder Certificate',
    offers: {
      '@type': 'Offer',
      price: '35000',
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
          secondaryAnchor="#program-journey"
          secondaryText="View Program Structure ↓"
        />

        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {/* Section 2: What Is AI Builder? */}
          <section className="space-y-6">
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {data.whatIs.heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {data.whatIs.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
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
            <AudienceGrid cards={data.audience.cards} />
          </section>

          {/* Section 4: What Will You Be Able To Build? */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Practical Outcomes</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.capabilities.heading}
              </h2>
            </div>
            <CapabilitiesGrid items={data.capabilities.items} />
          </section>

          {/* Section 5: The 6-Phase Journey */}
          <section id="program-journey" className="space-y-8">
            <div>
              <SectionLabel>Curriculum Structure</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                The 6-Phase Journey
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                The program progresses from basic programming to a deployed AI-powered product.
              </p>
            </div>
            <PhaseAccordion phases={data.phases} />
          </section>

          {/* Section 6: How Learning Works */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Weekly Rhythm</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.weeklyStructure.heading}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                {data.weeklyStructure.intro}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {data.weeklyStructure.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-border bg-card p-6"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-brand">
                      <span className="font-bold uppercase tracking-widest">{item.day}</span>
                      <span className="rounded bg-brand/10 px-2 py-0.5 font-semibold">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 font-mono text-sm font-bold uppercase tracking-wider text-foreground">
                      {item.type}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: What You Leave With */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Deliverables</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.outcomes.heading}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.outcomes.cards.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-5 transition-all hover:border-brand/40"
                >
                  <div className="flex items-center gap-2 text-brand">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="font-mono text-xs font-bold uppercase">Outcome 0{idx + 1}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-foreground">{c.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Demo Day */}
          <section className="rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/10 via-background to-card p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-2 text-brand font-mono text-xs font-bold uppercase tracking-widest">
              <Presentation className="h-4 w-4" /> Culminating Event
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {data.demoDay.heading}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {data.demoDay.description}
            </p>

            <div className="space-y-2 border-t border-border/60 pt-4">
              <span className="font-mono text-xs font-bold uppercase text-foreground">
                Demo Day Evaluation Requirements:
              </span>
              <ul className="grid gap-2 sm:grid-cols-2">
                {data.demoDay.requirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
                    <span className="text-brand">✓</span> {req}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 9: Career / Next Steps */}
          <section className="space-y-6">
            <div>
              <SectionLabel>Opportunities</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.careers.heading}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {data.careers.intro}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {data.careers.roles.map((role, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-5 mt-4">
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {data.careers.nextStepText}
              </p>
              <div className="mt-3">
                <Link
                  href="/programs/applied-ai-engineering"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-brand hover:underline"
                >
                  Explore Applied AI Engineering <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Section 10: Investment */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Tuition &amp; Fees</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {data.investment.heading}
              </h2>
            </div>
            <InvestmentTable
              intro={data.investment.intro}
              phases={data.investment.phases}
              totalFee={data.investment.phaseTotal}
              bundleFee={data.investment.bundleFee}
              bundleDiscountText={data.investment.bundleDiscountText}
              notes={data.investment.notes}
            />
          </section>

          {/* Section 11: FAQ */}
          <section className="space-y-8">
            <div>
              <SectionLabel>Common Questions</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <ProgramFAQ faqs={data.faqs} />
          </section>

          {/* Final CTA */}
          <ProgramCTA
            heading="Ready to Start Building?"
            description="Choose AI Builder to start building and shipping real AI-powered products with direct mentor guidance."
            primaryBtnText="Apply to AI Builder"
            primaryBtnUrl={data.formUrl}
            secondaryBtnText="Explore Applied AI Engineering"
            secondaryBtnUrl="/programs/applied-ai-engineering"
            metadata={['Beginner-Friendly', 'Project-Based', 'Live Mentorship']}
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
