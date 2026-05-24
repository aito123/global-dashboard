/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // ← generates a static /out folder
  trailingSlash: true,    // needed for GitHub Pages routing
  images: {
    unoptimized: true,    // required for static export
  },
  // If deploying to a GitHub Pages sub-path (e.g. username.github.io/repo-name)
  // uncomment and set the repo name:
   basePath: "https://github.com/aito123//global-dashboard",
   assetPrefix: "https://github.com/aito123//global-dashboard/",
};

module.exports = nextConfig;
