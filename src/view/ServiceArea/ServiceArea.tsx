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
        Bytomia i Zabrza. Możesz wybrać najbliższą lokalizację Auto-Bud albo
        sprawdzić na dedykowanej podstronie orientacyjny czas dojazdu.
      </p>

      <div className={styles.serviceArea__cityList}>
        {serviceAreaCities.map(city => (
          <Link
            key={city}
            href={cityLinks[city] ?? '/slask'}
            className={styles.serviceArea__cityLink}
          >
            {city}
          </Link>
        ))}
      </div>

      <div className={styles.serviceArea__servicesBox}>
        <h3 className={styles.serviceArea__servicesTitle}>
          Najczęściej wybierane usługi
        </h3>
        <div className={styles.serviceArea__servicesList}>
          {serviceLinks.map(service => (
            <Link
              key={service.href}
              href={service.href}
              className={styles.serviceArea__serviceLink}
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
