'use client'

import { useState } from 'react'
import { MarkdownRenderer } from './markdown-renderer'
import { cn } from '@/lib/utils'

interface MarkdownTextareaProps {
  value: string
  onChange: (value: string) => void
  rows?: number
  placeholder?: string
  required?: boolean
  label?: string
  className?: string
}

export function MarkdownTextarea({
  value,
  onChange,
  rows = 4,
  placeholder,
  required = false,
  label,
  className
}: MarkdownTextareaProps) {
  const [mode, setMode] = useState<'write' | 'preview'>('write')

  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <div className="flex items-center justify-between">
          <label className="block font-mono text-xs text-muted-foreground">
            {label} {required && '*'}
          </label>
        </div>
      )}

      <div className="rounded border border-border bg-background overflow-hidden flex flex-col">
        {/* Tabs & Toolbar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/20 px-3 py-1.5">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setMode('write')}
              className={cn(
                "rounded px-2.5 py-1 font-mono text-xs font-semibold transition-colors",
                mode === 'write'
                  ? "bg-brand/10 text-brand"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              Write
            </button>
            <button
              type="button"
              onClick={() => setMode('preview')}
              className={cn(
                "rounded px-2.5 py-1 font-mono text-xs font-semibold transition-colors",
                mode === 'preview'
                  ? "bg-brand/10 text-brand"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              Preview
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-3 font-mono text-[10px] text-muted-foreground/60">
            <span>**bold**</span>
            <span>*italic*</span>
            <span># heading</span>
            <span>- list</span>
            <span>`code`</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          {mode === 'write' ? (
            <textarea
              required={required}
              rows={rows}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder || 'Support Markdown (e.g. **bold**, - list)'}
              className="w-full resize-y bg-transparent px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-brand font-mono leading-relaxed min-h-[100px]"
            />
          ) : (
            <div 
              className="w-full bg-transparent px-4 py-3 overflow-y-auto"
              style={{ minHeight: `${rows * 24 + 24}px`, maxHeight: '600px' }}
            >
              {value ? (
                <MarkdownRenderer content={value} />
              ) : (
                <p className="text-sm text-muted-foreground italic font-mono">Nothing to preview</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
