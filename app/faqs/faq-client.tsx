'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Search,
  ChevronDown,
  HelpCircle,
  Sparkles,
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  MessageSquare,
  ThumbsUp,
  Code,
  Layers,
  Globe,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

export type FaqItem = {
  id: string
  category: string
  question: string
  answer: string
}

interface FaqClientProps {
  initialFaqs: FaqItem[]
}

export default function FaqClient({ initialFaqs }: FaqClientProps) {
  const [dbFaqs, setDbFaqs] = useState<FaqItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)
  const [likedFaqs, setLikedFaqs] = useState<Record<string, boolean>>({})

  useEffect(() => {
    fetch('/api/admin/faqs')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setDbFaqs(data)
        }
      })
      .catch((err) => console.error('Failed to load DB FAQs:', err))
  }, [])

  const allFaqs = useMemo(() => {
    return [...initialFaqs, ...dbFaqs]
  }, [initialFaqs, dbFaqs])

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allFaqs.map((f) => f.category)))
    return ['All', ...cats]
  }, [allFaqs])

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'All' || faq.category.toLowerCase() === selectedCategory.toLowerCase()
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [allFaqs, selectedCategory, searchQuery])

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setLikedFaqs((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back home
            </Link>

            <div className="mt-8">
              <SectionLabel>Knowledge Base &amp; Support</SectionLabel>
            </div>

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Everything you need to know about INFERENCE Lab&apos;s research services, engineering tracks, AI Builder program,
              Applied AI Engineering fellowship, and admissions.
            </p>

            {/* Search Input */}
            <div className="mt-10 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g., eligibility, fees, datasets, PhD support, prerequisites)..."
                  className="w-full rounded-xl border border-border bg-card/80 py-4 pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground/70 backdrop-blur focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Selector */}
        <section className="sticky top-16 z-20 border-b border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
              {categories.map((category) => {
                const isActive = selectedCategory === category
                const count =
                  category === 'All'
                    ? allFaqs.length
                    : allFaqs.filter((f) => f.category.toLowerCase() === category.toLowerCase()).length

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      'shrink-0 rounded-lg px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all',
                      isActive
                        ? 'bg-brand text-brand-foreground shadow-sm'
                        : 'border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground',
                    )}
                  >
                    {category}{' '}
                    <span className={cn('ml-1.5 opacity-70 text-[10px]', isActive ? 'text-brand-foreground' : 'text-muted-foreground')}>
                      ({count})
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQs List Section */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'Question' : 'Questions'}
            </h2>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="font-mono text-xs text-brand hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>

          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id
                const isLiked = Boolean(likedFaqs[faq.id])

                return (
                  <div
                    key={faq.id}
                    className={cn(
                      'rounded-xl border border-border bg-card transition-all duration-200',
                      isOpen && 'border-brand/50 ring-1 ring-brand/20 shadow-md',
                    )}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex w-full items-start justify-between gap-4 p-6 text-left"
                    >
                      <div className="space-y-1.5">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand">
                          {faq.category}
                        </span>
                        <h3 className="text-base font-semibold text-foreground sm:text-lg">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={cn(
                          'mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200',
                          isOpen && 'rotate-180 text-brand',
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-border/60 px-6 pb-6 pt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        <p className="whitespace-pre-line">{faq.answer}</p>

                        <div className="flex items-center justify-between border-t border-border/40 pt-4 text-xs font-mono">
                          <span className="text-muted-foreground">Was this answer helpful?</span>
                          <button
                            onClick={(e) => toggleLike(faq.id, e)}
                            className={cn(
                              'inline-flex items-center gap-1.5 rounded px-2.5 py-1 transition-colors',
                              isLiked
                                ? 'bg-green-500/10 text-green-600 dark:text-green-400 font-semibold'
                                : 'border border-border text-muted-foreground hover:bg-muted hover:text-foreground',
                            )}
                          >
                            <ThumbsUp className="h-3.5 w-3.5" />
                            {isLiked ? 'Helpful!' : 'Helpful'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground/60" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">No matching questions found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try searching for another keyword or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-mono text-xs uppercase tracking-wider text-brand-foreground"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Still Have Questions Box */}
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-brand/30 bg-gradient-to-b from-brand/5 to-transparent p-8 text-center sm:p-12">
              <MessageSquare className="mx-auto h-10 w-10 text-brand" />
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Still have questions?
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Can’t find the answer you’re looking for? Schedule a 1-on-1 guidance call with the INFERENCE Lab team.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-brand-foreground hover:opacity-90"
                >
                  Contact Our Team
                </Link>
                <a
                  href={siteConfig.links.edu_applicationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-foreground hover:bg-muted"
                >
                  Apply to Program
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
