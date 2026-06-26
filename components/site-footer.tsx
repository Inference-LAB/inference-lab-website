import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Logo } from '@/components/logo'
import { siteConfig } from '@/lib/site'

const columns = [
  {
    title: 'Lab',
    links: [
      { label: 'Research',       href: '/research' },
      { label: 'Engineering',    href: '/engineering' },
      { label: 'Education',      href: '/curriculum' },
      { label: 'Work With Us',   href: '/#contact' },
    ],
  },
  {
    title: 'Join',
    links: [
      { label: 'All Opportunities',       href: '/join' },
      { label: 'Engineering Fellowship',  href: '/join/engineering-fellowship' },
      { label: 'Research Internship',     href: '/join' },
      { label: 'Industry Collaboration',  href: '/join' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              An applied AI research and engineering organization. Engineering
              discipline over hype, evidence over branding.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {siteConfig.location}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-foreground">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="font-mono text-[10px] font-bold leading-none">HF</span>{' '}
                  HuggingFace
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All artefacts open
            and reproducible.
          </p>
          {/* <p className="font-mono text-xs text-muted-foreground">
            Founded by {siteConfig.founder}
          </p> */}
        </div>
      </div>
    </footer>
  )
}
