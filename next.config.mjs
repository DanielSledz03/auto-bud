/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'auto-bud.com.pl',
          },
        ],
        destination: 'https://www.auto-bud.com.pl/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
