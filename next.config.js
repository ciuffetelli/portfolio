/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ik.imagekit.io', 'image.thum.io'],
    minimumCacheTTL: 60,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },  
}

module.exports = nextConfig
