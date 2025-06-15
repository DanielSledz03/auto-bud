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
    'Auto-Bud Bosch Car Service w Rudzie Śląskiej - Godula. Okręgowa stacja kontroli pojazdów, myjnia bezdotykowa, biuro obsługi klienta. ul. Szpaków 51. Umów wizytę online.',
  keywords: [
    'auto-bud godula',
    'serwis samochodowy godula',
    'okręgowa stacja kontroli pojazdów godula',
    'warsztat bosch godula',
    'przegląd techniczny godula',
    'diagnostyka samochodowa godula',
    'myjnia bezdotykowa godula',
    'bosch car service godula',
    'ul. szpaków 51 godula',
    'ruda śląska godula serwis',
  ],
  openGraph: {
    title: 'Ruda Śląska Godula - Auto-Bud Bosch Car Service',
    description:
      'Auto-Bud Bosch Car Service w Rudzie Śląskiej - Godula. Okręgowa stacja kontroli pojazdów, myjnia bezdotykowa, biuro obsługi klienta.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/godula',
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
