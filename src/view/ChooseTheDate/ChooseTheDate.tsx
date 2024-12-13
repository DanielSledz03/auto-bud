import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';

import RedArrow from '@/icons/redArrowDown.svg'; // Strzałka w prawo

import styles from './ChooseTheDate.module.scss'; // Stylizacja komponentu

const holidays = [
  '2024-01-01', // Nowy Rok
  '2024-04-01', // Wielkanoc
  '2024-05-01', // Święto Pracy
  '2024-05-03', // Święto Konstytucji 3 Maja
  '2024-06-08', // Zielone Świątki
  '2024-08-15', // Wniebowzięcie Najświętszej Maryi Panny
  '2024-11-01', // Wszystkich Świętych
  '2024-11-11', // Narodowe Święto Niepodległości
  '2024-12-25', // pierwszy dzień Bożego Narodzenia
  '2024-12-26', // drugi dzień Bożego Narodzenia
  '2025-01-01', // Nowy Rok, Świętej Bożej Rodzicielki
  '2025-01-06', // Trzech Króli (Objawienie Pańskie)
  '2025-04-20', // Wielkanoc
  '2025-04-21', // Poniedziałek Wielkanocny
  '2025-05-01', // Święto Pracy
  '2025-05-03', // Święto Konstytucji 3 Maja
  '2025-06-08', // Zielone Świątki
  '2025-06-19', // Boże Ciało
  '2025-08-15', // Święto Wojska Polskiego, Wniebowzięcie Najświętszej Maryi Panny
  '2025-11-01', // Wszystkich Świętych
  '2025-11-11', // Święto Niepodległości
  '2025-12-25', // pierwszy dzień Bożego Narodzenia
  '2025-12-26', // drugi dzień Bożego Narodzenia
];

interface DatePickerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
}
const ChooseTheDate = <T extends FieldValues>({
  name,
  control,
}: DatePickerProps<T>) => {
  const [startDate, setStartDate] = useState(() => new Date());
  const [daysToDisplay, setDaysToDisplay] = useState(7); // Domyślnie 7 dni
  const currentYear = new Date().getFullYear();

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setDaysToDisplay(180); // Mobile
      } else {
        setDaysToDisplay(7); // Desktop
      }
    };

    window.addEventListener('resize', handleResize);

    // Ustawienie początkowej wartości na podstawie bieżącej szerokości
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatDate = (date: Date) => {
    const day = date.toLocaleDateString('pl-PL', { day: 'numeric' });
    const dayOfWeek = date.toLocaleDateString('pl-PL', { weekday: 'short' });
    const month = date
      .toLocaleDateString('pl-PL', { month: 'long' })
      .replace(/^\p{L}/u, c => c.toUpperCase());

    return { day, dayOfWeek, month };
  };

  const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

  const isHoliday = (date: Date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return holidays.includes(formattedDate);
  };

  const getNextBusinessDay = (currentDate: Date) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    while (isWeekend(nextDate) || isHoliday(nextDate)) {
      nextDate.setDate(nextDate.getDate() + 1);
    }
    return nextDate;
  };

  const handlePrevWeek = () => {
    setStartDate(prevDate => {
      let newDate = new Date(prevDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset czasu do początku dnia
      for (let i = 0; i < daysToDisplay; i++) {
        newDate = getNextBusinessDay(newDate);
      }
      return newDate < today ? today : newDate;
    });
  };

  const handleNextWeek = () => {
    setStartDate(prevDate => {
      let newDate = new Date(prevDate);
      for (let i = 0; i < daysToDisplay; i++) {
        newDate = getNextBusinessDay(newDate);
      }
      return newDate;
    });
  };

  const buttons = [];
  let currentDate = new Date(startDate);

  for (let i = 0; i < daysToDisplay; i++) {
    const buttonDate = new Date(currentDate);
    currentDate = getNextBusinessDay(currentDate);
    const formattedDate = formatDate(buttonDate);
    const isSelected =
      value && new Date(value).toDateString() === buttonDate.toDateString();

    buttons.push(
      <button
        type="button"
        key={buttonDate.toISOString()}
        onClick={() => onChange(buttonDate.toISOString())}
        className={`${styles.datePicker__day} ${
          isSelected ? styles.datePicker__daySelected : ''
        } ${i === 0 ? styles.datePicker__day__first : ''}`}
      >
        <span className={styles.datePicker__dayOfWeek}>
          {formattedDate.dayOfWeek.replace('.', '')}
        </span>
        <span className={styles.datePicker__dayNumber}>
          {formattedDate.day}
        </span>
        <span className={styles.datePicker__month}>{formattedDate.month}</span>
      </button>,
    );
  }

  return (
    <div className={styles.datePicker}>
      <h2 className={styles.datePicker__heading}>Wybierz termin</h2>
      <div className={styles.datePicker__navigation}>
        <button
          type="button"
          onClick={handlePrevWeek}
          className={styles.datePicker__button}
        >
          <Image
            className={styles.datePicker__button__image__first}
            src={RedArrow}
            alt="Strzałka"
          />
        </button>
        {buttons}
        <button
          type="button"
          onClick={handleNextWeek}
          className={styles.datePicker__button}
        >
          <Image
            className={styles.datePicker__button__image}
            src={RedArrow}
            alt="Strzałka"
          />
        </button>
      </div>
      {startDate.getFullYear() !== currentYear && (
        <div className={styles.datePicker__month}>
          {startDate.getFullYear()}
        </div>
      )}
    </div>
  );
};

export default ChooseTheDate;
