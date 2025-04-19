/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    FIGMA_API_KEY: process.env.FIGMA_API_KEY,
  },
  images: {
    domains: ['figma.com', 'images.unsplash.com', 'randomuser.me'],
  },
};

module.exports = nextConfig; 