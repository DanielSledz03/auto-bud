'use client';
import Link from 'next/link';

import PhoneIcon from '@/components/PhoneIcon/PhoneIcon';
import { useMenu } from '@/providers/menuProvider';

import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const { isMenuOpen, toggleMenu, toggleMenuLocation } = useMenu();

  return (
    <div
      className={
        isMenuOpen ? `${styles.menu} ${styles.menu__open}` : `${styles.menu}`
      }
    >
      <nav className={styles.menu__nav}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link onClick={toggleMenu} href="/o-nas">
              O nas
            </Link>
          </li>
          <li className={styles.menu__item}>
            <p onClick={toggleMenuLocation}>Miasta</p>
          </li>
          <li className={styles.menu__item}>
            <Link onClick={toggleMenu} href="/uslugi">
              Usługi
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link onClick={toggleMenu} href="/kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.menu__buttons}>
        <Link
          href="tel:+48500234333"
          aria-label="Zadzwoń do nas"
          title="Zadzwoń do nas"
          className={styles.menu__buttonCall}
        >
          <PhoneIcon color={'red'} width={24} height={24} />
          <p className={styles.menu__buttonCall__text}>+48 500 234 333</p>
        </Link>

        <div className={styles.menu__appointmentButton}>
          <p>Umów wizytę</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
