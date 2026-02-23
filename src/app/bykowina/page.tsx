import type { Metadata } from 'next';

import { AvailableServices, LocationHeader, ServiceCard } from '@/components';
import {
  availableServicesProps,
  locationHeaderProps,
  serviceCardProps,
} from '@/constants/bykowina';
import { Packages } from '@/view';

export const metadata: Metadata = {
  title:
    'Ruda Śląska Bykowina - Auto-Bud Bosch Car Service | Stacja diagnostyczna',
  description:
    'Auto-Bud Bosch Car Service w Rudzie Śląskiej - Bykowinie przy ul. Szpaków 51. Stacja kontroli pojazdów i biuro obsługi klienta z dobrym dojazdem z Chorzowa i Katowic.',
  keywords: [
    'auto-bud bykowina',
    'serwis samochodowy bykowina',
    'stacja kontroli pojazdów bykowina',
    'warsztat bosch bykowina',
    'przegląd techniczny bykowina',
    'diagnostyka samochodowa bykowina',
    'bosch car service bykowina',
    'ul. szpaków 51 bykowina',
    'ruda śląska bykowina serwis',
    'stacja diagnostyczna ruda śląska',
    'serwis samochodowy chorzów',
    'serwis samochodowy katowice',
  ],
  openGraph: {
    title: 'Ruda Śląska Bykowina - Auto-Bud Bosch Car Service',
    description:
      'Stacja kontroli pojazdów Auto-Bud w Rudzie Śląskiej - Bykowinie. Obsługa kierowców z Rudy Śląskiej, Chorzowa i Katowic.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/bykowina',
    locale: 'pl_PL',
  },
  alternates: {
    canonical: 'https://www.auto-bud.com.pl/bykowina',
  },
};

const BykowinaPage = () => {
  return (
    <>
      <LocationHeader {...locationHeaderProps} />
      <AvailableServices {...availableServicesProps} />
      <ServiceCard {...serviceCardProps} />
      <Packages />
    </>
  );
};

export default BykowinaPage;
