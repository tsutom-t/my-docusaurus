const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/my-docusaurus/web" : "";

const nextConfig = {
  basePath: basePath,
  assetPrefix: basePath,

  trailingSlash: true,
  output: "export",
  reactStrictMode: false,

  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    if (isProd) {
      config.output.publicPath = `${basePath}/`;
    }
    return config;
  },
};

module.exports = nextConfig;
