'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import ArrowDown from '@/../public/assets/icons/arrowDown.svg';
import { locations } from '@/data/locationsFooter';

import styles from './LocationListFooter.module.scss';

const LocationList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  const toggleOpen = (index: number) => {
    if (isWideScreen) return;
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles['location-list']}>
      {locations.map((location, index) => (
        <div key={index} className="lg:w-1/3">
          {isWideScreen ? (
            <div
              role="button"
              onKeyDown={() => toggleOpen(index)}
              tabIndex={0}
              onClick={() => toggleOpen(index)}
              className={styles['location-list__button']}
            >
              <span className={styles['location-list__button-heading']}>
                {location.name}
              </span>

              <Image
                src={ArrowDown}
                alt="arrow"
                width={12}
                className={
                  openIndex === index
                    ? styles['location-list__button__icon-up']
                    : styles['location-list__button__icon-down']
                }
              />

              <div className={styles['location-list__details']}>
                <div>{location.address}</div>
                <div>{location.zipCode}</div>
                <div className={styles['location-list__hours']}>
                  {location.hours}
                </div>
              </div>
            </div>
          ) : (
            <div
              role="button"
              onKeyDown={() => toggleOpen(index)}
              tabIndex={0}
              onClick={() => toggleOpen(index)}
              className={styles['location-list__button']}
            >
              <span className={styles['location-list__button-heading']}>
                {location.name}
              </span>

              <Image
                src={ArrowDown}
                alt="arrow"
                width={12}
                className={
                  openIndex === index
                    ? styles['location-list__button__icon-up']
                    : styles['location-list__button__icon-down']
                }
              />

              {openIndex === index && (
                <div className={styles['location-list__details']}>
                  <div>{location.address}</div>
                  <div>{location.zipCode}</div>
                  <div className={styles['location-list__hours']}>
                    {location.hours}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LocationList;
