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
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolled(true);
  //       console.log('Scrolled: true');
  //     } else {
  //       setScrolled(false);
  //       console.log('Scrolled: false');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}
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
          <div className={styles.nav__buttonCall}>
            <PhoneIcon
              color={
                scrolled ? 'white' : window.innerHeight > 1024 ? 'black' : 'red'
              }
            />

            <p className={styles.nav__buttonText}>Zadzwoń</p>
          </div>

          <div className={styles.nav__buttonBar}>
            <Hamburger />
          </div>
        </div>
        <ul className={styles.nav__navDesktop}>
          <li onMouseEnter={handleMouseLeave} className={styles.nav__listItem}>
            <Link href="/#o-nas" className={styles.nav__link}>
              O nas
            </Link>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.nav__listItem}
          >
            <Link href="/#miasta" className={styles.nav__link}>
              Miasta
            </Link>
            {showDropdown && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <div className={styles.dropdownItemIconWrapper}>
                      <Image src={LocationPin} alt="Pin" />
                    </div>
                  </div>

                  <div>
                    <span className={styles.dropdownItemCity}>
                      Świętochłowice
                    </span>
                    <span className={styles.dropdownItemaAddress}>
                      ul. Katowicka 73, 41-600 Świętochłowice
                    </span>
                  </div>
                </li>
                <li className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <div className={styles.dropdownItemIconWrapper}>
                      <Image src={LocationPin} alt="Pin" />
                    </div>
                  </div>
                  <div>
                    <span className={styles.dropdownItemCity}>Ruda Śląska</span>
                    <span className={styles.dropdownItemDistrict}>Godula</span>
                    <span className={styles.dropdownItemaAddress}>
                      ul. Szpaków 51, 41-705 Ruda Śląska
                    </span>
                  </div>
                </li>
                <li className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <div className={styles.dropdownItemIconWrapper}>
                      <Image src={LocationPin} alt="Pin" />
                    </div>
                  </div>
                  <div>
                    <span className={styles.dropdownItemCity}>Ruda Śląska</span>
                    <span className={styles.dropdownItemDistrict}>
                      Bykowina
                    </span>
                    <span className={styles.dropdownItemaAddress}>
                      ul. Szpaków 51, 41-705 Ruda Śląska
                    </span>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li onMouseEnter={handleMouseLeave} className={styles.nav__listItem}>
            <Link href="/#uslugi" className={styles.nav__link}>
              Usługi
            </Link>
          </li>
          <li onMouseEnter={handleMouseLeave} className={styles.nav__listItem}>
            <Link href="/#kontakt" className={styles.nav__link}>
              Kontakt
            </Link>
          </li>
        </ul>

        <div className={styles.nav__buttonsDesktop}>
          <div className={styles.nav__buttonCall}>
            <PhoneIcon
              color={
                scrolled ? 'white' : window.innerHeight > 1024 ? 'black' : 'red'
              }
            />

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
