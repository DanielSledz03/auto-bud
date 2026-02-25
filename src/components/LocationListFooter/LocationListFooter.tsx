'use client';

import Image from 'next/image';
import Link from 'next/link';
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
      {locations.map((location, index) => {
        const shouldShowDetails = isWideScreen || openIndex === index;

        return (
          <div key={location.name} className="lg:w-1/3">
            <button
              type="button"
              onClick={() => toggleOpen(index)}
              className={styles['location-list__button']}
              aria-expanded={shouldShowDetails}
              aria-controls={`footer-location-${index}`}
            >
              <span className={styles['location-list__button-heading']}>
                {location.name}
              </span>

              <Image
                src={ArrowDown}
                alt="Strzałka wskazująca w dół"
                width={12}
                className={
                  shouldShowDetails
                    ? styles['location-list__button__icon-up']
                    : styles['location-list__button__icon-down']
                }
              />
            </button>

            {shouldShowDetails && (
              <div
                id={`footer-location-${index}`}
                className={styles['location-list__details']}
              >
                <div>{location.address}</div>
                <div>{location.zipCode}</div>
                <Link href={location.linkToGoogleMaps} target="_blank">
                  Zobacz na mapie
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LocationList;
