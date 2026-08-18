'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div
      className={cn(
        // Prose styling for rich text rendering
        'prose prose-neutral dark:prose-invert max-w-none',
        // Headings
        'prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground',
        'prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl',
        // Paragraphs & Lists
        'prose-p:leading-relaxed prose-p:text-muted-foreground',
        'prose-li:text-muted-foreground prose-ul:list-disc prose-ol:list-decimal',
        // Code
        'prose-code:font-mono prose-code:text-sm prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-foreground',
        'prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border prose-pre:text-foreground',
        // Links
        'prose-a:text-brand prose-a:no-underline hover:prose-a:underline',
        // Blockquotes
        'prose-blockquote:border-l-brand/50 prose-blockquote:bg-brand/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-muted-foreground',
        // Tables
        'prose-table:border-collapse prose-th:border prose-th:border-border prose-th:bg-muted/40 prose-th:p-2 prose-th:text-left prose-td:border prose-td:border-border prose-td:p-2',
        // Strong / Bold
        'prose-strong:text-foreground prose-strong:font-semibold',
        className
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
