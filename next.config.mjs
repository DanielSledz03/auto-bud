/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/obiekty/bykowina/:path*',
        destination: '/bykowina',
        permanent: true,
      },
      {
        source: '/obiekty/godula/:path*',
        destination: '/godula',
        permanent: true,
      },
      {
        source: '/obiekty/swietochlowice/:path*',
        destination: '/swietochlowice',
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
      {
        source: '/uslugi/mycie-reczne-ruda-slaska-godula',
        destination: '/uslugi/mycie-reczne-swietochlowice',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
