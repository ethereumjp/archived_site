/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/site" : "",
  // i18n: { locales: ['en', 'ja'], defaultLocale: 'en', localeDetection: false },
  compiler: {
    emotion: true,
  },
  async redirects() {
    return [
      {
        source: "/ethtokyo2024",
        destination: "https://ethereumjp.github.io/ethtokyo-website",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
