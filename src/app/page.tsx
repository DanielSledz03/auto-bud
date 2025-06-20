import { PromotionsBanner } from '@/components';
import {
  HomeAboutUs,
  HomeAdditionalServices,
  HomeHeader,
  HomeOpinions,
} from '@/view';
import CallToUs from '@/view/CallToUs/CallToUs';
import { HomeFAQ } from '@/view/HomeFAQ/HomeFAQ';

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
      <CallToUs />
    </>
  );
}
