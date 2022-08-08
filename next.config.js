/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  swcMinify: true,
  images : {domains:['lp-cms-production.imgix.net']}
}

module.exports = nextConfig
