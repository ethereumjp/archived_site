/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: { appDir: false },
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'production' ? '/site' : '',
  // i18n: { locales: ['en', 'ja'], defaultLocale: 'en', localeDetection: false },
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
