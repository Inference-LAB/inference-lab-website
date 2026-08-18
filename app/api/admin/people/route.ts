import { NextResponse } from 'next/server'
import { getPeople, savePeople, deletePerson, type PersonItem } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const people = await getPeople()
  return NextResponse.json(people, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const current = await getPeople()
    const slug = body.slug || (body.name || 'person').toLowerCase().replace(/[^a-z0-9]+/g, '-')
    let tType = body.teamType || 'core'
    if (tType === 'fellowship') tType = 'fellow'

    const newItem: PersonItem = {
      slug,
      name: body.name || '',
      rank: body.rank || body.roles?.[0] || '',
      roles: Array.isArray(body.roles) ? body.roles : (body.roles || '').split(',').map((r: string) => r.trim()).filter(Boolean),
      bio: body.bio || '',
      expertise: Array.isArray(body.expertise) ? body.expertise : (body.expertise || '').split(',').map((e: string) => e.trim()).filter(Boolean),
      photo: body.photo || '',
      teamType: tType,
      github: body.github || '',
      linkedin: body.linkedin || '',
      isLeadership: Boolean(body.isLeadership),
      isCoreTeam: tType === 'core',
      isFellow: tType === 'fellow',
    }
    const updated = [newItem, ...current]
    await savePeople(updated)
    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save person profile' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const current = await getPeople()
    const index = current.findIndex((p) => p.slug === body.slug)
    if (index !== -1) {
      let tType = body.teamType !== undefined ? body.teamType : (current[index].teamType || 'core')
      if (tType === 'fellowship') tType = 'fellow'

      const updatedItem: PersonItem = {
        ...current[index],
        name: body.name || current[index].name,
        rank: body.rank !== undefined ? body.rank : current[index].rank,
        roles: Array.isArray(body.roles) ? body.roles : (body.roles || '').split(',').map((r: string) => r.trim()).filter(Boolean),
        bio: body.bio || current[index].bio,
        expertise: Array.isArray(body.expertise) ? body.expertise : (body.expertise || '').split(',').map((e: string) => e.trim()).filter(Boolean),
        photo: body.photo !== undefined ? body.photo : current[index].photo,
        teamType: tType,
        github: body.github !== undefined ? body.github : current[index].github,
        linkedin: body.linkedin !== undefined ? body.linkedin : current[index].linkedin,
        isLeadership: body.isLeadership !== undefined ? Boolean(body.isLeadership) : current[index].isLeadership,
        isCoreTeam: tType === 'core',
        isFellow: tType === 'fellow',
      }
      current[index] = updatedItem
      await savePeople(current)
      return NextResponse.json({ success: true, item: updatedItem })
    }
    return NextResponse.json({ success: false, message: 'Profile not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update profile' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug')
    if (!slug) return NextResponse.json({ success: false, message: 'Missing slug' }, { status: 400 })

    await deletePerson(slug)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete profile' }, { status: 500 })
  }
}
