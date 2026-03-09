import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.cloudly.space",
      },
      {
        protocol: "https",
        hostname: "good-night-arques.nordpasdecalaishotels.com",
      },
      {
        protocol: "https",
        hostname: "www.good-night-hotel.com",
      },
      {
        protocol: "http",
        hostname: "www.good-night-hotel.com",
      },
      {
        protocol: "https",
        hostname: "hautsdefrance.media.tourinsoft.eu",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
