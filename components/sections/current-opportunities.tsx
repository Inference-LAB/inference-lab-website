import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { PositionCard } from '@/components/position-card'
import { positions } from '@/lib/positions'

export function CurrentOpportunities() {
  const visible = positions.filter((p) => p.status !== 'closed')

  return (
    <section id="opportunities" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Join Inference Lab</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Work on real AI systems, research, and open-source.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            We&apos;re building AI systems, conducting research, and training
            engineers. Every position involves real, shipped work.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((position) => (
            <PositionCard key={position.id} position={position} variant="compact" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/join"
            className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-foreground/30 hover:bg-card"
          >
            View all opportunities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
