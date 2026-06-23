import { ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SectionLabel } from '@/components/section-label'
import { siteConfig } from '@/lib/site'

const focus = [
  'Speech & Language AI',
  'Low-Resource Language Understanding',
  'AI for Healthcare & Human Performance',
  'LLM Systems Engineering',
  'Representation Learning',
]

const facts = [
  { k: 'Role', v: 'Founder & Director, INFERENCE Lab' },
  // { k: 'Education', v: 'B.S. Artificial Intelligence — Emerson University' },
  // { k: 'Standing', v: 'GPA 3.97 / 4.0 · Highest Achiever in Program' },
  { k: 'Research Network', 
    v: 'International collaborations across Saudi Arabia, Kuwait, USA, South Korea, and Canada' 
 },
]

export function Founder() {
  return (
    <section id="founder" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionLabel>The founder</SectionLabel>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {siteConfig.founder}
            </h2>
            <p className="mt-2 font-mono text-sm uppercase tracking-widest text-brand">
              AI Research Engineer
            </p>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              An AI research engineer at the intersection of rigorous research
              and production engineering — designing architectures from scratch,
              publishing reproducible research with open-source artefacts, and
              deploying end-to-end ML systems independently. Mentors and trains
              engineers in applied AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {f}
                </span>
              ))}
            </div>

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

          <div className="flex flex-col justify-center">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
              {facts.map((fact) => (
                <div
                  key={fact.k}
                  className="grid grid-cols-[100px_1fr] gap-4 bg-background p-5 sm:grid-cols-[140px_1fr]"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {fact.k}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {fact.v}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={siteConfig.links.founderGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              All models, datasets & pip-installable libraries
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
