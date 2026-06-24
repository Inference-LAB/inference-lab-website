import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Engineering Services',
  description:
    'AI/ML engineering services from INFERENCE Lab — speech AI, LLM and RAG systems, computer vision, NLP, MLOps, and full-stack AI product development.',
  alternates: { canonical: 'https://inference-lab.dev/engineering/services' },
  openGraph: {
    title: 'Engineering Services · INFERENCE Lab',
    description: 'AI/ML engineering services from INFERENCE Lab — speech AI, LLM and RAG systems, computer vision, NLP, MLOps, and full-stack AI product development.',
    url: 'https://inference-lab.dev/engineering/services',
  },
}

const services = [
  {
    area: 'Speech & Vocal Intelligence',
    icon: '◎',
    items: [
      'Speaker recognition and verification systems',
      'Vocal fatigue estimation and load monitoring',
      'Audio embedding pipelines (raw audio in → score out)',
      'Production REST API design and deployment',
      'Real-time monitoring dashboards',
    ],
  },
  {
    area: 'LLM & RAG Engineering',
    icon: '◈',
    items: [
      'Retrieval-augmented generation systems from scratch',
      'Hallucination detection and LLM observability',
      'Multi-agent orchestration (CrewAI, AutoGen, n8n)',
      'Vector database integration (Pinecone, Qdrant)',
      'Custom fine-tuning and few-shot pipelines',
    ],
  },
  {
    area: 'Computer Vision',
    icon: '◻',
    items: [
      'Detection and classification pipelines (YOLO, ResNet)',
      'Real-time video analysis systems',
      'Pose estimation and behavioural intelligence',
      'CLIP-based image retrieval',
    ],
  },
  {
    area: 'Natural Language Processing',
    icon: '◇',
    items: [
      'Fine-tuned Transformer models for low-resource languages',
      'Named entity recognition and information extraction',
      'Text classification and sentiment analysis',
      'Multi-lingual and cross-lingual pipelines',
    ],
  },
  {
    area: 'MLOps & Infrastructure',
    icon: '◬',
    items: [
      'Containerised model serving (Docker, FastAPI)',
      'CI/CD pipelines for ML (GitHub Actions)',
      'Experiment tracking and model registry (MLflow)',
      'Cloud deployment on AWS, GCP, or HuggingFace Spaces',
    ],
  },
  {
    area: 'Full-Stack AI Products',
    icon: '◉',
    items: [
      'End-to-end web and backend development',
      'AI model integration via purpose-built REST APIs',
      'Dashboard and observability tooling',
      'From prototype to production-ready system',
    ],
  },
]

const notFor = [
  'Organisations that want a demo that never ships',
  'Projects requiring no documentation or reproducibility',
  'Work where we cannot understand the problem before quoting',
]

export default function EngineeringServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/engineering"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Engineering
            </Link>
            <div className="mt-8">
              <SectionLabel>Engineering services</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              We build AI systems. Working ones.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Engineering engagements for organisations that need a production
              AI system — not a proof-of-concept that collapses when it leaves
              a notebook. Same discipline and standards as the lab&apos;s own work.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Service areas</SectionLabel>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.area} className="rounded-lg border border-border bg-background p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-brand">{s.icon}</span>
                    <h3 className="font-semibold tracking-tight">{s.area}</h3>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {s.items.map((item) => (
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

        {/* Honest section */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold tracking-tight">This is for you if</h3>
                <ul className="mt-4 space-y-2">
                  {[
                    'You have a real problem that needs engineering, not just a demo',
                    'You want the system documented and maintainable after we leave',
                    'You can describe the problem clearly (or want help shaping it)',
                    'You care whether the output actually works in production',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold tracking-tight">Not for</h3>
                <ul className="mt-4 space-y-2">
                  {notFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              <h2 className="mt-5 max-w-xl text-balance text-3xl font-semibold sm:text-4xl">
                Tell us what you need built.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Describe the problem, any data you already have, and what the
                working system needs to do. We respond within a few days.
              </p>
              <a
                href={`mailto:${siteConfig.email}?subject=Engineering Services Inquiry`}
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
