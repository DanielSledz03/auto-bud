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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at est
          sodales, iaculis tortor et, pharetra justo. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nulla vehicula dignissim ipsum vel venenatis. Fusce
          lobortis nibh vel nulla consequat semper.
        </p>

        <p className={styles.aboutUs__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at est
          sodales, iaculis tortor et, pharetra justo. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nulla vehicula dignissim ipsum vel venenatis. Fusce
          lobortis nibh vel nulla consequat semper.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
