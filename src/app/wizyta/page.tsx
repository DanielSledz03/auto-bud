import type { Metadata } from 'next';

import BookingStepOne from '@/view/BookingStepOne/BookingStepOne';
import StepProgressBar from '@/view/StepProgressBar/StepProgressBar';

export const metadata: Metadata = {
  title: 'Umów wizytę - Auto-Bud Bosch Car Service',
  description:
    'Umów wizytę online w Auto-Bud Bosch Car Service. Serwisujemy auta klientów ze Świętochłowic, Rudy Śląskiej, Chorzowa, Katowic i całego Śląska.',
  keywords: [
    'umów wizytę serwis samochodowy',
    'rezerwacja serwisu samochodowego',
    'bosch car service wizyta',
    'umów wizytę świętochłowice',
    'umów wizytę ruda śląska',
    'umów wizytę katowice',
    'umów wizytę chorzów',
  ],
  openGraph: {
    title: 'Umów wizytę - Auto-Bud Bosch Car Service',
    description:
      'Rezerwacja terminu wizyty w Auto-Bud Bosch Car Service dla kierowców z całego Śląska.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/wizyta',
    locale: 'pl_PL',
  },
  alternates: {
    canonical: 'https://www.auto-bud.com.pl/wizyta',
  },
};

const WizytaPage = () => {
  const activeStep = 1;

  return (
    <>
      <StepProgressBar activeStep={activeStep} />
      <BookingStepOne />
    </>
  );
};

export default WizytaPage;
