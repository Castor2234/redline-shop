import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // next/image's optimizer needs a server
  reactStrictMode: true,
}

export default config