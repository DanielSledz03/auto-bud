import type { Metadata } from 'next';

import { AvailableServices, LocationHeader, ServiceCard } from '@/components';
import { availableServicesProps, serviceCardProps } from '@/constants/bykowina';
import { locationHeaderProps } from '@/constants/swietochlowice';
import { Packages } from '@/view';

export const metadata: Metadata = {
  title:
    'Ruda Śląska Bykowina - Auto-Bud Bosch Car Service | Stacja diagnostyczna',
  description:
    'Auto-Bud Bosch Car Service w Rudzie Śląskiej - Bykowina. Stacja kontroli pojazdów, biuro obsługi klienta. ul. Szpaków 51. Umów wizytę online.',
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
  ],
  openGraph: {
    title: 'Ruda Śląska Bykowina - Auto-Bud Bosch Car Service',
    description:
      'Auto-Bud Bosch Car Service w Rudzie Śląskiej - Bykowina. Stacja kontroli pojazdów, biuro obsługi klienta.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/bykowina',
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
