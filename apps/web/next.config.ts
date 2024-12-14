import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // ベースパスとアセットパスの設定 (本番環境のみ適用)
  basePath: isProd ? "/my-docusaurus/web" : "",
  assetPrefix: isProd ? "/my-docusaurus/web/" : "",

  // 静的エクスポートの設定
  trailingSlash: true,
  output: "export", // 静的HTMLエクスポート

  // その他の設定
  reactStrictMode: true,
};

export default nextConfig;
