import { NextResponse } from 'next/server'
import { getFaqs, saveFaqs, deleteFaq, type FaqItem } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const faqs = await getFaqs()
  return NextResponse.json(faqs, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const current = await getFaqs()
    const newItem: FaqItem = {
      id: body.id || `faq-${Date.now()}`,
      category: body.category || 'General',
      question: body.question || '',
      answer: body.answer || '',
    }
    const updated = [newItem, ...current]
    await saveFaqs(updated)
    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save FAQ' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const updatedItem: FaqItem = await req.json()
    const current = await getFaqs()
    const index = current.findIndex((f) => f.id === updatedItem.id)
    if (index !== -1) {
      current[index] = updatedItem
      await saveFaqs(current)
      return NextResponse.json({ success: true, item: updatedItem })
    }
    return NextResponse.json({ success: false, message: 'FAQ not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update FAQ' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ success: false, message: 'Missing id' }, { status: 400 })

    await deleteFaq(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete FAQ' }, { status: 500 })
  }
}
