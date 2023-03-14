const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    (config.experiments = { layers: true, topLevelAwait: true }),
      config.plugins.push(
        new NextFederationPlugin({
          name: "main",
          remotes: {
            blog: `blog@https://micro-fe2.netlify.app/_next/static/${
              isServer ? "ssr" : "chunks"
            }/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./header": "./components/Header.jsx",
          },
        })
      );
    return config;
  },
};

module.exports = nextConfig;
