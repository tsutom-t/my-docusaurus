import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/my-docusaurus/web" : "";

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: basePath,

  trailingSlash: true,
  output: "export",
  reactStrictMode: true,

  // images: {
  //   unoptimized: true,
  //   loader: "custom",
  //   loaderFile: "./image-loader.js",
  // },

  webpack: (config) => {
    if (isProd) {
      config.output.publicPath = `${basePath}/`;
    }
    return config;
  },
};

export default nextConfig;
