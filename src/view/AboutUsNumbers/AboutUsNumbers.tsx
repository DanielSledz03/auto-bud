import Image from 'next/image';

import HeaderImgDesktop from '@/images/general/about/HeaderDesktop.png';
import HeaderImgMobile from '@/images/general/about/headerMobile.png';

import styles from './AboutUsNumbers.module.scss';

export const AboutUsNumbers = () => {
  return (
    <div className={styles['about-us-numbers']}>
      <div className={styles['about-us-numbers__header']}>
        <Image
          className={styles['about-us-numbers__header-mobile']}
          src={HeaderImgMobile}
          alt="Mechanik w ciemnym kombinezonie i żółtych rękawiczkach naprawia silnik samochodu, używając przenośnej lampy do oświetlenia wnętrza komory silnika"
        />
        <Image
          className={styles['about-us-numbers__header-desktop']}
          src={HeaderImgDesktop}
          alt="Mechanik w ciemnym kombinezonie i żółtych rękawiczkach naprawia silnik samochodu, używając przenośnej lampy do oświetlenia wnętrza komory silnika"
        />
      </div>
      <div className={styles['about-us-numbers__content']}>
        <div className={styles['about-us-numbers__item']}>
          <span className={styles['about-us-numbers__number']}>19 lat</span>
          <hr className={styles['about-us-numbers__line']} />
          <span className={styles['about-us-numbers__text']}>
            Doświadczenia w branży
          </span>
        </div>
        <div className={styles['about-us-numbers__item']}>
          <span className={styles['about-us-numbers__number']}>25000+</span>
          <hr className={styles['about-us-numbers__line']} />

          <span className={styles['about-us-numbers__text']}>
            Zadowolonych klientów rocznie
          </span>
        </div>
        <div className={styles['about-us-numbers__item']}>
          <span className={styles['about-us-numbers__number']}>20+</span>
          <hr className={styles['about-us-numbers__line']} />

          <span className={styles['about-us-numbers__text']}>
            Doskonałych pracowników
          </span>
        </div>
      </div>
    </div>
  );
};
