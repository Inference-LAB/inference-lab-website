import { NextResponse } from 'next/server'
import { getSoftware, saveSoftware, deleteSoftware, type SoftwareItem } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const items = await getSoftware()
  return NextResponse.json(items, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const current = await getSoftware()
    const newItem: SoftwareItem = {
      id: body.id || `soft-${Date.now()}`,
      name: body.name || '',
      category: body.category || '',
      description: body.description || '',
      tags: Array.isArray(body.tags) ? body.tags : (body.tags || '').split(',').map((t: string) => t.trim()),
      pypi: Boolean(body.pypi),
    }
    const updated = [newItem, ...current]
    await saveSoftware(updated)
    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to add software' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const updatedItem: SoftwareItem = await req.json()
    const current = await getSoftware()
    const index = current.findIndex((s) => s.id === updatedItem.id)
    if (index !== -1) {
      current[index] = updatedItem
      await saveSoftware(current)
      return NextResponse.json({ success: true, item: updatedItem })
    }
    return NextResponse.json({ success: false, message: 'Item not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update software' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ success: false, message: 'Missing ID' }, { status: 400 })

    await deleteSoftware(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete software' }, { status: 500 })
  }
}
