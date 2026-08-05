import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CHAT-SIMULATION",           // <-- EXATAMENTE igual ao nome do repo
  assetPrefix: "/CHAT-SIMULATION",        // <-- mesma coisa aqui
  images: {
    unoptimized: true,
  },
};

export default nextConfig;