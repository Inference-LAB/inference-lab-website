import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Founder & Director',
  description:
    'Inference Lab was founded on the premise that AI research and production engineering should not be treated as separate disciplines.',
}

const profile = [
  { k: 'Role',       v: 'Founder & Director, INFERENCE Lab' },
  // { k: 'Background', v: 'Artificial Intelligence — Emerson University, Multan' },
  { k: 'Location',   v: 'Multan, Punjab, Pakistan' },
  { k: 'Research',   v: 'Low-Resource NLP, Speech Intelligence, LLM Engineering, Human Ergonomics' },
  { k: 'Method',     v: 'Architecture-first design, reproducible benchmarks, open release' },
  { k: 'Network',    v: 'Hanyang University (Republic of Korea), King Saud University (Kingdom of Saudia-Arabia), EPU Kuwait, Doane University (USA)' },
]

const focusAreas = [
  'Speech & Language Intelligence',
  'Low-Resource NLP',
  'LLM Engineering',
  'Contrastive Learning',
  'Applied ML Systems',
  'MLOps & Deployment',
]

export default function FounderPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              About
            </Link>
            <div className="mt-8">
              <SectionLabel>Founder &amp; Director</SectionLabel>
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Muhammad Khubaib Ahmad
            </h1>
            <p className="mt-3 font-mono text-sm uppercase tracking-widest text-brand">
              AI Research Engineer
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              Inference Lab exists because most AI work sits on one side of a
              divide: research that never leaves a notebook, or engineering
              that ships without rigor. The lab was built to close that gap —
              treating architecture decisions, evaluation, and deployment as
              one continuous discipline rather than three handoffs.
            </p>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.links.founderGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-foreground/30 hover:bg-card"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={siteConfig.links.founderHuggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-foreground/30 hover:bg-card"
              >
                <span className="text-[10px] font-bold">HF</span> HuggingFace
              </a>
              <a
                href={siteConfig.links.founderLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-foreground/30 hover:bg-card"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Profile facts + focus */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div>
                <SectionLabel>Profile</SectionLabel>
                <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
                  {profile.map((row) => (
                    <div
                      key={row.k}
                      className="grid grid-cols-[110px_1fr] gap-4 bg-background p-5 sm:grid-cols-[140px_1fr]"
                    >
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {row.k}
                      </span>
                      <span className="text-sm text-foreground">{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel>Focus areas</SectionLabel>
                <div className="mt-8 flex flex-wrap gap-2">
                  {focusAreas.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-10">
                  <SectionLabel>All releases</SectionLabel>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Models, datasets, and libraries produced by the lab are
                    released openly on GitHub and HuggingFace, versioned and
                    documented for independent reproduction.
                  </p>
                  <a
                    href={siteConfig.links.founderGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                  >
                    github.com/Khubaib8281
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
