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
    'Auto-Bud Bosch Car Service w Świętochłowicach. Stacja kontroli pojazdów, warsztat samochodowy, biuro obsługi klienta. ul. Katowicka 73. Umów wizytę online.',
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
  ],
  openGraph: {
    title: 'Świętochłowice - Auto-Bud Bosch Car Service',
    description:
      'Auto-Bud Bosch Car Service w Świętochłowicach. Stacja kontroli pojazdów, warsztat samochodowy, biuro obsługi klienta.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/swietochlowice',
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
