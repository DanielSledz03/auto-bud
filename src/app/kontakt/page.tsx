import type { Metadata } from 'next';

import { PromotionsBanner, TextHeader } from '@/components';

export const metadata: Metadata = {
  title:
    'Kontakt - Auto-Bud Bosch Car Service | Telefon, adres, godziny otwarcia',
  description:
    'Skontaktuj się z Auto-Bud Bosch Car Service. Telefon: +48 502 567 630. Lokalizacje w Rudzie Śląskiej (Godula, Bykowina) i Świętochłowicach. Umów wizytę online.',
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
  ],
  openGraph: {
    title: 'Kontakt - Auto-Bud Bosch Car Service',
    description:
      'Skontaktuj się z Auto-Bud Bosch Car Service. Telefon: +48 502 567 630. Lokalizacje w Rudzie Śląskiej i Świętochłowicach.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/kontakt',
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
        // href="/wizyta"
        description="Zarezerwuj termin już teraz i skorzystaj z naszych wyjątkowych usług. Kliknij tutaj, aby umówić wizytę i cieszyć się profesjonalną obsługą bez czekania."
      />
    </>
  );
};

export default KontaktPage;
