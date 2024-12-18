import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/my-docusaurus/web" : "";

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: basePath,

  trailingSlash: true,
  output: "export",
  reactStrictMode: false, // 厳格モードを一時的に無効化

  images: {
    unoptimized: true, // 静的エクスポートの場合は必須
  },

  webpack: (config) => {
    if (isProd) {
      config.output.publicPath = `${basePath}/`;
    }
    return config;
  },
};

export default nextConfig;
