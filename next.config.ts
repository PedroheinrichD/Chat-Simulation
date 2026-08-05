import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/CHAT-SIMULATION" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/CHAT-SIMULATION" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;