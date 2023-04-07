/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['w7.pngwing.com', 'rickandmortyapi.com']
  }
}

module.exports = nextConfig
