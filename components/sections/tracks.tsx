import { Check } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { tracks } from '@/lib/content'

export function Tracks() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Three tracks, one engineering standard.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Research informs the curriculum. The curriculum trains the
            engineers. The engineers ship the services. Each track makes the
            others credible.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.id}
              id={track.id}
              className="group flex scroll-mt-24 flex-col bg-background p-7 transition-colors hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-brand">
                  {track.index}
                </span>
                <span className="h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-brand" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {track.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {track.summary}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                {track.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-foreground/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
