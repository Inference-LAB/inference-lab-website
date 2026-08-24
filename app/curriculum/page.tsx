import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { ProgramCard } from '@/components/programs/program-card'
import { ProgramComparison } from '@/components/programs/program-comparison'
import { LearningModel } from '@/components/programs/learning-model'
import { ProgramCTA } from '@/components/programs/program-cta'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'AI Programs · INFERENCE Lab',
  description:
    'Practical, project-driven programs designed to help you build with AI, develop technical skills, and turn ideas into working systems.',
  alternates: { canonical: 'https://www.inference-lab.org/curriculum' },
  openGraph: {
    title: 'AI Programs · INFERENCE Lab',
    description:
      'Practical, project-driven programs designed to help you build with AI, develop technical skills, and turn ideas into working systems.',
    url: 'https://www.inference-lab.org/curriculum',
  },
}

export default function ProgramsHubPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden border-b border-border bg-background">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back home
            </Link>

            <div className="mt-8">
              <SectionLabel>Education &amp; Mentorship</SectionLabel>
            </div>

            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Programs
            </h1>

            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Practical, project-driven programs designed to help you build with AI, develop technical skills, and turn ideas into working systems.
            </p>

            {/* Metadata Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="rounded-full border border-border bg-card px-3.5 py-1 text-foreground">
                2 Programs
              </span>
              <span>·</span>
              <span className="rounded-full border border-border bg-card px-3.5 py-1 text-foreground">
                Project-Based
              </span>
              <span>·</span>
              <span className="rounded-full border border-border bg-card px-3.5 py-1 text-foreground">
                Mentor-Guided
              </span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {/* Section 2: Available Programs */}
          <section className="space-y-10">
            <div>
              <SectionLabel>Available Programs</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Choose Your Starting Point
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
                Our programs are designed for different stages of the AI learning journey. Start with building practical products, or take the deeper engineering path.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Card 01: AI Builder */}
              <ProgramCard
                badgeNumber="01 · BEGINNER-FRIENDLY"
                title="AI Builder Program"
                tagline="Build and ship a real AI-powered product."
                description="A practical, beginner-friendly program for students, teachers, professionals, and curious builders who want to learn by creating real software. Start with Python, build a web application, add useful AI capabilities, deploy it online, and finish with a product you can demonstrate."
                duration="5.5 Months"
                trackType="Beginner-Friendly"
                outcome="A live AI-powered product, a public GitHub portfolio, and practical experience building and deploying software."
                href="/programs/ai-builder"
                formUrl="https://forms.gle/S2rzk2vfzVFpNhM69"
                structureHref="/programs/ai-builder#program-journey"
                feeHref="/programs/ai-builder#program-investment"
              />

              {/* Card 02: Applied AI Engineering */}
              <ProgramCard
                badgeNumber="02 · AI ENGINEERING TRACK"
                title="Applied AI Engineering Program"
                tagline="Build the technical foundation to engineer AI systems."
                description="A 12.5-month, project-driven program for students and early-career learners who want to move beyond using AI tools and develop the technical skills required to build, deploy, and maintain AI systems."
                duration="12.5 Months"
                trackType="Technical Track"
                outcome="A portfolio of progressively more advanced AI projects covering data, machine learning, deep learning, NLP, LLM engineering, and deployment."
                href="/programs/applied-ai-engineering"
                formUrl="https://forms.gle/YQ1kiyvqYiu8TAho9"
                structureHref="/programs/applied-ai-engineering#engineering-journey"
                feeHref="/programs/applied-ai-engineering#program-investment"
              />
            </div>
          </section>

          {/* Section 3: Which Program Is Right For You? */}
          <section className="space-y-10">
            <div>
              <SectionLabel>Find Your Path</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Which Program Is Right For You?
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
                The two programs serve different starting points. Choose based on your current skills and what you want to build toward.
              </p>
            </div>

            <ProgramComparison />
          </section>

          {/* Section 4: How Our Programs Work */}
          <section className="space-y-10">
            <div>
              <SectionLabel>Learning Model</SectionLabel>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Learn. Build. Review. Improve.
              </h2>
            </div>

            <LearningModel />
          </section>

          {/* Section 5: Final CTA */}
          <section className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Start Building?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Choose the program that matches your current level and start building practical AI skills through guided projects.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href="/programs/ai-builder"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-brand-foreground shadow transition-all hover:opacity-90 hover:shadow-lg"
                >
                  View AI Builder →
                </Link>
                <Link
                  href="/programs/applied-ai-engineering"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
                >
                  View Applied AI Engineering →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}