import ContactWithUs from '@/form/ContactWithUs/ContactWithUs';
import CallToUs from '@/view/CallToUs/CallToUs';
import HomeAboutUs from '@/view/HomeAboutUs/HomeAboutUs';
import HomeAdditionalServices from '@/view/HomeAdditionalOffers/HomeAdditionalServices';
import HomeHeader from '@/view/HomeHeader/HomeHeader';
import HomeOpinions from '@/view/HomeOpinions/HomeOpinions';
import PromotionBanner from '@/view/PromotionBanner/PromotionBanner';

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <PromotionBanner />
      <HomeAboutUs />
      <HomeAdditionalServices />
      <HomeOpinions />
      <ContactWithUs />
      <CallToUs />
    </main>
  );
}
