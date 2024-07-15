'use client';

import Link from 'next/link';

import { useMenu } from '@/providers/menuProvider';

import styles from './MobileMenuLocations.module.scss';

const MobileMenuLocations = () => {
  const { isMenuLocationOpen, toggleMenuLocation, toggleMenu } = useMenu();

  const handleClick = () => {
    toggleMenuLocation();
    toggleMenu();
  };

  return (
    <div
      className={
        isMenuLocationOpen
          ? `${styles.menu} ${styles.menu__open}`
          : `${styles.menu}`
      }
    >
      <p className={styles.menu__title}>Miasta</p>
      <nav className={styles.menu__nav}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link onClick={handleClick} href="/swietochlowice">
              Świętochłowice
            </Link>
          </li>

          <li className={styles.menu__item}>
            <Link onClick={handleClick} href="/godula">
              Ruda Śląska, Godula
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link onClick={handleClick} href="/bykowina">
              Ruda Śląska, Bykowina
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenuLocations;
