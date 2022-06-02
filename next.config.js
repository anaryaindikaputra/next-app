/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'unsplash.com',
      'www.themealdb.com',
    ]
  },
  env: {
    customKey: 'my-value',
  }
}

module.exports = nextConfig