import Image from 'next/image';

import RedArrowTopRight from '@/../public/assets/icons/redArrowTopRight.svg';

import styles from './LocationItem.module.scss';

interface LocationItemProps {
  heading: string;
  heading2: string;
  details: string[];
}

const LocationItem = ({ heading, heading2, details }: LocationItemProps) => {
  return (
    <div className={styles.location__item__container}>
      <h5 className={styles.location__item__heading}>
        {heading}{' '}
        <span className={styles.location__item__heading__span}>{heading2}</span>
      </h5>
      <p className={styles.location__item__heading2}>{heading2}</p>

      {details.map((detail, index) => (
        <p key={index} className={styles.location__item__text}>
          {detail}
        </p>
      ))}
      <div className={styles.location__item__button}>
        <Image
          src={RedArrowTopRight}
          alt="red arrow"
          className={styles.location__item__button__icon}
        />
        <span>Przejdź</span>
      </div>
    </div>
  );
};

export default LocationItem;
