import React from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import styles from './ChooseTheTime.module.scss';

const timeOfDayOptions = [
  { value: 'RANO', label: 'Rano' },
  { value: 'POLUDNIE', label: 'Południe' },
] as const;

interface DatePickerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
}

const ChooseTheTime = <T extends FieldValues>({
  name,
  control,
}: DatePickerProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  const selectedValue: string = typeof value === 'string' ? value : '';

  return (
    <div className={styles.timeOfDay}>
      <h2 className={styles.timeOfDay__heading}>
        Wybierz preferowaną porę kontaktu
      </h2>
      <div className={styles.timeOfDay__options}>
        {timeOfDayOptions.map(option => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`${styles.timeOfDay__option} ${
              selectedValue === option.value
                ? styles.timeOfDay__optionSelected
                : ''
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooseTheTime;
