import { NextResponse } from 'next/server'
import { getJournals, saveJournals, deleteJournal, type JournalItem } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const journals = await getJournals()
  return NextResponse.json(journals, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const current = await getJournals()
    const slug = body.slug || (body.projectName || 'journal').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now()
    const newItem: JournalItem = {
      slug,
      projectName: body.projectName || 'Engineering Project',
      journalTitle: body.journalTitle || 'Technical Report',
      summary: body.summary || '',
      coverImage: body.coverImage || '/images/journals/default.png',
      programBadge: body.programBadge || 'Engineering Fellowship',
      cohortBadge: body.cohortBadge || 'Cohort 2026',
      publishedDate: body.publishedDate || new Date().toISOString().split('T')[0],
      readingTime: body.readingTime || '5 min read',
      tags: Array.isArray(body.tags) ? body.tags : (body.tags || '').split(',').map((t: string) => t.trim()),
      contributors: Array.isArray(body.contributors) ? body.contributors : [],
      repositoryLinks: body.repositoryLinks || {},
      labNote: body.labNote || '',
    }
    const updated = [newItem, ...current]
    await saveJournals(updated)
    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save journal' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const current = await getJournals()
    const index = current.findIndex((j) => j.slug === body.slug)
    if (index !== -1) {
      const updatedItem: JournalItem = {
        ...current[index],
        ...body,
        tags: Array.isArray(body.tags) ? body.tags : (body.tags || '').split(',').map((t: string) => t.trim()).filter(Boolean),
        contributors: Array.isArray(body.contributors) ? body.contributors : current[index].contributors,
        repositoryLinks: body.repositoryLinks || current[index].repositoryLinks,
      }
      current[index] = updatedItem
      await saveJournals(current)
      return NextResponse.json({ success: true, item: updatedItem })
    }
    return NextResponse.json({ success: false, message: 'Journal not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update journal' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug')
    if (!slug) return NextResponse.json({ success: false, message: 'Missing slug' }, { status: 400 })

    await deleteJournal(slug)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete journal' }, { status: 500 })
  }
}
