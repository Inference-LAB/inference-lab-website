import { NextResponse } from 'next/server'
import { getPrograms, savePrograms, deleteProgram, type EducationProgramItem } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const programs = await getPrograms()
  return NextResponse.json(programs, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const current = await getPrograms()
    const newItem: EducationProgramItem = {
      id: body.id || `prog-${Date.now()}`,
      name: body.name || 'Untitled Program',
      poster: body.poster || '',
      tenure: body.tenure || '12.5 Months',
      totalCost: body.totalCost || 'PKR 0',
      description: body.description || '',
      formUrl: body.formUrl || '',
      phases: Array.isArray(body.phases) ? body.phases : [],
    }
    const updated = [newItem, ...current]
    await savePrograms(updated)
    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create education program' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const current = await getPrograms()
    const index = current.findIndex((p) => p.id === body.id)
    if (index !== -1) {
      const updatedItem: EducationProgramItem = {
        ...current[index],
        ...body,
        phases: Array.isArray(body.phases) ? body.phases : (current[index].phases || []),
      }
      current[index] = updatedItem
      await savePrograms(current)
      return NextResponse.json({ success: true, item: updatedItem })
    }
    return NextResponse.json({ success: false, message: 'Program not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update education program' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ success: false, message: 'Missing ID' }, { status: 400 })

    await deleteProgram(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete education program' }, { status: 500 })
  }
}
