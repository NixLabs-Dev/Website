import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["nixlabs.dev"],
  },
  distDir: "dist",
};

export default nextConfig;
