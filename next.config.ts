import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is reserved for the hero/LCP imagery; everything else stays at 75
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
      {
        protocol: "https",
        hostname: "almeezanspicygrill.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
