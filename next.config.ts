import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "almeezanspicygrill.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
