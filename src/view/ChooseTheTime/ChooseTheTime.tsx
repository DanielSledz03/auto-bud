import React, { useState } from 'react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';

import styles from './ChooseTheTime.module.scss';

const timeSlots = {
  rano: ['10:00', '11:00', '12:00', '13:00', '14:00'],
  poludnie: ['15:00', '16:00', '17:00', '18:00', '19:00'],
};

interface DatePickerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
}

const ChooseTheTime = <T extends FieldValues>({
  name,
  control,
}: DatePickerProps<T>) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'rano' | 'poludnie'>(
    'rano',
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const { field } = useController({ name, control });

  const handlePeriodChange = (period: 'rano' | 'poludnie') => {
    setSelectedPeriod(period);
    setSelectedTime(null);
    field.onChange(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    field.onChange(time);
  };

  return (
    <div className={styles.datePicker}>
      <h2 className={styles.datePicker__heading}>Wybierz godzinę</h2>

      <div className={styles.datePicker__timePeriod}>
        <button
          type="button"
          onClick={() => handlePeriodChange('rano')}
          className={`${styles.datePicker__periodTitle} ${selectedPeriod === 'rano' ? styles.selected : ''}`}
        >
          Rano
        </button>
        <button
          type="button"
          onClick={() => handlePeriodChange('poludnie')}
          className={`${styles.datePicker__periodTitle} ${selectedPeriod === 'poludnie' ? styles.selected : ''}`}
        >
          Południe
        </button>
      </div>

      <div className={styles.datePicker__timeGroup}>
        {timeSlots[selectedPeriod].map(time => (
          <button
            key={time}
            type="button"
            onClick={() => handleTimeClick(time)}
            className={`${styles.datePicker__timeSlot} ${selectedTime === time ? styles.selected : ''}`}
          >
            <span className={styles.datePicker__timeSlotText}>{time}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooseTheTime;
