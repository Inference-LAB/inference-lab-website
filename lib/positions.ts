// ─────────────────────────────────────────────────────────────────────────────
// OPEN POSITIONS — edit this file to update what shows on /join
//
// HOW TO UPDATE POSITIONS:
// 1. Change `status` to control the badge: 'open' | 'soon' | 'closed'
// 2. Change `applicationsOpen` to true/false (shows CTA button when true)
// 3. Edit any other field — changes are live after `git push` redeploys.
//
// Add a new position by copying an existing object and adding it to the array.
// ─────────────────────────────────────────────────────────────────────────────

export type PositionStatus = 'open' | 'soon' | 'closed'

export type Position = {
  id: string
  title: string
  type: string                // e.g. "6-Month Fellowship", "Rolling"
  status: PositionStatus
  applicationsOpen: boolean
  summary: string
  highlights: string[]
  href: string                // internal page route, or '' for anchor
  applyHref: string           // direct apply link — Tally/Google Form/etc.
}

export const positions: Position[] = [
  {
    id: 'engineering-fellowship',
    title: 'Engineering Fellowship',
    type: '3-Month · Remote · Flexible',
    status: 'open',
    applicationsOpen: true,
    summary:
      'Work on real AI systems alongside the lab — agentic pipelines, LLM applications, speech AI, and production MLOps. Designed for engineers who want serious project experience, not busy-work.',
    highlights: [
      'Real shipped projects (not toy exercises)',
      'Mentorship from the lab founder',
      'Open-source contributions with your name on them',
      'Research exposure and co-authorship opportunities',
    ],
    href: '/join/engineering-fellowship',
    applyHref: 'https://forms.gle/ZUMht8VUfPwepPSW6',  // replace with the updated form url 
  },
  {
    id: 'research-internship',
    title: 'Research Internship',
    type: 'Flexible · Remote',
    status: 'closed',
    applicationsOpen: true,
    summary:
      'Contribute to active research in low-resource NLP or speech AI. Help with data collection, annotation pipelines, model evaluation, and writing. All work is published with proper attribution.',
    highlights: [
      'Co-authorship on published work',
      'Hands-on reproducible research workflow',
      'Access to lab datasets and compute resources',
      'International collaboration network',
    ],
    href: '/join',
    applyHref: 'https://inference-lab-ai.vercel.app/join',  // to be replaced with form URL
  },
  {
    id: 'volunteer-contributor',
    title: 'Volunteer Research Contributor',
    type: 'Rolling Applications',
    status: 'soon',
    applicationsOpen: true,
    summary:
      'Contribute to open-source tooling, dataset annotation, or benchmarking tasks on a flexible schedule. No minimum commitment — just genuine interest in doing useful work.',
    highlights: [
      'Flexible hours, fully remote',
      'Lab credit on contributions',
      'Path to Research Internship',
    ],
    href: '/join',
    applyHref: 'https://inference-lab-ai.vercel.app/join',  // to be replaced with form URL
  },
  {
    id: 'industry-collaboration',
    title: 'Industry Collaboration',
    type: 'Project-Based · Open',
    status: 'open',
    applicationsOpen: true,
    summary:
      'Partner with INFERENCE Lab on applied AI R&D. We work with organizations that need rigorous, reproducible engineering — not a vendor relationship, a research partnership.',
    highlights: [
      'Joint research and engineering deliverables',
      'Domain expertise in NLP, speech AI, LLM systems',
      'Co-publication opportunities',
    ],
    href: '/join',
    applyHref: `mailto:inferencelab.ai@gmail.com`,
  },
]

// Status badge display config — controls badge colour + label on the cards
export const statusConfig: Record<PositionStatus, { label: string; className: string }> = {
  open:   { label: 'Applications Open',  className: 'border-brand/40 text-brand bg-brand/5' },
  soon:   { label: 'Opening Soon',       className: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/5' },
  closed: { label: 'Closed',             className: 'border-border text-muted-foreground' },
}
