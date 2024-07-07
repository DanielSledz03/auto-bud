'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import ArrowDownIcon from '@/../public/assets/icons/arrowDown.svg';
import RedArrowIcon from '@/../public/assets/icons/redArrowTopRight.svg';

import styles from './Packages.module.scss';

const packages = [
  {
    title: 'Podstawowy',
    description: [
      'Lorem ipsum dolor sit amet, consectetur',
      'Cras consectetur eleifend tortor',
      'Nunc eu eros et leo laoreet consequat',
      'Donec efficitur mi in est finibus',
      'Nulla efficitur maximus tempor',
      'Praesent sem nunc, porttitor quis',
      'Fermentum sed, porttitor nec odio.',
    ],
  },
  {
    title: 'Standard',
    description: [
      'Lorem ipsum dolor sit amet, consectetur',
      'Cras consectetur eleifend tortor',
      'Nunc eu eros et leo laoreet consequat',
      'Donec efficitur mi in est finibus',
      'Nulla efficitur maximus tempor',
      'Praesent sem nunc, porttitor quis',
      'Fermentum sed, porttitor nec odio.',
    ],
  },
  {
    title: 'Premium',
    description: [
      'Lorem ipsum dolor sit amet, consectetur',
      'Cras consectetur eleifend tortor',
      'Nunc eu eros et leo laoreet consequat',
      'Donec efficitur mi in est finibus',
      'Nulla efficitur maximus tempor',
      'Praesent sem nunc, porttitor quis',
      'Fermentum sed, porttitor nec odio.',
    ],
  },
];

const Packages = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenSections(packages.map(pkg => pkg.title));
      } else {
        setOpenSections([]);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSection = (section: string) => {
    if (window.innerWidth < 1024) {
      setOpenSections(prevOpenSections =>
        prevOpenSections.includes(section)
          ? prevOpenSections.filter(title => title !== section)
          : [...prevOpenSections, section],
      );
    }
  };

  return (
    <div className={styles.accordion}>
      <h4 className={styles.accordion__title}>Zakres czynności kontrolnych</h4>
      <h5 className={styles.accordion__subtitle}>Dostępne pakiety</h5>

      <div className={styles.accordion__sections}>
        {packages.map(section => (
          <div
            key={section.title}
            className={`${styles.accordion__section} ${
              openSections.includes(section.title)
                ? styles.accordion__section_open
                : ''
            }`}
            onClick={() => toggleSection(section.title)}
            onKeyDown={() => toggleSection(section.title)}
            role="button"
            tabIndex={0}
          >
            <button className={styles.accordion__header}>
              <div
                className={`${styles.accordion__sectionTitle} ${
                  openSections.includes(section.title)
                    ? styles.accordion__sectionTitle_active
                    : ''
                }`}
              >
                <Image
                  src={RedArrowIcon}
                  alt="arrow"
                  className={styles.accordion__arrow}
                />{' '}
                {section.title}
              </div>

              <div
                className={`${styles.accordion__arrowContainer} ${
                  openSections.includes(section.title)
                    ? styles.accordion__arrowContainer_active
                    : ''
                }`}
              >
                <Image
                  src={ArrowDownIcon}
                  alt="^"
                  className={styles.accordion__arrowBlack}
                />
              </div>
            </button>
            <div
              className={`${styles.accordion__content} ${
                openSections.includes(section.title)
                  ? styles.accordion__content_open
                  : ''
              }`}
            >
              <ul>
                {section.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
