import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import ContactWithUs from '@/form/ContactWithUs/ContactWithUs';
import CallToUs from '@/view/CallToUs/CallToUs';
import Footer from '@/view/Footer/Footer';
import Menus from '@/view/Menus/Menus';

const BASE_URL = 'https://www.auto-bud.com.pl';
const OG_IMAGE_PATH = '/assets/images/general/icon.png';

const areasServed = [
  { '@type': 'City', name: 'Świętochłowice' },
  { '@type': 'City', name: 'Ruda Śląska' },
  { '@type': 'City', name: 'Chorzów' },
  { '@type': 'City', name: 'Katowice' },
  { '@type': 'AdministrativeArea', name: 'Województwo śląskie' },
];

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: 'Auto-Bud Bosch Car Service - Serwis samochodowy Śląsk',
  description:
    'Auto-Bud Bosch Car Service: serwis samochodowy, stacje kontroli pojazdów i myjnia. Obsługujemy Świętochłowice, Rudę Śląską, Chorzów, Katowice i cały Śląsk.',
  applicationName: 'Auto-Bud Bosch Car Service',
  icons: [
    {
      url: '/assets/images/general/icon.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      url: '/assets/images/general/icon.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/assets/images/general/icon.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      url: '/assets/images/general/icon.png',
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
    'serwis samochodowy chorzów',
    'serwis samochodowy katowice',
    'serwis samochodowy śląsk',
    'stacja diagnostyczna śląsk',
    'mechanik śląsk',
    'mechanik katowice',
    'mechanik chorzów',
  ],
  authors: [{ name: 'Auto-Bud Bosch Car Service' }],
  creator: 'Auto-Bud Bosch Car Service',
  publisher: 'Auto-Bud Bosch Car Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Auto-Bud Bosch Car Service - Serwis samochodowy Śląsk',
    description:
      'Serwis samochodowy i stacje kontroli pojazdów dla kierowców ze Świętochłowic, Rudy Śląskiej, Chorzowa, Katowic i całego Śląska.',
    type: 'website',
    siteName: 'Auto-Bud Bosch Car Service',
    url: BASE_URL,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 500,
        height: 500,
        alt: 'Auto-Bud Bosch Car Service',
        type: 'image/png',
      },
    ],
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto-Bud Bosch Car Service - Serwis samochodowy Śląsk',
    description:
      'Serwis samochodowy i stacje kontroli pojazdów na Śląsku: Świętochłowice, Ruda Śląska, Chorzów, Katowice.',
    images: [OG_IMAGE_PATH],
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
  category: 'motoryzacja',
  other: {
    'geo.region': 'PL-SL',
    'geo.placename': 'Śląsk',
    'geo.position': '50.2978;18.9175',
    ICBM: '50.2978, 18.9175',
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
        '@id': `${BASE_URL}/#organization`,
        name: 'Auto-Bud Bosch Car Service',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/assets/images/general/bosch-logo.png`,
          width: 400,
          height: 400,
        },
        description:
          'Serwis samochodowy i stacje kontroli pojazdów dla kierowców ze Świętochłowic, Rudy Śląskiej, Chorzowa, Katowic i całego Śląska.',
        telephone: '+48502567630',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+48502567630',
            contactType: 'customer service',
            areaServed: 'PL-SL',
            availableLanguage: ['pl'],
          },
        ],
        areaServed: areasServed,
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
            streetAddress: 'ul. Stara 1',
            addressLocality: 'Ruda Śląska',
            postalCode: '41-703',
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
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Auto-Bud Bosch Car Service',
        inLanguage: 'pl-PL',
      },
      {
        '@type': 'Service',
        '@id': `${BASE_URL}/#service`,
        name: 'Serwis samochodowy i stacja kontroli pojazdów',
        provider: {
          '@id': `${BASE_URL}/#organization`,
        },
        serviceType: [
          'Serwis samochodowy',
          'Stacja kontroli pojazdów',
          'Diagnostyka samochodowa',
          'Myjnia bezdotykowa',
          'Pomoc drogowa',
        ],
        areaServed: areasServed,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Usługi Auto-Bud',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Przegląd techniczny pojazdów',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Naprawa samochodów osobowych',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Myjnia bezdotykowa',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/#faq`,
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
              text: 'Posiadamy trzy lokalizacje: Świętochłowice (ul. Katowicka 73), Ruda Śląska - Godula (ul. Stara 1) oraz Ruda Śląska - Bykowina (ul. Szpaków 51). Obsługujemy także klientów z Chorzowa, Katowic i całego Śląska.',
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
        '@type': 'AutoRepair',
        '@id': `${BASE_URL}/swietochlowice/#localbusiness`,
        name: 'Auto-Bud Bosch Car Service Świętochłowice',
        image: `${BASE_URL}/assets/images/general/bosch-logo.png`,
        telephone: '+48502567630',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Katowicka 73',
          addressLocality: 'Świętochłowice',
          postalCode: '41-600',
          addressCountry: 'PL',
        },
        hasMap: 'https://maps.app.goo.gl/PQVm43rL5RzVfys77',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.2978,
          longitude: 18.9175,
        },
        url: `${BASE_URL}/swietochlowice`,
        priceRange: '$$',
        areaServed: areasServed,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '19:00',
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
        '@type': 'AutomotiveBusiness',
        '@id': `${BASE_URL}/godula/#localbusiness`,
        name: 'Auto-Bud Stacja Diagnostyczna Godula',
        image: `${BASE_URL}/assets/images/general/bosch-logo.png`,
        telephone: '+48502567630',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Stara 1',
          addressLocality: 'Ruda Śląska',
          postalCode: '41-703',
          addressCountry: 'PL',
        },
        hasMap: 'https://maps.app.goo.gl/uevhCXnHGWYJm6NX8',
        url: `${BASE_URL}/godula`,
        priceRange: '$$',
        areaServed: areasServed,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '19:00',
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
      {
        '@type': 'AutomotiveBusiness',
        '@id': `${BASE_URL}/bykowina/#localbusiness`,
        name: 'Auto-Bud Stacja Diagnostyczna Bykowina',
        image: `${BASE_URL}/assets/images/general/bosch-logo.png`,
        telephone: '+48502567630',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Szpaków 51',
          addressLocality: 'Ruda Śląska',
          postalCode: '41-705',
          addressCountry: 'PL',
        },
        hasMap: 'https://maps.app.goo.gl/UFvFUSnpor4dTKHd6',
        url: `${BASE_URL}/bykowina`,
        priceRange: '$$',
        areaServed: areasServed,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '19:00',
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
                description: 'Badania techniczne pojazdów do 3,5 tony',
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
