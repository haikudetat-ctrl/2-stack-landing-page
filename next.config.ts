import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
      }
    ];
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
