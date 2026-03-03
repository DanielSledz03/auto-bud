import { PromotionsBanner } from '@/components';
import { buildPageMetadata } from '@/lib/seo';
import {
  HomeAboutUs,
  HomeAdditionalServices,
  HomeHeader,
  HomeOpinions,
  ServiceArea,
} from '@/view';
import { HomeFAQ } from '@/view/HomeFAQ/HomeFAQ';

export const metadata = buildPageMetadata({
  title:
    'Warsztat / Serwis samochodowy Śląsk | Bosch Car Service Auto-Bud – Świętochłowice, Ruda Śląska',
  description:
    'Auto-Bud Bosch Car Service: warsztat i serwis samochodowy na Śląsku. Diagnostyka, przeglądy, klimatyzacja, wymiana oleju i hamulce. Obsługujemy Świętochłowice, Katowice i okolice.',
  path: '/',
  keywords: [
    'warsztat samochodowy śląsk',
    'serwis samochodowy śląsk',
    'warsztat samochodowy świętochłowice',
    'warsztat samochodowy katowice',
    'diagnostyka komputerowa śląsk',
    'wymiana oleju śląsk',
    'serwis klimatyzacji śląsk',
  ],
});

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeAboutUs />
      <ServiceArea />
      <HomeFAQ />
      <HomeOpinions />
      <HomeAdditionalServices />
      <PromotionsBanner
        title="Zarezerwuj wizytę w aplikacji Bosch Car Planer"
        heading="Oferty sezonowe"
        price="99 zł"
        href="https://play.google.com/store/apps/details?id=com.companyname.icmobile"
        description="Skorzystaj z naszej sezonowej promocji na serwis klimatyzacji! Przy zakupie filtra kabinowego Bosch zapewniamy pełną diagnostykę i serwis klimatyzacji w Twoim aucie. Umów wizytę i ciesz się komfortową jazdą. Oferta ważna tylko przez ograniczony czas!"
      />
    </>
  );
}
