const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cdn.weatherapi.com',
      },
    ],
  },
};

module.exports = nextConfig;
