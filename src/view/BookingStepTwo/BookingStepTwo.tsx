'use client';

import { useForm, Controller } from 'react-hook-form';

import styles from './BookingStepTwo.module.scss';

interface BookingFormData {
  registrationNumber: string;
  brand: string;
  ownerName: string;
  email: string;
  phoneNumber: string;
  comments: string;
}

interface BookingStepOneProps {
  setActiveStep: (step: number) => void;
}

const BookingStepTwo = ({ setActiveStep }: BookingStepOneProps) => {
  const { control, handleSubmit } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.bookingStepTwo}>
      <h2 className={styles.bookingStepTwo__heading}>Dane osobowe</h2>

      <div className={styles.bookingStepTwo__info}>
        <label
          htmlFor="registrationNumber"
          className={styles.bookingStepTwo__label}
        >
          Numer rejestracyjny <span>*</span>
        </label>
        <Controller
          name="registrationNumber"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="registrationNumber"
              type="text"
              placeholder="Wpisz numer rejestracyjny"
              className={styles.bookingStepTwo__input}
            />
          )}
        />
      </div>

      <div className={styles.bookingStepTwo__info}>
        <label htmlFor="brand" className={styles.bookingStepTwo__label}>
          Marka / Model pojazdu <span>*</span>
        </label>
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="brand"
              type="text"
              placeholder="Wpisz markę / model pojazdu"
              className={styles.bookingStepTwo__input}
            />
          )}
        />
      </div>

      <div className={styles.bookingStepTwo__info}>
        <label htmlFor="ownerName" className={styles.bookingStepTwo__label}>
          Imię i nazwisko <span>*</span>
        </label>
        <Controller
          name="ownerName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="ownerName"
              type="text"
              placeholder="Wpisz imię i nazwisko właściciela pojazdu"
              className={styles.bookingStepTwo__input}
            />
          )}
        />
      </div>

      <div className={styles.bookingStepTwo__info}>
        <label htmlFor="email" className={styles.bookingStepTwo__label}>
          Adres email <span>*</span>
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="email"
              type="email"
              placeholder="Wpisz adres email"
              className={styles.bookingStepTwo__input}
            />
          )}
        />
      </div>

      <div className={styles.bookingStepTwo__info}>
        <label htmlFor="phoneNumber" className={styles.bookingStepTwo__label}>
          Numer telefonu <span>*</span>
        </label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="phoneNumber"
              type="tel"
              placeholder="Wpisz numer telefonu"
              className={styles.bookingStepTwo__input}
            />
          )}
        />
      </div>

      <div className={styles.bookingStepTwo__wrapper}>
        <label htmlFor="comments" className={styles.bookingStepTwo__label}>
          Uwagi
        </label>
        <Controller
          name="comments"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              id="comments"
              placeholder="Jeśli masz jakieś dodatkowe uwagi, wpisz je tutaj"
              className={styles.bookingStepTwo__textarea}
            />
          )}
        />
      </div>

      <button
        type="submit"
        onClick={() => {
          setActiveStep(3);
        }}
        className="w-full bg-red"
      >
        Przejdź dalej
      </button>
    </form>
  );
};

export default BookingStepTwo;
