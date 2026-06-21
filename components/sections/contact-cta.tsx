import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="relative flex flex-col items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Work with the lab
          </span>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Train as an engineer, collaborate on research, or build a system
            with us.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Currently running our first online cohort and preparing the first
            Engineering Fellowship. Reach out about training, research
            collaboration, or AI engineering services.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-widest transition-colors hover:border-foreground/30 hover:bg-card"
            >
              Follow on LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
