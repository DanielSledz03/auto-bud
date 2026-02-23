import type { Metadata } from 'next';

import { PromotionsBanner } from '@/components';
import {
  HomeAboutUs,
  HomeAdditionalServices,
  HomeHeader,
  HomeOpinions,
} from '@/view';
import { HomeFAQ } from '@/view/HomeFAQ/HomeFAQ';

export const metadata: Metadata = {
  title:
    'Serwis samochodowy Śląsk - Auto-Bud Bosch Car Service | Świętochłowice, Ruda Śląska',
  description:
    'Auto-Bud Bosch Car Service to serwis samochodowy i stacje kontroli pojazdów dla kierowców ze Świętochłowic, Rudy Śląskiej, Chorzowa, Katowic i całego Śląska. Umów wizytę online.',
  keywords: [
    'serwis samochodowy śląsk',
    'serwis samochodowy świętochłowice',
    'serwis samochodowy ruda śląska',
    'serwis samochodowy chorzów',
    'serwis samochodowy katowice',
    'bosch car service śląsk',
    'stacja kontroli pojazdów śląsk',
    'mechanik śląsk',
    'mechanik katowice',
    'mechanik chorzów',
  ],
  openGraph: {
    title: 'Serwis samochodowy Śląsk - Auto-Bud Bosch Car Service',
    description:
      'Serwis samochodowy i stacje kontroli pojazdów dla kierowców ze Świętochłowic, Rudy Śląskiej, Chorzowa, Katowic i całego Śląska.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl',
    locale: 'pl_PL',
  },
  alternates: {
    canonical: 'https://www.auto-bud.com.pl',
  },
};

export default function Home() {
  return (
    <>
      <HomeHeader />
      <PromotionsBanner
        title="Zarezerwuj wizytę w aplikacji Bosch Car Planer"
        heading="Oferty sezonowe"
        price="99 zł"
        href="https://play.google.com/store/apps/details?id=com.companyname.icmobile"
        description="Skorzystaj z naszej sezonowej promocji na serwis klimatyzacji! Przy zakupie filtra kabinowego Bosch zapewniamy pełną diagnostykę i serwis klimatyzacji w Twoim aucie. Umów wizytę i ciesz się komfortową jazdą. Oferta ważna tylko przez ograniczony czas!"
      />
      <HomeAboutUs />
      <HomeAdditionalServices />
      <HomeFAQ />
      <HomeOpinions />
    </>
  );
}
