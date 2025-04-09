import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",               // yang diakses dari FE
        destination: "http://localhost:5000/api/v1/:path*", // langsung diteruskan ke BE
      },
    ];
  },
};

export default nextConfig;
