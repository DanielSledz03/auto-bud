'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import LocationItem from '@/components/LocationItem/LocationItem';
import HeaderImageDesktop from '@/images/general/index/headerIndexPageDesktop.png';
import HeaderImageMobile from '@/images/general/index/headerIndexPageMobile.png';

import styles from './HomeHeader.module.scss';

const locations = [
  {
    heading: 'Świętochłowice',
    heading2: 'Centrum',
    details: ['Stacja Kontroli Pojazdów', 'Warsztat Samochodowy'],
    url: '/swietochlowice',
  },
  {
    heading: 'Ruda Śląska',
    heading2: 'Godula',
    details: ['Okręgowa Stacja Kontroli Pojazdów', 'Myjnia bezdotykowa'],
    url: '/godula',
  },
  {
    heading: 'Ruda Śląska',
    heading2: 'Bykowina',
    details: ['Stacja Kontroli Pojazdów'],
    url: '/bykowina',
  },
];

export const HomeHeader = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <Image
        priority
        className={isDesktop ? styles.imageDesktop : styles.image}
        src={isDesktop ? HeaderImageDesktop : HeaderImageMobile}
        alt="Mechanik w niebieskim kombinezonie pracuje nad silnikiem samochodu w nowoczesnym warsztacie"
        sizes="100vw"
        quality={85}
        loading="eager"
      />

      <h1 className={styles.heading}>
        Autoryzowany serwis Bosch Car Service
        <br /> w Świętochłowicach
      </h1>

      <div className={styles.location__container}>
        <p className={styles.location__text}>Wybierz lokalizację</p>
        <div className={styles.location__wrapper}>
          {locations.map((location, index) => (
            <LocationItem
              key={index}
              heading={location.heading}
              heading2={location.heading2}
              details={location.details}
              url={location.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
