import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.ebosicare.com',
        port: '',
        pathname: '/storage/services/**',
        search: '',
      },
    ],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
 
};

export default nextConfig;
