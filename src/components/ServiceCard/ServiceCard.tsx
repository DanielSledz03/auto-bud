import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import ClockIcon from '@/icons/clock.svg';

import { WhiteButton } from '../WhiteButton/WhiteButton';

import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  openHours?: {
    day: string;
    hours: string;
  }[];
  description: ReactNode;
  imageMobile: StaticImageData;
  imageDesktop: StaticImageData;
  imageAlt: string;
  button?: boolean;
}

const ServiceCard = ({
  title,
  subtitle,
  openHours,
  description,
  imageMobile,
  imageDesktop,
  imageAlt,
  button = false,
}: ServiceCardProps) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceCard__image}>
        <Image
          className={styles.serviceCard__image__mobile}
          src={imageMobile}
          alt={imageAlt}
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="lazy"
        />
        <Image
          className={styles.serviceCard__image__desktop}
          src={imageDesktop}
          alt={imageAlt}
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      <div className={styles.serviceCard__content}>
        <h3 className={styles.serviceCard__title}>{title}</h3>
        <h6 className={styles.serviceCard__subtitle}>{subtitle}</h6>

        <hr className={styles.serviceCard__divider} />

        {openHours && (
          <div className={styles.serviceCard__hours__container}>
            <div className={styles.serviceCard__hours__icon}>
              <Image src={ClockIcon} alt="Zegar" />
            </div>

            <div className={styles.serviceCard__hours}>
              {openHours.map(openHour => (
                <p
                  key={openHour.day}
                  className={styles.serviceCard__hours__open}
                >
                  {openHour.day}{' '}
                  <span className={styles.serviceCard__hours__open__time}>
                    {openHour.hours}
                  </span>
                </p>
              ))}
            </div>
          </div>
        )}
        <p className={styles.serviceCard__description}>{description}</p>
        {button && (
          <WhiteButton
            title="Umów wizytę"
            buttonStyles={styles.serviceCard__button}
            href="/wizyta"
          />
        )}
      </div>
    </div>
  );
};

export { ServiceCard };
