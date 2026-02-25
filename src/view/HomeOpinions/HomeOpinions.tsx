'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './HomeOpinions.module.scss';

const reviews = [
  {
    name: 'Daniel',
    source: 'Google',
    review:
      'Serwis godny polecenia! Serwisuję tutaj samochód już od 4 lat i jestem bardzo zadowolony. Obsługa na wysokim poziomie, zawsze pomocna. Warsztat jest bardzo dobrze wyposażony, a montowane części są tylko wysokiej jakości. Pozdrawiam.',
  },
  {
    name: 'Seweryn',
    source: 'Google',
    review:
      'Wszystko w jak najlepszym porządku. Szybka, miła, a przede wszystkim profesjonalna obsługa klienta. Bardzo pozytywne doświadczenie! Mój samochód został naprawiony szybko i bezproblemowo. Mechanicy są bardzo pomocni i znają się na rzeczy. Polecam ten warsztat każdemu, kto szuka rzetelnej obsługi.',
  },
  {
    name: 'Sebastian',
    source: 'Google',
    review:
      'Serwisuję tutaj niejeden samochód już od wielu lat i za każdym razem jestem zadowolony. Montowane części zamienne są zawsze dobrej jakości i w przyzwoitej cenie. Podobnie z ceną usług - są współmierne do nakładu pracy, jaki trzeba wykonać. Czas realizacji naprawy jest szybki, chyba że pojawiają się jakieś komplikacje. Polecam!',
  },
];

export const HomeOpinions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const longestReview = reviews.reduce((longest, current) =>
    current.review.length > longest.review.length ? current : longest,
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPrev = () => {
    setActiveIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviews[activeIndex];

  return (
    <section className={styles['home-opinions']}>
      <div className={styles['home-opinions__grid']}>
        <div className={styles['home-opinions__content']}>
          <p className={styles['home-opinions__label']}>Opinie</p>
          <h2 className={styles['home-opinions__title']}>
            Kierowcy wracają do nas po jakość i spokój
          </h2>
          <hr className={styles['home-opinions__divider']} />
          <p className={styles['home-opinions__description']}>
            Autentyczne opinie są dla nas najlepszą rekomendacją. Sprawdź
            recenzje i podziel się własną.
          </p>

          <div className={styles['home-opinions__actions']}>
            <Link
              href="https://www.google.com/search?q=Auto-Bud+Bosch+Car+Service+opinie"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['home-opinions__button']}
            >
              Opinie Google
            </Link>
            <Link
              href="https://www.facebook.com/search/top?q=Auto-Bud%20Bosch%20Car%20Service"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['home-opinions__button']}
            >
              Opinie Facebook
            </Link>
          </div>
        </div>

        <article className={styles['review-card']} aria-live="polite">
          <div className={styles['review-card__top']}>
            <span className={styles['review-card__quote']} aria-hidden="true">
              &#8223;
            </span>

            <div className={styles['review-card__controls']}>
              <button
                type="button"
                onClick={goToPrev}
                className={styles['review-card__arrow']}
                aria-label="Poprzednia opinia"
              >
                &#8249;
              </button>
              <button
                type="button"
                onClick={goToNext}
                className={styles['review-card__arrow']}
                aria-label="Następna opinia"
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className={styles['review-card__textWrap']}>
            <blockquote
              className={`${styles['review-card__text']} ${styles['review-card__text--ghost']}`}
              aria-hidden="true"
            >
              &bdquo;{longestReview.review}&rdquo;
            </blockquote>
            <blockquote
              key={`${activeReview.name}-${activeIndex}`}
              className={`${styles['review-card__text']} ${styles['review-card__text--active']}`}
            >
              &bdquo;{activeReview.review}&rdquo;
            </blockquote>
          </div>

          <p className={styles['review-card__author']}>
            <span>{activeReview.name}</span>
            <span aria-hidden="true">&#8226;</span>
            <span>{activeReview.source}</span>
          </p>

          <div className={styles['review-card__dots']}>
            {reviews.map((review, index) => (
              <button
                key={`${review.name}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Pokaż opinię ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={
                  activeIndex === index
                    ? `${styles['review-card__dot']} ${styles['review-card__dot--active']}`
                    : styles['review-card__dot']
                }
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
