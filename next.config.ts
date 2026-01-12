import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
