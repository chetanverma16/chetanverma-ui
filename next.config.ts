import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me/**",
      },
    ],
  },
  // if used turbopack
  // transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
