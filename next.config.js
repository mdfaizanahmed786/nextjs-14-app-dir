/** @type {import('next').NextConfig} */
const nextConfig = {
  // added next config for adding images...
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
  },
};

module.exports = nextConfig;
