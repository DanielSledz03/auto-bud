'use client';

import { useForm } from 'react-hook-form';

import Select from '@/components/Select/Select';

import ChooseTheDate from '../ChooseTheDate/ChooseTheDate';
import ChooseTheTime from '../ChooseTheTime/ChooseTheTime';

import styles from './BookingStepOne.module.scss';

interface BookingFormData {
  location: string;
  service: string;
  visitDate: Date;
  visitTime: string;
  // Dodaj inne pola formularza, jeśli są
}

const BookingStepOne = () => {
  const { control, handleSubmit } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.bookingStepOne}>
      <Select
        name="location"
        label="Na ten moment oferujemy naprawę tylko w Świętochłowicach"
        placeholder="Świętochłowice"
        options={[{ value: '1', label: 'Świętochłowice' }]}
        disabled
        control={control}
      />
      <Select
        name="service"
        label="Wybierz usługę"
        placeholder="Rozwiń listę i wybierz usługę"
        options={[
          { value: '1', label: 'Wymiana filtra oleju' },
          { value: '2', label: 'Wymiana oleju silnikowego' },
          { value: '3', label: 'Wymiana klocków hamulcowych' },
          { value: '4', label: 'Wymiana tarcz hamulcowych' },
          { value: '5', label: 'Wymiana klocków i tarcz hamulcowych' },
        ]}
        control={control}
      />

      <ChooseTheDate name="visitDate" control={control} />
      <ChooseTheTime name="visitTime" control={control} />
    </form>
  );
};

export default BookingStepOne;
