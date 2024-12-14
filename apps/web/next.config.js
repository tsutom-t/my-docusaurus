const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // GitHub Pages用のベースパスとアセットパスの設定
  basePath: isProd ? "/my-docusaurus/web" : "",
  assetPrefix: isProd ? "/my-docusaurus/web/" : "",

  // 静的エクスポートの設定
  trailingSlash: true,
  output: "export", // 静的HTMLエクスポート

  // その他の設定
  reactStrictMode: true,

  // 必要に応じて画像の設定を追加
  images: {
    unoptimized: true, // 画像の最適化を無効化する（GitHub Pagesの制限を避けるため）
  },
};

module.exports = nextConfig;
