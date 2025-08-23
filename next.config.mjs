/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/mi-meet-addon',
  assetPrefix: '/mi-meet-addon/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
