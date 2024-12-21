/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-docusaurus",
  assetPrefix: "/my-docusaurus/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
