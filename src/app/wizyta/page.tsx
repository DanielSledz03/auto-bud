import BookingStepOne from '@/view/BookingStepOne/BookingStepOne';
import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Umów wizytę | Auto-Bud Bosch Car Service',
  description:
    'Zgłoś wizytę online w Auto-Bud Bosch Car Service. Wybierz lokalizację, preferowany dzień wizyty oraz porę kontaktu.',
  path: '/wizyta',
  keywords: [
    'umów wizytę warsztat samochodowy',
    'rezerwacja serwisu samochodowego śląsk',
    'bosch car service wizyta online',
  ],
});

const WizytaPage = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          { name: 'Umów wizytę', path: '/wizyta' },
        ]}
      />
      <BookingStepOne />
    </>
  );
};

export default WizytaPage;
