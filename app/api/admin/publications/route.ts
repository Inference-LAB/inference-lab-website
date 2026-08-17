import { NextResponse } from 'next/server'
import { getPublications, savePublications, deletePublication, type PublicationItem } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const items = await getPublications()
  return NextResponse.json(items, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const current = await getPublications()
    const newItem: PublicationItem = {
      id: body.id || `pub-${Date.now()}`,
      title: body.title || '',
      venue: body.venue || '',
      status: body.status || 'Under Review',
      year: body.year || new Date().getFullYear().toString(),
      doi: body.doi || '',
      highlight: body.highlight || '',
    }
    const updated = [newItem, ...current]
    await savePublications(updated)
    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to add publication' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const updatedItem: PublicationItem = await req.json()
    const current = await getPublications()
    const index = current.findIndex((p) => p.id === updatedItem.id)
    if (index !== -1) {
      current[index] = updatedItem
      await savePublications(current)
      return NextResponse.json({ success: true, item: updatedItem })
    }
    return NextResponse.json({ success: false, message: 'Item not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update publication' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ success: false, message: 'Missing ID' }, { status: 400 })

    await deletePublication(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete publication' }, { status: 500 })
  }
}
