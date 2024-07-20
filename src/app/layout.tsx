import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import ContactWithUs from '@/form/ContactWithUs/ContactWithUs';
import CallToUs from '@/view/CallToUs/CallToUs';
import Footer from '@/view/Footer/Footer';
import Menus from '@/view/Menus/Menus';

import 'lightbox.js-react/dist/index.css';

export const metadata: Metadata = {
  title: 'Auto-Bud - Bosch Car Service',
  description: 'Serwis samochodowy Auto-Bud - Bosch Car Service',
  icons: [
    {
      url: './assets/images/general/bosch-logo.png',
    },
  ],
  keywords: [
    'auto-bud',
    'serwis samochodowy',
    'naprawa samochodów',
    'stacja diagnostyczna',
    'ruda slaska',
    'swietochlowice',
    'godula',
    'orzegow',
    'wymiana oleju',
    'wulkanizator swietochlowice',
    'wymiana filtrow',
    'bosch car service',
    'naprawa samochodow',
    'wymiana opon',
    'wymiana klockow hamulcowych',
    'przeglad ruda slaska',
    'przeglad swietochlowice',
    'przeglad godula',
    'auto serwis',
    'auto serwis bosch',
  ],
  openGraph: {
    title: 'Auto-Bud - Bosch Car Service',
    description: 'Stacje Kontroli Pojadów, Warsztat Samochodowy, Myjnia',
    images: [
      {
        url: './assets/images/general/bosch-logo.png',
      },
    ],
  },
};

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`mx-auto max-w-[1920px] ${poppins.variable}`}>
        <Menus />
        <main>
          {children}
          <ContactWithUs />
          <CallToUs />
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={'GTM-MHHH4XVH'} />
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
