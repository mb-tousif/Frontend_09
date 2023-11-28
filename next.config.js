/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "localhost",
    //   "img.freepik.com",
    //   "images.unsplash.com",
    //   "media.wired.com",
    //   "www.wired.com",
    //   "i.ibb.co",
    //   "cdn.rareblocks.xyz",
    // ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.wired.com",
      },
      {
        protocol: "https",
        hostname: "www.wired.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "cdn.rareblocks.xyz",
      }
    ],
  },
};

module.exports = nextConfig;
