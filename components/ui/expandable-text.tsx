'use client'

import { useState } from 'react'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { cn } from '@/lib/utils'

export function ExpandableText({
  text,
  threshold = 140,
  className = 'text-sm leading-relaxed text-muted-foreground',
  btnClassName,
}: {
  text: string
  threshold?: number
  className?: string
  btnClassName?: string
}) {
  const [expanded, setExpanded] = useState(false)
  const isLong = (text || '').length > threshold

  return (
    <div className="space-y-1">
      <div className={cn(className, !expanded && isLong && 'line-clamp-2')}>
        <MarkdownRenderer content={text} />
      </div>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className={cn(
            'inline-flex items-center gap-1 font-mono text-xs font-semibold text-brand hover:underline',
            btnClassName,
          )}
        >
          {expanded ? 'Show Less ↑' : 'See Details ↓'}
        </button>
      )}
    </div>
  )
}

