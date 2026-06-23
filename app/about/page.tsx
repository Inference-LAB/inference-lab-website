import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Inference Lab — mission, founder, and research philosophy.',
}

const sections = [
  {
    href: '/about/mission',
    label: 'Our Mission',
    index: '01',
    summary:
      'Why the lab exists — closing the gap between AI concepts and engineers who can actually build, deploy, and maintain AI systems.',
  },
  {
    href: '/about/founder',
    label: 'Founder & Director',
    index: '02',
    summary:
      'Muhammad Khubaib Ahmad — AI Research Engineer, founder of Inference Lab, and the person behind all the lab\'s research and engineering work.',
  },
  {
    href: '/about/research-philosophy',
    label: 'Research Philosophy',
    index: '03',
    summary:
      'Reproducibility, permanent DOIs, deployable inference code. What makes research real and why it matters.',
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <SectionLabel>About Inference Lab</SectionLabel>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Engineering discipline over hype.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              An applied AI research and engineering organization based in
              Multan, Punjab, Pakistan — running three reinforcing tracks:
              original research, engineering services, and structured
              engineering education.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col bg-background p-8 transition-colors hover:bg-card"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {s.index}
                </span>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">
                  {s.label}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-brand transition-opacity group-hover:opacity-80">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
