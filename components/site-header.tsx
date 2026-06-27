'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import { Logo } from '@/components/logo'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

// ─── Nav structure ────────────────────────────────────────────────────────────
// To add/edit menu items: change the arrays below. No other file needs touching.
//
// Each top-level item can either be:
//   { label, href }           → plain link, no dropdown
//   { label, children: [...] } → dropdown; each child has label + href + description
//                                Optionally add external: true to open in new tab
// ─────────────────────────────────────────────────────────────────────────────
const NAV = [
  {
    label: 'Research',
    children: [
      {
        label: 'Publications',
        href: '/research',
        description: 'Papers, preprints, and research output',
      },
      {
        label: 'Datasets',
        href: '/research/datasets',
        description: 'Open datasets released by the lab',
      },
      {
        label: 'Research With Us',
        href: '/research/collaborate',
        description: 'End-to-end research, PhD & industry work',
      },
    ],
  },
  {
    label: 'Engineering',
    children: [
      {
        label: 'Engineering Projects',
        href: '/engineering/projects',
        description: 'Software and systems released by the lab',
      },
      {
        label: 'Services',
        href: '/engineering/services',
        description: 'What we build for clients',
      },
      {
        label: 'Engineering Philosophy',
        href: '/engineering/philosophy',
        description: 'How we think about building AI systems',
      },
    ],
  },
  // ── Education now has a dropdown ─────────────────────────────────────────
  {
    label: 'Education',
    children: [
      {
        label: 'Curriculum',
        href: '/curriculum',
        description: '6-phase, deployment-focused AI engineering program',
      },
      {
        label: 'Apply — AI Engineering Program',
        href: siteConfig.links.edu_applicationForm,  // education application form
        description: 'Join the Applied AI Engineering Program',
        external: true,
      },
      {
        label: 'Contact Us',
        href: `mailto:${siteConfig.email}`,
        description: 'Email us directly at contact@inference-lab.org',
        external: true,
      },
      {
        label: 'Verify Certificate',
        href: '/verify',
        description: 'Check authenticity of an INFERENCE Lab certificate',
      },
    ],
  },
  { label: 'Work With Us', href: '/#contact' },
  {
    label: 'About',
    children: [
      {
        label: 'Our Mission',
        href: '/about/mission',
        description: 'Why the lab exists and what drives it',
      },
      {
        label: 'Founder & Director',
        href: '/about/founder',
        description: 'Muhammad Khubaib Ahmad',
      },
      {
        label: 'Research Philosophy',
        href: '/about/research-philosophy',
        description: 'Reproducibility, rigour, and real output',
      },
    ],
  },
] as const

type NavChild = { label: string; href: string; description: string; external?: boolean }
type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; children: readonly NavChild[]; href?: never }

// ─── Dropdown ─────────────────────────────────────────────────────────────────
function Dropdown({
  label,
  children,
  pathname,
}: {
  label: string
  children: readonly NavChild[]
  pathname: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // close on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const internalChildren = children.filter((c) => !c.external)
  const active = internalChildren.some((c) => pathname?.startsWith(c.href.split('#')[0]))

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          'inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-foreground',
          active ? 'text-foreground' : 'text-muted-foreground',
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            'h-3 w-3 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2">
          {/* little arrow */}
          <div className="mx-auto mb-0 h-2 w-2 -translate-y-px rotate-45 border-l border-t border-border bg-background" />
          <div className="overflow-hidden rounded-lg border border-border bg-background shadow-xl shadow-black/10">
            {children.map((item, i) => {
              const isExternal = item.external === true

              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex flex-col gap-0.5 px-4 py-3.5 transition-colors hover:bg-muted',
                      i !== 0 && 'border-t border-border',
                    )}
                  >
                    <span className="flex items-center gap-1 text-sm font-medium text-foreground">
                      {item.label}
                      <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </a>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex flex-col gap-0.5 px-4 py-3.5 transition-colors hover:bg-muted',
                    i !== 0 && 'border-t border-border',
                    pathname?.startsWith(item.href) && 'bg-muted',
                  )}
                >
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.description}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Inference Lab home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {(NAV as readonly NavItem[]).map((item) =>
            item.children ? (
              <Dropdown
                key={item.label}
                label={item.label}
                children={item.children}
                pathname={pathname ?? ''}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  'font-mono text-xs uppercase tracking-widest transition-colors hover:text-foreground',
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Join CTA */}
        <div className="hidden items-center md:flex">
          <Link
            href="/join"
            className="group inline-flex items-center gap-1.5 rounded-md bg-brand px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-brand-foreground transition-opacity hover:opacity-90"
          >
            Join the Lab
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────────────────────── */}
      <div
        className={cn(
          'overflow-hidden border-t border-border md:hidden transition-all duration-200',
          mobileOpen ? 'max-h-[700px]' : 'max-h-0 border-t-0',
        )}
      >
        <nav className="flex flex-col gap-0.5 px-4 py-3">
          {(NAV as readonly NavItem[]).map((item) => {
            if (item.children) {
              const expanded = mobileExpanded === item.label
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded((v) =>
                        v === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 font-mono text-sm uppercase tracking-widest text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-200',
                        expanded && 'rotate-180',
                      )}
                    />
                  </button>
                  {expanded && (
                    <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3">
                      {item.children.map((child) => {
                        const isExternal = (child as NavChild).external === true
                        if (isExternal) {
                          return (
                            <a
                              key={child.href}
                              href={child.href}
                              target={child.href.startsWith('mailto') ? undefined : '_blank'}
                              rel={child.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                              onClick={() => {
                                setMobileOpen(false)
                                setMobileExpanded(null)
                              }}
                              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              {child.label}
                              <ArrowUpRight className="h-3 w-3" />
                            </a>
                          )
                        }
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileExpanded(null)
                            }}
                            className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 font-mono text-sm uppercase tracking-widest text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            )
          })}

          <Link
            href="/join"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-brand px-3.5 py-2.5 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground"
          >
            Join the Lab <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
