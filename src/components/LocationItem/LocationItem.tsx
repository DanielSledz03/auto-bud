import Image from 'next/image';
import Link from 'next/link';

import RedArrowTopRight from '@/../public/assets/icons/redArrowTopRight.svg';

import styles from './LocationItem.module.scss';

interface LocationItemProps {
  heading: string;
  heading2: string;
  details: string[];
  url: string;
}

const LocationItem = ({
  heading,
  heading2,
  details,
  url,
}: LocationItemProps) => {
  return (
    <Link href={url} className={styles.location__item__container}>
      <h5 className={styles.location__item__heading}>
        {heading}{' '}
        <span className={styles.location__item__heading__span}>{heading2}</span>
      </h5>
      <h3 className={styles.location__item__heading2}>{heading2}</h3>

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
    </Link>
  );
};

export default LocationItem;
