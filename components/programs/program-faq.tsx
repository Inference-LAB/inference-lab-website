'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ProgramFAQ({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className={cn(
                'flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6',
                isOpen ? 'bg-muted/30' : 'hover:bg-muted/10',
              )}
            >
              <span className="text-sm font-semibold text-foreground sm:text-base pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200',
                  isOpen && 'rotate-180 text-brand',
                )}
              />
            </button>
            {isOpen && (
              <div className="border-t border-border bg-card/40 px-5 pb-6 pt-4 sm:px-6">
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
