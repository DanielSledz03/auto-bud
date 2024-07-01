import Image from 'next/image';

import BackgroundImage from '@/../public/assets/images/general/index/aboutUsBackground.png';
import AboutUsImages from '@/../public/assets/images/general/index/aboutUsImages.png';
import AboutUsImagesDesktop from '@/../public/assets/images/general/index/aboutUsImagesDesktop.png';
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
        <div className={styles.aboutUs__text__wrapper}>
          <h3 className={styles.aboutUs__title}>O nas</h3>

          <hr className={styles.aboutUs__line} />

          <p className={styles.aboutUs__text__bold}>
            Grupa AUTO-BUD to kompleks obiektów motoryzacyjnych mieszczących się
            w Rudzie Śląskiej i Świętochłowicach.
          </p>

          <p className={styles.aboutUs__text}>
            Jako pierwsza powstała okręgowa Stacja Kontroli Pojazdów Omega,
            która już od 8 lat sprawdza sprawność techniczną rudzkich pojazdów.
            W późniejszych latach obiekt na Goduli rozwinął się o stację LPG
            oraz mały warsztat samochodowy specjalizujący się w zakładaniu i
            serwisowaniu instalacji LPG.
          </p>

          <WhiteButton title="Czytaj więcej" />
        </div>

        <div className={styles.aboutUs__images}>
          <Image
            src={AboutUsImages}
            className={styles.aboutUs__images__image}
            alt="Stacja Diagnostyczna oraz Myjnia Samochodowa"
          />

          <Image
            src={AboutUsImagesDesktop}
            className={styles.aboutUs__images__image__desktop}
            alt="Stacja Diagnostyczna oraz Myjnia Samochodowa"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
