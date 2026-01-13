import type { NextConfig } from "next";

// GitHub Pages: set basePath/assetPrefix when in production
const repoName = "panogaricapitalfamilyoffice";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  distDir: ".next-build",
  images: {
    // GitHub Pages does not proxy the Next image optimizer.
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
};

export default nextConfig;
