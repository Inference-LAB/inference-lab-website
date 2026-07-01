import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// ─── Change this ONE constant when your domain is confirmed ───────────────────
const SITE_URL = 'https://www.inference-lab.org'
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // metadataBase makes all relative URLs in metadata absolute.
  // Without this, Next.js can't build the correct canonical and OG URLs.
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'INFERENCE Lab — Applied AI Research, Engineering & Education',
    template: '%s · INFERENCE Lab',
  },

  description:
    'INFERENCE Lab is an applied AI research and engineering organization founded by Muhammad Khubaib Ahmad in Multan, Pakistan. Original research in low-resource NLP and speech intelligence, production AI engineering services, and a deployment-focused curriculum.',

  keywords: [
    'Inference Lab',
    'INFERENCE Lab',
    'Muhammad Khubaib Ahmad',
    'applied AI research',
    'AI research lab Pakistan',
    'low-resource NLP',
    'Roman Urdu NLP',
    'speech intelligence',
    'vocal fatigue AI',
    'ECAPA-TDNN',
    'LLM engineering',
    'RAG pipeline',
    'AI engineering education',
    'MLOps',
    'Multan AI lab',
    'RUEmoCorp',
    'machine learning Pakistan',
  ],

  // canonical URL — prevents duplicate content penalties
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'INFERENCE Lab',
    title: 'INFERENCE Lab — Applied AI Research, Engineering & Education',
    description:
      'Reproducible AI research, production ML systems, and a deployment-focused engineering curriculum. Founded by Muhammad Khubaib Ahmad, Multan, Pakistan.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'INFERENCE Lab — Applied AI Research, Engineering & Education',
      },
    ],
    locale: 'en_US',
  },

  // ── Twitter / X card ───────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'INFERENCE Lab — Applied AI Research, Engineering & Education',
    description:
      'Reproducible AI research, production ML systems, and a deployment-focused engineering curriculum.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  // ── Crawling & indexing ────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // ── Authorship & verification ──────────────────────────────────────────────
  // Add your Google Search Console verification token here once you connect it
  // verification: {
  //   google: 'paste-your-token-here',
  // },

  authors: [{ name: 'Muhammad Khubaib Ahmad', url: SITE_URL }],
  creator: 'Muhammad Khubaib Ahmad',
  publisher: 'INFERENCE Lab',
  category: 'technology',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

// ── JSON-LD structured data ───────────────────────────────────────────────────
// Tells Google exactly what kind of entity this is — an Organization —
// enabling a knowledge panel in search results.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. The organization itself
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'INFERENCE Lab',
      alternateName: 'Inference Lab',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/inference-lab-logo.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/og-image.png`,
      description:
        'Applied AI research and engineering organization founded by Muhammad Khubaib Ahmad in Multan, Pakistan. Research in low-resource NLP and speech intelligence, production AI engineering services, and deployment-focused engineering education.',
      foundingDate: '2026',
      foundingLocation: {
        '@type': 'Place',
        name: 'Multan, Punjab, Pakistan',
      },
      founder: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#founder`,
        name: 'Muhammad Khubaib Ahmad',
        jobTitle: 'Founder & Director',
        url: `${SITE_URL}/about/founder`,
        sameAs: [
          'https://github.com/Khubaib8281',
          'https://huggingface.co/Khubaib01',
          'https://linkedin.com/in/muhammad-khubaib-ahmad-',
        ],
      },
      sameAs: [
        'https://github.com/Inference-LAB',
        'https://huggingface.co/Inferencelab',
        'https://linkedin.com/company/inference-lab',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@inference-lab.org',
        contactType: 'general inquiry',
      },
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Natural Language Processing',
        'Speech Recognition',
        'Low-Resource NLP',
        'LLM Engineering',
        'MLOps',
      ],
    },
    // 2. The website itself
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'INFERENCE Lab',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/research?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    // 3. The founder as a Person entity
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: 'Muhammad Khubaib Ahmad',
      jobTitle: 'AI Research Engineer',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/about/founder`,
      image: `${SITE_URL}/og-image.png`,
      description:
        'AI Research Engineer specializing in speech intelligence, low-resource NLP, and LLM systems. Founder and Director of INFERENCE Lab.',
      knowsAbout: [
        'Speech Intelligence',
        'Vocal Fatigue Detection',
        'Roman Urdu NLP',
        'ECAPA-TDNN',
        'Contrastive Learning',
        'LLM Engineering',
        'RAG Systems',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Emerson University Multan',
        location: 'Multan, Pakistan',
      },
      sameAs: [
        'https://github.com/Khubaib8281',
        'https://huggingface.co/Khubaib01',
        'https://linkedin.com/in/muhammad-khubaib-ahmad-',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
