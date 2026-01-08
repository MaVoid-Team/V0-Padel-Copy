/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  output: 'export',
  basePath: "/V0-Padel-Copy",
  assetPrefix: "/V0-Padel-Copy/",
}

export default nextConfig
