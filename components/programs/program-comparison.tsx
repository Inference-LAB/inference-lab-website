import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export function ProgramComparison() {
  const comparisonData = [
    {
      metric: 'Duration',
      aiBuilder: '5.5 months*',
      appliedAi: '12.5 months',
    },
    {
      metric: 'Best for',
      aiBuilder: 'Beginners and aspiring builders',
      appliedAi: 'Aspiring AI/ML engineers',
    },
    {
      metric: 'Entry point',
      aiBuilder: 'No prior experience required',
      appliedAi: 'Basic programming required',
    },
    {
      metric: 'Primary goal',
      aiBuilder: 'Build and ship an AI-powered product',
      appliedAi: 'Develop deeper AI engineering skills',
    },
    {
      metric: 'Learning path',
      aiBuilder: 'Python → Backend → Frontend → AI → Deployment',
      appliedAi: 'Engineering → Data → ML → Deep Learning → LLMs → MLOps',
    },
    {
      metric: 'Main outcome',
      aiBuilder: 'Live AI-powered product & GitHub portfolio',
      appliedAi: 'Comprehensive AI engineering portfolio',
    },
    {
      metric: 'Next step',
      aiBuilder: 'Deeper AI engineering or product development',
      appliedAi: 'Specialization, employment, research, or advanced engineering',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Comparison Table */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/60 font-mono text-xs uppercase tracking-wider">
                <th className="py-4 pl-6 pr-4 font-semibold text-muted-foreground w-1/4">Feature</th>
                <th className="py-4 px-5 font-semibold text-brand w-3/8">
                  AI Builder Program
                </th>
                <th className="py-4 pl-5 pr-6 font-semibold text-foreground w-3/8">
                  Applied AI Engineering
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs sm:text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:bg-muted/20">
                  <td className="py-3.5 pl-6 pr-4 font-mono text-xs font-semibold uppercase text-muted-foreground">
                    {row.metric}
                  </td>
                  <td className="py-3.5 px-5 font-medium text-foreground">
                    {row.aiBuilder}
                  </td>
                  <td className="py-3.5 pl-5 pr-6 font-medium text-foreground">
                    {row.appliedAi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guide Cards Below Table */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-brand/30 bg-brand/5 p-6 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
            Starting with AI Builder?
          </span>
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Start with <strong className="text-foreground">AI Builder</strong> if you&apos;re new to programming or want to learn by building your first live AI-powered product.
          </p>
          <Link
            href="/programs/ai-builder"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-brand hover:underline"
          >
            Explore AI Builder <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
            Starting with Applied AI Engineering?
          </span>
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Choose <strong className="text-foreground">Applied AI Engineering</strong> if you already have programming foundations and want deeper technical experience across machine learning, deep learning, LLMs, and deployment.
          </p>
          <Link
            href="/programs/applied-ai-engineering"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-foreground hover:underline"
          >
            Explore Applied AI Engineering <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <p className="font-mono text-xs text-muted-foreground text-center">
        Note: AI Builder can provide a practical foundation for learners who later want to pursue deeper AI engineering through the Applied AI Engineering program.
      </p>
    </div>
  )
}
