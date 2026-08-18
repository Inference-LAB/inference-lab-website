'use client'

import { useState } from 'react'
import { ChevronDown, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { AppliedAIPolicy } from '@/data/programs/applied-ai'

export function ProgramPolicies({ policies }: { policies: AppliedAIPolicy[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 border-b border-border pb-4 mb-4">
        <ShieldCheck className="h-5 w-5 text-brand" />
        <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
          Program Policies &amp; Academic Terms
        </h3>
      </div>

      <div className="divide-y divide-border">
        {policies.map((policy, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={idx}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between py-3.5 text-left transition-colors hover:text-brand"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  {policy.title}
                </span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-muted-foreground transition-transform duration-200',
                    isOpen && 'rotate-180 text-brand',
                  )}
                />
              </button>
              {isOpen && (
                <div className="pb-4 pt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {policy.content}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
