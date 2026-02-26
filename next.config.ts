import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/cab-services/prepaid-airport-taxi-service",
        destination: "/airport-taxi-service",
        permanent: true,
      },
      {
        source: "/cab-services/corporate-cab-service",
        destination: "/corporate-taxi-service",
        permanent: true,
      },
      {
        source: "/prepaid-airport-taxi-service",
        destination: "/airport-taxi-service",
        permanent: true,
      },
      {
        source: "/corporate-cab-service",
        destination: "/corporate-taxi-service",
        permanent: true,
      },
      {
        source: "/cab-services/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
