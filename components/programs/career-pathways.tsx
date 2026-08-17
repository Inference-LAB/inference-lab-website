import { Briefcase } from 'lucide-react'

export function CareerPathways({
  heading = 'Where Can This Lead?',
  intro,
  roles,
  footnote,
}: {
  heading?: string
  intro: string
  roles: Array<{ title: string; description: string } | string>
  footnote?: string
}) {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-muted-foreground">{intro}</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role, idx) => {
          const isString = typeof role === 'string'
          const title = isString ? role : role.title
          const desc = isString ? null : role.description

          return (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-brand/40"
            >
              <div>
                <div className="flex items-center gap-2 text-brand">
                  <Briefcase className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    Pathway 0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-foreground">{title}</h3>
                {desc && (
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {desc}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {footnote && (
        <p className="font-mono text-xs text-muted-foreground text-center pt-2">
          {footnote}
        </p>
      )}
    </div>
  )
}
