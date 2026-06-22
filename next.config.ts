import type { NextConfig } from "next";
import { seoRedirects } from "./lib/seo-routing";

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
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "clopen.2-stack.com"
          }
        ],
        destination: "/clopen"
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "rake.2-stack.com"
          }
        ],
        destination: "/rake"
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "loam.2-stack.com"
          }
        ],
        destination: "/loam"
      }
    ];
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
