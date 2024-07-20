import Image from 'next/image';
import Link from 'next/link';

import BoschLogo from '@/../public/assets/images/general/bosch-logo.png';
import LocationList from '@/components/LocationListFooter/LocationListFooter';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div>
        <Image
          src={BoschLogo}
          alt="Logo Bosch Car Sevice"
          width={64}
          height={64}
        />
        <h4 className={styles['footer__title']}>Autoryzowany Serwis Bosch</h4>

        <nav className={styles['footer__nav']}>
          <ul className={styles['footer__nav__list']}>
            <li>
              <Link href="/">Strona Główna</Link>
            </li>
            <li>
              <Link href="/o-nas">O nas</Link>
            </li>
            <li>
              <Link href="/swietochlowice">Świętochłowice</Link>
            </li>
            <li>
              <Link href="/godula">Ruda Śląska - Godula</Link>
            </li>
            <li>
              <Link href="/bykowina">Ruda Śląska - Bykowina</Link>
            </li>
            <li>
              <Link href="/uslugi">Usługi</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
            <li>
              <Link href="/wizyta">Umów wizytę</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr className={styles['footer__hr']} />

      <LocationList />

      <hr className={styles['footer__hr--second']} />

      <div className={styles['footer__creators']}>
        <p className={styles['footer__creators__copyright']}>
          Copyright © AutoBud - Centrum Motoryzacyjne 2024
        </p>
        <div className={styles['footer__creators__authors']}>
          <p className={styles['footer__creators__link']}>
            Projekt graficzny:{' '}
            <Link
              className={styles['footer__creators__link--underline']}
              href={'https://www.drawninstars.art/'}
              target="_blank"
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
            >
              Daniel Śledź
            </Link>
          </p>{' '}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
