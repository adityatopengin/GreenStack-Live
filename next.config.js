/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // THE MAGIC LINE FOR GITHUB PAGES:
  // This tells Next.js to build static HTML/CSS files instead of running a live server.
  output: 'export',
  
  // Required for static exports if you plan to use the <Image /> component later
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

