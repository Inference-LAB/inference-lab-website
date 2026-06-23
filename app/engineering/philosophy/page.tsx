import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'

export const metadata: Metadata = {
  title: 'Engineering Philosophy',
  description:
    'How Inference Lab approaches building AI systems — production-first, documented, and the same discipline in every engagement.',
}

const principles = [
  {
    index: '01',
    title: 'Production-first from day one',
    body: 'We do not build a notebook prototype and then "clean it up later." Every project is written as though it will be deployed on day one — type hints, tests, containerization, and logging from the start. Retrofitting production discipline onto a research codebase is how systems fall apart.',
  },
  {
    index: '02',
    title: 'The model is not the product',
    body: 'A trained model sitting on a file system is not a product. A product is a model wrapped in an API, with versioned endpoints, error handling, response schemas, and the ability to hot-swap models without downtime. That is what we deliver.',
  },
  {
    index: '03',
    title: 'Documentation is engineering',
    body: 'Comments explain why, not what. READMEs include the minimum reproduction steps for the full pipeline. Data cards document provenance, limitations, and known failure modes. Architecture decisions are recorded, not assumed. A system nobody else can understand is a liability.',
  },
  {
    index: '04',
    title: 'Benchmarks, not impressions',
    body: 'We do not claim a system "works well." We define a metric, measure it on a held-out set, compare it to a baseline, and report the number. If the system performs worse on certain inputs, that gets documented — not buried.',
  },
  {
    index: '05',
    title: 'Own the full lifecycle',
    body: 'Training a model is one task. Versioning it, deploying it, monitoring its behaviour in production, detecting data drift, and knowing when to retrain — that is the engineering. We do not hand over a model and disappear. We own the lifecycle.',
  },
  {
    index: '06',
    title: 'Same standard, every time',
    body: 'There is no tier of client that gets a lower standard of work. The lab\'s open-source libraries, research code, client deliverables, and educational projects all go through the same review: does it run, is it tested, is it documented, can someone else take it over?',
  },
]

const stack = [
  { category: 'Languages',         tools: ['Python', 'SQL', 'Bash', 'C++'] },
  { category: 'ML & DL',           tools: ['PyTorch', 'Scikit-learn', 'Transformers', 'torchaudio'] },
  { category: 'LLM & RAG',         tools: ['LangChain', 'Pinecone', 'Qdrant', 'FastAPI'] },
  { category: 'Agents',            tools: ['CrewAI', 'AutoGen', 'n8n'] },
  { category: 'Deployment',        tools: ['Docker', 'GitHub Actions', 'HuggingFace Spaces', 'Streamlit'] },
  { category: 'Databases',         tools: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Tracking',          tools: ['MLflow', 'Weights & Biases'] },
  { category: 'Speech & Audio',    tools: ['torchaudio', 'ECAPA-TDNN', 'Whisper'] },
]

export default function EngineeringPhilosophyPage() {
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
              <SectionLabel>Engineering Philosophy</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Systems that run, can be read, and can be maintained.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Engineering discipline is not a value statement. It is a set of
              concrete choices made on every project — about structure, testing,
              documentation, and what "done" actually means.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Six principles</SectionLabel>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p) => (
                <div key={p.index} className="flex flex-col bg-background p-6">
                  <span className="font-mono text-lg font-semibold text-brand">{p.index}</span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionLabel>Tools &amp; stack</SectionLabel>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              The stack used across lab research, open-source releases, and
              client engagements. We pick the right tool, not the trendy one.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {stack.map((s) => (
                <div key={s.category} className="bg-background p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.category}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border px-2 py-0.5 font-mono text-xs text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
