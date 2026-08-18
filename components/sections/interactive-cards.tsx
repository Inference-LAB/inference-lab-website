import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Code2,
  Users,
  Sparkles,
  ExternalLink,
  Cpu,
  Layers,
  Terminal,
  Compass,
  Briefcase,
  FlaskConical,
} from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { defaultInitiatives, type InitiativeItem } from '@/lib/data-store'

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  GraduationCap,
  Code2,
  Users,
  Sparkles,
  ExternalLink,
  Cpu,
  Layers,
  Terminal,
  Compass,
  Briefcase,
  FlaskConical,
}

interface InteractiveCardsProps {
  initiatives?: InitiativeItem[]
}

export function InteractiveCards({ initiatives }: InteractiveCardsProps) {
  const displayCards = initiatives && initiatives.length > 0 ? initiatives : defaultInitiatives

  return (
    <section className="border-b border-border bg-card/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Core Initiatives</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Research, Engineering &amp; Education
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Explore how INFERENCE Lab combines academic research rigor with full-lifecycle software engineering and technical mentorship.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {displayCards.map((card) => {
            const Icon = iconMap[card.icon] || Sparkles
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                        {card.tag}
                      </span>
                    </div>
                    <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand">
                    {card.title}
                  </h3>

                  <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>

                  <div className="mt-6 border-t border-border pt-6">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                      Featured Work &amp; Focus:
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {(Array.isArray(card.highlights) ? card.highlights : []).map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 font-mono text-xs text-foreground/90"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-brand">
                    {card.cta}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background transition-transform group-hover:translate-x-1 group-hover:border-brand">
                    <ArrowRight className="h-4 w-4 text-foreground transition-colors group-hover:text-brand" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

