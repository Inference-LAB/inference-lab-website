import { CheckCircle } from 'lucide-react'

export function AudienceGrid({
  cards,
  prerequisite,
}: {
  cards: Array<{ title: string; description: string }>
  prerequisite?: string
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-brand/40"
          >
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Target Learner
              </div>
              <h3 className="mt-2 text-base font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {prerequisite && (
        <div className="rounded-lg border border-brand/30 bg-brand/5 p-4 text-center font-mono text-xs text-brand sm:text-sm">
          {prerequisite}
        </div>
      )}
    </div>
  )
}
