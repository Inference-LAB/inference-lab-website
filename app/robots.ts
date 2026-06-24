// app/robots.ts
// Next.js auto-serves this as /robots.txt
// Tells Google and other search engines which pages to crawl and where the sitemap is.

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block the admin panel from being indexed — it has no public value
        // and you don't want login pages appearing in search results.
        disallow: '/admin/',
      },
    ],
    sitemap: 'https://inference-lab.dev/sitemap.xml',
  }
}
