import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'production' ? 'build' : '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.txuli.com',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);