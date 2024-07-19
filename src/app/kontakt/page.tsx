import { PromotionsBanner, TextHeader } from '@/components';

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
        href="/wizyta"
        description="Zarezerwuj termin już teraz i skorzystaj z naszych wyjątkowych usług. Kliknij tutaj, aby umówić wizytę i cieszyć się profesjonalną obsługą bez czekania."
      />
    </>
  );
};

export default KontaktPage;
