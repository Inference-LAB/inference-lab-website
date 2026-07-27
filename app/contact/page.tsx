'use client'

import { useState } from 'react'
import { Mail, Copy, Check, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { siteConfig } from '@/lib/site'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(circle_at_center,black_25%,transparent_80%)]" />

      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">

        <Card className="w-full max-w-md border-border/60 bg-background/80 backdrop-blur-xl shadow-xl">

          <CardContent className="space-y-6 p-8">

            {/* icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted/40">
            
              <Mail className="h-6 w-6 text-primary" />
            </div>
       
            {/* heading */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">
                Contact INFERENCE Lab
              </h1>

              <p className="text-sm leading-6 text-muted-foreground">
                Questions, collaborations, or partnerships.
              </p>
            </div>

            {/* email */}
            <div className="rounded-xl border border-border bg-muted/30 px-5 py-4">

              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </p>

              <p className="mt-2 break-all text-lg font-medium">
                {siteConfig.email}
              </p>

            </div>

            {/* buttons */}
            <div className="grid grid-cols-2 gap-3">

              <Button
                variant="secondary"
                onClick={copyEmail}
                className="h-10"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Email
                  </>
                )}
              </Button>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="h-10 w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open in Gmail
                </Button>
              </a>

            </div>

            {/* footer */}
            <div className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
              Typically responds within{' '}
              <span className="font-medium text-foreground">
                24 hours
              </span>
            </div>

          </CardContent>

        </Card>

      </div>
    </main>
  )
}