/**
 * INFERENCE Lab — Certificate Registry
 *
 * HOW TO ADD A NEW CERTIFICATE
 * ─────────────────────────────
 * 1. Generate an ID using the format:  IL-PHASE-YYYY-NNNN
 *      IL        = INFERENCE Lab
 *      YYYY      = year issued (e.g. 2025)
 *      PHASE     = program phase or short program code (e.g. P1, P6, AEP)
 *      NNNN      = 4-digit zero-padded serial (e.g. 0001)
 *    Example: IL-2025-AEP-0001
 *
 * 2. Add a new entry to the CERTIFICATES object below.
 *    The key is the certificate ID (case-insensitive — the verify page
 *    normalises to uppercase before lookup).
 *
 * 3. Commit and push — the next Vercel deploy makes it live instantly.
 *    No database, no API keys, no backend needed.
 *
 * FIELDS
 * ──────
 * name        Candidate's full name as it appears on the certificate
 * program     Full program / phase name
 * issued      ISO date string  YYYY-MM-DD
 * grade       (optional) e.g. "Distinction", "Merit", "Pass"
 */

export type Certificate = {
  name: string
  program: string
  issued: string
  grade?: string
}

export const CERTIFICATES: Record<string, Certificate> = {
  // ── Example / demo entries — replace with real ones ───────────────────────
  'IL-RC-2026-0001': {
    name: 'Khadija Faisal',
    program: 'Research Collaboration',
    issued: '2026-06-25',
    grade: '',
  },
  'IL-RC-2026-0002': {
    name: 'Faiez Ahmad',
    program: 'Research Collaboration',
    issued: '2026-06-25',
    grade: '',
  },
  'IL-RC-2026-0003' : {
    name: 'Sara',
    program: 'Research Collaboration',
    issued: '2026-06-25',
    grade: ''
  },
  'IL-RC-2026-0004' : {
    name: 'Muzammil Shadab',
    program: 'Research Collaboration',
    issued: '2026-06-25',
    grade: ''
  },
  'IL-RC-2026-0005' : {
    name: 'Muzammil Shadab',
    program: 'Research Collaboration',
    issued: '2026-06-25',
    grade: ''
  },
  // ── Add  certificates below ───────────────────────────────────────────
  // 'IL-2025-AEP-0003': {
  //   name: 'Full Name Here',
  //   program: 'Applied AI Engineering Program — Phase X',
  //   issued: 'YYYY-MM-DD',
  //   grade: 'Distinction',
  // },
  'IL-WS-0001':{
    name: 'Sania Ali',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0002':{
    name: 'Mudassir',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0003':{
    name: 'Kinzul-eman',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0004':{
    name: 'Ayesha Batool',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0005':{
    name: 'Zainab Gull',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0006':{
    name: 'Kiran Niaz',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0007':{
    name: 'Rameez',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0008':{
    name: 'Muhammad Hamza',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0009':{
    name: 'Khadija Faisal',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0010':{
    name: 'Kinza Yasir',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0011':{
    name: 'Muhammad Abdullah',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0012':{
    name: 'Ahmad Ali',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0013':{
    name: 'Mustafa Ali',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0014':{
    name: 'Namera Manzoor',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0015':{
    name: 'Faqat Jaffar',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0016':{
    name: 'Ali Hamza',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0017':{
    name: 'Muhammad Asghar',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0018':{
    name: 'Hania Musawar',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0019':{
    name: 'Waleed Anjum',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0020':{
    name: 'Zeeshan Ghufran',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0021':{
    name: 'Arooj Akram',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
  'IL-WS-0022':{
    name: 'Muhammad Taqi',
    program: 'Generative AI for Educators (Workshop)',
    issued: '2026-08-09',
    grade: ''
  },
}

/**
 * Look up a certificate by ID.
 * Returns the Certificate object if found, or null if not in the registry.
 * Input is trimmed and uppercased so "il-AEP-2026-0001" also works.
 */
export function lookupCertificate(id: string): Certificate | null {
  const key = id.trim().toUpperCase()
  return CERTIFICATES[key] ?? null
}