'use client';

import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';

import OpinionsBackgroundDesktopImage from '@/images/general/index/opinionsBackgroundDesktop.png';
import OpinionsBackgroundImage from '@/images/general/index/opinionsBackgroundMobile.png';

import styles from './HomeOpinions.module.scss';

const reviews = [
  {
    name: 'Adam',
    rating: 5,
    review:
      'Stacja diagnostyczna Omega to profesjonalne miejsce z miłą obsługą. Szybka diagnoza i solidne naprawy w przystępnych cenach. Polecam każdemu kierowcy.',
    department: 'Okręgowa Stacja Kontroli Pojazdów',
  },
  {
    name: 'Monika',
    rating: 5,
    review:
      'Lambda to najlepszy warsztat, z jakim miałem do czynienia. Fachowa diagnoza, ekspresowe naprawy i konkurencyjne ceny. Zawsze wracam zadowolony.',
    department: 'Warsztat samochodowy',
  },
  {
    name: 'Marek',
    rating: 5,
    review:
      'Firma Auto-Bud jest naprawdę godna polecenia. Fachowa obsługa, terminowe naprawy i uczciwe ceny. Zawsze wracam zadowolony.',
    department: 'Warsztat samochodowy',
  },
];

export const HomeOpinions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const opinionsRef = useRef<HTMLDivElement>(null);
  const reviewRefs = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    if (reviewRefs.current[activeIndex] && opinionsRef.current) {
      opinionsRef.current.scrollTo({
        left: reviewRefs!.current[activeIndex]!.clientWidth * activeIndex,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles['home-opinions']}>
      <div className={styles['home-opinions__background']}>
        <Image
          className={styles['home-opinions__background-mobile']}
          src={OpinionsBackgroundImage}
          alt="Opinie klientów"
        />
        <Image
          className={styles['home-opinions__background-desktop']}
          src={OpinionsBackgroundDesktopImage}
          alt="Opinie klientów"
        />
      </div>
      <h2 className={styles['home-opinions__title']}>Opinie klientów</h2>
      <p className={styles['home-opinions__subtitle']}>
        Co klienci mówią o nas?
      </p>
      <hr className={styles['home-opinions__divider']} />
      <div className={styles['opinions']} ref={opinionsRef}>
        {reviews.map((review, index) => (
          <div key={index} className={styles['opinions__item']}>
            <div className={styles['opinions__rating-container']}>
              <p className={styles['opinions__name']}>{review.name}</p>
              <div className={styles['opinions__rating']}>
                {[0, 1, 2, 3, 4].map(star => (
                  <span key={star} className={styles['opinions__rating-star']}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className={styles['opinions__department-container']}>
              <p className={styles['opinions__department']}>
                Opinia dotycząca:
              </p>
              <p className={styles['opinions__department-bold']}>
                {review.department}
              </p>
            </div>
            <h5 className={styles['opinions__review']}>{review.review}</h5>
          </div>
        ))}
      </div>
      {/* <div className={styles['opinions__pagination']}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`${styles['opinions__pagination-dot']} ${index === activeIndex ? styles['active-dot'] : ''}`}
            onClick={() => handleDotClick(index)}
            onKeyDown={() => handleDotClick(index)}
            role="button"
            tabIndex={index}
          ></div>
        ))}
      </div> */}
    </div>
  );
};
