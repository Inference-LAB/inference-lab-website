'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Research', href: '/research' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Education', href: '/curriculum' },
  { label: 'Work With Us', href: '/#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Inference Lab home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-mono text-xs uppercase tracking-widest transition-colors hover:text-foreground',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-muted-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/join"
            className="group inline-flex items-center gap-1.5 rounded-md bg-brand px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
          >
            Join the Lab
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 font-mono text-sm uppercase tracking-widest text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-brand px-3.5 py-2.5 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground"
          >
            Join the Lab <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
