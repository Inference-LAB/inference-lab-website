import type { Metadata } from 'next'
import CareerGuidanceClient from './career-guidance-client'

export const metadata: Metadata = {
  title: 'AI Career Guidance & Mentorship',
  description:
    'Book a 1-on-1 career guidance session with INFERENCE Lab mentors. Strategic advice on breaking into AI engineering, transitioning roles, and building a project portfolio.',
  alternates: { canonical: 'https://www.inference-lab.org/education/career-guidance' },
  openGraph: {
    title: 'AI Career Guidance & Mentorship · INFERENCE Lab',
    description:
      'Book a 1-on-1 career guidance session with INFERENCE Lab mentors. Strategic advice on breaking into AI engineering, transitioning roles, and building a project portfolio.',
    url: 'https://www.inference-lab.org/education/career-guidance',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Career Guidance & Mentorship · INFERENCE Lab',
    description:
      'Strategic advice on breaking into AI engineering and mapping out your AI career path.',
  },
}

const guidanceFaqs = [
  {
    q: 'What happens during a Career Guidance session?',
    a: 'You will have a 1-on-1 strategic conversation with an INFERENCE Lab technical mentor. We review your current technical background, your target career destination (e.g. ML Engineer vs. LLM Architect vs. MLOps Engineer), and map out the exact technical milestones required to reach it.',
  },
  {
    q: 'Is this session a sales pitch for lab programs?',
    a: 'No. The guidance session is focused entirely on you and your career goals. Our mentors help you create personalized pathways to your target career role, advising objectively on what technical skills, projects, and fundamentals you need.',
  },
  {
    q: 'How should I prepare for the guidance call?',
    a: 'Bring your current GitHub profile or resume, a summary of what you have built so far, and a list of career goals or companies/roles you are aiming for.',
  },
  {
    q: 'Is the guidance session free?',
    a: 'Initial guidance conversations and roadmap consultations with lab mentors are offered free of cost for motivated students, engineers, and career switchers.',
  },
]

export default function CareerGuidancePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guidanceFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CareerGuidanceClient faqs={guidanceFaqs} />
    </>
  )
}
