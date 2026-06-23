import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'INFERENCE Lab — Applied AI Research, Engineering & Education',
    template: '%s · INFERENCE Lab',
  },
  description:
    'INFERENCE Lab is an applied AI research and engineering organization building reproducible research, production AI systems, and deployment-focused engineering education. Founded by Muhammad Khubaib Ahmad.',
  generator: 'v0.app',
  keywords: [
    'INFERENCE Lab',
    'Inference lab',
    'applied AI',
    'AI research',
    'machine learning engineering',
    'LLM engineering',
    'speech intelligence',
    'low-resource NLP',
    'AI education',
    'MLOps',
  ],
  metadataBase: new URL('https://inference-lab.dev'),
  openGraph: {
    title: 'INFERENCE Lab — Applied AI Research, Engineering & Education',
    description:
      'Reproducible research, production AI systems, and a deployment-focused engineering curriculum. Engineering discipline over hype.',
    siteName: 'INFERENCE Lab',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
