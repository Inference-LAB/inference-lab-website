import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { Mission } from '@/components/sections/mission'
import { Tracks } from '@/components/sections/tracks'
import { Research } from '@/components/sections/research'
import { SoftwareSection } from '@/components/sections/software'
import { CurriculumOverview } from '@/components/sections/curriculum-overview'
// import { Founder } from '@/components/sections/founder'
// import { Fellowship } from '@/components/sections/fellowship'
import { CurrentOpportunities } from '@/components/sections/current-opportunities'
import { ContactCta } from '@/components/sections/contact-cta'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Tracks />
        <Research />
        <SoftwareSection />
        <CurriculumOverview />
        {/* <Founder /> */}
        {/* <Fellowship /> */}
        <CurrentOpportunities />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
