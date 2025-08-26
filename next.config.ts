import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/PFI-Feresini-Imbriago-FRONT',
  assetPrefix: '/PFI-Feresini-Imbriago-FRONT/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
