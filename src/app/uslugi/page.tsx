import type { Metadata } from 'next';

import { ObjectInfoCard, ServiceCard, TextHeader } from '@/components';
import {
  carWashProps,
  mechanicWorkshopProps,
  rentCarProps,
  roadAssistanceProps,
  stationControlProps,
  servicesHeader,
} from '@/constants/services';

export const metadata: Metadata = {
  title:
    'Usługi - Auto-Bud Bosch Car Service | Stacja diagnostyczna, warsztat, myjnia',
  description:
    'Kompleksowe usługi motoryzacyjne: stacja kontroli pojazdów, warsztat samochodowy, myjnia bezdotykowa i pomoc drogowa. Obsługujemy Świętochłowice, Rudę Śląską, Chorzów, Katowice i cały Śląsk.',
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
    'chorzów',
    'katowice',
    'serwis samochodowy śląsk',
  ],
  openGraph: {
    title: 'Usługi - Auto-Bud Bosch Car Service',
    description:
      'Kompleksowe usługi motoryzacyjne dla kierowców z Rudy Śląskiej, Świętochłowic, Chorzowa, Katowic i całego Śląska.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/uslugi',
    locale: 'pl_PL',
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
    {/* <LocationGallery {...galleryProps} /> */}
    <ServiceCard {...roadAssistanceProps} />
  </>
);

export default Uslugi;
