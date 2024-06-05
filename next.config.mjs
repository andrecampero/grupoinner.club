/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fillet.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
