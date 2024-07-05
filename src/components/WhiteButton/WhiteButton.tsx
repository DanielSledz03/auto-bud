import Image from 'next/image';

import RedArrowTopRight from '@/../public/assets/icons/redArrowTopRight.svg';

import styles from './WhiteButton.module.scss';

interface WhiteButtonProps {
  title: string;
  buttonStyles?: string;
}

const WhiteButton = ({ title, buttonStyles = '' }: WhiteButtonProps) => {
  return (
    <button className={`${styles.button} ${buttonStyles}`}>
      <Image src={RedArrowTopRight} alt="red arrow" />
      {title}
    </button>
  );
};

export default WhiteButton;
