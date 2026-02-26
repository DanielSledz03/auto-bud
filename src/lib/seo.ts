import type { Metadata } from 'next';

import {
  businessLocations,
  serviceAreaCities,
  type BusinessLocation,
  type OpeningHoursEntry,
} from '@/data/businessLocations';

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

interface ServiceOffer {
  name: string;
  path: string;
  description: string;
}

const toAbsoluteUrl = (path: string) =>
  path === '/' ? BASE_URL : `${BASE_URL}${path}`;

const areaServed = serviceAreaCities.map(city => ({
  '@type': 'City',
  name: city,
}));

const locationDescriptions: Record<BusinessLocation['id'], string> = {
  swietochlowice:
    'Warsztat samochodowy i stacja kontroli pojazdów Auto-Bud Bosch Car Service w Świętochłowicach.',
  godula:
    'Okręgowa stacja kontroli pojazdów Auto-Bud w Rudzie Śląskiej (Godula) oraz myjnia bezdotykowa.',
  bykowina:
    'Stacja kontroli pojazdów Auto-Bud w Rudzie Śląskiej (Bykowina), obsługa badań technicznych i pojazdów z LPG.',
};

const locationTypes: Record<
  BusinessLocation['id'],
  'AutoRepair' | 'AutomotiveBusiness'
> = {
  swietochlowice: 'AutoRepair',
  godula: 'AutomotiveBusiness',
  bykowina: 'AutomotiveBusiness',
};

const locationOfferCatalog: Record<BusinessLocation['id'], ServiceOffer[]> = {
  swietochlowice: [
    {
      name: 'Naprawy mechaniczne',
      path: '/swietochlowice',
      description:
        'Pełny zakres napraw mechanicznych i elektrycznych w warsztacie w Świętochłowicach.',
    },
    {
      name: 'Diagnostyka komputerowa',
      path: '/uslugi/diagnostyka-komputerowa',
      description: 'Diagnostyka usterek i elektroniki pojazdu.',
    },
    {
      name: 'Przegląd techniczny',
      path: '/uslugi/przeglad-techniczny',
      description: 'Badania techniczne pojazdów osobowych i dostawczych.',
    },
  ],
  godula: [
    {
      name: 'Okręgowa stacja kontroli pojazdów',
      path: '/godula',
      description:
        'Badania techniczne pojazdów, w tym aut z instalacją LPG, w Rudzie Śląskiej Goduli.',
    },
    {
      name: 'Przegląd techniczny',
      path: '/uslugi/przeglad-techniczny',
      description: 'Badania okresowe i dodatkowe w stacji diagnostycznej.',
    },
    {
      name: 'Myjnia bezdotykowa',
      path: '/godula',
      description: 'Myjnia bezdotykowa dostępna codziennie w punkcie Godula.',
    },
  ],
  bykowina: [
    {
      name: 'Stacja kontroli pojazdów',
      path: '/bykowina',
      description: 'Badania techniczne pojazdów do 3,5 t oraz pojazdów z LPG.',
    },
    {
      name: 'Przegląd techniczny',
      path: '/uslugi/przeglad-techniczny',
      description: 'Okresowe i dodatkowe badania techniczne w Bykowinie.',
    },
  ],
};

const mapOpeningHours = (entries: OpeningHoursEntry[]) =>
  entries.map(entry => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${entry.dayOfWeek}`,
    opens: entry.opens,
    closes: entry.closes,
  }));

const createLocationOfferSchema = (offer: ServiceOffer) => ({
  '@type': 'Offer',
  itemOffered: {
    '@type': 'Service',
    name: offer.name,
    description: offer.description,
    url: toAbsoluteUrl(offer.path),
    areaServed,
  },
});

const createLocationBusinessNode = (location: BusinessLocation) => {
  const offers = locationOfferCatalog[location.id].map(
    createLocationOfferSchema,
  );
  const workshopHoursNote = location.workshopOpeningHours?.length
    ? ' Warsztat: poniedziałek-piątek 08:00-16:00.'
    : '';

  return {
    '@type': locationTypes[location.id],
    '@id': `${toAbsoluteUrl(location.slug)}#localbusiness`,
    name: location.name,
    branchOf: {
      '@id': `${BASE_URL}#organization`,
    },
    description: `${locationDescriptions[location.id]}${workshopHoursNote}`,
    url: toAbsoluteUrl(location.slug),
    image: `${BASE_URL}${DEFAULT_OG_IMAGE}`,
    logo: `${BASE_URL}/assets/images/general/bosch-logo.png`,
    telephone: location.mobileE164,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: location.landlineE164,
        availableLanguage: ['pl'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: location.mobileE164,
        availableLanguage: ['pl'],
      },
    ],
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
    openingHoursSpecification: mapOpeningHours(location.stationOpeningHours),
    hasMap: location.mapUrl,
    sameAs: [location.mapUrl],
    areaServed,
    inLanguage: 'pl-PL',
    currenciesAccepted: 'PLN',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Oferta usług - ${location.shortName}`,
      itemListElement: offers,
    },
    makesOffer: offers,
  };
};

export const buildPageMetadata = ({
  title,
  description,
  path,
  keywords = [],
}: BuildPageMetadataOptions): Metadata => {
  const canonicalUrl = toAbsoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: {
        'pl-PL': path,
      },
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
    item: toAbsoluteUrl(item.path),
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

export const createLocationJsonLd = (locationId: BusinessLocation['id']) => {
  const location = businessLocations.find(item => item.id === locationId);

  if (!location) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    ...createLocationBusinessNode(location),
  };
};

const localBusinessGraph = businessLocations.map(createLocationBusinessNode);

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
      hasPOS: businessLocations.map(location => ({
        '@id': `${toAbsoluteUrl(location.slug)}#localbusiness`,
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}#website`,
      name: SITE_NAME,
      url: BASE_URL,
      inLanguage: 'pl-PL',
    },
    ...localBusinessGraph,
  ],
};
