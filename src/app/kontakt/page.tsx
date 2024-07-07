import PromotionsBanner from '@/components/PromotionBanner/PromotionBanner';
import ContactHeader from '@/view/ContactHeader/ContactHeader';

const KontaktPage = () => {
  return (
    <main>
      <ContactHeader />
      <PromotionsBanner
        title="Umów wizytę"
        shorter
        description="Skorzystaj z naszej sezonowej promocji na naprawę klimatyzacji! Przy zakupie filtra kabinowego Bosch zapewniamy pełną diagnostykę i naprawę klimatyzacji w Twoim aucie. Umów wizytę i ciesz się komfortową jazdą. Oferta ważna tylko przez ograniczony czas!"
      />
    </main>
  );
};

export default KontaktPage;
