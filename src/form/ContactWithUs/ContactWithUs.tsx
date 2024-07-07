import WhiteButton from '@/components/WhiteButton/WhiteButton';

import styles from './ContactWithUs.module.scss';

const ContactWithUs = () => {
  return (
    <div className={styles['form']}>
      <h4 className={styles['form__title']}>Masz pytania?</h4>
      <h5 className={styles['form__subtitle']}>Skontaktuj się z nami</h5>

      <hr className={styles['form__divider']} />
      <p className={styles['form__description']}>Napisz wiadomość</p>

      <div className={styles['form__container']}>
        <div className={styles['form__inputs-container']}>
          <div className={styles['form__input-container']}>
            <label className={styles['form__label']} htmlFor="name">
              Imię i nazwisko
              <span className={styles['form__label-required']}>*</span>
            </label>
            <input
              className={styles['form__input']}
              type="text"
              id="name"
              name="name"
            />

            <label className={styles['form__label']} htmlFor="email">
              Adres e-mail
              <span className={styles['form__label-required']}>*</span>
            </label>
            <input
              className={styles['form__input']}
              type="email"
              id="email"
              name="email"
            />

            <label className={styles['form__label']} htmlFor="tel">
              Numer telefonu
            </label>
            <input
              className={styles['form__input']}
              type="tel"
              id="tel"
              name="tel"
            />

            <p className={styles['form__field-required-desktop']}>
              <span className={styles['form__label-required']}>*</span> - pole
              wymagane
            </p>
          </div>

          <div className={styles['form__input-container']}>
            <label className={styles['form__label']} htmlFor="message">
              Treść wiadomości
              <span className={styles['form__label-required']}>*</span>
            </label>
            <textarea
              className={styles['form__textarea']}
              id="message"
              name="message"
            />

            <p className={styles['form__field-required-mobile']}>
              <span className={styles['form__label-required']}>*</span> - pole
              wymagane
            </p>
          </div>
        </div>
        <div className={styles['form__checkbox-container']}>
          <div className={styles['form__checkbox']}>
            <div className={styles['form__checkbox-inner']} />
          </div>

          <label className={styles['form__statue-text']} htmlFor="statue">
            Akceptuję regulamin oraz politykę prywatności strony
            <span className={styles['form__label-required']}>*</span>
          </label>
        </div>

        <WhiteButton
          href=""
          buttonStyles={styles['form__button']}
          title="Wyślij wiadomość"
        />
      </div>
    </div>
  );
};

export default ContactWithUs;
