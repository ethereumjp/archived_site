/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/archived_site" : "",
  // i18n: { locales: ['en', 'ja'], defaultLocale: 'en', localeDetection: false },
  compiler: {
    emotion: true,
  },
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "https://ethereumjp.org",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
