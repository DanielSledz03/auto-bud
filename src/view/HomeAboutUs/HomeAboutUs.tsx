import Image from 'next/image';

import { WhiteButton } from '@/components';
import BackgroundImage from '@/images/general/index/aboutUsBackground.png';
import AboutUsImages from '@/images/general/index/aboutUsImages.png';
import AboutUsImagesDesktop from '@/images/general/index/aboutUsImagesDesktop.png';

import styles from './HomeAboutUs.module.scss';

export const HomeAboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <Image
        className={styles.aboutUs__background}
        src={BackgroundImage}
        alt="Subtelne graficzne tło z poziomymi liniami"
      />

      <div className={styles.aboutUs__content}>
        <div className={styles.aboutUs__text__wrapper}>
          <h2 className={styles.aboutUs__title}>O nas</h2>

          <hr className={styles.aboutUs__line} />

          <p className={styles.aboutUs__text__bold}>
            Grupa AUTO-BUD to kompleks obiektów motoryzacyjnych mieszczących się
            w Rudzie Śląskiej i Świętochłowicach.
          </p>

          <p className={styles.aboutUs__text}>
            Nasza firma działa na rynku od 2006 roku i obecnie posiadamy obiekty
            w trzech różnych lokalizacjach. W naszej ofercie znajdziesz stacje
            diagnostyczne w Rudzie Śląskiej - Goduli oraz Bykowinie, a także
            autoryzowany serwis Bosch Car Service w Świętochłowicach.
            <br />
            <br /> W Świętochłowicach mamy dwanaście bogato wyposażonych
            stanowisk, stację diagnostyczną oraz Biuro Obsługi Klienta, gdzie
            zawsze możesz liczyć na pomoc naszych pracowników oraz napić się
            kawy, oczekując na swoje auto. Dostępny jest również dostęp do
            bezpłatnej sieci Wi-Fi.
            <br />
            <br /> Jako autoryzowany serwis Bosch Car Service w Świętochłowicach
            oferujemy kompleksowe usługi motoryzacyjne: przeglądy techniczne,
            naprawy samochodów, wymiana oleju, wymiana klocków hamulcowych,
            wulkanizacja oraz myjnia bezdotykowa. Nasze stacje kontroli pojazdów
            są wyposażone w najnowocześniejszy sprzęt diagnostyczny, a nasi
            mechanicy posiadają wieloletnie doświadczenie w branży
            motoryzacyjnej.
          </p>

          <WhiteButton title="Czytaj więcej" href="/o-nas" />
        </div>

        <div className={styles.aboutUs__images}>
          <Image
            src={AboutUsImages}
            className={styles.aboutUs__images__image}
            alt="Okręgowa Stacja Diagnostyczna oraz Myjnia Samochodowa"
            loading="lazy"
          />

          <Image
            src={AboutUsImagesDesktop}
            className={styles.aboutUs__images__image__desktop}
            alt="Okręgowa Stacja Diagnostyczna oraz Myjnia Samochodowa"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
