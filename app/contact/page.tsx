import type { Metadata } from 'next'
import ContactClient from './contact-client'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with INFERENCE Lab for questions, collaborations, or partnership inquiries in applied AI research and engineering.',
  alternates: { canonical: 'https://www.inference-lab.org/contact' },
  openGraph: {
    title: 'Contact · INFERENCE Lab',
    description:
      'Get in touch with INFERENCE Lab for questions, collaborations, or partnership inquiries in applied AI research and engineering.',
    url: 'https://www.inference-lab.org/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}