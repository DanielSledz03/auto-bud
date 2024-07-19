import Image from 'next/image';

import AboutUsImgDesktop from '@/../public/assets/images/general/about/aboutUsDesktop.png';
import AboutUsImgMobile from '@/../public/assets/images/general/about/aboutUsMobile.png';

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs__image}>
        <Image
          className={styles.aboutUs__image__mobile}
          src={AboutUsImgMobile}
          alt="Ruda Śląska, Świętochłowice"
        />
        <Image
          className={styles.aboutUs__image__desktop}
          src={AboutUsImgDesktop}
          alt="Ruda Śląska, Świętochłowice"
        />
      </div>
      <div className={styles.aboutUs__content}>
        <h3 className={styles.aboutUs__header}>Kim jesteśmy</h3>
        <hr className={styles.aboutUs__line} />
        <h5 className={styles.aboutUs__subtitle}>
          Grupa AUTO-BUD to kompleks obiektów motoryzacyjnych mieszczących się w
          Rudzie Śląskiej i Świętochłowicach.
        </h5>

        <p className={styles.aboutUs__text}>
          Nasza firma działa na rynku od 2006 roku i obecnie posiadamy obiekty w
          trzech różnych lokalizacjach. W naszej ofercie znajdziesz stacje
          diagnostyczne w Rudzie Śląskiej - Goduli oraz Bykowinie, a także
          centrum motoryzacyjne w Świętochłowicach.
          <br />
          <br /> W Świętochłowicach mamy dwanaście bogato wyposażonych
          stanowisk, stację diagnostyczną oraz Biuro Obsługi Klienta, gdzie
          zawsze możesz liczyć na pomoc naszych pracowników oraz napić się kawy,
          oczekując na swoje auto. Dostępny jest również dostęp do bezpłatnej
          sieci Wi-Fi.
        </p>

        <p className={styles.aboutUs__text}>
          Kompleksowo naprawiamy auta wszystkich marek, na gwarancji jak i po
          niej. Od 2017 roku należymy do sieci Bosch Car Service. Autoryzacja
          potwierdza, że świadczymy profesjonalne usługi i spełniamy standardy
          najwyższej jakości. Dokładamy wszelkich starań, by auta naprawiane w
          naszym serwisie były precyzyjnie diagnozowane i naprawiane. Zapraszamy
          do skorzystania z naszych usług.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
