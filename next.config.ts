import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nexook-clone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
