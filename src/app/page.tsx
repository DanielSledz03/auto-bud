import PromotionBanner from '@/components/PromotionBanner/PromotionBanner';
import HomeAboutUs from '@/view/HomeAboutUs/HomeAboutUs';
import HomeAdditionalServices from '@/view/HomeAdditionalOffers/HomeAdditionalServices';
import HomeHeader from '@/view/HomeHeader/HomeHeader';
import HomeOpinions from '@/view/HomeOpinions/HomeOpinions';

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <PromotionBanner
        title="Naprawa klimatyzacji"
        heading="Oferty sezonowe"
        price="99 zł"
        description="Skorzystaj z naszej sezonowej promocji na naprawę klimatyzacji! Przy zakupie filtra kabinowego Bosch zapewniamy pełną diagnostykę i naprawę klimatyzacji w Twoim aucie. Umów wizytę i ciesz się komfortową jazdą. Oferta ważna tylko przez ograniczony czas!"
      />
      <HomeAboutUs />
      <HomeAdditionalServices />
      <HomeOpinions />
    </main>
  );
}
