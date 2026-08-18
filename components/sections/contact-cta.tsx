import { ArrowUpRight, Mail } from 'lucide-react'
import { LinkedinIcon, InstagramIcon, FacebookIcon } from '@/components/brand-icons'
import { siteConfig } from '@/lib/site'

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-border">
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="relative flex flex-col items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-brand font-semibold">
            Work with the lab
          </span>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Train as an engineer, collaborate on research, or build a system with us.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Currently running our online cohorts and preparing the Engineering Fellowship.
            Reach out about mentorship, research collaboration, or bespoke AI engineering services.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-brand-foreground shadow-md transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </div>

          {/* Follow Us on Social Media Section */}
          <div className="mt-12 w-full max-w-xl border-t border-border pt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
              Follow Us on Social Media
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs font-semibold text-foreground transition-all hover:border-foreground/40 hover:bg-muted"
              >
                <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs font-semibold text-foreground transition-all hover:border-foreground/40 hover:bg-muted"
              >
                <InstagramIcon className="h-4 w-4 text-[#E4405F]" />
                <span>Instagram</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs font-semibold text-foreground transition-all hover:border-foreground/40 hover:bg-muted"
              >
                <FacebookIcon className="h-4 w-4 text-[#1877F2]" />
                <span>Facebook</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
