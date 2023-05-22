/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: { appDir: false },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
