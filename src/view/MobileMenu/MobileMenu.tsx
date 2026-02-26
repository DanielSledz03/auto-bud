'use client';
import Link from 'next/link';

import PhoneIcon from '@/components/PhoneIcon/PhoneIcon';
import { useMenu } from '@/providers/menuProvider';

import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const { isMenuOpen, openMenuLocation, closeMenu } = useMenu();

  return (
    <div
      className={
        isMenuOpen ? `${styles.menu} ${styles.menu__open}` : `${styles.menu}`
      }
    >
      <nav className={styles.menu__nav}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link onClick={closeMenu} href="/o-nas">
              O nas
            </Link>
          </li>
          <li className={styles.menu__item}>
            <div
              onClick={openMenuLocation}
              onKeyDown={openMenuLocation}
              role="button"
              tabIndex={0}
              aria-label="Miasta"
              title="Miasta"
            >
              Miasta
            </div>
          </li>
          <li className={styles.menu__item}>
            <Link onClick={closeMenu} href="/uslugi">
              Usługi
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link onClick={closeMenu} href="/kontakt">
              Kontakt
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link onClick={closeMenu} href="/wizyta">
              Umów wizytę
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.menu__buttons}>
        <Link
          href="tel:+48502567630"
          aria-label="Zadzwoń do nas"
          title="Zadzwoń do nas"
          className={styles.menu__buttonCall}
        >
          <PhoneIcon color={'red'} width={24} height={24} />
          <p className={styles.menu__buttonCall__text}>+48 502 567 630</p>
        </Link>

        <Link
          onClick={closeMenu}
          href="/wizyta"
          className={styles.menu__appointmentButton}
        >
          <p>Umów wizytę</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
