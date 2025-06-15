import Image from 'next/image';

import RedArrowTopRight from '@/../public/assets/icons/redArrowTopRight.svg';
import PromotionBannerImage from '@/images/general/index/promotionBanner.png';
import PromotionBannerImageMobile from '@/images/general/index/promotionBannerMobile.png';

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
      className={`${styles.promotionsBanner} ${
        shorter ? styles['promotionsBanner-shorter'] : ''
      }`}
    >
      <div
        className={`${styles.promotionsBanner__wrapper} ${
          shorter ? styles['promotionsBanner__wrapper-shorter'] : ''
        }`}
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
                  <h3>{heading}</h3>
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
            className={`${styles.promotionsBanner__separator} ${
              shorter ? styles['promotionsBanner__separator-shorter'] : ''
            } `}
          />
          <p className={styles.promotionsBanner__description}>{description}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.promotionBanner__button}
        >
          <Image
            src={RedArrowTopRight}
            alt="Czerwona strzałka"
            className="xl:w-[14px]"
          />
          <p className="ml-4 flex-1 text-center font-bold">
            Zarezerwuj wizytę <br />
            <span>
              (w aplikacji <b>Bosch Auto Planer</b>)
            </span>
          </p>
        </a>
      </div>
    </div>
  );
};
