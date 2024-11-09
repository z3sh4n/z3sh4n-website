import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'media1.tenor.com',
      port: '',
      pathname: '/**',
    },
  ],
  },
};

export default nextConfig;
