import type { Metadata } from 'next';

import { ObjectInfoCard, ServiceCard, TextHeader } from '@/components';
import {
  carWashProps,
  galleryProps,
  mechanicWorkshopProps,
  rentCarProps,
  roadAssistanceProps,
  stationControlProps,
  servicesHeader,
} from '@/constants/services';
import { LocationGallery } from '@/view';

export const metadata: Metadata = {
  title:
    'Usługi - Auto-Bud Bosch Car Service | Stacja diagnostyczna, warsztat, myjnia',
  description:
    'Kompleksowe usługi motoryzacyjne: stacja kontroli pojazdów, warsztat samochodowy, myjnia bezdotykowa, pomoc drogowa. Profesjonalny serwis Bosch w Rudzie Śląskiej i Świętochłowicach.',
  keywords: [
    'usługi motoryzacyjne',
    'stacja kontroli pojazdów',
    'warsztat samochodowy',
    'myjnia bezdotykowa',
    'pomoc drogowa',
    'serwis bosch',
    'diagnostyka samochodowa',
    'przegląd techniczny',
    'naprawa samochodów',
    'wymiana oleju',
    'wulkanizacja',
    'ruda śląska',
    'świętochłowice',
    'godula',
    'bykowina',
  ],
  openGraph: {
    title: 'Usługi - Auto-Bud Bosch Car Service',
    description:
      'Kompleksowe usługi motoryzacyjne: stacja kontroli pojazdów, warsztat samochodowy, myjnia bezdotykowa, pomoc drogowa.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/uslugi',
  },
  alternates: {
    canonical: 'https://www.auto-bud.com.pl/uslugi',
  },
};

const services = [
  stationControlProps,
  mechanicWorkshopProps,
  carWashProps,
  rentCarProps,
];

const Uslugi = () => (
  <>
    <TextHeader title={servicesHeader.title}>
      {servicesHeader.description}
    </TextHeader>
    {services.map((props, index) => (
      <ObjectInfoCard key={index} {...props} />
    ))}
    <LocationGallery {...galleryProps} />
    <ServiceCard {...roadAssistanceProps} />
  </>
);

export default Uslugi;
