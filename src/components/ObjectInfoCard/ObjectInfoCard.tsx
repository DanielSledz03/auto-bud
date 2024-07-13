'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import RedLocationPinIcon from '@/../public/assets/icons/redLocationPin.svg';

import styles from './ObjectInfoCard.module.scss';

interface ObjectInfoCardProps {
  title: string;
  locations?: string[];
  description: string;
  services: { name: string; price: string }[];
  icon: StaticImageData;
}

const ObjectInfoCard = ({
  title,
  locations,
  description,
  services,
  icon,
}: ObjectInfoCardProps) => {
  const [visibleObjects, setVisibleObjects] = useState(4);

  const handleClick = () => {
    setVisibleObjects(visibleObjects + 4);
  };

  return (
    <div className={styles['object']}>
      <div className={styles['object__info']}>
        <div className={styles['object__info__mobile__header']}>
          <div className={styles['object__info__mobile__header__icon']}>
            <Image src={icon} alt={title} />
          </div>

          <h2 className={styles['object__info__mobile__header__title']}>
            {title}
          </h2>
        </div>
        <div className={styles['object__info__icon__container']}>
          <div className={styles['object__info__icon']}>
            <Image src={icon} alt={title} />
          </div>
        </div>
        <div>
          <h2 className={styles['object__info__title']}>{title}</h2>
          <hr className={styles['object__info__divider']} />

          {locations && (
            <div className={styles['object__info__location-list']}>
              {locations.map(location => (
                <div
                  key={location}
                  className={styles['object__info__location-list__item']}
                >
                  <div
                    className={
                      styles['object__info__location-list__item__icon']
                    }
                  >
                    <Image src={RedLocationPinIcon} alt="Station icon" />
                  </div>
                  <p
                    className={
                      styles['object__info__location-list__item__title']
                    }
                  >
                    {location}
                  </p>
                </div>
              ))}
            </div>
          )}

          <p className={styles['object__info__description']}>{description}</p>
        </div>
      </div>
      <div className={styles['object__price__list']}>
        {services.slice(0, visibleObjects).map((service, index) => (
          <div key={index} className={styles['object__price__list__item']}>
            <div className={styles['object__price__list__item__title']}>
              {service.name}
            </div>
            <div className={styles['object__price__list__item__price']}>
              {service.price}
            </div>
          </div>
        ))}

        {locations && locations?.length > 4 && (
          <div
            onClick={handleClick}
            onKeyDown={handleClick}
            role="button"
            tabIndex={0}
            className={styles['object__price__list__button']}
          >
            <p>Pokaz więcej</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ObjectInfoCard;
