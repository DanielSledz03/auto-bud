import Image from 'next/image';

import CarWash from '@/../public/assets/images/general/index/aboutCarWash.png';
import StationImage from '@/../public/assets/images/general/index/aboutStation.png';
import BackgroundImage from '@/../public/assets/images/general/index/aboutUsBackground.png';
import WhiteButton from '@/components/WhiteButton/WhiteButton';

import styles from './HomeAboutUs.module.scss';

const HomeAboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <Image
        className={styles.aboutUs__background}
        src={BackgroundImage}
        alt="Zdjęcie tła"
      />

      <div className={styles.aboutUs__content}>
        <h3 className={styles.aboutUs__title}>O nas</h3>

        <hr className={styles.aboutUs__line} />

        <p className={styles.aboutUs__text__bold}>
          Grupa AUTO-BUD to kompleks obiektów motoryzacyjnych mieszczących się w
          Rudzie Śląskiej i Świętochłowicach.
        </p>

        <p className={styles.aboutUs__text}>
          Jako pierwsza powstała okręgowa Stacja Kontroli Pojazdów Omega, która
          już od 8 lat sprawdza sprawność techniczną rudzkich pojazdów. W
          późniejszych latach obiekt na Goduli rozwinął się o stację LPG oraz
          mały warsztat samochodowy specjalizujący się w zakładaniu i
          serwisowaniu instalacji LPG.
        </p>

        <WhiteButton title="Czytaj więcej" />

        <div className={styles.aboutUs__images}>
          <div className={styles.aboutUs__image__wrapper}>
            <p className={`${styles.aboutUs__image__title}`}>
              Okręgowa Stacja Kontroli Pojazdów
            </p>
            <Image
              className={styles.aboutUs__image}
              src={StationImage}
              alt="Stacja Diagnostyczna Świętochłowice"
            />
          </div>
          <div className={styles.aboutUs__image__wrapper}>
            <p className={styles.aboutUs__image__title__second}>
              Myjnia Bezdotykowa
            </p>
            <Image
              className={styles.aboutUs__image__second}
              src={CarWash}
              alt="Myjnia samochodowa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
