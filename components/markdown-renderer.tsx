'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

interface MarkdownRendererProps {
  content?: string | null
  className?: string
  compact?: boolean
}

export function MarkdownRenderer({ content, className, compact = false }: MarkdownRendererProps) {
  if (!content || typeof content !== 'string') {
    return null
  }

  // Normalize line breaks
  const normalizedContent = content.replace(/\r\n/g, '\n')

  return (
    <div className={cn('markdown-content text-foreground w-full break-words', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, className: c, ...props }: any) => (
            <h1
              className={cn(
                compact
                  ? 'mt-3 mb-1.5 text-lg font-bold tracking-tight text-foreground first:mt-0'
                  : 'mt-6 mb-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground first:mt-0',
                c
              )}
              {...props}
            />
          ),
          h2: ({ node, className: c, ...props }: any) => (
            <h2
              className={cn(
                compact
                  ? 'mt-3 mb-1 text-base font-semibold tracking-tight text-foreground first:mt-0'
                  : 'mt-5 mb-2.5 text-xl sm:text-2xl font-semibold tracking-tight text-foreground first:mt-0',
                c
              )}
              {...props}
            />
          ),
          h3: ({ node, className: c, ...props }: any) => (
            <h3
              className={cn(
                compact
                  ? 'mt-2 mb-1 text-sm font-semibold tracking-tight text-foreground first:mt-0'
                  : 'mt-4 mb-2 text-lg sm:text-xl font-semibold tracking-tight text-foreground first:mt-0',
                c
              )}
              {...props}
            />
          ),
          h4: ({ node, className: c, ...props }: any) => (
            <h4
              className={cn(
                compact
                  ? 'mt-2 mb-1 text-xs font-semibold tracking-tight text-foreground first:mt-0'
                  : 'mt-3.5 mb-1.5 text-base font-semibold tracking-tight text-foreground first:mt-0',
                c
              )}
              {...props}
            />
          ),
          h5: ({ node, className: c, ...props }: any) => (
            <h5
              className={cn(
                compact
                  ? 'mt-1.5 mb-0.5 text-xs font-semibold text-foreground first:mt-0'
                  : 'mt-3 mb-1 text-sm font-semibold text-foreground first:mt-0',
                c
              )}
              {...props}
            />
          ),
          h6: ({ node, className: c, ...props }: any) => (
            <h6
              className={cn(
                'mt-2 mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground first:mt-0',
                c
              )}
              {...props}
            />
          ),
          p: ({ node, className: c, ...props }: any) => (
            <p
              className={cn(
                compact
                  ? 'text-xs leading-relaxed text-muted-foreground mb-2 last:mb-0'
                  : 'text-sm sm:text-base leading-relaxed text-muted-foreground mb-4 last:mb-0',
                c
              )}
              {...props}
            />
          ),
          ul: ({ node, className: c, ...props }: any) => (
            <ul
              className={cn(
                compact
                  ? 'list-disc list-outside pl-4 mb-2 space-y-0.5 text-xs text-muted-foreground'
                  : 'list-disc list-outside pl-5 mb-4 space-y-1 text-sm sm:text-base text-muted-foreground',
                c
              )}
              {...props}
            />
          ),
          ol: ({ node, className: c, ...props }: any) => (
            <ol
              className={cn(
                compact
                  ? 'list-decimal list-outside pl-4 mb-2 space-y-0.5 text-xs text-muted-foreground'
                  : 'list-decimal list-outside pl-5 mb-4 space-y-1 text-sm sm:text-base text-muted-foreground',
                c
              )}
              {...props}
            />
          ),
          li: ({ node, className: c, ...props }: any) => (
            <li className={cn('leading-relaxed', c)} {...props} />
          ),
          blockquote: ({ node, className: c, ...props }: any) => (
            <blockquote
              className={cn(
                compact
                  ? 'my-2 border-l-2 border-brand bg-brand/5 px-3 py-1 text-xs not-italic text-muted-foreground rounded-r'
                  : 'my-4 border-l-2 border-brand bg-brand/5 px-4 py-2 text-sm not-italic text-muted-foreground rounded-r',
                c
              )}
              {...props}
            />
          ),
          hr: ({ node, className: c, ...props }: any) => (
            <hr className={cn('my-6 border-border', c)} {...props} />
          ),
          strong: ({ node, className: c, ...props }: any) => (
            <strong className={cn('font-semibold text-foreground', c)} {...props} />
          ),
          em: ({ node, className: c, ...props }: any) => (
            <em className={cn('italic text-foreground', c)} {...props} />
          ),
          del: ({ node, className: c, ...props }: any) => (
            <del className={cn('line-through opacity-70', c)} {...props} />
          ),
          a: ({ node, href, className: c, children, ...props }: any) => (
            <a
              href={href}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={cn(
                'font-medium text-brand underline underline-offset-4 transition-opacity hover:opacity-80',
                c
              )}
              {...props}
            >
              {children}
            </a>
          ),
          code: ({ node, className: c, children, ...props }: any) => {
            const isBlock = String(children).includes('\n') || (c && /language-/.test(c))
            if (isBlock) {
              return (
                <code className={cn('block font-mono text-xs text-foreground', c)} {...props}>
                  {children}
                </code>
              )
            }
            return (
              <code
                className={cn(
                  'rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground border border-border/50',
                  c
                )}
                {...props}
              >
                {children}
              </code>
            )
          },
          pre: ({ node, className: c, ...props }: any) => (
            <pre
              className={cn(
                'my-4 overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 font-mono text-xs leading-relaxed text-foreground',
                c
              )}
              {...props}
            />
          ),
          table: ({ node, className: c, ...props }: any) => (
            <div className="my-4 w-full overflow-x-auto rounded border border-border">
              <table className={cn('w-full border-collapse text-left text-sm', c)} {...props} />
            </div>
          ),
          thead: ({ node, className: c, ...props }: any) => (
            <thead
              className={cn(
                'border-b border-border bg-muted/40 font-mono text-xs uppercase tracking-wider text-foreground',
                c
              )}
              {...props}
            />
          ),
          tbody: ({ node, className: c, ...props }: any) => (
            <tbody className={cn('divide-y divide-border', c)} {...props} />
          ),
          tr: ({ node, className: c, ...props }: any) => (
            <tr className={cn('transition-colors hover:bg-muted/20', c)} {...props} />
          ),
          th: ({ node, className: c, ...props }: any) => (
            <th
              className={cn(
                'border-r border-border px-3 py-2 font-semibold text-foreground last:border-r-0',
                c
              )}
              {...props}
            />
          ),
          td: ({ node, className: c, ...props }: any) => (
            <td
              className={cn(
                'border-r border-border px-3 py-2 text-muted-foreground last:border-r-0',
                c
              )}
              {...props}
            />
          ),
          img: ({ node, className: c, alt, ...props }: any) => (
            <img
              alt={alt || ''}
              className={cn('my-4 max-w-full rounded-lg border border-border h-auto', c)}
              {...props}
            />
          ),
          input: ({ node, type, className: c, ...props }: any) => {
            if (type === 'checkbox') {
              return (
                <input
                  type="checkbox"
                  className={cn(
                    'mr-2 h-3.5 w-3.5 rounded border-border text-brand focus:ring-brand accent-brand',
                    c
                  )}
                  readOnly
                  {...props}
                />
              )
            }
            return <input type={type} className={c} {...props} />
          },
        }}
      >
        {normalizedContent}
      </ReactMarkdown>
    </div>
  )
}
