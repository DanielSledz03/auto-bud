import Image, { StaticImageData } from 'next/image';
import React from 'react';

import RedLocationPinIcon from '@/icons/redLocationPin.svg';

import { WhiteButton } from '../WhiteButton/WhiteButton';

import styles from './LocationHeader.module.scss';

interface LocationHeaderProps {
  mobileBackgroundUrl: StaticImageData;
  desktopBackgroundUrl: StaticImageData;
  city: string;
  district?: string;
  street: string;
  postalCode: string;
  googleMapsLink: string;
  imageAlt: string;
}

export const LocationHeader = ({
  mobileBackgroundUrl,
  desktopBackgroundUrl,
  city,
  district,
  street,
  postalCode,
  googleMapsLink,
  imageAlt,
}: LocationHeaderProps) => {
  return (
    <div className={styles['location-header']}>
      <div className={styles['location-header__background']}>
        <Image
          className={styles['location-header__background--mobile']}
          src={mobileBackgroundUrl}
          alt={imageAlt}
        />
        <Image
          className={styles['location-header__background--desktop']}
          src={desktopBackgroundUrl}
          alt={imageAlt}
        />
      </div>
      <h1 className={styles['location-header__title']}>{city}</h1>
      {district && (
        <h2 className={styles['location-header__subtitle']}>{district}</h2>
      )}

      <div className={styles['location-header__address']}>
        <div className={styles['location-header__address--icon']}>
          <Image src={RedLocationPinIcon} alt="Lokazliacja" />
        </div>
        <div className={styles['location-header__address--text']}>
          <p className={styles['location-header__address--text--bold']}>
            {street}
          </p>
          <p className={styles['location-header__address--text--bold']}>
            {postalCode}
          </p>
        </div>
      </div>

      <WhiteButton
        href={googleMapsLink}
        title="Zobacz na mapie"
        buttonStyles={styles['location-header__button']}
      />
    </div>
  );
};
