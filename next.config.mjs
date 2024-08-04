/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dashboard-api-dusky.vercel.app/api/:path*',
        basePath: false,
      }
    ]
  }
};

export default nextConfig;
