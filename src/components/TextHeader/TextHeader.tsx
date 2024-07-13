import { ReactNode } from 'react';

import styles from './TextHeader.module.scss';

interface TextHeaderProps {
  title: string;
  children: ReactNode;
}

const TextHeader = ({ title, children }: TextHeaderProps) => {
  return (
    <header className={styles['text-header']}>
      <h1 className={styles['text-header__title']}>{title}</h1>
      <p className={styles['text-header__description']}>{children}</p>
    </header>
  );
};

export default TextHeader;
