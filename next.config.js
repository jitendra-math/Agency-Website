// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  optimizePackageImports: ["lucide-react"],
};

module.exports = nextConfig;