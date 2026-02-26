import Link from 'next/link';

import { serviceAreaCities } from '@/data/businessLocations';

import styles from './ServiceArea.module.scss';

const cityLinks: Record<string, string> = {
  Katowice: '/slask#katowice',
  Świętochłowice: '/swietochlowice',
  'Ruda Śląska': '/godula',
  Chorzów: '/slask#chorzow',
  'Siemianowice Śląskie': '/slask#siemianowice-slaskie',
  Bytom: '/slask#bytom',
  Zabrze: '/slask#zabrze',
  Mikołów: '/slask#mikolow',
  Mysłowice: '/slask#myslowice',
  Tychy: '/slask#tychy',
};

const serviceLinks = [
  {
    href: '/uslugi/diagnostyka-komputerowa',
    label: 'Diagnostyka komputerowa',
  },
  {
    href: '/uslugi/serwis-klimatyzacji',
    label: 'Serwis klimatyzacji',
  },
  {
    href: '/uslugi/wymiana-oleju',
    label: 'Wymiana oleju i filtrów',
  },
  {
    href: '/uslugi/serwis-hamulcow',
    label: 'Serwis hamulców',
  },
  {
    href: '/uslugi/przeglad-techniczny',
    label: 'Przegląd techniczny',
  },
];

const localLandingLinks = [
  {
    href: '/mechanik-swietochlowice',
    label: 'Mechanik Świętochłowice',
  },
  {
    href: '/stacja-diagnostyczna-ruda-slaska',
    label: 'Stacja diagnostyczna Ruda Śląska',
  },
];

const firstRowServiceLinks = serviceLinks.slice(0, 3);
const secondRowServiceLinks = serviceLinks.slice(3);

export const ServiceArea = () => {
  return (
    <section className={styles.serviceArea}>
      <p className={styles.serviceArea__title}>Obsługiwane miasta</p>
      <h2 className={styles.serviceArea__subtitle}>
        Serwis samochodowy na Śląsku
      </h2>
      <hr className={styles.serviceArea__divider} />

      <p className={styles.serviceArea__description}>
        Obsługujemy kierowców z całej aglomeracji śląskiej. Najczęściej
        przyjeżdżają do nas klienci z Katowic, Chorzowa, Siemianowic Śląskich,
        Bytomia i Zabrza.
      </p>

      <div className={styles.serviceArea__quickLinks}>
        {localLandingLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.serviceArea__cityLink}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className={styles.serviceArea__cityList}>
        {serviceAreaCities.map(city => (
          <Link
            key={city}
            href={cityLinks[city] ?? '/slask'}
            className={`${styles.serviceArea__cityLink} ${styles['serviceArea__cityLink--city']}`}
          >
            {city}
          </Link>
        ))}
      </div>

      <div className={styles.serviceArea__servicesBox}>
        <h3 className={styles.serviceArea__servicesTitle}>
          Najczęściej wybierane usługi
        </h3>
        <div
          className={`${styles.serviceArea__servicesList} ${styles['serviceArea__servicesList--three']}`}
        >
          {firstRowServiceLinks.map(service => (
            <Link
              key={service.href}
              href={service.href}
              className={styles.serviceArea__serviceLink}
            >
              {service.label}
            </Link>
          ))}
        </div>
        <div
          className={`${styles.serviceArea__servicesList} ${styles['serviceArea__servicesList--two']}`}
        >
          {secondRowServiceLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.serviceArea__serviceLink}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
