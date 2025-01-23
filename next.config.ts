import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '34.234.91.143',
        port: '',
        pathname: '/storage/services/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
