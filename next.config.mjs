/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enables static generation of sitemap and robots at build time
  // so Google can crawl them without hitting a serverless function
  output: undefined,

  // Security headers — also a minor ranking signal for Google
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevents clickjacking
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Stops MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Forces HTTPS (Vercel handles this, but belt-and-suspenders)
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Tells Google this page is canonical (redundant but safe)
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ]
  },
}

export default nextConfig
