const repoName = "panogaricapitalfamilyoffice";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  distDir: ".next14-build",
  images: {
    // GitHub Pages does not proxy the Next image optimizer.
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
};

export default nextConfig;
