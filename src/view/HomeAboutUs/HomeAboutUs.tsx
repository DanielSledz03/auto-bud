import Image from 'next/image';
import Link from 'next/link';

import { WhiteButton } from '@/components';
import BackgroundImage from '@/images/general/index/aboutUsBackground.png';
import AboutUsImages from '@/images/general/index/aboutUsImages.png';
import AboutUsImagesDesktop from '@/images/general/index/aboutusdesktop.png';

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
        <div className={styles.aboutUs__topRow}>
          <div className={styles.aboutUs__textWrapper}>
            <h2 className={styles.aboutUs__title}>O nas</h2>

            <hr className={styles.aboutUs__line} />

            <p className={styles.aboutUs__textBold}>
              Grupa AUTO-BUD to kompleks obiektów motoryzacyjnych mieszczących
              się w Rudzie Śląskiej i Świętochłowicach.
            </p>

            <p className={styles.aboutUs__text}>
              Działamy od 2006 roku i prowadzimy obiekty w trzech lokalizacjach:
              Ruda Śląska (Godula i Bykowina) oraz Świętochłowice, gdzie
              znajduje się autoryzowany serwis Bosch Car Service.
            </p>

            <p className={styles.aboutUs__text}>
              W Świętochłowicach zapewniamy 12 stanowisk serwisowych, stację
              diagnostyczną i Biuro Obsługi Klienta. Na miejscu możesz wygodnie
              poczekać na auto i skorzystać z bezpłatnego Wi‑Fi.
            </p>
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

        <div className={styles.aboutUs__bottomRow}>
          <p className={styles.aboutUs__text}>
            Jako Bosch Car Service oferujemy przeglądy techniczne, naprawy
            samochodów, wymianę oleju i klocków hamulcowych, wulkanizację oraz
            myjnię bezdotykową. Pracujemy na nowoczesnym sprzęcie
            diagnostycznym, a nasz zespół ma wieloletnie doświadczenie.
          </p>

          <p className={`${styles.aboutUs__text} ${styles.aboutUs__textLast}`}>
            Szukasz fraz typu{' '}
            <Link href="/swietochlowice" className="font-medium text-red">
              warsztat samochodowy Świętochłowice
            </Link>{' '}
            albo{' '}
            <Link
              href="/slask#katowice-dojazd"
              className="font-medium text-red"
            >
              warsztat samochodowy Katowice
            </Link>
            ? Sprawdź nasze dedykowane strony lokalne i{' '}
            <Link href="/slask" className="font-medium text-red">
              obszar działania na Śląsku
            </Link>
            .
          </p>
        </div>

        <div className={styles.aboutUs__buttonWrapper}>
          <WhiteButton
            title="Czytaj więcej"
            href="/o-nas"
            buttonStyles={styles.aboutUs__button}
          />
        </div>
      </div>
    </div>
  );
};
