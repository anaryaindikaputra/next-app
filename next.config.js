/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'unsplash.com',
      'www.themealdb.com',
      'b2cdemo.getswift.asia',
    ]
  },
  env: {
    customKey: 'my-value',
  }
}

module.exports = nextConfig