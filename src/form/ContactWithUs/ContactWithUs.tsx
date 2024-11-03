'use client';
import { useState } from 'react';

import { WhiteButton } from '@/components';

import styles from './ContactWithUs.module.scss';

type FormData = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  message?: string;
  checkbox?: string;
};

const ContactWithUs = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    tel: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const formErrors: Errors = {};
    if (!formData.name) formErrors.name = 'Imię i nazwisko jest wymagane';
    if (!formData.email) formErrors.email = 'Adres e-mail jest wymagany';
    if (!formData.message)
      formErrors.message = 'Treść wiadomości jest wymagana';
    if (!isCheckboxChecked)
      formErrors.checkbox = 'Akceptacja regulaminu jest wymagana';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Wiadomość została wysłana!');
        setFormData({ name: '', email: '', tel: '', message: '' });
        setIsCheckboxChecked(false);
      } else {
        alert('Wystąpił błąd podczas wysyłania wiadomości.');
      }
    } catch (error) {
      console.error('Błąd wysyłania wiadomości:', error);
      alert('Wystąpił błąd podczas wysyłania wiadomości.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles['form']}>
      <h4 className={styles['form__title']}>Masz pytania?</h4>
      <h5 className={styles['form__subtitle']}>Skontaktuj się z nami</h5>
      <hr className={styles['form__divider']} />
      <p className={styles['form__description']}>Napisz wiadomość</p>

      <form className={styles['form__container']} onSubmit={handleSubmit}>
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
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className={styles['form__error']}>{errors.name}</p>
            )}

            <label className={styles['form__label']} htmlFor="email">
              Adres e-mail
              <span className={styles['form__label-required']}>*</span>
            </label>
            <input
              className={styles['form__input']}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className={styles['form__error']}>{errors.email}</p>
            )}

            <label className={styles['form__label']} htmlFor="tel">
              Numer telefonu
            </label>
            <input
              className={styles['form__input']}
              type="tel"
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className={styles['form__error']}>{errors.message}</p>
            )}

            <p className={styles['form__field-required-mobile']}>
              <span className={styles['form__label-required']}>*</span> - pole
              wymagane
            </p>
          </div>
        </div>
        <div
          onClick={() => setIsCheckboxChecked(!isCheckboxChecked)}
          onKeyDown={() => setIsCheckboxChecked(!isCheckboxChecked)}
          role="button"
          tabIndex={0}
          className={styles['form__checkbox-container']}
        >
          <div className={styles['form__checkbox']}>
            <div
              className={`${styles['form__checkbox-inner']} ${isCheckboxChecked ? styles['form__checkbox-checked'] : ''}`}
            />
          </div>

          <label className={styles['form__statue-text']} htmlFor="statue">
            Akceptuję regulamin oraz politykę prywatności strony
            <span className={styles['form__label-required']}>*</span>
          </label>
          {errors.checkbox && (
            <p className={styles['form__error']}>{errors.checkbox}</p>
          )}
        </div>

        <WhiteButton
          href=""
          buttonStyles={styles['form__button']}
          title={isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          onClick={handleSubmit}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ContactWithUs;
