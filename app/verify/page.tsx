import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CertificateVerifier } from '@/components/certificate-verifier'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Verify Certificate',
  description:
    'Verify the authenticity of an INFERENCE Lab certificate. Enter the certificate ID to confirm it was issued by INFERENCE Lab.',
  alternates: { canonical: 'https://inference-lab.dev/verify' },
  openGraph: {
    title: 'Verify Certificate · INFERENCE Lab',
    description:
      'Verify the authenticity of an INFERENCE Lab certificate by entering the certificate ID.',
    url: 'https://inference-lab.dev/verify',
  },
  robots: {
    index: true,
    follow: false, // don't follow links from this page — it's a utility
  },
}

export default function VerifyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Certificate Verification
            </p>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Verify an INFERENCE Lab Certificate
            </h1>
            <p className="text-base text-muted-foreground">
              Enter the certificate ID printed on the document (or scan the QR code)
              to confirm it was genuinely issued by INFERENCE Lab.
            </p>
          </div>
        </section>

        {/* Verifier widget */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="h-11 w-full animate-pulse rounded-md bg-muted" />}>
            <CertificateVerifier />
          </Suspense>
        </section>

        {/* How it works */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              How it works
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: '01',
                  title: 'Find the ID',
                  body: 'Every INFERENCE Lab certificate has a unique ID in the format IL-XXX-YYYY-NNNN printed at the bottom.',
                },
                {
                  step: '02',
                  title: 'Enter or scan',
                  body: 'Type the ID above, or scan the QR code on the certificate — it opens this page with the ID pre-filled.',
                },
                {
                  step: '03',
                  title: 'Instant result',
                  body: 'If the ID exists in our registry you see the holder\'s name, program, and issue date. If not, the certificate is not verified.',
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex flex-col gap-2">
                  <span className="font-mono text-2xl font-bold text-muted-foreground/30">
                    {step}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
