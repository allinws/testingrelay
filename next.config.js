/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      relay: {
        src: "./",
        language: "typescript",
        artifactDirectory: "app/__generated__",
      },
    },
    //experimental: { appDir: true },
  };
  
  module.exports = nextConfig;