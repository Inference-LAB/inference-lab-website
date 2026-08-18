import type { Metadata } from 'next'
import FaqClient, { type FaqItem } from './faq-client'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'FAQ Hub · Frequently Asked Questions',
  description:
    'Browse comprehensive answers about INFERENCE Lab research services, AI Builder program, Applied AI Engineering fellowship, admissions, and tuition.',
  alternates: { canonical: 'https://www.inference-lab.org/faqs' },
  openGraph: {
    title: 'FAQ Hub · Frequently Asked Questions · INFERENCE Lab',
    description:
      'Browse comprehensive answers about INFERENCE Lab research services, AI Builder program, Applied AI Engineering fellowship, admissions, and tuition.',
    url: 'https://www.inference-lab.org/faqs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Hub · Frequently Asked Questions · INFERENCE Lab',
    description:
      'Answers to common questions about INFERENCE Lab research, engineering, and education programs.',
  },
}

const allDocxFaqs: FaqItem[] = [
  // Research Services
  {
    id: 'faq-rs-1',
    category: 'Research Services',
    question: 'What types of research does INFERENCE Lab support?',
    answer:
      'We provide end-to-end research support across Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Speech AI, Large Language Models, Data Science, human-computer interaction, ergonomics, human factors and related interdisciplinary domains. Our services range from research planning to publication and deployment.',
  },
  {
    id: 'faq-rs-2',
    category: 'Research Services',
    question: 'Can you help with MS and PhD research?',
    answer:
      'Yes. We support master’s and doctoral students throughout the research lifecycle, including topic selection, literature review, methodology design, implementation, experimentation, evaluation, thesis preparation, and publication guidance.',
  },
  {
    id: 'faq-rs-3',
    category: 'Research Services',
    question: 'Do you provide methodology design and review?',
    answer:
      'Yes. We help design rigorous and reproducible research methodologies that align with the objectives of the study and the expectations of academic journals. We also review existing methodologies and provide recommendations for improvement.',
  },
  {
    id: 'faq-rs-4',
    category: 'Research Services',
    question: 'Can you help identify research gaps and research ideas?',
    answer:
      'Yes. We assist researchers in identifying meaningful research gaps through structured literature analysis and help refine research questions that are novel, practical, and publication-ready.',
  },
  {
    id: 'faq-rs-5',
    category: 'Research Services',
    question: 'Do you provide implementation and experimentation support?',
    answer:
      'Yes. We assist with model development, experimentation, benchmarking, statistical evaluation, ablation studies, reproducibility, and performance analysis using appropriate research practices.',
  },
  {
    id: 'faq-rs-6',
    category: 'Research Services',
    question: 'Can you review research manuscripts before submission?',
    answer:
      'Yes. We provide comprehensive manuscript reviews covering technical quality, methodology, experimental design, scientific writing, structure, clarity, and journal readiness.',
  },
  {
    id: 'faq-rs-7',
    category: 'Research Services',
    question: 'Do you guarantee journal publication?',
    answer:
      'No ethical research organization can guarantee acceptance by peer-reviewed journals. However, we ensure that your research adheres to rigorous academic standards, robust methodologies, clear presentation, and publication best practices to maximize the likelihood of acceptance.',
  },
  {
    id: 'faq-rs-8',
    category: 'Research Services',
    question: 'How do you ensure data confidentiality and intellectual property rights?',
    answer:
      'We operate under strict non-disclosure agreements (NDAs) and intellectual property agreements. All data, code, ideas, and manuscripts shared with INFERENCE Lab remain the exclusive property of the client or researcher.',
  },
  // Engineering Services
  {
    id: 'faq-es-1',
    category: 'Engineering Services',
    question: 'What engineering services does INFERENCE Lab offer?',
    answer:
      'We offer custom AI development, end-to-end Machine Learning pipelines, Large Language Model (LLM) and Retrieval-Augmented Generation (RAG) engineering, Speech AI and Audio Intelligence systems, Computer Vision solutions, MLOps, model deployment, API development, and complete AI product development.',
  },
  {
    id: 'faq-es-2',
    category: 'Engineering Services',
    question: 'What is your technology stack for AI engineering?',
    answer:
      'Our primary stack includes Python, PyTorch, TensorFlow, Hugging Face Transformers, LangChain, LlamaIndex, FastAPI, Docker, ONNX Runtime, TensorRT, vector databases (Pinecone, Qdrant, Milvus, Chroma), cloud platforms (AWS, GCP, Azure), and modern web technologies (Next.js, TypeScript, TailwindCSS).',
  },
  {
    id: 'faq-es-3',
    category: 'Engineering Services',
    question: 'Do you build complete AI products or only specific components?',
    answer:
      'We do both. We can engineer specific components (e.g., custom models, fine-tuning pipelines, RAG backends, inference APIs) or build complete, production-ready AI products from concept to deployment and user interface.',
  },
  {
    id: 'faq-es-4',
    category: 'Engineering Services',
    question: 'Can you deploy models on-premises or on edge devices?',
    answer:
      'Yes. We support on-premises deployment, edge AI deployment using ONNX and TensorRT, as well as cloud-native deployment on AWS, GCP, Azure, and hybrid infrastructures.',
  },
  {
    id: 'faq-es-5',
    category: 'Engineering Services',
    question: 'How do you handle post-deployment maintenance and monitoring?',
    answer:
      'We implement MLOps monitoring pipelines that track model drift, latency, throughput, error rates, and hallucination metrics. We also offer ongoing maintenance, model re-training, and system optimization support.',
  },
  // Programs & Education
  {
    id: 'faq-pr-1',
    category: 'Programs & Education',
    question: 'What programs does INFERENCE Lab offer?',
    answer:
      'We currently offer two structured programs: 1) The AI Builder Program (5.5 Months, beginner-friendly, project-driven software and product building), and 2) The Applied AI Engineering Program (12.5 Months, comprehensive AI systems engineering from Python and data pipelines to production LLM engineering and MLOps).',
  },
  {
    id: 'faq-pr-2',
    category: 'Programs & Education',
    question: 'Who should enroll in the AI Builder Program?',
    answer:
      'The AI Builder Program is designed for students, educators, professionals, and beginners who want to build and deploy practical AI products without getting bogged down in complex mathematical theory. Basic computer literacy is the only prerequisite.',
  },
  {
    id: 'faq-pr-3',
    category: 'Programs & Education',
    question: 'Who should enroll in the Applied AI Engineering Program?',
    answer:
      'The Applied AI Engineering Program is tailored for university students, recent graduates, and software engineers who want to build a deep, rigorous foundation in AI systems engineering, machine learning pipelines, deep learning architectures, and production deployment.',
  },
  {
    id: 'faq-pr-4',
    category: 'Programs & Education',
    question: 'Are the programs live or self-paced?',
    answer:
      'Our programs feature live, interactive mentor-guided weekend sessions combined with weekday hands-on project building, code reviews, and community collaboration.',
  },
  {
    id: 'faq-pr-5',
    category: 'Programs & Education',
    question: 'What is the cohort size?',
    answer:
      'To maintain high instructional quality and meaningful mentorship, we keep cohort sizes strictly limited to 6–8 participants per batch.',
  },
  {
    id: 'faq-pr-6',
    category: 'Programs & Education',
    question: 'Do I get a certificate upon completion?',
    answer:
      'Yes. Participants who successfully complete all phase requirements and capstone projects receive an INFERENCE Lab Certificate of Completion equipped with a cryptographically verifiable QR code.',
  },
]

export default function FaqsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allDocxFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient initialFaqs={allDocxFaqs} />
    </>
  )
}
