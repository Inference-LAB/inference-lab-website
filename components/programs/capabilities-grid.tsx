import { CheckSquare } from 'lucide-react'

export function CapabilitiesGrid({
  items,
}: {
  items: Array<{ title: string; description: string }>
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-border bg-card p-5 transition-all hover:border-brand/40"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-brand">
            <CheckSquare className="h-4 w-4 text-brand" />
            Capability 0{idx + 1}
          </div>
          <h3 className="mt-2 text-base font-bold text-foreground">{item.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}
