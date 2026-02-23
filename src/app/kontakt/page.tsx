import type { Metadata } from 'next';

import { PromotionsBanner, TextHeader } from '@/components';

export const metadata: Metadata = {
  title:
    'Kontakt - Auto-Bud Bosch Car Service | Telefon, adres, godziny otwarcia',
  description:
    'Skontaktuj się z Auto-Bud Bosch Car Service: +48 502 567 630. Lokalizacje w Świętochłowicach i Rudzie Śląskiej (Godula, Bykowina). Obsługujemy także Chorzów, Katowice i cały Śląsk.',
  keywords: [
    'kontakt auto-bud',
    'telefon serwis samochodowy',
    'adres warsztat bosch',
    'godziny otwarcia',
    'umów wizytę',
    'serwis samochodowy ruda śląska',
    'serwis samochodowy świętochłowice',
    'bosch car service kontakt',
    'warsztat godula',
    'warsztat bykowina',
    'serwis samochodowy chorzów',
    'serwis samochodowy katowice',
    'kontakt serwis samochodowy śląsk',
  ],
  openGraph: {
    title: 'Kontakt - Auto-Bud Bosch Car Service',
    description:
      'Kontakt do Auto-Bud Bosch Car Service w Świętochłowicach i Rudzie Śląskiej. Dojazd także z Chorzowa i Katowic.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/kontakt',
    locale: 'pl_PL',
  },
  alternates: {
    canonical: 'https://www.auto-bud.com.pl/kontakt',
  },
};

const KontaktPage = () => {
  return (
    <>
      <TextHeader title="Kontakt">
        Jesteśmy tu, aby Ci pomóc! Skontaktuj się z nami w sprawie wszelkich
        pytań, problemów czy sugestii. <br />
        Nasz zespół jest zawsze gotowy, aby zapewnić Ci najlepszą obsługę.
      </TextHeader>
      <PromotionsBanner
        title="Umów wizytę"
        shorter
        href="https://play.google.com/store/apps/details?id=com.companyname.icmobile"
        description="Zarezerwuj termin już teraz i skorzystaj z naszych wyjątkowych usług. Kliknij tutaj, aby umówić wizytę i cieszyć się profesjonalną obsługą bez czekania."
      />
    </>
  );
};

export default KontaktPage;
