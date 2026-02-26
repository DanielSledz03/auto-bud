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
      {
        source: '/mechanik-swietochlwoice',
        destination: '/mechanik-swietochlowice',
        permanent: true,
      },
      {
        source: '/mechanik-swietochłowice',
        destination: '/mechanik-swietochlowice',
        permanent: true,
      },
      {
        source: '/stacja-kontroli-pojazdow-ruda-slaska',
        destination: '/stacja-diagnostyczna-ruda-slaska',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
