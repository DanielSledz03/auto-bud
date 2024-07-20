import Image from 'next/image';
import Link from 'next/link';

import RedArrowTopRight from '@/../public/assets/icons/redArrowTopRight.svg';

import styles from './WhiteButton.module.scss';

interface WhiteButtonProps {
  title: string;
  buttonStyles?: string;
  href?: string;
}

export const WhiteButton = ({
  title,
  buttonStyles = '',
  href = '#',
}: WhiteButtonProps) => {
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={href}
      className={`${styles.button} ${buttonStyles}`}
    >
      <Image src={RedArrowTopRight} alt="Czerwona strzałka" />
      {title}
    </Link>
  );
};
