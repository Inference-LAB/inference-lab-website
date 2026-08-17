import type { Metadata } from 'next'
import ResearchServicesClient from './research-services-client'

export const metadata: Metadata = {
  title: 'Research Services · Academic Support & Methodology',
  description:
    'End-to-end scientific research services from INFERENCE Lab. MS/PhD support, methodology design, experimentation, manuscript review, and publication guidance.',
  alternates: { canonical: 'https://www.inference-lab.org/research/services' },
  openGraph: {
    title: 'Research Services · Academic Support & Methodology · INFERENCE Lab',
    description:
      'End-to-end scientific research services from INFERENCE Lab. MS/PhD support, methodology design, experimentation, manuscript review, and publication guidance.',
    url: 'https://www.inference-lab.org/research/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research Services · INFERENCE Lab',
    description:
      'End-to-end scientific research support across AI, Machine Learning, NLP, and Speech intelligence.',
  },
}

const researchFaqs = [
  {
    q: 'What types of research does INFERENCE Lab support?',
    a: 'We provide end-to-end research support across Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Speech AI, Large Language Models, Data Science, human-computer interaction, ergonomics, and human factors. Our services range from research planning to publication and deployment.',
  },
  {
    q: 'Can you help with MS and PhD research?',
    a: "Yes. We support Master's and Doctoral students throughout the research lifecycle, including topic selection, literature review, methodology design, implementation, experimentation, evaluation, thesis preparation, and publication guidance.",
  },
  {
    q: 'Do you provide methodology design and review?',
    a: 'Yes. We help design rigorous and reproducible research methodologies that align with the objectives of the study and the expectations of top-tier academic journals. We also review existing methodologies and provide recommendations for improvement.',
  },
  {
    q: 'Can you help identify research gaps and research ideas?',
    a: 'Yes. We assist researchers in identifying meaningful research gaps through structured literature analysis and help refine research questions that are novel, practical, and publication-ready.',
  },
  {
    q: 'Do you provide implementation and experimentation support?',
    a: 'Yes. We assist with model development, experimentation, benchmarking, statistical evaluation, ablation studies, reproducibility, and performance analysis using standard scientific practices.',
  },
  {
    q: 'Can you review research manuscripts before submission?',
    a: 'Yes. We provide comprehensive manuscript reviews covering technical quality, methodology, experimental design, scientific writing, structure, clarity, and journal readiness.',
  },
  {
    q: 'Do you assist with publication in international journals?',
    a: 'Yes. We provide publication guidance for reputable conferences and journals (IEEE, Springer, Elsevier, ACM, Nature Springer), including manuscript preparation, journal selection, formatting, revision support, and responses to reviewer comments.',
  },
  {
    q: 'Does INFERENCE Lab offer research collaboration & co-authorship?',
    a: 'Yes. We actively collaborate with researchers, universities, laboratories, startups, and industry partners. Co-authorship is considered when contributors make substantial intellectual and technical contributions in accordance with international academic authorship standards.',
  },
]

export default function ResearchServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: researchFaqs.map((faq) => ({
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
      <ResearchServicesClient faqs={researchFaqs} />
    </>
  )
}
