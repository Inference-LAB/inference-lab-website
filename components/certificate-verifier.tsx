'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, XCircle, Search, Loader2 } from 'lucide-react'
import { lookupCertificate, type Certificate } from '@/data/certificates'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'loading' | 'verified' | 'not_found'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function CertificateVerifier() {
  const searchParams = useSearchParams()
  const [id, setId] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [result, setResult] = useState<Certificate | null>(null)
  const [checkedId, setCheckedId] = useState('')

  // Pre-fill from URL: /verify?id=IL-2025-AEP-0001
  // (QR codes on certificates can link directly to this URL)
  useEffect(() => {
    const urlId = searchParams.get('id')
    if (urlId) {
      setId(urlId)
      verify(urlId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function verify(rawId?: string) {
    const target = (rawId ?? id).trim()
    if (!target) return

    setStatus('loading')
    setResult(null)
    setCheckedId(target.toUpperCase())

    // Simulate a short async lookup so it feels like a real check
    setTimeout(() => {
      const cert = lookupCertificate(target)
      if (cert) {
        setResult(cert)
        setStatus('verified')
      } else {
        setStatus('not_found')
      }
    }, 600)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    verify()
  }

  return (
    <div className="flex flex-col gap-8">
      {/* ── Input form ───────────────────────────────────────────────────── */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder="IL-2025-AEP-0001"
            spellCheck={false}
            autoComplete="off"
            className={cn(
              'h-11 w-full rounded-md border border-border bg-background pl-10 pr-4 font-mono text-sm text-foreground placeholder:text-muted-foreground/60',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1',
              'transition-colors',
            )}
          />
        </div>
        <button
          type="submit"
          disabled={!id.trim() || status === 'loading'}
          className={cn(
            'inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground',
            'transition-opacity hover:opacity-90 disabled:opacity-40',
          )}
        >
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            'Verify'
          )}
        </button>
      </form>

      {/* ── Result ───────────────────────────────────────────────────────── */}
      {status === 'verified' && result && (
        <div className="rounded-lg border border-border bg-card p-6">
          {/* Status banner */}
          <div className="mb-6 flex items-center gap-3 rounded-md border border-green-200 bg-green-50 px-4 py-3 dark:border-green-900 dark:bg-green-950/30">
            <CheckCircle className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
            <div>
              <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                Certificate Verified
              </p>
              <p className="text-xs text-green-700 dark:text-green-400">
                This certificate was issued by INFERENCE Lab and is authentic.
              </p>
            </div>
          </div>

          {/* Certificate details */}
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Certificate ID
              </dt>
              <dd className="font-mono text-sm font-semibold text-foreground">
                {checkedId}
              </dd>
            </div>
            <div>
              <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Issued To
              </dt>
              <dd className="text-sm font-semibold text-foreground">{result.name}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Program
              </dt>
              <dd className="text-sm text-foreground">{result.program}</dd>
            </div>
            <div>
              <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Date Issued
              </dt>
              <dd className="text-sm text-foreground">{formatDate(result.issued)}</dd>
            </div>
            {result.grade && (
              <div>
                <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Grade
                </dt>
                <dd className="text-sm font-semibold text-foreground">{result.grade}</dd>
              </div>
            )}
          </dl>

          <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
            Verified against the INFERENCE Lab certificate registry.
            Questions? Contact{' '}
            <a
              href="mailto:inferencelab.ai@gmail.com"
              className="text-foreground underline underline-offset-2"
            >
              inferencelab.ai@gmail.com
            </a>
          </p>
        </div>
      )}

      {status === 'not_found' && (
        <div className="rounded-lg border border-border bg-card p-6">
          {/* Status banner */}
          <div className="mb-6 flex items-center gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900 dark:bg-red-950/30">
            <XCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
            <div>
              <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                Certificate Not Found
              </p>
              <p className="text-xs text-red-700 dark:text-red-400">
                No certificate with this ID exists in the INFERENCE Lab registry.
              </p>
            </div>
          </div>

          <p className="mb-2 text-sm text-foreground">
            ID checked:{' '}
            <span className="font-mono font-semibold">{checkedId}</span>
          </p>

          <p className="text-sm text-muted-foreground">
            This could mean the ID was entered incorrectly, or this certificate
            was not issued by INFERENCE Lab. Double-check the ID on the
            document, or contact{' '}
            <a
              href="mailto:inferencelab.ai@gmail.com"
              className="text-foreground underline underline-offset-2"
            >
              inferencelab.ai@gmail.com
            </a>{' '}
            if you believe this is an error.
          </p>
        </div>
      )}
    </div>
  )
}
