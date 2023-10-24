/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.themoviedb.org", "image.tmdb.org"],
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
