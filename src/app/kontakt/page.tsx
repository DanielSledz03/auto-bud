import PromotionsBanner from '@/components/PromotionBanner/PromotionBanner';
import TextHeader from '@/components/TextHeader/TextHeader';

const KontaktPage = () => {
  return (
    <main>
      <TextHeader title="Kontakt">
        Jesteśmy tu, aby Ci pomóc! Skontaktuj się z nami w sprawie wszelkich
        pytań, problemów czy sugestii. <br />
        Nasz zespół jest zawsze gotowy, aby zapewnić Ci najlepszą obsługę.
      </TextHeader>
      <PromotionsBanner
        title="Umów wizytę"
        shorter
        href="/wizyta"
        description="Zarezerwuj termin już teraz i skorzystaj z naszych wyjątkowych usług. Kliknij tutaj, aby umówić wizytę i cieszyć się profesjonalną obsługą bez czekania."
      />
    </main>
  );
};

export default KontaktPage;
