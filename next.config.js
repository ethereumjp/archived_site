/** @type {import('next').NextConfig} */
const withLinaria = require('next-with-linaria');

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
};

module.exports = withLinaria(nextConfig);
