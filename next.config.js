/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Enable static export for optimal performance
  output: 'export',
  // Ignore ESLint errors during build (for development)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignore TypeScript errors during build (for development)
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
