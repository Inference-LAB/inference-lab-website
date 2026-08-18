'use client'

import { useState } from 'react'
import { ChevronDown, Sparkles, CheckCircle2, Code2, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ProgramPhase } from '@/data/programs/ai-builder'
import type { AppliedAIPhase } from '@/data/programs/applied-ai'

export function PhaseAccordion({
  phases,
}: {
  phases: (ProgramPhase | AppliedAIPhase)[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const togglePhase = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {phases.map((phase, idx) => {
        const isOpen = openIndex === idx
        const appliedPhase = phase as AppliedAIPhase

        return (
          <div key={idx} className="transition-colors">
            <button
              type="button"
              onClick={() => togglePhase(idx)}
              className={cn(
                'flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6',
                isOpen ? 'bg-muted/40' : 'hover:bg-muted/20',
              )}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                  {phase.number}
                </span>
                <span className="text-base font-semibold text-foreground sm:text-lg">
                  {phase.title}
                </span>
                {appliedPhase.duration && (
                  <span className="inline-flex w-fit items-center rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {appliedPhase.duration}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-muted-foreground transition-transform duration-200',
                    isOpen && 'rotate-180 text-brand',
                  )}
                />
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-border bg-card/60 p-5 sm:p-7">
                {/* Meta details if available */}
                {(appliedPhase.duration || appliedPhase.monthlyFee || appliedPhase.fee) && (
                  <div className="mb-6 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-background/60 p-3.5 font-mono text-xs text-muted-foreground">
                    {appliedPhase.duration && (
                      <div>
                        <span className="font-semibold uppercase text-foreground">Duration:</span>{' '}
                        {appliedPhase.duration}
                      </div>
                    )}
                    {appliedPhase.monthlyFee && (
                      <div>
                        <span className="font-semibold uppercase text-foreground">Monthly:</span>{' '}
                        {appliedPhase.monthlyFee}
                      </div>
                    )}
                    {appliedPhase.fee && (
                      <div>
                        <span className="font-semibold uppercase text-foreground">Phase Total:</span>{' '}
                        <span className="font-bold text-foreground">{appliedPhase.fee}</span>
                      </div>
                    )}
                  </div>
                )}

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {phase.description}
                </p>

                {/* Skills Grid */}
                <div className="mt-6 border-t border-border pt-5">
                  <h4 className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                    <Code2 className="h-3.5 w-3.5 text-brand" /> You Will Learn
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {phase.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2 rounded border border-border/60 bg-background/50 p-2 text-xs"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                        <span className="font-mono text-foreground/90">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase Project */}
                {phase.project && (
                  <div className="mt-6 rounded-lg border border-brand/30 bg-brand/5 p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-brand" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                        Phase Capstone Project
                      </span>
                    </div>
                    <h5 className="mt-2 text-sm font-bold text-foreground sm:text-base">
                      {phase.project.title}
                    </h5>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {phase.project.description}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
