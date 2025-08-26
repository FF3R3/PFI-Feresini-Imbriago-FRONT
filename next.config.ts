import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/sparkle',
  assetPrefix: '/sparkle/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
