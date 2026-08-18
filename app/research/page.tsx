import type { Metadata } from 'next'
import { getPublications } from '@/lib/data-store'
import ResearchClient from './research-client'

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Research — INFERENCE Lab',
  description:
    'Explore publications, preprints, and research output from INFERENCE Lab across speech intelligence, NLP, and applied AI.',
}

export default async function ResearchPage() {
  const publications = await getPublications()
  return <ResearchClient publications={publications} />
}
