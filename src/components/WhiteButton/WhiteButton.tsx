import Image from 'next/image';
import Link from 'next/link';

import RedArrowTopRight from '@/../public/assets/icons/redArrowTopRight.svg';

import styles from './WhiteButton.module.scss';

interface WhiteButtonProps {
  title: string;
  buttonStyles?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; // Updated type
  disabled?: boolean; // New prop
}

export const WhiteButton = ({
  title,
  buttonStyles = '',
  href = '#',
  onClick,
  disabled,
}: WhiteButtonProps) => {
  const isExternal =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:');

  return (
    <Link
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      href={href}
      className={`${styles.button} ${buttonStyles}`}
      onClick={disabled ? e => e.preventDefault() : onClick}
    >
      <Image src={RedArrowTopRight} alt="Czerwona strzałka" />
      {title}
    </Link>
  );
};
