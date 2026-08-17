'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

type ProfileRow = { k: string; v: string }

export function FounderProfilePanel({
  profile,
  focusAreas,
}: {
  profile: ProfileRow[]
  focusAreas: string[]
}) {
  const [open, setOpen] = useState(false)

  const bioRow = profile.find((row) => row.k.toLowerCase() === 'bio')
  const otherRows = profile.filter((row) => row !== bioRow)

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="founder-profile-panel"
        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-mono text-xs uppercase tracking-widest text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:bg-white dark:text-black"
      >
        {open ? 'Hide Details' : 'View Details'}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        id="founder-profile-panel"
        className="grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-10 grid gap-6">
            {/* Bio */}
            {bioRow && (
              <div
                className="group relative overflow-hidden rounded-lg border border-border bg-background p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-black/5 motion-reduce:transition-none sm:p-8"
                style={{
                  transitionProperty:
                    'transform, opacity, border-color, box-shadow',
                  transitionDelay: open ? '100ms' : '0ms',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(12px)',
                }}
              >
                <span className="absolute left-0 top-0 h-full w-0.5 bg-brand/40 transition-colors duration-300 group-hover:bg-brand" />
                <div className="grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-8">
                  <SectionLabel>Bio</SectionLabel>
                  <p className="text-pretty text-sm leading-relaxed text-foreground sm:text-base">
                    {bioRow.v}
                  </p>
                </div>
              </div>
            )}

            {/* Remaining profile rows, e.g. Contribution */}
            {otherRows.length > 0 && (
              <div className="grid gap-4">
                {otherRows.map((row, i) => (
                  <div
                    key={row.k}
                    className="group relative overflow-hidden rounded-lg border border-border bg-background p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-black/5 motion-reduce:transition-none"
                    style={{
                      transitionProperty:
                        'transform, opacity, border-color, box-shadow',
                      transitionDelay: open ? `${180 + i * 90}ms` : '0ms',
                      opacity: open ? 1 : 0,
                      transform: open ? 'translateY(0)' : 'translateY(12px)',
                    }}
                  >
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {row.k}
                      </span>
                      {/* <span className="font-mono text-[10px] text-muted-foreground/40">
                        {String(i + 1).padStart(2, '0')}
                      </span> */}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {row.v}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Focus areas */}
            <div
              className="transition-all duration-300 ease-out motion-reduce:transition-none"
              style={{
                transitionDelay: open
                  ? `${180 + otherRows.length * 90 + 100}ms`
                  : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              <SectionLabel>Focus Areas</SectionLabel>
              <div className="mt-6 flex flex-wrap gap-2">
                {focusAreas.map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="group relative cursor-default overflow-hidden rounded-full border border-border px-3.5 py-1.5 font-mono text-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground hover:shadow-md hover:shadow-black/10"
                  >
                    <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    <span className="relative z-10 text-muted-foreground transition-colors duration-300 group-hover:text-background">
                      {item}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}