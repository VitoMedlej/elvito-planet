/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  swcMinify: true,
  images : {domains:['www.lonelyplanet.com','images.pexels.com','lonelyplanetstatic.imgix.net','res.cloudinary.com','lp-cms-production.imgix.net']}
}

module.exports = nextConfig
