import type { NextConfig } from "next";
import { seoRedirects, seoRewrites } from "./lib/seo-routing";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "image.mux.com"
      }
    ]
  },
  async redirects() {
    return [...seoRedirects];
  },
  async rewrites() {
    return seoRewrites;
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
