'use client';

import { useState } from 'react';

import styles from './HomeFAQ.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Jakie usługi oferuje Auto-Bud?',
    answer:
      'Oferujemy kompleksowe usługi motoryzacyjne: przeglądy techniczne, naprawy samochodów, wymiana oleju, wymiana klocków hamulcowych, wulkanizacja, myjnia bezdotykowa oraz pomoc drogową. W Świętochłowicach prowadzimy autoryzowany serwis Bosch Car Service.',
  },
  {
    question: 'Gdzie znajdują się wasze serwisy?',
    answer:
      'Posiadamy trzy lokalizacje: Świętochłowice (ul. Katowicka 73) - autoryzowany serwis Bosch Car Service, Ruda Śląska - Godula (ul. Stara 1) - okręgowa stacja diagnostyczna oraz Ruda Śląska - Bykowina (ul. Szpaków 51) - stacja diagnostyczna. Wszystkie obiekty są łatwo dostępne komunikacyjnie.',
  },
  {
    question: 'Jak umówić wizytę w serwisie?',
    answer:
      'Możesz umówić wizytę telefonicznie pod numerem +48 502 567 630, przez aplikację Bosch Auto Planer (tylko dla serwisu w Świętochłowicach) lub osobiście w naszych biurach obsługi klienta. Oferujemy również możliwość rezerwacji online.',
  },
  {
    question: 'Czy oferujecie gwarancję na naprawy?',
    answer:
      'Tak, wszystkie naprawy wykonane w naszym serwisie są objęte gwarancją. W Świętochłowicach jako autoryzowany serwis Bosch Car Service oferujemy gwarancję zgodną z wymaganiami producenta.',
  },
  {
    question: 'Jakie są godziny otwarcia serwisów?',
    answer:
      'Nasz serwis w Świętochłowicach czynny jest od poniedziałku do piątku w godzinach 7:00–16:00. Stacja diagnostyczna działa w godzinach 7:00–19:00 oraz w soboty od 8:00 do 14:00. Stacje diagnostyczne w Rudzie Śląskiej są otwarte od poniedziałku do piątku w godzinach 7:00–19:00 oraz w soboty od 8:00 do 14:00. Pomoc drogowa dostępna jest 24/7.',
  },
  {
    question: 'Czy oferujecie samochody zastępcze?',
    answer:
      'Tak, oferujemy samochód zastępczu dla klientów, których auta są w naprawie. Pojazdy są w pełni ubezpieczone i sprawne technicznie.',
  },
];

export const HomeFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index],
    );
  };

  return (
    <div className={styles.faq}>
      <div className={styles.faq__header}>
        <p className={styles.faq__title}>Często zadawane pytania</p>
        <h2 className={styles.faq__subtitle}>Odpowiedzi na pytania</h2>
        <hr className={styles.faq__divider} />
      </div>

      <div className={styles.faq__list}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faq__item}>
            <button
              className={styles.faq__question}
              onClick={() => toggleItem(index)}
              aria-expanded={openItems.includes(index)}
            >
              <span>{item.question}</span>
              <span className={styles.faq__icon}>
                {openItems.includes(index) ? '−' : '+'}
              </span>
            </button>
            {openItems.includes(index) && (
              <div className={styles.faq__answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
