import HomeAboutUs from '@/view/HomeAboutUs/HomeAboutUs';
import HomeHeader from '@/view/HomeHeader/HomeHeader';
import PromotionBanner from '@/view/PromotionBanner/PromotionBanner';

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <PromotionBanner />
      <HomeAboutUs />
    </main>
  );
}
