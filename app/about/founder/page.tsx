import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { FounderProfilePanel } from '@/components/founder-profile-panel'
import { getPersonBySlug } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Muhammad Khubaib Ahmad · Founder & Director',
  description:
    'Muhammad Khubaib Ahmad is an AI Research Engineer and Founder of INFERENCE Lab, working in speech intelligence, low-resource NLP, and applied AI systems.',
  alternates: { canonical: 'https://www.inference-lab.org/about/founder' },
  openGraph: {
    title: 'Muhammad Khubaib Ahmad · Founder & Director · INFERENCE Lab',
    description:
      'AI Research Engineer and Founder of INFERENCE Lab. Researching speech intelligence, Roman Urdu NLP, and production AI engineering.',
    url: 'https://www.inference-lab.org/about/founder',
    type: 'profile',
    images: [{ url: 'https://www.inference-lab.org/profile-images/founder-photo.png', width: 800, height: 800, alt: 'Muhammad Khubaib Ahmad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Khubaib Ahmad · Founder & Director · INFERENCE Lab',
    description: 'AI Research Engineer and Founder of INFERENCE Lab.',
  },
}

const profile = [
  {
    k: 'Bio',
    v: 'Muhammad Khubaib Ahmad is an AI Research Engineer and Founder of INFERENCE Lab, working at the intersection of artificial intelligence research and practical AI systems. His work focuses on machine learning, natural language processing, speech intelligence, and low-resource AI, with a strong emphasis on rigorous research, reproducibility, and real-world impact. He also serves as a peer reviewer for the Journal of Voice.',
  },
  {
    k: 'Contribution to INFERENCE Lab',
    v: 'As the Founder of INFERENCE Lab, Khubaib leads the lab\'s research direction and technical vision, driving work across AI research, machine learning, and applied intelligent systems. He contributes to the development of research projects, datasets, models, and open-source resources while fostering a culture of rigorous experimentation, reproducibility, and practical education and innovation.',
  },
]

const focusAreas = [
  'Speech & Language Intelligence',
  'LLM Engineering',
  'Contrastive Learning',
  'Applied ML Systems',
  'MLOps & Deployment',
  'AI Engineering',
  'Applied AI Research',
  'Speech AI',
  'AI in Healthcare',
  'Low-Resource NLP',
  'Generative AI',
  'AI Systems Engineering',
  'AI Product Innovation',
]

export default async function FounderPage() {
  const founder = await getPersonBySlug('muhammad-khubaib-ahmad')

  const founderSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Khubaib Ahmad',
    jobTitle: 'Founder & Director, AI Research Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'INFERENCE Lab',
      url: 'https://www.inference-lab.org',
    },
    url: 'https://www.inference-lab.org/about/founder',
    image: 'https://www.inference-lab.org/profile-images/founder-photo.png',
    description:
      'AI Research Engineer specializing in speech intelligence, low-resource NLP, and LLM systems. Founder and Director of INFERENCE Lab.',
    sameAs: [
      'https://github.com/Khubaib8281',
      'https://huggingface.co/Khubaib01',
      'https://linkedin.com/in/muhammad-khubaib-ahmad-',
    ],
    knowsAbout: focusAreas,
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/about/people"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              All Team &amp; People
            </Link>

            <div className="mt-8 grid items-start gap-10 sm:grid-cols-[1fr_auto]">
              <div>
                <SectionLabel>Founder &amp; Director</SectionLabel>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                  Muhammad Khubaib Ahmad
                </h1>
                <p className="mt-3 font-mono text-sm uppercase tracking-widest text-brand">
                  AI Research Engineer
                </p>

                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground rounded-2xl bg-card p-6 border border-border">
                  INFERENCE Lab exists because most AI work sits on one of three sides of a divide:
                  research that never leaves the notebook, engineering that ships without rigor,
                  or AI training that never reaches industry-level work. The lab treats architecture
                  decisions, evaluation, and deployment as one continuous discipline—not three separate handoffs.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/Khubaib8281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 font-mono text-xs font-semibold hover:bg-muted"
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/muhammad-khubaib-ahmad-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 font-mono text-xs font-semibold hover:bg-muted"
                  >
                    <LinkedinIcon className="h-4 w-4" /> LinkedIn
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-md bg-brand px-5 py-2 font-mono text-xs font-semibold text-brand-foreground hover:opacity-90"
                  >
                    Contact <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="justify-self-end">
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-border shadow-xl sm:h-56 sm:w-56">
                  <Image
                    src="/profile-images/founder-photo.png"
                    alt="Muhammad Khubaib Ahmad"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <FounderProfilePanel profile={profile} focusAreas={focusAreas} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
