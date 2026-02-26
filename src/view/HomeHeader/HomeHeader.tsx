import Image from 'next/image';
import Link from 'next/link';

import LocationItem from '@/components/LocationItem/LocationItem';
import HeaderImageDesktop from '@/images/general/index/header.png';

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
  return (
    <div className={styles.container}>
      <Image
        priority
        className={styles.image}
        src={HeaderImageDesktop}
        alt="Samochód marki Jeep podczas ustawiania zbieznosci kol w naszej stacji kontroli pojazdow w swietochlowicach"
        sizes="100vw"
        quality={85}
      />

      <h1 className={styles.heading}>
        Warsztat i serwis samochodowy na Śląsku
      </h1>
      <div className={styles.location__serviceAreaHero}>
        <p className={styles.location__serviceAreaText}>
          Obsługujemy także klientów z Katowic i całego Śląska.
        </p>
        <div className={styles.location__serviceAreaLinks}>
          <Link
            className={styles.location__serviceAreaLink}
            href="/slask#katowice-dojazd"
          >
            Dojazd z Katowic
          </Link>
          <span className={styles.location__serviceAreaSeparator}>•</span>
          <Link className={styles.location__serviceAreaLink} href="/slask">
            Obszar działania na Śląsku
          </Link>
        </div>
      </div>

      <div className={styles.location__container}>
        <p className={styles.location__text}>Wybierz lokalizację stacjonarną</p>
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
