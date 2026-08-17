import { BookOpen, Code, MessageSquareCheck, ArrowUpRight } from 'lucide-react'

export function LearningModel({
  heading = 'Learn. Build. Review. Improve.',
  intro,
}: {
  heading?: string
  intro?: string
}) {
  const steps = [
    {
      title: 'LEARN',
      icon: BookOpen,
      description: 'Understand the concepts, tools, and engineering principles behind each topic.',
    },
    {
      title: 'BUILD',
      icon: Code,
      description: 'Apply what you learn through practical projects and weekly assignments.',
    },
    {
      title: 'REVIEW',
      icon: MessageSquareCheck,
      description: 'Get mentor guidance, technical feedback, and help debugging your work.',
    },
    {
      title: 'IMPROVE',
      icon: ArrowUpRight,
      description: 'Refactor, evaluate, document, deploy, and improve your projects.',
    },
  ]

  return (
    <div className="space-y-6">
      {intro && <p className="text-sm leading-relaxed text-muted-foreground">{intro}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => {
          const Icon = step.icon
          return (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-brand">
                    0{idx + 1}
                  </span>
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mt-4 font-mono text-base font-bold uppercase tracking-wider text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
