import styles from './ContactHeader.module.scss';

const ContactHeader = () => {
  return (
    <header className={styles['contact-header']}>
      <h1 className={styles['contact-header__title']}>Kontakt</h1>
      <p className={styles['contact-header__description']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        ullamcorper nunc a ipsum tempor, in pellentesque purus condimentum. Nam
        vestibulum vel libero non ultrices. Curabitur eget iaculis turpis, non
        sodales elit.
      </p>
    </header>
  );
};

export default ContactHeader;
