import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import {
  BASE_URL,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  organizationGraph,
} from '@/lib/seo';
import CallToUs from '@/view/CallToUs/CallToUs';
import Footer from '@/view/Footer/Footer';
import Menus from '@/view/Menus/Menus';

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    'Warsztat / Serwis samochodowy Śląsk | Bosch Car Service Auto-Bud – Świętochłowice, Ruda Śląska',
  description:
    'Auto-Bud Bosch Car Service: warsztat i serwis samochodowy na Śląsku. Lokalizacje w Świętochłowicach oraz Rudzie Śląskiej (Godula, Bykowina).',
  applicationName: SITE_NAME,
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/assets/images/general/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/assets/images/general/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/assets/images/general/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/assets/images/general/icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title:
      'Warsztat / Serwis samochodowy Śląsk | Bosch Car Service Auto-Bud – Świętochłowice, Ruda Śląska',
    description:
      'Trzy lokalizacje Auto-Bud Bosch Car Service: Świętochłowice, Ruda Śląska Godula i Ruda Śląska Bykowina. Obsługujemy kierowców z Katowic i całego Śląska.',
    url: BASE_URL,
    locale: 'pl_PL',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 500,
        height: 500,
        alt: 'Auto-Bud Bosch Car Service',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Warsztat / Serwis samochodowy Śląsk | Bosch Car Service Auto-Bud – Świętochłowice, Ruda Śląska',
    description:
      'Serwis samochodowy na Śląsku: diagnostyka, klimatyzacja, wymiana oleju, hamulce i przeglądy techniczne.',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'motoryzacja',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationGraph),
          }}
        />
      </head>
      <body className={`mx-auto max-w-[1920px] ${poppins.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
        >
          Przejdź do treści
        </a>
        <Menus />
        <main id="main-content">
          {children}
          <CallToUs />
        </main>
        <Footer />
      </body>
      {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
