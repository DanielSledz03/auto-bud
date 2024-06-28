import Image from 'next/image';
import React from 'react';

import PromotionBannerImage from '@/../public/assets/images/general/index/promotionBanner.png';
import PromotionBannerImageMobile from '@/../public/assets/images/general/index/promotionBannerMobile.png';
import WhiteButton from '@/components/WhiteButton/WhiteButton';

import styles from './PromotionBanner.module.scss';

const PromotionsBanner = () => {
  return (
    <div className={styles.promotionsBanner}>
      <div className={styles.promotionsBanner__wrapper}>
        <div className={styles.promotionsBanner__image__wrapper}>
          <Image
            src={PromotionBannerImage}
            alt="Mechanik przegląda samochód od spodu"
            className={styles.promotionsBanner__image}
          />

          <Image
            src={PromotionBannerImageMobile}
            alt="Mechanik przegląda samochód od spodu"
            className={styles.promotionsBanner__image__mobile}
          />
        </div>
        <div className={styles.promotionsBanner__content}>
          <div className={styles.promotionsBanner__heading__wrapper}>
            <div>
              <div className={styles.promotionsBanner__heading}>
                Oferty sezonowe
              </div>
              <div className={styles.promotionsBanner__title}>
                Naprawa klimatyzacji
              </div>
            </div>
            <div className={styles.promotionsBanner__price}>99 PLN</div>
          </div>
          <hr className={styles.promotionsBanner__separator} />
          <p className={styles.promotionsBanner__description}>
            Skorzystaj z naszej sezonowej promocji na naprawę klimatyzacji! Przy
            zakupie filtra kabinowego Bosch zapewniamy pełną diagnostykę i
            naprawę klimatyzacji w Twoim aucie. Umów wizytę i ciesz się
            komfortową jazdą. Oferta ważna tylko przez ograniczony czas!
          </p>
        </div>
        <WhiteButton title="Umów wizytę" />
      </div>
    </div>
  );
};

export default PromotionsBanner;
