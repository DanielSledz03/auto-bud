import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';

import RedArrow from '@/icons/redArrowDown.svg'; // Strzałka w prawo

import styles from './ChooseTheTime.module.scss'; // Stylizacja komponentu

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

const ChooseTheTime = <T extends FieldValues>({
  name,
  control,
}: DatePickerProps<T>) => {
  const [startDate, setStartDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  });
  const [daysToShow, setDaysToShow] = useState(0); // Domyślna liczba dni do wyświetlenia na mobilnych

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  const getDate = (daysToAdd: number) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + daysToAdd);
    return date;
  };

  const formatDate = (date: Date) => {
    const day = date.toLocaleDateString('pl-PL', {
      day: 'numeric',
    });

    const dayOfWeek = date.toLocaleDateString('pl-PL', {
      weekday: 'short',
    });

    const month = date
      .toLocaleDateString('pl-PL', {
        month: 'long',
      })
      .replace(/^\p{L}/u, c => c.toUpperCase());

    return {
      day,
      dayOfWeek,
      month,
    };
  };

  const isWeekend = (date: Date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Niedziela = 0, Sobota = 6
  };

  const isHoliday = (date: Date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return holidays.includes(formattedDate);
  };

  const handlePrevWeek = () => {
    setStartDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 10);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setStartDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 10);
      return newDate;
    });
  };

  useEffect(() => {
    const updateDaysToShow = () => {
      if (window.innerWidth >= 1024) {
        setDaysToShow(10); // Pokaż 7 dni na większych ekranach
      } else {
        setDaysToShow(180); // Pokaż 180 dni na mobilnych
      }
    };

    updateDaysToShow();
    window.addEventListener('resize', updateDaysToShow);

    return () => {
      window.removeEventListener('resize', updateDaysToShow);
    };
  }, []);

  const buttons = [];
  let index = 0;
  const currentMonth = startDate.getMonth();

  while (index < daysToShow) {
    const date = getDate(index);
    if (date.getMonth() !== currentMonth) {
      break;
    }

    const formattedDate = formatDate(date);
    const isSelected =
      value && new Date(value).toDateString() === date.toDateString();

    if (isWeekend(date) || isHoliday(date)) {
      index++;
      continue;
    }

    buttons.push(
      <button
        type="button"
        key={index}
        onClick={() => onChange(date.toISOString())}
        className={`${styles.datePicker__day} ${
          isSelected ? styles.datePicker__daySelected : ''
        } ${index === 0 ? styles.datePicker__day__first : ''}`}
      >
        <span className={styles.datePicker__dayOfWeek}>
          {formattedDate.dayOfWeek.replace('.', '')}
        </span>

        <span className={styles.datePicker__dayNumber}>
          {formattedDate.day}
        </span>

        <span className={styles.datePicker__monthMobile}>
          {formattedDate.month}
        </span>
      </button>,
    );

    index++;
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
      <div className={styles.datePicker__month}>
        {startDate
          .toLocaleDateString('pl-PL', {
            month: 'long',
            year: 'numeric',
          })
          .replace(/^\p{L}/u, c => c.toUpperCase())}
      </div>
    </div>
  );
};

export default ChooseTheTime;
