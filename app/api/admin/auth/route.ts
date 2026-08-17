import { NextResponse } from 'next/server'

const DEFAULT_ADMIN_KEY = process.env.INFERENCE_ADMIN_KEY || 'admin123'

export async function POST(req: Request) {
  try {
    const { password } = await req.json()
    if (password === DEFAULT_ADMIN_KEY) {
      return NextResponse.json({ success: true, token: 'authenticated-session' })
    }
    return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
