import { ReactNode } from 'react';

import styles from './TextHeader.module.scss';

interface TextHeaderProps {
  title: string;
  children: ReactNode;
  align?: 'center' | 'left';
}

export const TextHeader = ({
  title,
  children,
  align = 'center',
}: TextHeaderProps) => {
  return (
    <header
      className={`${styles['text-header']} ${align === 'left' ? styles['text-header--left'] : ''}`}
    >
      <h1 className={styles['text-header__title']}>{title}</h1>
      <p className={styles['text-header__description']}>{children}</p>
    </header>
  );
};
