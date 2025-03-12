import Image from 'next/image';
import React from 'react';

import PromotionBannerImage from '@/images/general/index/promotionBanner.png';
import PromotionBannerImageMobile from '@/images/general/index/promotionBannerMobile.png';

import { WhiteButton } from '../WhiteButton/WhiteButton';

import styles from './PromotionBanner.module.scss';

interface Props {
  heading?: string;
  title: string;
  price?: string;
  description: string;
  shorter?: boolean;
  href?: string;
}

export const PromotionsBanner = ({
  title,
  heading,
  price,
  description,
  shorter = false,
  href = '#',
}: Props) => {
  return (
    <div
      className={`${styles.promotionsBanner} ${shorter ? styles['promotionsBanner-shorter'] : ''}`}
    >
      <div
        className={`${styles.promotionsBanner__wrapper} ${shorter ? styles['promotionsBanner__wrapper-shorter'] : ''}`}
      >
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
              {heading && (
                <div className={styles.promotionsBanner__heading}>
                  <h2>{heading}</h2>
                </div>
              )}
              <div className={styles.promotionsBanner__title}>
                <h4>{title}</h4>
              </div>
            </div>
            {price && (
              <div className={styles.promotionsBanner__price}>{price}</div>
            )}
          </div>
          <hr
            className={`${styles.promotionsBanner__separator} ${shorter ? styles['promotionsBanner__separator-shorter'] : ''} `}
          />
          <p className={styles.promotionsBanner__description}>{description}</p>
        </div>
        <WhiteButton
          title="Zarezerwuj wizytę (w aplikacji Bosch Auto Planer)"
          href={href}
          buttonStyles={styles.promotionsBanner__button}
        />
      </div>
    </div>
  );
};
