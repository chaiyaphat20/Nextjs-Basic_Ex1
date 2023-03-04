/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/adhoc/:path*',
        destination: 'http://codemobiles.com/*',
      },
    ]
  },
}

module.exports = nextConfig
