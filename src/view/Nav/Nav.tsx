'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import LocationPin from '@/../public/assets/icons/redLocationPin.svg';
import Logo from '@/../public/assets/images/general/bosch-logo.png';
import Hamburger from '@/components/Hamburger/Hamburger';
import PhoneIcon from '@/components/PhoneIcon/PhoneIcon';
import { useMenu } from '@/providers/menuProvider';

import styles from './Nav.module.scss';

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = (isOpen: boolean) => {
    setShowDropdown(isOpen);
  };

  const { toggleMenu } = useMenu();

  return (
    <nav
      onMouseLeave={() => handleDropdownToggle(false)}
      className={styles.nav}
    >
      <div className={styles.nav__wrapper}>
        <Link href="/" className={styles.nav__logoLink}>
          <Image
            src={Logo}
            alt="Logo Bosch Car Service"
            width={400}
            height={400}
            className={styles.nav__logo}
          />
        </Link>

        <div className={styles.nav__buttonsMobile}>
          <Link
            href="tel:+48502567630"
            aria-label="Zadzwoń do nas"
            title="Zadzwoń do nas"
            className={styles.nav__buttonCall}
          >
            <PhoneIcon color={'red'} />
            <p className={styles.nav__buttonText}>Zadzwoń</p>
          </Link>

          <div
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            role="button"
            tabIndex={0}
            className={styles.nav__buttonBar}
          >
            <Hamburger />
          </div>
        </div>

        <ul className={styles.nav__navDesktop}>
          <li className={styles.nav__listItem}>
            <Link href="/o-nas" className={styles.nav__link}>
              O nas
            </Link>
          </li>
          <li
            onMouseEnter={() => handleDropdownToggle(true)}
            onMouseLeave={() => handleDropdownToggle(false)}
            className={styles.nav__listItem}
          >
            <Link href="" className={styles.nav__link}>
              Miasta
            </Link>
            {showDropdown && (
              <ul className={styles.dropdown}>
                {[
                  {
                    city: 'Świętochłowice',
                    address: 'ul. Katowicka 73, 41-600 Świętochłowice',
                    url: '/swietochlowice',
                  },
                  {
                    city: 'Ruda Śląska',
                    district: 'Godula',
                    address: 'ul. Szpaków 51, 41-705 Ruda Śląska',
                    url: '/godula',
                  },
                  {
                    city: 'Ruda Śląska',
                    district: 'Bykowina',
                    address: 'ul. Szpaków 51, 41-705 Ruda Śląska',
                    url: '/bykowina',
                  },
                ].map(({ city, district, address, url }) => (
                  <li key={city + address} className={styles.dropdownItem}>
                    <Link href={url} className={styles.dropdownItemLink}>
                      <div className={styles.dropdownItemIcon}>
                        <div className={styles.dropdownItemIconWrapper}>
                          <Image
                            src={LocationPin}
                            alt="Ikona lokalizacji"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div>
                        <span className={styles.dropdownItemCity}>{city}</span>
                        {district && (
                          <span className={styles.dropdownItemDistrict}>
                            {district}
                          </span>
                        )}
                        <span className={styles.dropdownItemAddress}>
                          {address}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className={styles.nav__listItem}>
            <Link href="/uslugi" className={styles.nav__link}>
              Usługi
            </Link>
          </li>
          <li className={styles.nav__listItem}>
            <Link href="/kontakt" className={styles.nav__link}>
              Kontakt
            </Link>
          </li>
        </ul>

        <div className={styles.nav__buttonsDesktop}>
          <div className={styles.nav__buttonCall}>
            <PhoneIcon color={'red'} />
            <p className={styles.nav__buttonNumber}>+48 502 567 630</p>
          </div>

          <div className={styles.nav__appointmentButton}>
            <p>Umów wizytę</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
