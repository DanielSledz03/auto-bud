import type { Metadata } from 'next';

import { businessLocations, serviceAreaCities } from '@/data/businessLocations';

export const BASE_URL = 'https://www.auto-bud.com.pl';
export const SITE_NAME = 'Auto-Bud Bosch Car Service';
export const DEFAULT_OG_IMAGE = '/assets/images/general/icon.png';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface BuildPageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export const buildPageMetadata = ({
  title,
  description,
  path,
  keywords = [],
}: BuildPageMetadataOptions): Metadata => {
  const canonicalUrl = path === '/' ? BASE_URL : `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'pl_PL',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 500,
          height: 500,
          alt: `${SITE_NAME} - logo`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
};

export const createBreadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.path === '/' ? BASE_URL : `${BASE_URL}${item.path}`,
  })),
});

export const createFaqJsonLd = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

const areaServed = serviceAreaCities.map(city => ({
  '@type': 'City',
  name: city,
}));

const autoRepairLocationsGraph = businessLocations.map(location => ({
  '@type': 'AutoRepair',
  '@id': `${BASE_URL}${location.slug}#autobud-location`,
  name: location.name,
  url: `${BASE_URL}${location.slug}`,
  image: `${BASE_URL}${DEFAULT_OG_IMAGE}`,
  telephone: [location.landlineE164, location.mobileE164],
  address: {
    '@type': 'PostalAddress',
    streetAddress: location.streetAddress,
    postalCode: location.postalCode,
    addressLocality: location.addressLocality,
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: location.geo.latitude,
    longitude: location.geo.longitude,
  },
  openingHoursSpecification: location.stationOpeningHours.map(day => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${day.dayOfWeek}`,
    opens: day.opens,
    closes: day.closes,
  })),
  hasMap: location.mapUrl,
  areaServed,
}));

export const organizationGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}#organization`,
      name: SITE_NAME,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/assets/images/general/bosch-logo.png`,
      },
      contactPoint: businessLocations.map(location => ({
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: location.mobileE164,
        areaServed: 'PL-SL',
        availableLanguage: ['pl'],
      })),
      address: businessLocations.map(location => ({
        '@type': 'PostalAddress',
        streetAddress: location.streetAddress,
        postalCode: location.postalCode,
        addressLocality: location.addressLocality,
        addressCountry: 'PL',
      })),
      areaServed,
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}#website`,
      name: SITE_NAME,
      url: BASE_URL,
      inLanguage: 'pl-PL',
    },
    ...autoRepairLocationsGraph,
  ],
};
