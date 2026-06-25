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
  // ── Add  certificates below ───────────────────────────────────────────
  // 'IL-2025-AEP-0003': {
  //   name: 'Full Name Here',
  //   program: 'Applied AI Engineering Program — Phase X',
  //   issued: 'YYYY-MM-DD',
  //   grade: 'Distinction',
  // },
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
