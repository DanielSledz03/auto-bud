'use client';

import Image from 'next/image';
import Link from 'next/link';

import ArrowRed from '@/icons/redArrowDown.svg';
import { useMenu } from '@/providers/menuProvider';

import styles from './MobileMenuLocations.module.scss';

const MobileMenuLocations = () => {
  const { isMenuLocationOpen, closeMenuLocation, closeMenu } = useMenu();

  const handleLocationClick = () => {
    closeMenu();
  };

  return (
    <div
      className={
        isMenuLocationOpen
          ? `${styles.menu} ${styles.menu__open}`
          : `${styles.menu}`
      }
    >
      <div className={styles.menu__header}>
        <button
          type="button"
          onClick={closeMenuLocation}
          className={styles.menu__back}
          aria-label="Powrót do głównego menu"
        >
          <Image
            src={ArrowRed}
            alt=""
            aria-hidden="true"
            className={styles.menu__backIcon}
          />
        </button>
        <p className={styles.menu__title}>Miasta</p>
      </div>
      <nav className={styles.menu__nav}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link onClick={handleLocationClick} href="/swietochlowice">
              Świętochłowice
            </Link>
          </li>

          <li className={styles.menu__item}>
            <Link onClick={handleLocationClick} href="/godula">
              Ruda Śląska, Godula
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link onClick={handleLocationClick} href="/bykowina">
              Ruda Śląska, Bykowina
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link onClick={handleLocationClick} href="/slask">
              Śląsk
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenuLocations;
