'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import LocationPin from '@/../public/assets/icons/redLocationPin.svg';
import Logo from '@/../public/assets/images/general/bosch-logo.png';
import Hamburger from '@/components/Hamburger/Hamburger';
import PhoneIcon from '@/components/PhoneIcon/PhoneIcon';

import styles from './Nav.module.scss';

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = (isOpen: boolean) => {
    setShowDropdown(isOpen);
  };

  return (
    <nav
      onMouseLeave={() => handleDropdownToggle(false)}
      className={styles.nav}
    >
      <div className={styles.nav__wrapper}>
        <Image
          src={Logo}
          alt="logo"
          width={400}
          height={400}
          className={styles.nav__logo}
        />

        <div className={styles.nav__buttonsMobile}>
          <Link
            href="tel:+48500234333"
            aria-label="Zadzwoń do nas"
            title="Zadzwoń do nas"
            className={styles.nav__buttonCall}
          >
            <PhoneIcon color={'red'} />
            <p className={styles.nav__buttonText}>Zadzwoń</p>
          </Link>

          <div className={styles.nav__buttonBar}>
            <Hamburger />
          </div>
        </div>

        <ul className={styles.nav__navDesktop}>
          <li className={styles.nav__listItem}>
            <Link href="/#o-nas" className={styles.nav__link}>
              O nas
            </Link>
          </li>
          <li
            onMouseEnter={() => handleDropdownToggle(true)}
            onMouseLeave={() => handleDropdownToggle(false)}
            className={styles.nav__listItem}
          >
            <Link href="/#miasta" className={styles.nav__link}>
              Miasta
            </Link>
            {showDropdown && (
              <ul className={styles.dropdown}>
                {[
                  {
                    city: 'Świętochłowice',
                    address: 'ul. Katowicka 73, 41-600 Świętochłowice',
                  },
                  {
                    city: 'Ruda Śląska',
                    district: 'Godula',
                    address: 'ul. Szpaków 51, 41-705 Ruda Śląska',
                  },
                  {
                    city: 'Ruda Śląska',
                    district: 'Bykowina',
                    address: 'ul. Szpaków 51, 41-705 Ruda Śląska',
                  },
                ].map(({ city, district, address }) => (
                  <li key={city + address} className={styles.dropdownItem}>
                    <div className={styles.dropdownItemIcon}>
                      <div className={styles.dropdownItemIconWrapper}>
                        <Image src={LocationPin} alt="Pin" />
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
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className={styles.nav__listItem}>
            <Link href="/#uslugi" className={styles.nav__link}>
              Usługi
            </Link>
          </li>
          <li className={styles.nav__listItem}>
            <Link href="/#kontakt" className={styles.nav__link}>
              Kontakt
            </Link>
          </li>
        </ul>

        <div className={styles.nav__buttonsDesktop}>
          <div className={styles.nav__buttonCall}>
            <PhoneIcon color={'red'} />
            <p className={styles.nav__buttonNumber}>+48 500 234 333</p>
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
