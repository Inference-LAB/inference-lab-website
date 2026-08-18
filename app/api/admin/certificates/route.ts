import { NextResponse } from 'next/server'
import { getCertificates, saveCertificates, deleteCertificate } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const certs = await getCertificates()
  return NextResponse.json(certs, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { id, name, program, issued, grade } = body

    if (!id || !name || !program || !issued) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 })
    }

    const key = id.trim().toUpperCase()
    const certs = await getCertificates()
    certs[key] = {
      name,
      program,
      issued,
      grade: grade || '',
    }

    await saveCertificates(certs)
    return NextResponse.json({ success: true, key, cert: certs[key] })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to issue certificate' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { id, name, program, issued, grade } = body
    if (!id) return NextResponse.json({ success: false, message: 'Missing certificate ID' }, { status: 400 })

    const key = id.trim().toUpperCase()
    const certs = await getCertificates()
    if (certs[key]) {
      certs[key] = {
        name: name || certs[key].name,
        program: program || certs[key].program,
        issued: issued || certs[key].issued,
        grade: grade !== undefined ? grade : certs[key].grade,
      }
      await saveCertificates(certs)
      return NextResponse.json({ success: true, key, cert: certs[key] })
    }
    return NextResponse.json({ success: false, message: 'Certificate ID not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update certificate' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ success: false, message: 'Missing ID' }, { status: 400 })

    await deleteCertificate(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete certificate' }, { status: 500 })
  }
}
