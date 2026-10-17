/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure basePath matches your Firebase hosting path if not root
  // basePath: '',
}

module.exports = nextConfig 