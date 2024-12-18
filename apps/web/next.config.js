/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // If you're using images from external sources, you might need:
  images: {
    unoptimized: true,
  },
  // Base path if you're deploying to a subdirectory
  // basePath: '',
  // Disable server-side features when exporting
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
