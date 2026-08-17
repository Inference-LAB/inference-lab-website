import fs from 'fs'
import path from 'path'
import { supabase, isSupabaseConfigured } from './supabase'

const STORE_DIR = path.join(process.cwd(), 'data', 'store')

function ensureDir() {
  if (!fs.existsSync(STORE_DIR)) {
    fs.mkdirSync(STORE_DIR, { recursive: true })
  }
}

function readJson<T>(filename: string, fallback: T): T {
  ensureDir()
  const filePath = path.join(STORE_DIR, filename)
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(data) as T
    }
  } catch (err) {
    console.error(`Error reading ${filename}:`, err)
  }
  return fallback
}

function writeJson<T>(filename: string, data: T): boolean {
  ensureDir()
  const filePath = path.join(STORE_DIR, filename)
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
    return true
  } catch (err) {
    console.error(`Error writing ${filename}:`, err)
    return false
  }
}

// ── Publication Types & Handlers ─────────────────────────────────────────────
export type PublicationItem = {
  id: string
  title: string
  venue: string
  status: 'Under Review' | 'Published Preprint' | 'Published' | 'In Progress'
  year: string
  doi?: string
  highlight: string
}

export async function getPublications(): Promise<PublicationItem[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('publications').select('*')
      if (!error && data !== null) {
        return (data as any[]).map((p) => ({
          ...p,
          status: p.status === 'Accepted' ? 'Published' : p.status,
        })) as PublicationItem[]
      }
    } catch (e) {
      console.warn('Supabase fetch failed for publications, using JSON fallback:', e)
    }
  }
  const local = readJson<PublicationItem[]>('publications.json', [])
  return local.map((p) => ({
    ...p,
    status: (p.status as string) === 'Accepted' ? 'Published' : p.status,
  }))
}

export async function savePublications(items: PublicationItem[]): Promise<boolean> {
  writeJson('publications.json', items)
  if (isSupabaseConfigured) {
    try {
      const itemIds = items.map((i) => i.id)
      const { data: existing } = await supabase.from('publications').select('id')
      if (existing && existing.length > 0) {
        const toDelete = existing.filter((e: any) => !itemIds.includes(e.id)).map((e: any) => e.id)
        if (toDelete.length > 0) {
          await supabase.from('publications').delete().in('id', toDelete)
        }
      }
      if (items.length > 0) {
        const { error } = await supabase.from('publications').upsert(items)
        if (error) console.error('Supabase save error (publications):', error.message)
      }
    } catch (e) {
      console.error('Supabase save failed for publications:', e)
    }
  }
  return true
}

export async function deletePublication(id: string): Promise<boolean> {
  const current = await getPublications()
  const filtered = current.filter((p) => p.id !== id)
  writeJson('publications.json', filtered)
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('publications').delete().eq('id', id)
      if (error) console.error('Supabase delete error (publications):', error.message)
    } catch (e) {
      console.error('Supabase delete failed for publications:', e)
    }
  }
  return true
}

// ── Software Types & Handlers ────────────────────────────────────────────────
export type SoftwareItem = {
  id: string
  name: string
  category: string
  description: string
  tags: string[]
  pypi?: boolean
}

export async function getSoftware(): Promise<SoftwareItem[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('software').select('*')
      if (!error && data !== null) {
        return data as SoftwareItem[]
      }
    } catch (e) {
      console.warn('Supabase fetch failed for software:', e)
    }
  }
  return readJson<SoftwareItem[]>('software.json', [])
}

export async function saveSoftware(items: SoftwareItem[]): Promise<boolean> {
  writeJson('software.json', items)
  if (isSupabaseConfigured) {
    try {
      const itemIds = items.map((i) => i.id)
      const { data: existing } = await supabase.from('software').select('id')
      if (existing && existing.length > 0) {
        const toDelete = existing.filter((e: any) => !itemIds.includes(e.id)).map((e: any) => e.id)
        if (toDelete.length > 0) {
          await supabase.from('software').delete().in('id', toDelete)
        }
      }
      if (items.length > 0) {
        const { error } = await supabase.from('software').upsert(items)
        if (error) console.error('Supabase save error (software):', error.message)
      }
    } catch (e) {
      console.error('Supabase save failed for software:', e)
    }
  }
  return true
}

export async function deleteSoftware(id: string): Promise<boolean> {
  const current = await getSoftware()
  const filtered = current.filter((s) => s.id !== id)
  writeJson('software.json', filtered)
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('software').delete().eq('id', id)
      if (error) console.error('Supabase delete error (software):', error.message)
    } catch (e) {
      console.error('Supabase delete failed for software:', e)
    }
  }
  return true
}

// ── Position / Career Types & Handlers ───────────────────────────────────────
export type PositionItem = {
  id: string
  title: string
  type: string
  status: 'open' | 'soon' | 'closed'
  applicationsOpen: boolean
  summary: string
  highlights: string[]
  href: string
  applyHref: string
}

export async function getPositions(): Promise<PositionItem[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('positions').select('*')
      if (!error && data !== null) {
        return data.map((p: any) => ({
          id: p.id,
          title: p.title || '',
          type: p.type || '',
          status: p.status || 'open',
          applicationsOpen: p.applications_open !== undefined ? Boolean(p.applications_open) : p.status !== 'closed',
          summary: p.summary || '',
          highlights: p.highlights || [],
          href: p.href || '/join',
          applyHref: p.apply_href || 'mailto:contact@inference-lab.org',
        })) as PositionItem[]
      }
    } catch (e) {
      console.warn('Supabase fetch failed for positions:', e)
    }
  }
  return readJson<PositionItem[]>('positions.json', [])
}

export async function savePositions(items: PositionItem[]): Promise<boolean> {
  writeJson('positions.json', items)
  if (isSupabaseConfigured) {
    try {
      const itemIds = items.map((i) => i.id)
      const { data: existing } = await supabase.from('positions').select('id')
      if (existing && existing.length > 0) {
        const toDelete = existing.filter((e: any) => !itemIds.includes(e.id)).map((e: any) => e.id)
        if (toDelete.length > 0) {
          await supabase.from('positions').delete().in('id', toDelete)
        }
      }
      if (items.length > 0) {
        const mapped = items.map((p) => ({
          id: p.id,
          title: p.title,
          type: p.type,
          status: p.status,
          applications_open: p.applicationsOpen !== undefined ? p.applicationsOpen : p.status !== 'closed',
          summary: p.summary,
          highlights: p.highlights,
          href: p.href,
          apply_href: p.applyHref,
        }))
        const { error } = await supabase.from('positions').upsert(mapped)
        if (error) console.error('Supabase save error (positions):', error.message)
      }
    } catch (e) {
      console.error('Supabase save failed for positions:', e)
    }
  }
  return true
}

export async function deletePosition(id: string): Promise<boolean> {
  const current = await getPositions()
  const filtered = current.filter((p) => p.id !== id)
  writeJson('positions.json', filtered)
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('positions').delete().eq('id', id)
      if (error) console.error('Supabase delete error (positions):', error.message)
    } catch (e) {
      console.error('Supabase delete failed for positions:', e)
    }
  }
  return true
}

// ── Certificate Registry Handlers ───────────────────────────────────────────
export type CertificateItem = {
  name: string
  program: string
  issued: string
  grade?: string
}

export type CertificateRegistry = Record<string, CertificateItem>

export async function getCertificates(): Promise<CertificateRegistry> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('certificates').select('*')
      if (!error && data !== null) {
        const reg: CertificateRegistry = {}
        data.forEach((c: any) => {
          reg[c.id.trim().toUpperCase()] = {
            name: c.name,
            program: c.program,
            issued: c.issued,
            grade: c.grade || '',
          }
        })
        return reg
      }
    } catch (e) {
      console.warn('Supabase fetch failed for certificates:', e)
    }
  }
  return readJson<CertificateRegistry>('certificates.json', {})
}

export async function saveCertificates(items: CertificateRegistry): Promise<boolean> {
  writeJson('certificates.json', items)
  if (isSupabaseConfigured) {
    try {
      const itemKeys = Object.keys(items).map((k) => k.trim().toUpperCase())
      const { data: existing } = await supabase.from('certificates').select('id')
      if (existing && existing.length > 0) {
        const toDelete = existing.filter((e: any) => !itemKeys.includes(e.id)).map((e: any) => e.id)
        if (toDelete.length > 0) {
          await supabase.from('certificates').delete().in('id', toDelete)
        }
      }
      if (itemKeys.length > 0) {
        const arrayData = Object.entries(items).map(([id, item]) => ({
          id: id.trim().toUpperCase(),
          name: item.name,
          program: item.program,
          issued: item.issued,
          grade: item.grade || '',
        }))
        const { error } = await supabase.from('certificates').upsert(arrayData)
        if (error) console.error('Supabase save error (certificates):', error.message)
      }
    } catch (e) {
      console.error('Supabase save failed for certificates:', e)
    }
  }
  return true
}

export async function deleteCertificate(id: string): Promise<boolean> {
  const current = await getCertificates()
  const key = id.trim().toUpperCase()
  delete current[key]
  writeJson('certificates.json', current)
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('certificates').delete().eq('id', key)
      if (error) console.error('Supabase delete error (certificates):', error.message)
    } catch (e) {
      console.error('Supabase delete failed for certificates:', e)
    }
  }
  return true
}

export async function lookupCertificateDynamic(id: string): Promise<CertificateItem | null> {
  const certs = await getCertificates()
  const key = id.trim().toUpperCase()
  return certs[key] ?? null
}

// ── Settings Handlers ───────────────────────────────────────────────────────
export type SiteSettingsItem = {
  name: string
  shortName: string
  location: string
  tagline: string
  founder: string
  email: string
  github: string
  huggingface: string
  linkedin: string
  instagram?: string
  facebook?: string
  founderGithub: string
  whatsapp: string
  founderHuggingface: string
  founderLinkedin: string
  applicationForm: string
  edu_applicationForm: string
}

export async function getSettings(): Promise<SiteSettingsItem> {
  const fallback: SiteSettingsItem = {
    name: 'INFERENCE Lab',
    shortName: 'INFERENCE LAB',
    location: 'Multan, Punjab, Pakistan',
    tagline: 'Applied AI research, engineering & education.',
    founder: 'Muhammad Khubaib Ahmad',
    email: 'contact@inference-lab.org',
    github: 'https://github.com/Inference-LAB',
    huggingface: 'https://huggingface.co/Inferencelab',
    linkedin: 'https://www.linkedin.com/company/inference-lab',
    instagram: 'https://www.instagram.com/inference.lab/',
    facebook: 'https://web.facebook.com/profile.php?id=61592782978869',
    founderGithub: 'https://github.com/Khubaib8281',
    whatsapp: 'https://wa.me/923269575321',
    founderHuggingface: 'https://huggingface.co/Khubaib01',
    founderLinkedin: 'https://linkedin.com/in/muhammad-khubaib-ahmad-',
    applicationForm: 'https://forms.gle/ZUMht8VUfPwepPSW6',
    edu_applicationForm: 'https://forms.gle/YQ1kiyvqYiu8TAho9',
  }
  return readJson<SiteSettingsItem>('settings.json', fallback)
}

export async function saveSettings(settings: SiteSettingsItem): Promise<boolean> {
  return writeJson('settings.json', settings)
}

// ── Engineering Journal Types & Handlers ─────────────────────────────────────
export type ContributorInfo = {
  name: string
  role: string
  photo?: string
  github?: string
  linkedin?: string
}

export type JournalItem = {
  slug: string
  projectName: string
  journalTitle: string
  summary: string
  coverImage?: string
  programBadge: string
  cohortBadge: string
  publishedDate: string
  readingTime: string
  tags: string[]
  contributors: ContributorInfo[]
  repositoryLinks: {
    github?: string
    pypi?: string
    docs?: string
  }
  labNote: string
}

export async function getJournals(): Promise<JournalItem[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('journals').select('*')
      if (!error && data !== null) {
        return data.map((j: any) => ({
          slug: j.slug,
          projectName: j.project_name || '',
          journalTitle: j.journal_title || '',
          summary: j.summary || '',
          programBadge: j.program_badge || 'Engineering Fellowship',
          cohortBadge: j.cohort_badge || 'Cohort 2026',
          publishedDate: j.published_date || '',
          readingTime: j.reading_time || '',
          tags: j.tags || [],
          contributors: j.contributors || [],
          repositoryLinks: j.repository_links || {},
          labNote: j.lab_note || '',
        })) as JournalItem[]
      }
    } catch (e) {
      console.warn('Supabase fetch failed for journals:', e)
    }
  }
  return readJson<JournalItem[]>('journals.json', [])
}

export async function getJournalBySlug(slug: string): Promise<JournalItem | null> {
  const journals = await getJournals()
  return journals.find((j) => j.slug === slug) ?? null
}

export async function saveJournals(items: JournalItem[]): Promise<boolean> {
  writeJson('journals.json', items)
  if (isSupabaseConfigured) {
    try {
      const itemSlugs = items.map((i) => i.slug)
      const { data: existing } = await supabase.from('journals').select('slug')
      if (existing && existing.length > 0) {
        const toDelete = existing.filter((e: any) => !itemSlugs.includes(e.slug)).map((e: any) => e.slug)
        if (toDelete.length > 0) {
          await supabase.from('journals').delete().in('slug', toDelete)
        }
      }
      if (items.length > 0) {
        const mapped = items.map((j) => ({
          slug: j.slug,
          project_name: j.projectName,
          journal_title: j.journalTitle,
          summary: j.summary,
          program_badge: j.programBadge,
          cohort_badge: j.cohortBadge,
          published_date: j.publishedDate,
          reading_time: j.readingTime,
          tags: j.tags,
          contributors: j.contributors,
          repository_links: j.repositoryLinks,
          lab_note: j.labNote,
        }))
        const { error } = await supabase.from('journals').upsert(mapped)
        if (error) console.error('Supabase save error (journals):', error.message)
      }
    } catch (e) {
      console.error('Supabase save failed for journals:', e)
    }
  }
  return true
}

export async function deleteJournal(slug: string): Promise<boolean> {
  const current = await getJournals()
  const filtered = current.filter((j) => j.slug !== slug)
  writeJson('journals.json', filtered)
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('journals').delete().eq('slug', slug)
      if (error) console.error('Supabase delete error (journals):', error.message)
    } catch (e) {
      console.error('Supabase delete failed for journals:', e)
    }
  }
  return true
}

// ── People / Contributors Types & Handlers ────────────────────────────────────
export type TeamCategory = 'core' | 'fellow' | 'research' | 'opensource' | 'fellowship'

export type PersonItem = {
  slug: string
  name: string
  rank?: string
  roles: string[]
  bio: string
  expertise: string[]
  photo?: string
  teamType?: TeamCategory
  github?: string
  linkedin?: string
  isLeadership?: boolean
  isCoreTeam?: boolean
  isFellow?: boolean
}

export async function getPeople(): Promise<PersonItem[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('people').select('*')
      if (!error && data !== null) {
        return data.map((p: any) => {
          let tType: TeamCategory = p.team_type || p.teamType || 'core'
          if (tType === 'fellowship') tType = 'fellow'
          return {
            slug: p.slug,
            name: p.name || '',
            rank: p.rank || '',
            roles: p.roles || [],
            bio: p.bio || '',
            expertise: p.expertise || [],
            photo: p.photo || '',
            teamType: tType,
            github: p.github || '',
            linkedin: p.linkedin || '',
            isLeadership: Boolean(p.is_leadership || p.isLeadership),
            isCoreTeam: tType === 'core',
            isFellow: tType === 'fellow',
          }
        }) as PersonItem[]
      }
    } catch (e) {
      console.warn('Supabase fetch failed for people:', e)
    }
  }
  const local = readJson<PersonItem[]>('people.json', [])
  return local.map((p) => {
    let tType: TeamCategory = p.teamType || 'core'
    if (tType === 'fellowship') tType = 'fellow'
    return {
      ...p,
      teamType: tType,
      isLeadership: Boolean(p.isLeadership),
      isCoreTeam: tType === 'core',
      isFellow: tType === 'fellow',
    }
  })
}

export async function getPersonBySlug(slug: string): Promise<PersonItem | null> {
  const people = await getPeople()
  return people.find((p) => p.slug === slug) ?? null
}

export async function savePeople(items: PersonItem[]): Promise<boolean> {
  writeJson('people.json', items)
  if (isSupabaseConfigured) {
    try {
      const itemSlugs = items.map((i) => i.slug)
      const { data: existing } = await supabase.from('people').select('slug')
      if (existing && existing.length > 0) {
        const toDelete = existing.filter((e: any) => !itemSlugs.includes(e.slug)).map((e: any) => e.slug)
        if (toDelete.length > 0) {
          await supabase.from('people').delete().in('slug', toDelete)
        }
      }
      if (items.length > 0) {
        const mapped = items.map((p) => ({
          slug: p.slug,
          name: p.name,
          rank: p.rank || '',
          roles: p.roles || [],
          bio: p.bio,
          expertise: p.expertise || [],
          photo: p.photo || '',
          team_type: p.teamType || 'core',
          github: p.github || '',
          linkedin: p.linkedin || '',
          is_leadership: Boolean(p.isLeadership),
        }))
        const { error } = await supabase.from('people').upsert(mapped)
        if (error) console.error('Supabase save error (people):', error.message)
      }
    } catch (e) {
      console.error('Supabase save failed for people:', e)
    }
  }
  return true
}

export async function deletePerson(slug: string): Promise<boolean> {
  const current = await getPeople()
  const filtered = current.filter((p) => p.slug !== slug)
  writeJson('people.json', filtered)
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('people').delete().eq('slug', slug)
      if (error) console.error('Supabase delete error (people):', error.message)
    } catch (e) {
      console.error('Supabase delete failed for people:', e)
    }
  }
  return true
}

// ── FAQ Types & Handlers ───────────────────────────────────────────────────
export type FaqItem = {
  id: string
  category: string
  question: string
  answer: string
}

export async function getFaqs(): Promise<FaqItem[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('faqs').select('*')
      if (!error && data !== null) {
        return data as FaqItem[]
      }
    } catch (e) {
      console.warn('Supabase fetch failed for faqs:', e)
    }
  }
  return readJson<FaqItem[]>('faqs.json', [])
}

export async function saveFaqs(items: FaqItem[]): Promise<boolean> {
  writeJson('faqs.json', items)
  if (isSupabaseConfigured) {
    try {
      const itemIds = items.map((i) => i.id)
      const { data: existing } = await supabase.from('faqs').select('id')
      if (existing && existing.length > 0) {
        const toDelete = existing.filter((e: any) => !itemIds.includes(e.id)).map((e: any) => e.id)
        if (toDelete.length > 0) {
          await supabase.from('faqs').delete().in('id', toDelete)
        }
      }
      if (items.length > 0) {
        const { error } = await supabase.from('faqs').upsert(items)
        if (error) console.error('Supabase save error (faqs):', error.message)
      }
    } catch (e) {
      console.error('Supabase save failed for faqs:', e)
    }
  }
  return true
}

export async function deleteFaq(id: string): Promise<boolean> {
  const current = await getFaqs()
  const filtered = current.filter((f) => f.id !== id)
  writeJson('faqs.json', filtered)
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('faqs').delete().eq('id', id)
      if (error) console.error('Supabase delete error (faqs):', error.message)
    } catch (e) {
      console.error('Supabase delete failed for faqs:', e)
    }
  }
  return true
}

// ── Education Programs Types & Handlers ─────────────────────────────────────
export type ProgramPhase = {
  phaseNumber: string // e.g. "Phase 0"
  name: string // e.g. "Engineering Foundations"
  duration: string // e.g. "2 Months"
  feePerMonth: string // e.g. "PKR 6,000"
  totalFee: string // e.g. "PKR 12,000"
}

export type EducationProgramItem = {
  id: string
  name: string
  poster?: string
  tenure: string
  totalCost: string
  description: string
  formUrl?: string
  phases?: ProgramPhase[]
}

export async function getPrograms(): Promise<EducationProgramItem[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('programs').select('*')
      if (!error && data !== null) {
        return data.map((p: any) => {
          let description = p.description || ''
          let formUrl = p.form_url || ''
          let phases: ProgramPhase[] = []

          if (description.includes('[FORM_URL:')) {
            const match = description.match(/\[FORM_URL:(.*?)\]/)
            if (match && match[1]) {
              formUrl = match[1]
              description = description.replace(/\[FORM_URL:(.*?)\]/, '').trim()
            }
          }

          if (description.includes('[PHASES_JSON:')) {
            const match = description.match(/\[PHASES_JSON:(.*?)\]/)
            if (match && match[1]) {
              try {
                phases = JSON.parse(decodeURIComponent(match[1]))
              } catch (e) {
                try {
                  phases = JSON.parse(match[1])
                } catch {}
              }
              description = description.replace(/\[PHASES_JSON:(.*?)\]/, '').trim()
            }
          }

          return {
            id: p.id,
            name: p.name || '',
            poster: p.poster || '',
            tenure: p.tenure || '',
            totalCost: p.total_cost || '',
            description,
            formUrl,
            phases: Array.isArray(phases) ? phases : [],
          }
        }) as EducationProgramItem[]
      }
    } catch (e) {
      console.warn('Supabase fetch failed for programs:', e)
    }
  }
  return readJson<EducationProgramItem[]>('programs.json', [])
}

export async function getProgramById(id: string): Promise<EducationProgramItem | null> {
  const programs = await getPrograms()
  return programs.find((p) => p.id === id) ?? null
}

export async function savePrograms(items: EducationProgramItem[]): Promise<boolean> {
  writeJson('programs.json', items)
  if (isSupabaseConfigured) {
    try {
      const itemIds = items.map((i) => i.id)
      const { data: existing } = await supabase.from('programs').select('id')
      if (existing && existing.length > 0) {
        const toDelete = existing.filter((e: any) => !itemIds.includes(e.id)).map((e: any) => e.id)
        if (toDelete.length > 0) {
          await supabase.from('programs').delete().in('id', toDelete)
        }
      }
      if (items.length > 0) {
        const mapped = items.map((p) => {
          let descEncoded = p.description || ''
          if (p.formUrl) {
            descEncoded += `\n[FORM_URL:${p.formUrl}]`
          }
          if (p.phases && p.phases.length > 0) {
            descEncoded += `\n[PHASES_JSON:${encodeURIComponent(JSON.stringify(p.phases))}]`
          }
          return {
            id: p.id,
            name: p.name,
            poster: p.poster || '',
            tenure: p.tenure,
            total_cost: p.totalCost,
            description: descEncoded,
          }
        })
        const { error } = await supabase.from('programs').upsert(mapped)
        if (error) console.error('Supabase save error (programs):', error.message)
      }
    } catch (e) {
      console.error('Supabase save failed for programs:', e)
    }
  }
  return true
}

export async function deleteProgram(id: string): Promise<boolean> {
  const current = await getPrograms()
  const filtered = current.filter((p) => p.id !== id)
  writeJson('programs.json', filtered)
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('programs').delete().eq('id', id)
      if (error) console.error('Supabase delete error (programs):', error.message)
    } catch (e) {
      console.error('Supabase delete failed for programs:', e)
    }
  }
  return true
}

// ── Core Initiatives Types & Handlers ───────────────────────────────────────
export type InitiativeItem = {
  id: string
  title: string
  tag: string
  icon: string
  href: string
  badge: string
  description: string
  highlights: string[]
  cta: string
}

export const defaultInitiatives: InitiativeItem[] = [
  {
    id: 'research',
    title: 'Explore our Research',
    tag: 'Research Output',
    icon: 'BookOpen',
    href: '/research',
    badge: 'Peer-Reviewed & Preprints',
    description:
      'Rigorous scientific output spanning vocal biomarkers, low-resource Roman Urdu corpora, human-centered cognitive sensing, and post-quantum encryption schemes.',
    highlights: [
      'Clinical-grade vocal fatigue screening',
      'RUEmoCorp & RUDaSA corpora',
      'Workstation cursor kinematics sensing',
      'Zenodo open data & DOI citations',
    ],
    cta: 'Explore Research',
  },
  {
    id: 'programs',
    title: 'Programs we Offer',
    tag: 'Engineering Education',
    icon: 'GraduationCap',
    href: '/curriculum',
    badge: 'Mentorship Tracks',
    description:
      'Structured, deployment-focused engineering programs. Live weekend mentorship covering software fundamentals, classical ML, Transformers, RAG systems, and MLOps.',
    highlights: [
      'Applied AI Engineering Program (12.5 Mo)',
      'AI Builder Program (5.5 Mo)',
      'Weekly GitHub code deliverables',
      'Independent capstones per phase',
    ],
    cta: 'Explore Programs',
  },
  {
    id: 'software',
    title: 'Systems & Software Released',
    tag: 'Engineering Artifacts',
    icon: 'Code2',
    href: '/engineering/projects',
    badge: 'Open-Source & PyPI',
    description:
      'Production-grade software, reproducible model pipelines, and PyPI libraries built and released by lab engineers and fellows.',
    highlights: [
      'ECAPA-TDNN-VHE voice engine',
      'Deterministic image encryption',
      'RUEmoCorp Roman Urdu NLP',
      'FastAPI microservices & Docker repos',
    ],
    cta: 'Explore Systems & Software',
  },
  {
    id: 'join',
    title: 'Join the Lab',
    tag: 'Talent & Partnerships',
    icon: 'Users',
    href: '/join',
    badge: 'Cohorts & Open Roles',
    description:
      'Work alongside lab leadership on published research, build open-source tools, or join our Engineering Fellowship cohorts.',
    highlights: [
      'Engineering Fellowship Cohort',
      'Research Internships',
      'Open-Source Collaboration',
      'Academic & Industry Partnerships',
    ],
    cta: 'View All Opportunities',
  },
]

export async function getInitiatives(): Promise<InitiativeItem[]> {
  return readJson<InitiativeItem[]>('initiatives.json', defaultInitiatives)
}

export async function saveInitiatives(items: InitiativeItem[]): Promise<boolean> {
  return writeJson('initiatives.json', items)
}

export async function deleteInitiative(id: string): Promise<boolean> {
  const current = await getInitiatives()
  const filtered = current.filter((i) => i.id !== id)
  return writeJson('initiatives.json', filtered)
}

