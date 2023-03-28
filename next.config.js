const withTranslation = require('next-translate');
const { defaultLocale, locales } = require('./i18n');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: { locales, defaultLocale },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
