import { NextResponse } from 'next/server'
import { getSettings, saveSettings } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const settings = await getSettings()
  return NextResponse.json(settings, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
}

export async function PUT(req: Request) {
  try {
    const updated = await req.json()
    await saveSettings(updated)
    return NextResponse.json({ success: true, settings: updated })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update settings' }, { status: 500 })
  }
}
