import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { Mission } from '@/components/sections/mission'
import { InteractiveCards } from '@/components/sections/interactive-cards'
import { ContactCta } from '@/components/sections/contact-cta'

import { getInitiatives } from '@/lib/data-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage() {
  const initiatives = await getInitiatives()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Mission />
        <InteractiveCards initiatives={initiatives} />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
