import React, { useState } from 'react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';

import styles from './ChooseTheTime.module.scss'; // Assuming this is where your styles will be

// Time slots grouped by period
const timeSlots = {
  rano: ['10:00', '11:00'],
  poludnie: ['12:00', '13:00', '14:00'],
  wieczor: ['15:00', '16:00', '17:00', '18:00', '19:00'],
};

interface DatePickerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
}

const ChooseTheTime = <T extends FieldValues>({
  name,
  control,
}: DatePickerProps<T>) => {
  const [selectedPeriod, setSelectedPeriod] = useState<
    'rano' | 'poludnie' | 'wieczor'
  >('rano'); // Default to 'rano'
  const [selectedTime, setSelectedTime] = useState<string | null>(null); // To store the selected time slot

  const { field } = useController({
    name,
    control,
  });

  // Handle period change (Rano, Południe, Wieczór)
  const handlePeriodChange = (period: 'rano' | 'poludnie' | 'wieczor') => {
    setSelectedPeriod(period);
    setSelectedTime(null); // Clear selected time when switching period
    field.onChange(null); // Clear the form field value when period changes
  };

  // Handle time slot selection
  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    field.onChange(time); // Update the form field with the selected time
  };

  return (
    <div className={styles.datePicker}>
      <h2 className={styles.datePicker__heading}>Wybierz godzinę</h2>

      {/* Period selection (Rano, Południe, Wieczór) */}
      <div className={styles.datePicker__timePeriod}>
        <button
          onClick={() => handlePeriodChange('rano')}
          className={`${styles.datePicker__periodTitle} ${selectedPeriod === 'rano' ? styles.selected : ''}`}
        >
          Rano
        </button>
        <button
          onClick={() => handlePeriodChange('poludnie')}
          className={`${styles.datePicker__periodTitle} ${selectedPeriod === 'poludnie' ? styles.selected : ''}`}
        >
          Południe
        </button>
        <button
          onClick={() => handlePeriodChange('wieczor')}
          className={`${styles.datePicker__periodTitle} ${selectedPeriod === 'wieczor' ? styles.selected : ''}`}
        >
          Wieczór
        </button>
      </div>

      {/* Time slots based on selected period */}
      <div className={styles.datePicker__timeGroup}>
        {timeSlots[selectedPeriod].map(time => (
          <button
            key={time}
            onClick={() => handleTimeClick(time)}
            className={`${styles.datePicker__timeSlot} ${selectedTime === time ? styles.selected : ''}`}
          >
            <span className={styles.datePicker__timeSlotText}>{time}</span>
            {/* Optionally, add a marker or icon for selected time */}
            {selectedTime === time && (
              <div className={styles.datePicker__marker}>G</div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooseTheTime;
