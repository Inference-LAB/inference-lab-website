'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

export type TeamMember = {
  name: string
  role: string
  bio: string
  fullBio: string
  contribution: string
  focusAreas: string[]
  photo?: string
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Avatar({
  name,
  photo,
  size = 96,
  className = '',
}: {
  name: string
  photo?: string
  size?: number
  className?: string
}) {
  return (
    <div
  className={`
    relative shrink-0 overflow-hidden rounded-full
    border border-border bg-muted/40
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:scale-[1.05]
    hover:border-brand/40
    hover:shadow-[0_14px_36px_rgba(59,130,246,0.18)]
    ${className}
  `}
  style={{ height: size, width: size }}
>
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-grid">
          <span
            className="font-mono font-semibold tracking-tight text-brand"
            style={{ fontSize: size * 0.22 }}
          >
            {initials(name)}
          </span>
        </div>
      )}
    </div>
  )
}

function InfoCard({
  label,
  text,
  index,
  delay,
}: {
  label: string
  text: string
  index: number
  delay: number
}) {
  return (
    <div
      className="group relative animate-in fade-in slide-in-from-bottom-2 overflow-hidden rounded-lg border border-border bg-background p-6 [animation-fill-mode:both] [animation-duration:500ms] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-black/5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        {/* <span className="font-mono text-[10px] text-muted-foreground/40">
          {String(index).padStart(2, '0')}
        </span> */}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{text}</p>
    </div>
  )
}

function ProfileModal({
  member,
  onClose,
}: {
  member: TeamMember
  onClose: () => void
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-name"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5 animate-in zoom-in-95 fade-in slide-in-from-bottom-4 duration-300"
      >
        {/* Cover band */}
        <div className="relative h-20 overflow-hidden rounded-t-2xl bg-grid sm:h-24">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/25 via-brand/5 to-transparent" />
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_75%)] bg-background/40" />
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="group absolute right-4 top-4 z-10 rounded-full border border-border bg-background/80 p-2 text-muted-foreground shadow-sm backdrop-blur transition-all duration-200 hover:rotate-90 hover:border-foreground/30 hover:text-foreground"
        >
          <X className="h-4 w-4 transition-transform" />
        </button>

        <div className="px-6 pb-8 sm:px-8">

  {/* Premium Profile Header */}
  <div
    className="
      -mt-12
      sm:-mt-14
      rounded-2xl
      border
      border-border/70
      bg-background/80
      backdrop-blur-md
      shadow-lg
      transition-all
      duration-300
      hover:shadow-2xl
      hover:border-brand/20
      hover:-translate-y-1
      p-6
    "
  >
    <div className="flex items-center gap-5">

      <Avatar
        name={member.name}
        photo={member.photo}
        size={96}
        className="shadow-lg ring-4 ring-background"
      />

      <div className="min-w-0">

        <h3
          id="team-modal-name"
          className="
            text-3xl
            font-semibold
            tracking-tight
            transition-all
            duration-300
            hover:text-brand
            hover:-translate-y-0.5
            hover:drop-shadow-[0_6px_18px_rgba(59,130,246,0.18)]
            cursor-default
          "
        >
          {member.name}
        </h3>

        <p
          className="
            mt-2
            inline-block
            font-mono
            text-xs
            uppercase
            tracking-widest
            text-brand
            transition-all
            duration-300
            hover:text-brand/80
            hover:translate-x-1
            cursor-default
          "
        >
          {member.role}
        </p>

      </div>

    </div>
  </div>

  <div className="mt-8 grid gap-4">

  
            <InfoCard label="Bio" text={member.fullBio} index={1} delay={100} />
            <InfoCard
              label="Contribution"
              text={member.contribution}
              index={2}
              delay={190}
            />

            <div
              className="animate-in fade-in slide-in-from-bottom-2 [animation-fill-mode:both] [animation-duration:500ms]"
              style={{ animationDelay: '280ms' }}
            >
              <SectionLabel>Focus Areas</SectionLabel>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.focusAreas.map((item) => (
                  <span
                    key={item}
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

export function TeamGrid({ team }: { team: TeamMember[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null)

  return (
    <>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <button
            key={member.name}
            type="button"
            onClick={() => setSelected(member)}
            className="group flex flex-col rounded-lg border border-border bg-background p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="flex items-center gap-4">
              <Avatar name={member.name} photo={member.photo} />
              <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-brand">
                  {member.role}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {member.bio}
            </p>

            <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-brand">
              View Details
              <span className="transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <ProfileModal member={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}