import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const stats = [
  { value: '8', label: 'Research works' },
  { value: '10+', label: 'Deployed systems' },
  { value: '12.5mo', label: 'Curriculum' },
  { value: '134K', label: 'Labeled samples released' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Applied AI Lab · {siteConfig.location}
          </span>
        </div>

        <h1 className="mt-7 max-w-4xl text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          We build AI engineers,
          <br className="hidden sm:block" /> research, and the systems
          <br className="hidden sm:block" />{' '}
          <span className="text-muted-foreground">that ship.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Inference Lab closes the gap between people who know AI concepts and
          engineers who can actually build, deploy and maintain AI systems —
          while producing research that is reproducible and publicly verifiable.
          Engineering discipline over hype.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#education"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
          >
            Explore the curriculum
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-foreground/30 hover:bg-card"
          >
            View open source
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-5">
              <dt className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
