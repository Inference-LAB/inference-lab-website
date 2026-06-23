import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Terminal } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { software } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Engineering',
  description:
    'Software and systems released by INFERENCE Lab — open-source libraries, deployed APIs, and production tools spanning speech AI, LLM observability, RAG, and MLOps.',
}

const services = [
  {
    area: 'Speech & Vocal Intelligence',
    items: [
      'Speaker recognition and verification systems',
      'Vocal fatigue estimation and load monitoring',
      'Audio embedding pipelines (ECAPA-TDNN, raw audio in → score out)',
      'Production REST API design and deployment',
    ],
  },
  {
    area: 'LLM & RAG Engineering',
    items: [
      'Retrieval-augmented generation systems from scratch',
      'Hallucination detection and LLM observability dashboards',
      'Multi-agent orchestration (CrewAI, AutoGen, n8n)',
      'Vector database integration (Pinecone, Qdrant)',
    ],
  },
  {
    area: 'Computer Vision',
    items: [
      'Detection and classification pipelines (YOLO, ResNet)',
      'Real-time video analysis systems',
      'Pose estimation and behavioural intelligence',
      'CLIP-based image retrieval',
    ],
  },
  {
    area: 'Full-Stack AI Products',
    items: [
      'End-to-end web and backend development',
      'AI model integration via purpose-built REST APIs',
      'Dashboard and observability tooling',
      'Deployment, CI/CD, and monitoring',
    ],
  },
]

export default function EngineeringPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
              <SectionLabel>Software &amp; systems released</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Open source, deployed, and used by researchers.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Libraries, APIs, and platforms spanning speech AI, LLM
              observability, RAG, agents, and MLOps infrastructure. Built the
              same way we teach it.
            </p>
          </div>
        </section>

        {/* Software grid */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Released software</SectionLabel>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {software.map((s) => (
                <article
                  key={s.name}
                  className="group flex flex-col bg-background p-6 transition-colors hover:bg-card"
                >
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Terminal className="h-4 w-4 text-brand" />
                    <span className="font-mono text-xs uppercase tracking-widest">
                      {s.category}
                    </span>
                  </div>
                  <h3 className="mt-4 font-mono text-lg font-semibold tracking-tight">
                    {s.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Engineering services</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Build a system with us.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We take on engineering engagements for organisations that need a
              working AI system, not a slide deck. Same discipline, same
              standards as the lab&apos;s own work.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.area} className="rounded-lg border border-border bg-background p-6">
                  <h3 className="font-semibold tracking-tight">{s.area}</h3>
                  <ul className="mt-4 space-y-2">
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
            <div className="mt-10">
              <a
                href="mailto:inferencelab.ai@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
              >
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
