import { NextResponse } from 'next/server'
import { getInitiatives, saveInitiatives, deleteInitiative, type InitiativeItem } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const items = await getInitiatives()
  return NextResponse.json(items, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const current = await getInitiatives()
    const newItem: InitiativeItem = {
      id: body.id || `init-${Date.now()}`,
      title: body.title || 'Untitled Initiative',
      tag: body.tag || 'Initiative',
      icon: body.icon || 'Sparkles',
      href: body.href || '/research',
      badge: body.badge || 'Featured',
      description: body.description || '',
      highlights: Array.isArray(body.highlights)
        ? body.highlights
        : (body.highlights || '').split(',').map((h: string) => h.trim()).filter(Boolean),
      cta: body.cta || 'Learn More',
    }
    const updated = [newItem, ...current]
    await saveInitiatives(updated)
    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create initiative' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const current = await getInitiatives()
    const index = current.findIndex((i) => i.id === body.id)
    if (index !== -1) {
      const updatedItem: InitiativeItem = {
        ...current[index],
        ...body,
        highlights: Array.isArray(body.highlights)
          ? body.highlights
          : (body.highlights || '').split(',').map((h: string) => h.trim()).filter(Boolean),
      }
      current[index] = updatedItem
      await saveInitiatives(current)
      return NextResponse.json({ success: true, item: updatedItem })
    }
    return NextResponse.json({ success: false, message: 'Initiative not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update initiative' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ success: false, message: 'Missing ID' }, { status: 400 })

    await deleteInitiative(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete initiative' }, { status: 500 })
  }
}
