import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand',
        className,
      )}
    >
      <span className="h-px w-6 bg-brand" />
      {children}
    </span>
  )
}
