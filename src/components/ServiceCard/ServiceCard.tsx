import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import ClockIcon from '@/../public/assets/icons/clock.svg';

import WhiteButton from '../WhiteButton/WhiteButton';

import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  openHours: {
    day: string;
    hours: string;
  }[];
  description: ReactNode;
  imageMobile: StaticImageData;
  imageDesktop: StaticImageData;
  button?: boolean;
}

const ServiceCard = ({
  title,
  subtitle,
  openHours,
  description,
  imageMobile,
  imageDesktop,
  button = false,
}: ServiceCardProps) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceCard__image}>
        <Image
          className={styles.serviceCard__image__mobile}
          src={imageMobile}
          alt="sdsd"
        />
        <Image
          className={styles.serviceCard__image__desktop}
          src={imageDesktop}
          alt="sdsd"
        />
      </div>
      <div className={styles.serviceCard__content}>
        <h5 className={styles.serviceCard__title}>{title}</h5>
        <h6 className={styles.serviceCard__subtitle}>{subtitle}</h6>

        <hr className={styles.serviceCard__divider} />

        <div className={styles.serviceCard__hours__container}>
          <div className={styles.serviceCard__hours__icon}>
            <Image src={ClockIcon} alt="Zegar" />
          </div>
          <div className={styles.serviceCard__hours}>
            {openHours.map(openHour => (
              <p key={openHour.day} className={styles.serviceCard__hours__open}>
                {openHour.day}{' '}
                <span className={styles.serviceCard__hours__open__time}>
                  {openHour.hours}
                </span>
              </p>
            ))}
          </div>
        </div>
        <p className={styles.serviceCard__description}>{description}</p>
        {button && (
          <WhiteButton
            title="Umów wizytę"
            buttonStyles={styles.serviceCard__button}
            href="#"
          />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
