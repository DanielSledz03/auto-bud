import Image from 'next/image';
import Link from 'next/link';

import BoschLogo from '@/../public/assets/images/general/bosch-logo.png';
import { locations } from '@/data/locationsFooter';

import styles from './Footer.module.scss';

const pageLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/swietochlowice', label: 'Świętochłowice' },
  { href: '/godula', label: 'Ruda Śląska - Godula' },
  { href: '/bykowina', label: 'Ruda Śląska - Bykowina' },
  { href: '/mechanik-swietochlowice', label: 'Mechanik Świętochłowice' },
  {
    href: '/stacja-diagnostyczna-ruda-slaska',
    label: 'Stacja diagnostyczna Ruda Śląska',
  },
  { href: '/slask', label: 'Śląsk' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/wizyta', label: 'Umów wizytę' },
];

const serviceLinks = [
  { href: '/uslugi', label: 'Wszystkie usługi' },
  { href: '/uslugi/przeglad-techniczny', label: 'Przegląd techniczny' },
  {
    href: '/uslugi/diagnostyka-komputerowa',
    label: 'Diagnostyka komputerowa',
  },
  { href: '/uslugi/wymiana-oleju', label: 'Wymiana oleju' },
  { href: '/uslugi/serwis-hamulcow', label: 'Serwis hamulców' },
  { href: '/uslugi/serwis-klimatyzacji', label: 'Serwis klimatyzacji' },
  {
    href: '/uslugi/myjnia-ruda-slaska-godula',
    label: 'Myjnia bezdotykowa Godula',
  },
  {
    href: '/uslugi/mycie-reczne-swietochlowice',
    label: 'Mycie ręczne Świętochłowice',
  },
];

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__main']}>
        <div className={styles['footer__brand']}>
          <Image
            src={BoschLogo}
            alt="Logo Bosch Car Service"
            width={64}
            height={64}
          />
          <h3 className={styles['footer__title']}>Autoryzowany Serwis Bosch</h3>
          <p className={styles['footer__description']}>
            Auto-Bud Bosch Car Service: stacja diagnostyczna, warsztat, myjnia
            bezdotykowa i mycie ręczne.
          </p>
        </div>

        <nav className={styles['footer__section']} aria-label="Strony">
          <h4 className={styles['footer__heading']}>Strony</h4>
          <ul className={styles['footer__links']}>
            {pageLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className={styles['footer__link']}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles['footer__section']} aria-label="Usługi">
          <h4 className={styles['footer__heading']}>Usługi</h4>
          <ul className={styles['footer__links']}>
            {serviceLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className={styles['footer__link']}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className={styles['footer__locations']}>
          <h4 className={styles['footer__heading']}>Lokalizacje</h4>
          <ul className={styles['footer__locationList']}>
            {locations.map(location => (
              <li
                key={location.name}
                className={styles['footer__locationItem']}
              >
                <p className={styles['footer__locationName']}>
                  {location.name}
                </p>
                <p>{location.address}</p>
                <p>{location.zipCode}</p>
                <Link
                  href={location.linkToGoogleMaps}
                  target="_blank"
                  className={styles['footer__mapLink']}
                >
                  Zobacz na mapie
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className={styles['footer__creators']}>
        <p className={styles['footer__creators__copyright']}>
          Copyright © AutoBud - Centrum Motoryzacyjne {new Date().getFullYear()}
        </p>
        <div className={styles['footer__creators__authors']}>
          <p className={styles['footer__creators__link']}>
            Projekt graficzny:{' '}
            <Link
              className={styles['footer__creators__link--underline']}
              href={'https://www.drawninstars.art/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              DrawnInStars
            </Link>
          </p>
          <p>
            Developed by:{' '}
            <Link
              className={styles['footer__creators__link--underline']}
              href={'https://github.com/DanielSledz03'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniel Śledź
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
