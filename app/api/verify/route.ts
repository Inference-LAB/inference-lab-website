import { NextResponse } from 'next/server'
import { lookupCertificateDynamic } from '@/lib/data-store'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return NextResponse.json({ success: false, message: 'Missing id query parameter' }, { status: 400 })
  }

  const cert = await lookupCertificateDynamic(id)
  if (cert) {
    return NextResponse.json({ success: true, certificate: cert })
  }

  return NextResponse.json({ success: false, message: 'Certificate not found' }, { status: 404 })
}
