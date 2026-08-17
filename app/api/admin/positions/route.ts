import { NextResponse } from 'next/server'
import { getPositions, savePositions, deletePosition, type PositionItem } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const items = await getPositions()
  return NextResponse.json(items, {
    headers: { 'Cache-Control': 'no-store, max-age=0' },
  })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const current = await getPositions()
    const statusVal = body.status || 'open'
    const newItem: PositionItem = {
      id: body.id || `pos-${Date.now()}`,
      title: body.title || '',
      type: body.type || 'Remote · Flexible',
      status: statusVal,
      applicationsOpen: statusVal !== 'closed',
      summary: body.summary || '',
      highlights: Array.isArray(body.highlights)
        ? body.highlights
        : (body.highlights || '').split('\n').filter(Boolean),
      href: body.href || '/join',
      applyHref: body.applyHref || 'mailto:contact@inference-lab.org',
    }
    const updated = [newItem, ...current]
    await savePositions(updated)
    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to add position' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const updatedItem: PositionItem = await req.json()
    const current = await getPositions()
    const index = current.findIndex((p) => p.id === updatedItem.id)
    if (index !== -1) {
      if (updatedItem.status) {
        updatedItem.applicationsOpen = updatedItem.status !== 'closed'
      }
      current[index] = updatedItem
      await savePositions(current)
      return NextResponse.json({ success: true, item: updatedItem })
    }
    return NextResponse.json({ success: false, message: 'Item not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update position' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ success: false, message: 'Missing ID' }, { status: 400 })

    await deletePosition(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete position' }, { status: 500 })
  }
}
