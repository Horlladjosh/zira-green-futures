import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gallery/piko-outreach",
        destination: "/gallery/piko-community-sensitization",
        permanent: true,
      },
      {
        source: "/gallery/community-outreach",
        destination: "/gallery/piko-clean-cooking-demonstration",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
