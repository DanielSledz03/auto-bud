import type { Metadata } from 'next';

import { AvailableServices, LocationHeader, ServiceCard } from '@/components';
import {
  locationHeaderProps,
  serviceCardGammaProps,
  serviceCardLambdaProps,
  serviceCardOfficeProps,
} from '@/constants/swietochlowice';
import { Packages } from '@/view';

export const metadata: Metadata = {
  title:
    'Świętochłowice - Auto-Bud Bosch Car Service | Stacja diagnostyczna i warsztat',
  description:
    'Auto-Bud Bosch Car Service w Świętochłowicach przy ul. Katowickiej 73. Stacja kontroli pojazdów i warsztat samochodowy z dogodnym dojazdem z Chorzowa, Katowic i całego Śląska.',
  keywords: [
    'auto-bud świętochłowice',
    'serwis samochodowy świętochłowice',
    'stacja kontroli pojazdów świętochłowice',
    'warsztat bosch świętochłowice',
    'przegląd techniczny świętochłowice',
    'diagnostyka samochodowa świętochłowice',
    'naprawa samochodów świętochłowice',
    'bosch car service świętochłowice',
    'ul. katowicka 73 świętochłowice',
    'wulkanizator świętochłowice',
    'serwis samochodowy chorzów',
    'serwis samochodowy katowice',
    'stacja diagnostyczna śląsk',
  ],
  openGraph: {
    title: 'Świętochłowice - Auto-Bud Bosch Car Service',
    description:
      'Stacja kontroli pojazdów i warsztat samochodowy w Świętochłowicach. Obsługujemy także kierowców z Chorzowa i Katowic.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/swietochlowice',
    locale: 'pl_PL',
  },
  alternates: {
    canonical: 'https://www.auto-bud.com.pl/swietochlowice',
  },
};

const SwietochlowicePage = () => {
  return (
    <>
      <LocationHeader {...locationHeaderProps} />
      <AvailableServices isOffice={true} isStation={true} isCarRepair={true} />
      <ServiceCard {...serviceCardGammaProps} />
      <Packages />
      <ServiceCard {...serviceCardLambdaProps} />
      <ServiceCard {...serviceCardOfficeProps} />
    </>
  );
};

export default SwietochlowicePage;
