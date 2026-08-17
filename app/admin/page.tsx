'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Lock,
  LogOut,
  Plus,
  Trash2,
  Pencil,
  X,
  CheckCircle,
  FileText,
  Code,
  Briefcase,
  Award,
  Settings,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  BookOpen,
  Users,
  HelpCircle,
  GraduationCap,
  Upload,
  FileDown,
  Layers,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type {
  PublicationItem,
  SoftwareItem,
  PositionItem,
  CertificateRegistry,
  SiteSettingsItem,
  JournalItem,
  PersonItem,
  FaqItem,
  EducationProgramItem,
  InitiativeItem,
} from '@/lib/data-store'

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [activeTab, setActiveTab] = useState<
    | 'overview'
    | 'publications'
    | 'software'
    | 'journals'
    | 'positions'
    | 'certificates'
    | 'people'
    | 'programs'
    | 'initiatives'
    | 'faqs'
    | 'settings'
  >('overview')

  // Data states
  const [publications, setPublications] = useState<PublicationItem[]>([])
  const [software, setSoftware] = useState<SoftwareItem[]>([])
  const [journals, setJournals] = useState<JournalItem[]>([])
  const [positions, setPositions] = useState<PositionItem[]>([])
  const [certificates, setCertificates] = useState<CertificateRegistry>({})
  const [people, setPeople] = useState<PersonItem[]>([])
  const [programs, setPrograms] = useState<EducationProgramItem[]>([])
  const [initiatives, setInitiatives] = useState<InitiativeItem[]>([])
  const [faqs, setFaqs] = useState<FaqItem[]>([])
  const [settings, setSettings] = useState<SiteSettingsItem | null>(null)
  const [loading, setLoading] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')

  // Editing state trackers
  const [editingPubId, setEditingPubId] = useState<string | null>(null)
  const [editingSoftId, setEditingSoftId] = useState<string | null>(null)
  const [editingJournalSlug, setEditingJournalSlug] = useState<string | null>(null)
  const [editingPosId, setEditingPosId] = useState<string | null>(null)
  const [editingCertId, setEditingCertId] = useState<string | null>(null)
  const [editingPersonSlug, setEditingPersonSlug] = useState<string | null>(null)
  const [editingProgramId, setEditingProgramId] = useState<string | null>(null)
  const [editingInitiativeId, setEditingInitiativeId] = useState<string | null>(null)
  const [editingFaqId, setEditingFaqId] = useState<string | null>(null)

  // Form states
  const [newPub, setNewPub] = useState<Partial<PublicationItem>>({
    title: '',
    venue: '',
    status: 'Under Review',
    year: new Date().getFullYear().toString(),
    doi: '',
    highlight: '',
  })

  const [newSoft, setNewSoft] = useState<Partial<SoftwareItem>>({
    name: '',
    category: '',
    description: '',
    tags: [],
    pypi: false,
  })
  const [tagsInput, setTagsInput] = useState('')

  const [newJournal, setNewJournal] = useState({
    projectName: '',
    journalTitle: '',
    summary: '',
    programBadge: 'Engineering Fellowship',
    cohortBadge: 'Cohort 2026',
    publishedDate: new Date().toISOString().split('T')[0],
    readingTime: '6 min read',
    tags: '',
    contributorName: 'Muhammad Khubaib Ahmad',
    contributorRole: 'Lead Architect',
    githubLink: '',
    pypiLink: '',
    labNote: '',
  })

  const [newPerson, setNewPerson] = useState({
    name: '',
    rank: '',
    roles: '',
    bio: '',
    expertise: '',
    photo: '',
    teamType: 'core' as 'core' | 'fellow' | 'research' | 'opensource',
    github: '',
    linkedin: '',
    isLeadership: false,
  })

  const [newProgram, setNewProgram] = useState<{
    name: string
    poster: string
    tenure: string
    totalCost: string
    description: string
    formUrl: string
    phases: Array<{
      phaseNumber: string
      name: string
      duration: string
      feePerMonth: string
      totalFee: string
    }>
  }>({
    name: '',
    poster: '',
    tenure: '12.5 Months',
    totalCost: 'PKR 99,000',
    description: '',
    formUrl: '',
    phases: [],
  })

  const [newInitiative, setNewInitiative] = useState({
    id: '',
    title: '',
    tag: '',
    icon: 'BookOpen',
    href: '/research',
    badge: 'Peer-Reviewed & Preprints',
    description: '',
    highlights: '',
    cta: 'Explore',
  })

  const [newPos, setNewPos] = useState<Partial<PositionItem>>({
    title: '',
    type: 'Remote · Flexible',
    status: 'open',
    applicationsOpen: true,
    summary: '',
    highlights: [],
    href: '/join',
    applyHref: 'mailto:contact@inference-lab.org',
  })
  const [posHighlightsInput, setPosHighlightsInput] = useState('')

  const [newCert, setNewCert] = useState({
    id: `IL-RC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    name: '',
    program: 'Research Collaboration',
    issued: new Date().toISOString().split('T')[0],
    grade: 'Distinction',
  })

  const [newFaq, setNewFaq] = useState({
    category: 'Research Services',
    question: '',
    answer: '',
  })

  useEffect(() => {
    const token = localStorage.getItem('inf_admin_token')
    if (token === 'authenticated-session') {
      setAuthenticated(true)
      fetchAllData()
    }
  }, [])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setAuthError('')
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (data.authenticated) {
        localStorage.setItem('inf_admin_token', 'authenticated-session')
        setAuthenticated(true)
        fetchAllData()
      } else {
        setAuthError(data.message || 'Authentication failed')
      }
    } catch {
      setAuthError('Connection error')
    }
  }

  function handleLogout() {
    localStorage.removeItem('inf_admin_token')
    setAuthenticated(false)
  }

  async function fetchAllData() {
    setLoading(true)
    try {
      const [pRes, sRes, jRes, posRes, cRes, peoRes, progRes, initRes, faqRes, setRes] = await Promise.all([
        fetch('/api/admin/publications', { cache: 'no-store' }),
        fetch('/api/admin/software', { cache: 'no-store' }),
        fetch('/api/admin/journals', { cache: 'no-store' }),
        fetch('/api/admin/positions', { cache: 'no-store' }),
        fetch('/api/admin/certificates', { cache: 'no-store' }),
        fetch('/api/admin/people', { cache: 'no-store' }),
        fetch('/api/admin/programs', { cache: 'no-store' }),
        fetch('/api/admin/initiatives', { cache: 'no-store' }),
        fetch('/api/admin/faqs', { cache: 'no-store' }),
        fetch('/api/admin/settings', { cache: 'no-store' }),
      ])

      setPublications(await pRes.json())
      setSoftware(await sRes.json())
      setJournals(await jRes.json())
      setPositions(await posRes.json())
      setCertificates(await cRes.json())
      setPeople(await peoRes.json())
      setPrograms(await progRes.json())
      setInitiatives(await initRes.json())
      setFaqs(await faqRes.json())
      setSettings(await setRes.json())
    } catch (err) {
      console.error('Error fetching admin data:', err)
    } finally {
      setLoading(false)
    }
  }

  function flashStatus(msg: string) {
    setStatusMsg(msg)
    setTimeout(() => setStatusMsg(''), 3000)
  }

  // Lightweight browser canvas image compression helper
  function handleFileUpload(
    e: React.ChangeEvent<HTMLInputElement>,
    onComplete: (fileDataUrl: string, fileName: string) => void
  ) {
    const file = e.target.files?.[0]
    if (!file) return

    // Non-image files (e.g., PDF / DOCX)
    if (!file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = () => onComplete(reader.result as string, file.name)
      reader.readAsDataURL(file)
      return
    }

    // Image files -> Compress with Canvas to WebP (< 50KB)
    const img = new Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const maxDim = 600
      let width = img.width
      let height = img.height

      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width)
          width = maxDim
        } else {
          width = Math.round((width * maxDim) / height)
          height = maxDim
        }
      }

      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height)
        const compressedDataUrl = canvas.toDataURL('image/webp', 0.8)
        onComplete(compressedDataUrl, file.name)
      } else {
        const reader = new FileReader()
        reader.onload = () => onComplete(reader.result as string, file.name)
        reader.readAsDataURL(file)
      }
      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  // ── Handlers ───────────────────────────────────────────────────────────────
  function startEditingPub(p: PublicationItem) {
    setEditingPubId(p.id)
    setNewPub({
      title: p.title,
      venue: p.venue,
      status: p.status,
      year: p.year,
      doi: p.doi || '',
      highlight: p.highlight || '',
    })
  }

  function cancelEditingPub() {
    setEditingPubId(null)
    setNewPub({
      title: '',
      venue: '',
      status: 'Under Review',
      year: new Date().getFullYear().toString(),
      doi: '',
      highlight: '',
    })
  }

  async function savePublication(e: React.FormEvent) {
    e.preventDefault()
    if (!newPub.title || !newPub.venue) return
    const isEdit = Boolean(editingPubId)
    const method = isEdit ? 'PUT' : 'POST'
    const payload = isEdit ? { ...newPub, id: editingPubId } : newPub
    const res = await fetch('/api/admin/publications', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      flashStatus(isEdit ? 'Publication updated' : 'Publication saved')
      cancelEditingPub()
      fetchAllData()
    }
  }

  async function deletePublication(id: string) {
    if (!confirm('Delete publication?')) return
    const res = await fetch(`/api/admin/publications?id=${id}`, { method: 'DELETE' })
    if (res.ok) {
      if (editingPubId === id) cancelEditingPub()
      flashStatus('Publication deleted')
      fetchAllData()
    }
  }

  function startEditingSoft(s: SoftwareItem) {
    setEditingSoftId(s.id)
    setNewSoft({
      name: s.name,
      category: s.category,
      description: s.description,
      pypi: s.pypi || false,
    })
    setTagsInput(s.tags ? s.tags.join(', ') : '')
  }

  function cancelEditingSoft() {
    setEditingSoftId(null)
    setNewSoft({ name: '', category: '', description: '', pypi: false })
    setTagsInput('')
  }

  async function saveSoftware(e: React.FormEvent) {
    e.preventDefault()
    if (!newSoft.name || !newSoft.description) return
    const tagsArray = tagsInput.split(',').map((t) => t.trim()).filter(Boolean)
    const isEdit = Boolean(editingSoftId)
    const method = isEdit ? 'PUT' : 'POST'
    const payload = isEdit ? { ...newSoft, id: editingSoftId, tags: tagsArray } : { ...newSoft, tags: tagsArray }
    const res = await fetch('/api/admin/software', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      flashStatus(isEdit ? 'Software updated' : 'Software project saved')
      cancelEditingSoft()
      fetchAllData()
    }
  }

  async function deleteSoftware(id: string) {
    if (!confirm('Delete software project?')) return
    const res = await fetch(`/api/admin/software?id=${id}`, { method: 'DELETE' })
    if (res.ok) {
      if (editingSoftId === id) cancelEditingSoft()
      flashStatus('Software project deleted')
      fetchAllData()
    }
  }

  function startEditingJournal(j: JournalItem) {
    setEditingJournalSlug(j.slug)
    setNewJournal({
      projectName: j.projectName,
      journalTitle: j.journalTitle,
      summary: j.summary,
      programBadge: j.programBadge || 'Engineering Fellowship',
      cohortBadge: j.cohortBadge || 'Cohort 2026',
      publishedDate: j.publishedDate || new Date().toISOString().split('T')[0],
      readingTime: j.readingTime || '6 min read',
      tags: j.tags ? j.tags.join(', ') : '',
      contributorName: j.contributors?.[0]?.name || 'Muhammad Khubaib Ahmad',
      contributorRole: j.contributors?.[0]?.role || 'Lead Architect',
      githubLink: j.repositoryLinks?.github || '',
      pypiLink: j.repositoryLinks?.pypi || '',
      labNote: j.labNote || '',
    })
  }

  function cancelEditingJournal() {
    setEditingJournalSlug(null)
    setNewJournal({
      projectName: '',
      journalTitle: '',
      summary: '',
      programBadge: 'Engineering Fellowship',
      cohortBadge: 'Cohort 2026',
      publishedDate: new Date().toISOString().split('T')[0],
      readingTime: '6 min read',
      tags: '',
      contributorName: 'Muhammad Khubaib Ahmad',
      contributorRole: 'Lead Architect',
      githubLink: '',
      pypiLink: '',
      labNote: '',
    })
  }

  async function saveJournal(e: React.FormEvent) {
    e.preventDefault()
    if (!newJournal.projectName || !newJournal.journalTitle) return
    const isEdit = Boolean(editingJournalSlug)
    const method = isEdit ? 'PUT' : 'POST'

    // Look up contributor photo and social links from people if available
    const foundPerson = people.find(
      (p) => p.name.trim().toLowerCase() === newJournal.contributorName.trim().toLowerCase()
    )

    const payload = {
      ...(isEdit ? { slug: editingJournalSlug } : {}),
      projectName: newJournal.projectName,
      journalTitle: newJournal.journalTitle,
      summary: newJournal.summary,
      programBadge: newJournal.programBadge,
      cohortBadge: newJournal.cohortBadge,
      publishedDate: newJournal.publishedDate,
      readingTime: newJournal.readingTime,
      tags: newJournal.tags.split(',').map((t) => t.trim()).filter(Boolean),
      contributors: [
        {
          name: newJournal.contributorName,
          role: newJournal.contributorRole,
          photo: foundPerson?.photo || '',
          github: foundPerson?.github || newJournal.githubLink || '',
          linkedin: foundPerson?.linkedin || '',
        },
      ],
      repositoryLinks: { github: newJournal.githubLink, pypi: newJournal.pypiLink },
      labNote: newJournal.labNote,
    }
    const res = await fetch('/api/admin/journals', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      flashStatus(isEdit ? 'Engineering Journal updated' : 'Engineering Journal saved')
      cancelEditingJournal()
      fetchAllData()
    }
  }

  async function deleteJournal(slug: string) {
    if (!confirm('Delete Engineering Journal?')) return
    const res = await fetch(`/api/admin/journals?slug=${slug}`, { method: 'DELETE' })
    if (res.ok) {
      if (editingJournalSlug === slug) cancelEditingJournal()
      flashStatus('Journal deleted')
      fetchAllData()
    }
  }

  function startEditingPos(pos: PositionItem) {
    setEditingPosId(pos.id)
    setNewPos({
      title: pos.title,
      type: pos.type || 'Remote · Flexible',
      status: pos.status || 'open',
      applicationsOpen: pos.applicationsOpen !== undefined ? pos.applicationsOpen : pos.status !== 'closed',
      summary: pos.summary,
      href: pos.href || '/join',
      applyHref: pos.applyHref || 'mailto:contact@inference-lab.org',
    })
    setPosHighlightsInput(pos.highlights ? pos.highlights.join('\n') : '')
  }

  function cancelEditingPos() {
    setEditingPosId(null)
    setNewPos({
      title: '',
      type: 'Remote · Flexible',
      status: 'open',
      applicationsOpen: true,
      summary: '',
      href: '/join',
      applyHref: 'mailto:contact@inference-lab.org',
    })
    setPosHighlightsInput('')
  }

  async function savePosition(e: React.FormEvent) {
    e.preventDefault()
    if (!newPos.title || !newPos.summary) return
    const hArray = posHighlightsInput.split('\n').map((h) => h.trim()).filter(Boolean)
    const isEdit = Boolean(editingPosId)
    const method = isEdit ? 'PUT' : 'POST'
    const statusVal = newPos.status || 'open'
    const payload = {
      ...newPos,
      status: statusVal,
      applicationsOpen: statusVal !== 'closed',
      highlights: hArray,
      ...(isEdit ? { id: editingPosId } : {}),
    }
    const res = await fetch('/api/admin/positions', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      flashStatus(isEdit ? 'Position updated' : 'Position saved')
      cancelEditingPos()
      fetchAllData()
    }
  }

  async function deletePosition(id: string) {
    if (!confirm('Delete position?')) return
    const res = await fetch(`/api/admin/positions?id=${id}`, { method: 'DELETE' })
    if (res.ok) {
      if (editingPosId === id) cancelEditingPos()
      flashStatus('Position deleted')
      fetchAllData()
    }
  }

  function startEditingCert(id: string, c: { name: string; program: string; issued: string; grade?: string }) {
    setEditingCertId(id)
    setNewCert({
      id,
      name: c.name,
      program: c.program,
      issued: c.issued,
      grade: c.grade || '',
    })
  }

  function cancelEditingCert() {
    setEditingCertId(null)
    setNewCert({
      id: `IL-RC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      name: '',
      program: 'Research Collaboration',
      issued: new Date().toISOString().split('T')[0],
      grade: 'Distinction',
    })
  }

  async function saveCertificate(e: React.FormEvent) {
    e.preventDefault()
    if (!newCert.id || !newCert.name || !newCert.program) return
    const isEdit = Boolean(editingCertId)
    const method = isEdit ? 'PUT' : 'POST'
    const res = await fetch('/api/admin/certificates', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCert),
    })
    if (res.ok) {
      flashStatus(isEdit ? `Certificate ${newCert.id} updated` : `Certificate ${newCert.id} issued`)
      cancelEditingCert()
      fetchAllData()
    }
  }

  async function deleteCertificate(id: string) {
    if (!confirm(`Delete certificate ${id}?`)) return
    const res = await fetch(`/api/admin/certificates?id=${id}`, { method: 'DELETE' })
    if (res.ok) {
      if (editingCertId === id) cancelEditingCert()
      flashStatus('Certificate deleted')
      fetchAllData()
    }
  }

  function startEditingPerson(p: PersonItem) {
    setEditingPersonSlug(p.slug)
    setNewPerson({
      name: p.name,
      rank: p.rank || p.roles?.[0] || '',
      roles: p.roles ? p.roles.join(', ') : '',
      bio: p.bio,
      expertise: p.expertise ? p.expertise.join(', ') : '',
      photo: p.photo || '',
      teamType: (p.teamType === 'fellowship' ? 'fellow' : (p.teamType || 'core')) as any,
      github: p.github || '',
      linkedin: p.linkedin || '',
      isLeadership: Boolean(p.isLeadership),
    })
  }

  function cancelEditingPerson() {
    setEditingPersonSlug(null)
    setNewPerson({
      name: '',
      rank: '',
      roles: '',
      bio: '',
      expertise: '',
      photo: '',
      teamType: 'core',
      github: '',
      linkedin: '',
      isLeadership: false,
    })
  }

  async function savePerson(e: React.FormEvent) {
    e.preventDefault()
    if (!newPerson.name || !newPerson.bio) return
    const isEdit = Boolean(editingPersonSlug)
    const method = isEdit ? 'PUT' : 'POST'
    const payload = isEdit ? { ...newPerson, slug: editingPersonSlug } : newPerson
    const res = await fetch('/api/admin/people', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      flashStatus(isEdit ? 'Profile updated' : 'Profile created')
      cancelEditingPerson()
      fetchAllData()
    }
  }

  async function deletePerson(slug: string) {
    if (!confirm('Delete person profile?')) return
    const res = await fetch(`/api/admin/people?slug=${slug}`, { method: 'DELETE' })
    if (res.ok) {
      if (editingPersonSlug === slug) cancelEditingPerson()
      flashStatus('Profile deleted')
      fetchAllData()
    }
  }

  function startEditingProgram(p: EducationProgramItem) {
    setEditingProgramId(p.id)
    setNewProgram({
      name: p.name,
      poster: p.poster || '',
      tenure: p.tenure,
      totalCost: p.totalCost,
      description: p.description,
      formUrl: p.formUrl || '',
      phases: p.phases ? p.phases.map((ph) => ({ ...ph })) : [],
    })
  }

  function cancelEditingProgram() {
    setEditingProgramId(null)
    setNewProgram({
      name: '',
      poster: '',
      tenure: '12.5 Months',
      totalCost: 'PKR 99,000',
      description: '',
      formUrl: '',
      phases: [],
    })
  }

  function addPhaseRow() {
    setNewProgram((prev) => {
      const nextIndex = prev.phases.length
      return {
        ...prev,
        phases: [
          ...prev.phases,
          {
            phaseNumber: `Phase ${nextIndex}`,
            name: '',
            duration: '2 Months',
            feePerMonth: 'PKR 6,000',
            totalFee: 'PKR 12,000',
          },
        ],
      }
    })
  }

  function updatePhaseRow(index: number, field: string, value: string) {
    setNewProgram((prev) => {
      const updated = [...prev.phases]
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: value }
      }
      return { ...prev, phases: updated }
    })
  }

  function removePhaseRow(index: number) {
    setNewProgram((prev) => ({
      ...prev,
      phases: prev.phases.filter((_, i) => i !== index),
    }))
  }

  async function saveProgram(e: React.FormEvent) {
    e.preventDefault()
    if (!newProgram.name || !newProgram.description) return
    const isEdit = Boolean(editingProgramId)
    const method = isEdit ? 'PUT' : 'POST'
    const payload = isEdit ? { ...newProgram, id: editingProgramId } : newProgram
    const res = await fetch('/api/admin/programs', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      flashStatus(isEdit ? 'Program updated' : 'Education Program saved')
      cancelEditingProgram()
      fetchAllData()
    }
  }

  async function deleteProgram(id: string) {
    if (!confirm('Delete Education Program?')) return
    const res = await fetch(`/api/admin/programs?id=${id}`, { method: 'DELETE' })
    if (res.ok) {
      if (editingProgramId === id) cancelEditingProgram()
      flashStatus('Program deleted')
      fetchAllData()
    }
  }

  function startEditingInitiative(item: InitiativeItem) {
    setEditingInitiativeId(item.id)
    setNewInitiative({
      id: item.id,
      title: item.title,
      tag: item.tag,
      icon: item.icon,
      href: item.href,
      badge: item.badge,
      description: item.description,
      highlights: (item.highlights || []).join('\n'),
      cta: item.cta,
    })
  }

  function cancelEditingInitiative() {
    setEditingInitiativeId(null)
    setNewInitiative({
      id: '',
      title: '',
      tag: '',
      icon: 'BookOpen',
      href: '/research',
      badge: 'Peer-Reviewed & Preprints',
      description: '',
      highlights: '',
      cta: 'Explore',
    })
  }

  async function saveInitiative(e: React.FormEvent) {
    e.preventDefault()
    if (!newInitiative.title || !newInitiative.description) return
    const isEdit = Boolean(editingInitiativeId)
    const method = isEdit ? 'PUT' : 'POST'
    const payload = {
      ...newInitiative,
      id: isEdit ? editingInitiativeId : (newInitiative.id || `init-${Date.now()}`),
      highlights: newInitiative.highlights.split('\n').map((h) => h.trim()).filter(Boolean),
    }
    const res = await fetch('/api/admin/initiatives', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      flashStatus(isEdit ? 'Core Initiative updated' : 'Core Initiative created')
      cancelEditingInitiative()
      fetchAllData()
    }
  }

  async function deleteInitiative(id: string) {
    if (!confirm('Delete this Core Initiative?')) return
    const res = await fetch(`/api/admin/initiatives?id=${id}`, { method: 'DELETE' })
    if (res.ok) {
      if (editingInitiativeId === id) cancelEditingInitiative()
      flashStatus('Core Initiative deleted')
      fetchAllData()
    }
  }

  function startEditingFaq(f: FaqItem) {
    setEditingFaqId(f.id)
    setNewFaq({
      category: f.category,
      question: f.question,
      answer: f.answer,
    })
  }

  function cancelEditingFaq() {
    setEditingFaqId(null)
    setNewFaq({ category: 'Research Services', question: '', answer: '' })
  }

  async function saveFaq(e: React.FormEvent) {
    e.preventDefault()
    if (!newFaq.question || !newFaq.answer) return
    const isEdit = Boolean(editingFaqId)
    const method = isEdit ? 'PUT' : 'POST'
    const payload = isEdit ? { ...newFaq, id: editingFaqId } : newFaq
    const res = await fetch('/api/admin/faqs', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      flashStatus(isEdit ? 'FAQ updated' : 'FAQ added')
      cancelEditingFaq()
      fetchAllData()
    }
  }

  async function deleteFaq(id: string) {
    if (!confirm('Delete this FAQ?')) return
    const res = await fetch(`/api/admin/faqs?id=${id}`, { method: 'DELETE' })
    if (res.ok) {
      if (editingFaqId === id) cancelEditingFaq()
      flashStatus('FAQ deleted')
      fetchAllData()
    }
  }

  async function updateSettings(e: React.FormEvent) {
    e.preventDefault()
    if (!settings) return
    const res = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    })
    if (res.ok) {
      flashStatus('Settings updated')
      fetchAllData()
    }
  }

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-2xl">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="font-mono text-xl font-bold uppercase tracking-widest text-foreground">
              INFERENCE Lab
            </h1>
            <p className="mt-1 text-xs text-muted-foreground">Admin Portal Access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-1 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-mono text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                autoFocus
              />
              <p className="mt-1.5 text-[11px] text-muted-foreground/80">
                Default key: <span className="font-mono font-bold text-foreground">admin123</span>
              </p>
            </div>

            {authError && (
              <p className="rounded border border-red-200 bg-red-50 p-2 text-xs font-semibold text-red-600 dark:border-red-900 dark:bg-red-950/30">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-brand py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-brand-foreground hover:opacity-90"
            >
              Authenticate
            </button>
          </form>

          <div className="mt-6 border-t border-border pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" /> Back to INFERENCE Lab website
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-mono text-sm font-bold uppercase tracking-wider text-foreground hover:opacity-80"
            >
              INFERENCE Lab
            </Link>
            <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-brand">
              CMS Admin
            </span>
          </div>

          <div className="flex items-center gap-4">
            {statusMsg && (
              <span className="flex items-center gap-1.5 rounded bg-green-50 px-3 py-1 font-mono text-xs font-semibold text-green-700 dark:bg-green-950/40 dark:text-green-300">
                <CheckCircle className="h-3.5 w-3.5" /> {statusMsg}
              </span>
            )}

            <button
              onClick={fetchAllData}
              disabled={loading}
              className="inline-flex items-center gap-1 rounded border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <RefreshCw className={cn('h-3.5 w-3.5', loading && 'animate-spin')} /> Refresh
            </button>

            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              View Site <ExternalLink className="h-3.5 w-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 rounded bg-destructive/10 px-3 py-1.5 font-mono text-xs font-semibold text-destructive hover:bg-destructive/20"
            >
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Tabs */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2 border-b border-border pb-4">
          {[
            { id: 'overview', label: 'Overview', icon: ShieldCheck },
            { id: 'publications', label: `Publications (${publications.length})`, icon: FileText },
            { id: 'software', label: `Software (${software.length})`, icon: Code },
            { id: 'journals', label: `Journals (${journals.length})`, icon: BookOpen },
            { id: 'positions', label: `Positions (${positions.length})`, icon: Briefcase },
            { id: 'certificates', label: `Certificates (${Object.keys(certificates).length})`, icon: Award },
            { id: 'people', label: `Team (${people.length})`, icon: Users },
            { id: 'programs', label: `Education (${programs.length})`, icon: GraduationCap },
            { id: 'initiatives', label: `Core Initiatives (${initiatives.length})`, icon: Layers },
            { id: 'faqs', label: `FAQs (${faqs.length})`, icon: HelpCircle },
            { id: 'settings', label: 'Site Settings', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon
            const active = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors',
                  active
                    ? 'bg-brand text-brand-foreground font-semibold'
                    : 'border border-border text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                <Icon className="h-4 w-4" /> {tab.label}
              </button>
            )
          })}
        </div>

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Publications</span>
                <p className="mt-3 font-mono text-3xl font-bold">{publications.length}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Journals</span>
                <p className="mt-3 font-mono text-3xl font-bold text-brand">{journals.length}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Team Profiles</span>
                <p className="mt-3 font-mono text-3xl font-bold">{people.length}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Education Programs</span>
                <p className="mt-3 font-mono text-3xl font-bold text-brand">{programs.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* PUBLICATIONS */}
        {activeTab === 'publications' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  {editingPubId ? 'Edit Publication' : 'Add Publication'}
                </h2>
                {editingPubId && (
                  <button
                    type="button"
                    onClick={cancelEditingPub}
                    className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={savePublication} className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Paper Title *</label>
                  <input
                    type="text"
                    required
                    value={newPub.title}
                    onChange={(e) => setNewPub({ ...newPub, title: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Venue *</label>
                  <input
                    type="text"
                    required
                    value={newPub.venue}
                    onChange={(e) => setNewPub({ ...newPub, venue: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Status</label>
                  <select
                    value={newPub.status}
                    onChange={(e) => setNewPub({ ...newPub, status: e.target.value as PublicationItem['status'] })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  >
                    <option value="Under Review">Under Review</option>
                    <option value="Published Preprint">Published Preprint</option>
                    <option value="Accepted">Accepted</option>
                    <option value="In Progress">In Progress</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Year</label>
                  <input
                    type="text"
                    value={newPub.year}
                    onChange={(e) => setNewPub({ ...newPub, year: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">DOI</label>
                  <input
                    type="text"
                    value={newPub.doi}
                    onChange={(e) => setNewPub({ ...newPub, doi: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Highlight</label>
                  <textarea
                    rows={2}
                    value={newPub.highlight}
                    onChange={(e) => setNewPub({ ...newPub, highlight: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <button type="submit" className="rounded bg-brand px-5 py-2.5 font-mono text-xs font-semibold text-brand-foreground">
                    {editingPubId ? 'Update Publication' : 'Save Publication'}
                  </button>
                  {editingPubId && (
                    <button
                      type="button"
                      onClick={cancelEditingPub}
                      className="rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {publications.map((p) => {
                const isEditing = editingPubId === p.id
                return (
                  <div
                    key={p.id || p.title}
                    className={cn(
                      'flex items-center justify-between p-5 transition-colors',
                      isEditing && 'bg-brand/5 border-l-4 border-l-brand'
                    )}
                  >
                    <div>
                      <span className="font-mono text-[10px] uppercase text-brand border border-brand/40 px-2 py-0.5 rounded mr-2">{p.status}</span>
                      <span className="font-semibold text-foreground">{p.title}</span>
                      <p className="text-xs text-muted-foreground mt-1">{p.venue}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => startEditingPub(p)}
                        className="rounded p-2 text-muted-foreground hover:text-brand hover:bg-brand/10 transition-colors"
                        title="Edit publication"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deletePublication(p.id)}
                        className="rounded p-2 text-destructive hover:bg-destructive/10 transition-colors"
                        title="Delete publication"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* SOFTWARE */}
        {activeTab === 'software' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  {editingSoftId ? 'Edit Software Project' : 'Add Software Project'}
                </h2>
                {editingSoftId && (
                  <button
                    type="button"
                    onClick={cancelEditingSoft}
                    className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={saveSoftware} className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Name *</label>
                  <input
                    type="text"
                    required
                    value={newSoft.name}
                    onChange={(e) => setNewSoft({ ...newSoft, name: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Category *</label>
                  <input
                    type="text"
                    required
                    value={newSoft.category}
                    onChange={(e) => setNewSoft({ ...newSoft, category: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Description *</label>
                  <textarea
                    rows={2}
                    required
                    value={newSoft.description}
                    onChange={(e) => setNewSoft({ ...newSoft, description: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="Speech AI, PyPI, PyTorch"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <button type="submit" className="rounded bg-brand px-5 py-2.5 font-mono text-xs font-semibold text-brand-foreground">
                    {editingSoftId ? 'Update Software Project' : 'Save Software Project'}
                  </button>
                  {editingSoftId && (
                    <button
                      type="button"
                      onClick={cancelEditingSoft}
                      className="rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {software.map((s) => {
                const isEditing = editingSoftId === s.id
                return (
                  <div
                    key={s.id || s.name}
                    className={cn(
                      'flex items-center justify-between p-5 transition-colors',
                      isEditing && 'bg-brand/5 border-l-4 border-l-brand'
                    )}
                  >
                    <div>
                      <span className="font-semibold text-foreground">{s.name}</span>
                      <p className="text-xs text-muted-foreground mt-1">{s.description}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => startEditingSoft(s)}
                        className="rounded p-2 text-muted-foreground hover:text-brand hover:bg-brand/10 transition-colors"
                        title="Edit software"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteSoftware(s.id)}
                        className="rounded p-2 text-destructive hover:bg-destructive/10 transition-colors"
                        title="Delete software"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* JOURNALS */}
        {activeTab === 'journals' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  {editingJournalSlug ? 'Edit Engineering Journal' : 'Add Engineering Journal'}
                </h2>
                {editingJournalSlug && (
                  <button
                    type="button"
                    onClick={cancelEditingJournal}
                    className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={saveJournal} className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Project Name *</label>
                  <input
                    type="text"
                    required
                    value={newJournal.projectName}
                    onChange={(e) => setNewJournal({ ...newJournal, projectName: e.target.value })}
                    placeholder="auralis-vfs"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Journal Title *</label>
                  <input
                    type="text"
                    required
                    value={newJournal.journalTitle}
                    onChange={(e) => setNewJournal({ ...newJournal, journalTitle: e.target.value })}
                    placeholder="High-Performance Virtual File System Architecture for Speech Datasets"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                {/* Contributor Dropdown (Core + Fellowship Team Members) */}
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Select Contributor (Team Member)</label>
                  <select
                    value={newJournal.contributorName}
                    onChange={(e) => {
                      const val = e.target.value
                      const foundPerson = people.find((p) => p.name === val)
                      setNewJournal({
                        ...newJournal,
                        contributorName: val,
                        contributorRole: foundPerson
                          ? (foundPerson.rank || (foundPerson.roles?.[0]) || 'Contributor')
                          : newJournal.contributorRole,
                      })
                    }}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  >
                    <option value="">-- Select Team Member --</option>
                    {people.map((person) => {
                      const typeLabel = 
                        person.teamType === 'core' || person.isCoreTeam ? 'Core Team' :
                        person.teamType === 'fellow' || person.teamType === 'fellowship' || person.isFellow ? 'Engineering Fellow' :
                        person.teamType === 'research' ? 'Research Collaboration' :
                        person.teamType === 'opensource' ? 'Open-Source Collaborator' : 'Team'
                      return (
                        <option key={person.slug || person.name} value={person.name}>
                          {person.name} ({typeLabel})
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Contributor Name (Custom / Override) *</label>
                  <input
                    type="text"
                    required
                    value={newJournal.contributorName}
                    onChange={(e) => setNewJournal({ ...newJournal, contributorName: e.target.value })}
                    placeholder="Muhammad Khubaib Ahmad"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Contributor Role *</label>
                  <input
                    type="text"
                    required
                    value={newJournal.contributorRole}
                    onChange={(e) => setNewJournal({ ...newJournal, contributorRole: e.target.value })}
                    placeholder="Lead Architect"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Program Badge</label>
                  <input
                    type="text"
                    value={newJournal.programBadge}
                    onChange={(e) => setNewJournal({ ...newJournal, programBadge: e.target.value })}
                    placeholder="Engineering Fellowship"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Cohort Badge</label>
                  <input
                    type="text"
                    value={newJournal.cohortBadge}
                    onChange={(e) => setNewJournal({ ...newJournal, cohortBadge: e.target.value })}
                    placeholder="Cohort 2026"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Published Date</label>
                  <input
                    type="date"
                    value={newJournal.publishedDate}
                    onChange={(e) => setNewJournal({ ...newJournal, publishedDate: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Reading Time</label>
                  <input
                    type="text"
                    value={newJournal.readingTime}
                    onChange={(e) => setNewJournal({ ...newJournal, readingTime: e.target.value })}
                    placeholder="6 min read"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newJournal.tags}
                    onChange={(e) => setNewJournal({ ...newJournal, tags: e.target.value })}
                    placeholder="Speech AI, Virtual File System, PyTorch"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">GitHub Link (optional)</label>
                  <input
                    type="text"
                    value={newJournal.githubLink}
                    onChange={(e) => setNewJournal({ ...newJournal, githubLink: e.target.value })}
                    placeholder="https://github.com/Inference-LAB/..."
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">PyPI Package Link (optional)</label>
                  <input
                    type="text"
                    value={newJournal.pypiLink}
                    onChange={(e) => setNewJournal({ ...newJournal, pypiLink: e.target.value })}
                    placeholder="https://pypi.org/project/..."
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Summary *</label>
                  <textarea
                    rows={2}
                    required
                    value={newJournal.summary}
                    onChange={(e) => setNewJournal({ ...newJournal, summary: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Lab Note & Technical Report Content</label>
                  <textarea
                    rows={6}
                    value={newJournal.labNote}
                    onChange={(e) => setNewJournal({ ...newJournal, labNote: e.target.value })}
                    placeholder="Detailed engineering notes, architectural specs, benchmarks, and implementation details..."
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground font-mono"
                  />
                </div>

                <div className="flex items-center gap-3 sm:col-span-2">
                  <button type="submit" className="rounded bg-brand px-5 py-2.5 font-mono text-xs font-semibold text-brand-foreground">
                    {editingJournalSlug ? 'Update Engineering Journal' : 'Save Engineering Journal'}
                  </button>
                  {editingJournalSlug && (
                    <button
                      type="button"
                      onClick={cancelEditingJournal}
                      className="rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {journals.map((j) => {
                const isEditing = editingJournalSlug === j.slug
                return (
                  <div
                    key={j.slug}
                    className={cn(
                      'flex items-center justify-between p-5 transition-colors',
                      isEditing && 'bg-brand/5 border-l-4 border-l-brand'
                    )}
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-brand uppercase">{j.projectName}</span>
                      <h4 className="font-semibold text-foreground text-sm">{j.journalTitle}</h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => startEditingJournal(j)}
                        className="rounded p-2 text-muted-foreground hover:text-brand hover:bg-brand/10 transition-colors"
                        title="Edit journal"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteJournal(j.slug)}
                        className="rounded p-2 text-destructive hover:bg-destructive/10 transition-colors"
                        title="Delete journal"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* POSITIONS */}
        {activeTab === 'positions' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  {editingPosId ? 'Edit Position / Career Role' : 'Add Position / Career Role'}
                </h2>
                {editingPosId && (
                  <button
                    type="button"
                    onClick={cancelEditingPos}
                    className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={savePosition} className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Position Name / Title *</label>
                  <input
                    type="text"
                    required
                    value={newPos.title}
                    onChange={(e) => setNewPos({ ...newPos, title: e.target.value })}
                    placeholder="Applied AI Engineering Fellow"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Status (Open, Soon, Closed) *</label>
                  <select
                    value={newPos.status || 'open'}
                    onChange={(e) => {
                      const val = e.target.value as 'open' | 'soon' | 'closed'
                      setNewPos({ ...newPos, status: val, applicationsOpen: val !== 'closed' })
                    }}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground font-mono"
                  >
                    <option value="open">Open (Applications Open)</option>
                    <option value="soon">Soon (Opening Soon)</option>
                    <option value="closed">Closed (Closed)</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Work Type</label>
                  <input
                    type="text"
                    value={newPos.type}
                    onChange={(e) => setNewPos({ ...newPos, type: e.target.value })}
                    placeholder="Remote · Flexible"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Application Form Link / URL</label>
                  <input
                    type="text"
                    value={newPos.applyHref}
                    onChange={(e) => setNewPos({ ...newPos, applyHref: e.target.value })}
                    placeholder="https://forms.gle/... or mailto:contact@inference-lab.org"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Description / Summary *</label>
                  <textarea
                    rows={3}
                    required
                    value={newPos.summary}
                    onChange={(e) => setNewPos({ ...newPos, summary: e.target.value })}
                    placeholder="Work on real AI systems alongside the lab..."
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Key Highlights (One per line)</label>
                  <textarea
                    rows={3}
                    value={posHighlightsInput}
                    onChange={(e) => setPosHighlightsInput(e.target.value)}
                    placeholder="Mentorship from lab founder&#10;Real shipped projects&#10;Co-authorship opportunities"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-xs text-foreground font-mono"
                  />
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <button type="submit" className="rounded bg-brand px-5 py-2.5 font-mono text-xs font-semibold text-brand-foreground">
                    {editingPosId ? 'Update Position' : 'Save Position'}
                  </button>
                  {editingPosId && (
                    <button
                      type="button"
                      onClick={cancelEditingPos}
                      className="rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {positions.map((pos) => {
                const isEditing = editingPosId === pos.id
                const statusBadgeStyle =
                  pos.status === 'open'
                    ? 'border-green-500/40 text-green-600 bg-green-500/10'
                    : pos.status === 'soon'
                    ? 'border-yellow-500/40 text-yellow-500 bg-yellow-500/10'
                    : 'border-border text-muted-foreground bg-muted/40'

                return (
                  <div
                    key={pos.id}
                    className={cn(
                      'flex items-start justify-between p-5 transition-colors',
                      isEditing && 'bg-brand/5 border-l-4 border-l-brand'
                    )}
                  >
                    <div className="space-y-1.5 pr-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-foreground text-base">{pos.title}</span>
                        <span
                          className={cn(
                            'rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest font-semibold',
                            statusBadgeStyle
                          )}
                        >
                          {pos.status === 'open' ? 'Open' : pos.status === 'soon' ? 'Soon' : 'Closed'}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-muted-foreground">{pos.type}</p>
                      <p className="text-xs text-muted-foreground mt-1 max-w-2xl leading-relaxed">{pos.summary}</p>
                      {pos.highlights && pos.highlights.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {pos.highlights.map((h, idx) => (
                            <span key={idx} className="rounded bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                              • {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => startEditingPos(pos)}
                        className="rounded p-2 text-muted-foreground hover:text-brand hover:bg-brand/10 transition-colors"
                        title="Edit position"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deletePosition(pos.id)}
                        className="rounded p-2 text-destructive hover:bg-destructive/10 transition-colors"
                        title="Delete position"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* CERTIFICATES */}
        {activeTab === 'certificates' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  {editingCertId ? `Edit Certificate (${editingCertId})` : 'Issue Official Certificate'}
                </h2>
                {editingCertId && (
                  <button
                    type="button"
                    onClick={cancelEditingCert}
                    className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={saveCertificate} className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Certificate ID *</label>
                  <input
                    type="text"
                    required
                    disabled={Boolean(editingCertId)}
                    value={newCert.id}
                    onChange={(e) => setNewCert({ ...newCert, id: e.target.value })}
                    placeholder="IL-RC-2026-9041"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground font-mono disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Recipient Name *</label>
                  <input
                    type="text"
                    required
                    value={newCert.name}
                    onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Program *</label>
                  <input
                    type="text"
                    required
                    value={newCert.program}
                    onChange={(e) => setNewCert({ ...newCert, program: e.target.value })}
                    placeholder="Applied AI Mentorship Program"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Grade</label>
                  <input
                    type="text"
                    value={newCert.grade}
                    onChange={(e) => setNewCert({ ...newCert, grade: e.target.value })}
                    placeholder="Distinction"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <button type="submit" className="rounded bg-brand px-5 py-2.5 font-mono text-xs font-semibold text-brand-foreground">
                    {editingCertId ? 'Update Certificate' : 'Issue Certificate'}
                  </button>
                  {editingCertId && (
                    <button
                      type="button"
                      onClick={cancelEditingCert}
                      className="rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {Object.entries(certificates).map(([id, cert]) => {
                const isEditing = editingCertId === id
                return (
                  <div
                    key={id}
                    className={cn(
                      'flex items-center justify-between p-5 transition-colors',
                      isEditing && 'bg-brand/5 border-l-4 border-l-brand'
                    )}
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-brand mr-3">{id}</span>
                      <span className="font-semibold text-foreground">{cert.name}</span>
                      <p className="text-xs text-muted-foreground mt-1">{cert.program} · {cert.grade}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => startEditingCert(id, cert)}
                        className="rounded p-2 text-muted-foreground hover:text-brand hover:bg-brand/10 transition-colors"
                        title="Edit certificate"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteCertificate(id)}
                        className="rounded p-2 text-destructive hover:bg-destructive/10 transition-colors"
                        title="Delete certificate"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* PEOPLE / TEAM */}
        {activeTab === 'people' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  {editingPersonSlug ? 'Edit Team Profile' : 'Add Team Profile'}
                </h2>
                {editingPersonSlug && (
                  <button
                    type="button"
                    onClick={cancelEditingPerson}
                    className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={savePerson} className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Team Setup *</label>
                  <select
                    value={newPerson.teamType}
                    onChange={(e) => setNewPerson({ ...newPerson, teamType: e.target.value as any })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  >
                    <option value="core">Core Team</option>
                    <option value="fellow">Engineering Fellow</option>
                    <option value="research">Research Collaboration</option>
                    <option value="opensource">Open-Source Collaborator</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newPerson.name}
                    onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
                    placeholder="Muhammad Khubaib Ahmad"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Rank / Primary Role *</label>
                  <input
                    type="text"
                    value={newPerson.rank}
                    onChange={(e) => setNewPerson({ ...newPerson, rank: e.target.value })}
                    placeholder="Lead Architect / Speech AI Fellow"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Roles (Comma separated)</label>
                  <input
                    type="text"
                    value={newPerson.roles}
                    onChange={(e) => setNewPerson({ ...newPerson, roles: e.target.value })}
                    placeholder="AI Research Engineer, Team Lead"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">
                    Profile Photo (File Upload OR Paste Image URL)
                  </label>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload(e, (dataUrl) => setNewPerson((prev) => ({ ...prev, photo: dataUrl })))
                      }
                      className="text-xs text-muted-foreground file:mr-3 file:rounded file:border-0 file:bg-brand/10 file:px-3 file:py-1.5 file:font-mono file:text-xs file:font-semibold file:text-brand hover:file:bg-brand/20"
                    />
                    <span className="font-mono text-xs text-muted-foreground">OR</span>
                    <input
                      type="text"
                      value={newPerson.photo}
                      onChange={(e) => setNewPerson({ ...newPerson, photo: e.target.value })}
                      placeholder="Paste image URL (e.g. https://...)"
                      className="flex-1 rounded border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground"
                    />
                    {newPerson.photo && (
                      <img
                        src={newPerson.photo}
                        alt="Preview"
                        className="h-10 w-10 shrink-0 rounded-full object-cover border border-border"
                      />
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Description / Biography *</label>
                  <textarea
                    rows={2}
                    required
                    value={newPerson.bio}
                    onChange={(e) => setNewPerson({ ...newPerson, bio: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <button type="submit" className="rounded bg-brand px-5 py-2.5 font-mono text-xs font-semibold text-brand-foreground">
                    {editingPersonSlug ? 'Update Profile' : 'Create Profile'}
                  </button>
                  {editingPersonSlug && (
                    <button
                      type="button"
                      onClick={cancelEditingPerson}
                      className="rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {people.map((p) => {
                const isEditing = editingPersonSlug === p.slug
                let tType = p.teamType || 'core'
                if (tType === 'fellowship') tType = 'fellow'
                const badgeConfig = {
                  core: { label: 'Core Team', style: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30' },
                  fellow: { label: 'Engineering Fellow', style: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30' },
                  research: { label: 'Research Collaboration', style: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' },
                  opensource: { label: 'Open-Source Collaborator', style: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30' },
                }[tType] || { label: 'Core Team', style: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30' }

                return (
                  <div
                    key={p.slug}
                    className={cn(
                      'flex items-center justify-between p-5 transition-colors',
                      isEditing && 'bg-brand/5 border-l-4 border-l-brand'
                    )}
                  >
                    <div className="flex items-center gap-4">
                      {p.photo ? (
                        <img src={p.photo} alt={p.name} className="h-10 w-10 rounded-full object-cover border border-border" />
                      ) : (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 font-mono text-sm font-bold text-brand">
                          {p.name[0]}
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              'rounded px-2 py-0.5 font-mono text-[10px] uppercase font-semibold border',
                              badgeConfig.style
                            )}
                          >
                            {badgeConfig.label}
                          </span>
                          <h4 className="font-semibold text-foreground text-sm">{p.name}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{p.rank || p.roles.join(' · ')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => startEditingPerson(p)}
                        className="rounded p-2 text-muted-foreground hover:text-brand hover:bg-brand/10 transition-colors"
                        title="Edit profile"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deletePerson(p.slug)}
                        className="rounded p-2 text-destructive hover:bg-destructive/10 transition-colors"
                        title="Delete profile"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* EDUCATION PROGRAMS */}
        {activeTab === 'programs' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  {editingProgramId ? 'Edit Education Program' : 'Add Education Program'}
                </h2>
                {editingProgramId && (
                  <button
                    type="button"
                    onClick={cancelEditingProgram}
                    className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={saveProgram} className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Program Name *</label>
                  <input
                    type="text"
                    required
                    value={newProgram.name}
                    onChange={(e) => setNewProgram({ ...newProgram, name: e.target.value })}
                    placeholder="Applied AI Engineering Program"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Tenure / Duration *</label>
                  <input
                    type="text"
                    required
                    value={newProgram.tenure}
                    onChange={(e) => setNewProgram({ ...newProgram, tenure: e.target.value })}
                    placeholder="12.5 Months"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Full Program Total Cost *</label>
                  <input
                    type="text"
                    required
                    value={newProgram.totalCost}
                    onChange={(e) => setNewProgram({ ...newProgram, totalCost: e.target.value })}
                    placeholder="PKR 99,000"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">
                    Program Poster Upload (Supports PNG, JPG, JPEG, WebP, SVG)
                  </label>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/webp,image/svg+xml"
                      onChange={(e) =>
                        handleFileUpload(e, (dataUrl) => setNewProgram((prev) => ({ ...prev, poster: dataUrl })))
                      }
                      className="text-xs text-muted-foreground file:mr-3 file:rounded file:border-0 file:bg-brand/10 file:px-3 file:py-1.5 file:font-mono file:text-xs file:font-semibold file:text-brand hover:file:bg-brand/20"
                    />
                    {newProgram.poster && (
                      <div className="flex items-center gap-2">
                        <img
                          src={newProgram.poster}
                          alt="Poster Preview"
                          className="h-10 w-14 rounded border border-border object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setNewProgram((prev) => ({ ...prev, poster: '' }))}
                          className="font-mono text-xs text-destructive hover:underline"
                        >
                          Remove Poster
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Application Form Link (URL)</label>
                  <input
                    type="text"
                    value={newProgram.formUrl}
                    onChange={(e) => setNewProgram({ ...newProgram, formUrl: e.target.value })}
                    placeholder="https://forms.gle/YQ1kiyvqYiu8TAho9"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                    When students click &quot;Fill Form&quot;, this Google Form URL will open automatically in a new tab.
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Program Description *</label>
                  <textarea
                    rows={3}
                    required
                    value={newProgram.description}
                    onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                    placeholder="A structured mentorship program designed to train production-ready AI engineers..."
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                {/* DYNAMIC PHASES DETAILS TABLE BUILDER */}
                <div className="sm:col-span-2 rounded-xl border border-border bg-background/50 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 mb-4">
                    <div>
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                        Phases Details Table ({newProgram.phases.length} Phases)
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Add individual phases with their respective duration and fee structure.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={addPhaseRow}
                      className="inline-flex items-center gap-1.5 rounded bg-brand px-3 py-1.5 font-mono text-xs font-semibold text-brand-foreground shadow hover:opacity-90 transition-opacity"
                    >
                      <Plus className="h-3.5 w-3.5" /> Add Phase
                    </button>
                  </div>

                  {newProgram.phases.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-border font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                            <th className="pb-2 pr-3 font-semibold">Phase Number</th>
                            <th className="pb-2 pr-3 font-semibold">Phase Name</th>
                            <th className="pb-2 pr-3 font-semibold">Duration</th>
                            <th className="pb-2 pr-3 font-semibold">Fee / Month</th>
                            <th className="pb-2 pr-3 font-semibold">Total Fee</th>
                            <th className="pb-2 text-right font-semibold">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {newProgram.phases.map((ph, idx) => (
                            <tr key={idx} className="group">
                              <td className="py-2.5 pr-3">
                                <input
                                  type="text"
                                  value={ph.phaseNumber}
                                  onChange={(e) => updatePhaseRow(idx, 'phaseNumber', e.target.value)}
                                  placeholder={`Phase ${idx}`}
                                  className="w-24 rounded border border-border bg-card px-2.5 py-1.5 font-mono text-xs text-foreground"
                                />
                              </td>
                              <td className="py-2.5 pr-3">
                                <input
                                  type="text"
                                  value={ph.name}
                                  onChange={(e) => updatePhaseRow(idx, 'name', e.target.value)}
                                  placeholder="e.g. Engineering Foundations"
                                  className="w-full min-w-[160px] rounded border border-border bg-card px-2.5 py-1.5 text-xs text-foreground"
                                />
                              </td>
                              <td className="py-2.5 pr-3">
                                <input
                                  type="text"
                                  value={ph.duration}
                                  onChange={(e) => updatePhaseRow(idx, 'duration', e.target.value)}
                                  placeholder="2 Months"
                                  className="w-24 rounded border border-border bg-card px-2.5 py-1.5 font-mono text-xs text-foreground"
                                />
                              </td>
                              <td className="py-2.5 pr-3">
                                <input
                                  type="text"
                                  value={ph.feePerMonth}
                                  onChange={(e) => updatePhaseRow(idx, 'feePerMonth', e.target.value)}
                                  placeholder="PKR 6,000"
                                  className="w-28 rounded border border-border bg-card px-2.5 py-1.5 font-mono text-xs text-foreground"
                                />
                              </td>
                              <td className="py-2.5 pr-3">
                                <input
                                  type="text"
                                  value={ph.totalFee}
                                  onChange={(e) => updatePhaseRow(idx, 'totalFee', e.target.value)}
                                  placeholder="PKR 12,000"
                                  className="w-28 rounded border border-border bg-card px-2.5 py-1.5 font-mono text-xs text-foreground"
                                />
                              </td>
                              <td className="py-2.5 text-right">
                                <button
                                  type="button"
                                  onClick={() => removePhaseRow(idx)}
                                  className="rounded p-1.5 text-destructive hover:bg-destructive/10 transition-colors"
                                  title="Delete Phase"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="rounded-lg border border-dashed border-border p-6 text-center">
                      <p className="font-mono text-xs text-muted-foreground">
                        No phases added yet. Click &quot;+ Add Phase&quot; above to add Phase details (e.g. Phase 0, Phase 1, Phase 2...).
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 sm:col-span-2 mt-2">
                  <button type="submit" className="rounded bg-brand px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-brand-foreground shadow hover:opacity-90">
                    {editingProgramId ? 'Update Program' : 'Save Program'}
                  </button>
                  {editingProgramId && (
                    <button
                      type="button"
                      onClick={cancelEditingProgram}
                      className="rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {programs.map((prog) => {
                const isEditing = editingProgramId === prog.id
                return (
                  <div
                    key={prog.id}
                    className={cn(
                      'flex flex-col gap-4 p-5 transition-colors sm:flex-row sm:items-center sm:justify-between',
                      isEditing && 'bg-brand/5 border-l-4 border-l-brand'
                    )}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-brand uppercase">[{prog.tenure}]</span>
                        <span className="font-semibold text-foreground text-base">{prog.name}</span>
                        <span className="font-mono text-xs text-green-500 font-semibold border border-green-500/30 px-2 py-0.5 rounded">
                          {prog.totalCost}
                        </span>
                        {prog.phases && prog.phases.length > 0 && (
                          <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                            {prog.phases.length} Phases Defined
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{prog.description}</p>
                      {prog.formUrl && (
                        <p className="text-[11px] font-mono text-brand/80 mt-1 truncate max-w-md">
                          Form URL: {prog.formUrl}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => startEditingProgram(prog)}
                        className="rounded p-2 text-muted-foreground hover:text-brand hover:bg-brand/10 transition-colors"
                        title="Edit program"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteProgram(prog.id)}
                        className="rounded p-2 text-destructive hover:bg-destructive/10 transition-colors"
                        title="Delete program"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* FAQS */}
        {activeTab === 'faqs' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  {editingFaqId ? 'Edit Site FAQ' : 'Add Site FAQ'}
                </h2>
                {editingFaqId && (
                  <button
                    type="button"
                    onClick={cancelEditingFaq}
                    className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={saveFaq} className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Category</label>
                  <select
                    value={newFaq.category}
                    onChange={(e) => setNewFaq({ ...newFaq, category: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  >
                    <option value="Research Services">Research Services</option>
                    <option value="Applied AI Engineering Program">Applied AI Engineering Program</option>
                    <option value="Career & Eligibility">Career &amp; Eligibility</option>
                    <option value="Certificates">Certificates</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Question *</label>
                  <input
                    type="text"
                    required
                    value={newFaq.question}
                    onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Answer *</label>
                  <textarea
                    rows={3}
                    required
                    value={newFaq.answer}
                    onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <button type="submit" className="rounded bg-brand px-5 py-2.5 font-mono text-xs font-semibold text-brand-foreground">
                    {editingFaqId ? 'Update FAQ' : 'Save FAQ'}
                  </button>
                  {editingFaqId && (
                    <button
                      type="button"
                      onClick={cancelEditingFaq}
                      className="rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {faqs.map((faq) => {
                const isEditing = editingFaqId === faq.id
                return (
                  <div
                    key={faq.id}
                    className={cn(
                      'flex items-center justify-between p-5 transition-colors',
                      isEditing && 'bg-brand/5 border-l-4 border-l-brand'
                    )}
                  >
                    <div>
                      <span className="font-mono text-xs text-brand uppercase mr-2">[{faq.category}]</span>
                      <span className="font-semibold text-foreground">{faq.question}</span>
                      <p className="text-xs text-muted-foreground mt-1">{faq.answer}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => startEditingFaq(faq)}
                        className="rounded p-2 text-muted-foreground hover:text-brand hover:bg-brand/10 transition-colors"
                        title="Edit FAQ"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteFaq(faq.id)}
                        className="rounded p-2 text-destructive hover:bg-destructive/10 transition-colors"
                        title="Delete FAQ"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* CORE INITIATIVES */}
        {activeTab === 'initiatives' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  {editingInitiativeId ? 'Edit Core Initiative' : 'Add Core Initiative'}
                </h2>
                {editingInitiativeId && (
                  <button
                    type="button"
                    onClick={cancelEditingInitiative}
                    className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel Edit
                  </button>
                )}
              </div>

              <form onSubmit={saveInitiative} className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Title *</label>
                  <input
                    type="text"
                    required
                    value={newInitiative.title}
                    onChange={(e) => setNewInitiative({ ...newInitiative, title: e.target.value })}
                    placeholder="Explore our Research"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Category Tag *</label>
                  <input
                    type="text"
                    required
                    value={newInitiative.tag}
                    onChange={(e) => setNewInitiative({ ...newInitiative, tag: e.target.value })}
                    placeholder="Research Output"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Badge Label</label>
                  <input
                    type="text"
                    value={newInitiative.badge}
                    onChange={(e) => setNewInitiative({ ...newInitiative, badge: e.target.value })}
                    placeholder="Peer-Reviewed & Preprints"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Target URL (href) *</label>
                  <input
                    type="text"
                    required
                    value={newInitiative.href}
                    onChange={(e) => setNewInitiative({ ...newInitiative, href: e.target.value })}
                    placeholder="/research"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">CTA Button Label</label>
                  <input
                    type="text"
                    value={newInitiative.cta}
                    onChange={(e) => setNewInitiative({ ...newInitiative, cta: e.target.value })}
                    placeholder="Explore Research"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Icon</label>
                  <select
                    value={newInitiative.icon}
                    onChange={(e) => setNewInitiative({ ...newInitiative, icon: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  >
                    <option value="BookOpen">BookOpen (Research / Papers)</option>
                    <option value="GraduationCap">GraduationCap (Education / Programs)</option>
                    <option value="Code2">Code2 (Software / Code)</option>
                    <option value="Users">Users (Team / Join / Community)</option>
                    <option value="Sparkles">Sparkles (AI / Innovation)</option>
                    <option value="Cpu">Cpu (Hardware / Compute)</option>
                    <option value="Layers">Layers (Systems / Architecture)</option>
                    <option value="Terminal">Terminal (CLI / Engineering)</option>
                    <option value="Compass">Compass (Guidance / Pathways)</option>
                    <option value="Briefcase">Briefcase (Careers / Industry)</option>
                    <option value="FlaskConical">FlaskConical (Lab / Experiment)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">Description *</label>
                  <textarea
                    rows={3}
                    required
                    value={newInitiative.description}
                    onChange={(e) => setNewInitiative({ ...newInitiative, description: e.target.value })}
                    placeholder="Rigorous scientific output spanning vocal biomarkers, low-resource Roman Urdu corpora..."
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mono text-xs text-muted-foreground">
                    Featured Highlights (one item per line)
                  </label>
                  <textarea
                    rows={4}
                    value={newInitiative.highlights}
                    onChange={(e) => setNewInitiative({ ...newInitiative, highlights: e.target.value })}
                    placeholder={'Clinical-grade vocal fatigue screening\nRUEmoCorp & RUDaSA corpora\nWorkstation cursor kinematics sensing\nZenodo open data & DOI citations'}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground font-mono text-xs"
                  />
                </div>

                <div className="flex items-center gap-3 sm:col-span-2">
                  <button
                    type="submit"
                    className="rounded bg-brand px-5 py-2.5 font-mono text-xs font-semibold text-brand-foreground"
                  >
                    {editingInitiativeId ? 'Update Core Initiative' : 'Add Core Initiative'}
                  </button>
                  {editingInitiativeId && (
                    <button
                      type="button"
                      onClick={cancelEditingInitiative}
                      className="rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Initiatives Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {initiatives.map((item) => {
                const isEditing = editingInitiativeId === item.id
                return (
                  <div
                    key={item.id}
                    className={cn(
                      'flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors',
                      isEditing && 'border-brand ring-1 ring-brand'
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold uppercase text-brand">
                          {item.tag}
                        </span>
                        <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase text-muted-foreground">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-3 font-mono text-[11px] text-muted-foreground">
                        <span className="font-semibold text-foreground">Target Link:</span> {item.href} | <span className="font-semibold text-foreground">Icon:</span> {item.icon}
                      </div>
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="mt-3 border-t border-border pt-2.5">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Highlights:</p>
                          <ul className="space-y-0.5">
                            {item.highlights.slice(0, 3).map((h, i) => (
                              <li key={i} className="font-mono text-xs text-foreground/80 flex items-center gap-1.5">
                                <span className="h-1 w-1 rounded-full bg-brand" /> {h}
                              </li>
                            ))}
                            {item.highlights.length > 3 && (
                              <li className="font-mono text-[10px] text-muted-foreground">
                                +{item.highlights.length - 3} more...
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                      <span className="font-mono text-xs font-semibold text-brand">
                        CTA: {item.cta}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => startEditingInitiative(item)}
                          className="rounded p-1.5 text-muted-foreground hover:bg-brand/10 hover:text-brand transition-colors"
                          title="Edit Initiative"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteInitiative(item.id)}
                          className="rounded p-1.5 text-destructive hover:bg-destructive/10 transition-colors"
                          title="Delete Initiative"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {activeTab === 'settings' && settings && (
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">Global Site Settings</h2>
            <form onSubmit={updateSettings} className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block font-mono text-xs text-muted-foreground">Organization Name</label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                  className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-xs text-muted-foreground">LinkedIn URL</label>
                <input
                  type="text"
                  value={settings.linkedin || ''}
                  onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                  placeholder="https://www.linkedin.com/company/inference-lab"
                  className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-xs text-muted-foreground">Instagram URL</label>
                <input
                  type="text"
                  value={settings.instagram || ''}
                  onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                  placeholder="https://www.instagram.com/inference.lab/"
                  className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-xs text-muted-foreground">Facebook URL</label>
                <input
                  type="text"
                  value={settings.facebook || ''}
                  onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                  placeholder="https://web.facebook.com/profile.php?id=61592782978869"
                  className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="rounded bg-brand px-5 py-2.5 font-mono text-xs font-semibold text-brand-foreground">
                  Save Global Settings
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
