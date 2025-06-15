import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import ContactWithUs from '@/form/ContactWithUs/ContactWithUs';
import CallToUs from '@/view/CallToUs/CallToUs';
import Footer from '@/view/Footer/Footer';
import Menus from '@/view/Menus/Menus';

import 'lightbox.js-react/dist/index.css';

export const metadata: Metadata = {
  title: 'Auto-Bud - Bosch Car Service',
  description:
    'Autoryzowany serwis Bosch Car Service w Świętochłowicach. Stacje diagnostyczne w Rudzie Śląskiej. Przeglądy, naprawy, myjnia. Serwis samochodowy Śląsk.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  colorScheme: 'light',
  icons: [
    {
      url: './assets/images/general/icon.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      url: './assets/images/general/icon.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: './assets/images/general/icon.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      url: './assets/images/general/icon.png',
      sizes: '180x180',
      type: 'image/png',
      rel: 'apple-touch-icon',
    },
  ],
  manifest: '/manifest.json',
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
  authors: [{ name: 'Auto-Bud Bosch Car Service' }],
  creator: 'Auto-Bud Bosch Car Service',
  publisher: 'Auto-Bud Bosch Car Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.auto-bud.com.pl'),
  alternates: {
    canonical: 'https://www.auto-bud.com.pl',
  },
  openGraph: {
    title: 'Auto-Bud - Bosch Car Service',
    description:
      'Autoryzowany serwis Bosch Car Service w Świętochłowicach oraz stacje diagnostyczne w Rudzie Śląskiej. Zapewniamy profesjonalne usługi motoryzacyjne.',
    type: 'website',
    siteName: 'Auto-Bud - Bosch Car Service',
    url: 'https://www.auto-bud.com.pl',
    images: [
      {
        url: './assets/images/general/icon.png',
        width: 500,
        height: 500,
        alt: 'Bosch Service Logo',
        type: 'image/png',
      },
    ],
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto-Bud - Bosch Car Service',
    description:
      'Autoryzowany serwis Bosch Car Service w Świętochłowicach oraz stacje diagnostyczne w Rudzie Śląskiej',
    images: ['./assets/images/general/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.auto-bud.com.pl/#organization',
        name: 'Auto-Bud Bosch Car Service',
        url: 'https://www.auto-bud.com.pl',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.auto-bud.com.pl/assets/images/general/bosch-logo.png',
          width: 400,
          height: 400,
        },
        description:
          'Autoryzowany serwis Bosch Car Service w Świętochłowicach oraz stacje diagnostyczne w Rudzie Śląskiej. Stacja kontroli pojazdów, warsztat samochodowy, myjnia bezdotykowa.',
        telephone: '+48502567630',
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: 'ul. Katowicka 73',
            addressLocality: 'Świętochłowice',
            postalCode: '41-600',
            addressCountry: 'PL',
          },
          {
            '@type': 'PostalAddress',
            streetAddress: 'ul. Szpaków 51',
            addressLocality: 'Ruda Śląska',
            postalCode: '41-705',
            addressCountry: 'PL',
          },
        ],
        sameAs: ['https://www.bosch.com/pl/'],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.auto-bud.com.pl/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Jakie usługi oferuje Auto-Bud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oferujemy kompleksowe usługi motoryzacyjne: przeglądy techniczne, naprawy samochodów, wymiana oleju, wymiana klocków hamulcowych, wulkanizacja, myjnia bezdotykowa oraz pomoc drogową. W Świętochłowicach prowadzimy autoryzowany serwis Bosch Car Service.',
            },
          },
          {
            '@type': 'Question',
            name: 'Gdzie znajdują się wasze serwisy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Posiadamy trzy lokalizacje: Świętochłowice (ul. Katowicka 73) - autoryzowany serwis Bosch Car Service, Ruda Śląska - Godula (ul. Szpaków 51) - stacja diagnostyczna oraz Ruda Śląska - Bykowina (ul. Szpaków 51) - stacja diagnostyczna. Wszystkie obiekty są łatwo dostępne komunikacyjnie.',
            },
          },
          {
            '@type': 'Question',
            name: 'Jak umówić wizytę w serwisie?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Możesz umówić wizytę telefonicznie pod numerem +48 502 567 630, przez aplikację Bosch Auto Planer lub osobiście w naszych biurach obsługi klienta. Oferujemy również możliwość rezerwacji online.',
            },
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.auto-bud.com.pl/swietochlowice/#localbusiness',
        name: 'Auto-Bud Bosch Car Service Świętochłowice',
        image:
          'https://www.auto-bud.com.pl/assets/images/general/bosch-logo.png',
        telephone: '+48502567630',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Katowicka 73',
          addressLocality: 'Świętochłowice',
          postalCode: '41-600',
          addressCountry: 'PL',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.2978,
          longitude: 18.9175,
        },
        url: 'https://www.auto-bud.com.pl/swietochlowice',
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Usługi motoryzacyjne',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Stacja kontroli pojazdów',
                description: 'Przegląd techniczny pojazdów',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Warsztat samochodowy',
                description: 'Naprawa i serwis samochodów',
              },
            },
          ],
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.auto-bud.com.pl/godula/#localbusiness',
        name: 'Auto-Bud Stacja Diagnostyczna Godula',
        image:
          'https://www.auto-bud.com.pl/assets/images/general/bosch-logo.png',
        telephone: '+48502567630',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Szpaków 51',
          addressLocality: 'Ruda Śląska',
          postalCode: '41-705',
          addressCountry: 'PL',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.2978,
          longitude: 18.9175,
        },
        url: 'https://www.auto-bud.com.pl/godula',
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Usługi motoryzacyjne',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Okręgowa stacja kontroli pojazdów',
                description: 'Przegląd techniczny pojazdów',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Myjnia bezdotykowa',
                description: 'Mycie samochodów',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="pl">
      <head>
        <link
          rel="preload"
          href="/assets/images/general/bosch-logo.png"
          as="image"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
