import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/PFI-Feresini-Imbriago-FRONT' : '',
  assetPrefix: isProd ? '/PFI-Feresini-Imbriago-FRONT/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
