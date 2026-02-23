import type { Metadata } from 'next';

import { AvailableServices, LocationHeader, ServiceCard } from '@/components';
import {
  locationGalleryProps,
  serviceCardBetaProps,
  serviceCardOmegaProps,
  availableServicesProps,
  locationHeaderProps,
} from '@/constants/godula';
import { LocationGallery, Packages } from '@/view';

export const metadata: Metadata = {
  title:
    'Ruda Śląska Godula - Auto-Bud Bosch Car Service | Okręgowa stacja diagnostyczna',
  description:
    'Auto-Bud Bosch Car Service w Rudzie Śląskiej - Goduli przy ul. Starej 1. Okręgowa stacja kontroli pojazdów, myjnia bezdotykowa i biuro obsługi. Szybki dojazd z Chorzowa i Katowic.',
  keywords: [
    'auto-bud godula',
    'serwis samochodowy godula',
    'okręgowa stacja kontroli pojazdów godula',
    'warsztat bosch godula',
    'przegląd techniczny godula',
    'diagnostyka samochodowa godula',
    'myjnia bezdotykowa godula',
    'bosch car service godula',
    'ul. stara 1 godula',
    'ruda śląska godula serwis',
    'stacja kontroli pojazdów ruda śląska',
    'serwis samochodowy chorzów',
    'serwis samochodowy katowice',
  ],
  openGraph: {
    title: 'Ruda Śląska Godula - Auto-Bud Bosch Car Service',
    description:
      'Okręgowa stacja kontroli pojazdów i myjnia bezdotykowa w Rudzie Śląskiej - Goduli (ul. Stara 1).',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/godula',
    locale: 'pl_PL',
  },
  alternates: {
    canonical: 'https://www.auto-bud.com.pl/godula',
  },
};

const GodulaPage = () => {
  return (
    <>
      <LocationHeader {...locationHeaderProps} />
      <AvailableServices {...availableServicesProps} />
      <ServiceCard {...serviceCardOmegaProps} />
      <Packages />
      <ServiceCard {...serviceCardBetaProps} />
      <LocationGallery {...locationGalleryProps} />
    </>
  );
};

export default GodulaPage;
