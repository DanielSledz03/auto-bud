import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import RedArrow from '@/icons/redArrowDown.svg';

import styles from './ChooseTheDate.module.scss';

const WEEKS_TO_SHOW = 6;
const BUSINESS_DAYS_PER_WEEK = 5;

const isBusinessDay = (date: Date) => date.getDay() >= 1 && date.getDay() <= 5;

const normalizeDate = (date: Date) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

const getDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const parseDateKey = (dateKey: string) => {
  const [year, month, day] = dateKey.split('-').map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
};

const getFirstBusinessDay = () => {
  const today = normalizeDate(new Date());
  if (isBusinessDay(today)) {
    return today;
  }

  const nextDate = new Date(today);
  while (!isBusinessDay(nextDate)) {
    nextDate.setDate(nextDate.getDate() + 1);
  }
  return nextDate;
};

const buildBusinessDays = (startDate: Date, count: number) => {
  const businessDays: Date[] = [];
  const cursor = new Date(startDate);

  while (businessDays.length < count) {
    if (isBusinessDay(cursor)) {
      businessDays.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return businessDays;
};

const formatMonthYear = (date: Date) => {
  const value = date.toLocaleDateString('pl-PL', {
    month: 'long',
    year: 'numeric',
  });

  return value.charAt(0).toUpperCase() + value.slice(1);
};

const formatWeekday = (date: Date) => {
  const weekday = date.toLocaleDateString('pl-PL', { weekday: 'short' });
  return weekday.replace('.', '');
};

interface DatePickerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
}

const ChooseTheDate = <T extends FieldValues>({
  name,
  control,
}: DatePickerProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const mobileDaysRef = useRef<HTMLDivElement | null>(null);

  const firstBusinessDay = useMemo(() => getFirstBusinessDay(), []);
  const businessDays = useMemo(
    () =>
      buildBusinessDays(
        firstBusinessDay,
        WEEKS_TO_SHOW * BUSINESS_DAYS_PER_WEEK,
      ),
    [firstBusinessDay],
  );
  const totalWeeks = Math.ceil(businessDays.length / BUSINESS_DAYS_PER_WEEK);
  const [mobileVisibleDateKey, setMobileVisibleDateKey] = useState(() =>
    getDateKey(businessDays[0]),
  );

  const selectedDateValue = typeof value === 'string' ? value : '';

  const weekDays = businessDays.slice(
    currentWeekIndex * BUSINESS_DAYS_PER_WEEK,
    (currentWeekIndex + 1) * BUSINESS_DAYS_PER_WEEK,
  );

  const handlePrevWeek = () => {
    setCurrentWeekIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextWeek = () => {
    setCurrentWeekIndex(prev => Math.min(totalWeeks - 1, prev + 1));
  };

  const handleMobileDaysScroll = () => {
    const container = mobileDaysRef.current;

    if (!container) {
      return;
    }

    const dayButtons = Array.from(
      container.querySelectorAll<HTMLButtonElement>('button[data-day-key]'),
    );

    if (!dayButtons.length) {
      return;
    }

    const viewportCenter = container.scrollLeft + container.clientWidth / 2;
    const activeButton = dayButtons.reduce((closestButton, button) => {
      const buttonCenter = button.offsetLeft + button.offsetWidth / 2;
      const closestCenter =
        closestButton.offsetLeft + closestButton.offsetWidth / 2;

      return Math.abs(buttonCenter - viewportCenter) <
        Math.abs(closestCenter - viewportCenter)
        ? button
        : closestButton;
    });

    const nextDateKey = activeButton.dataset.dayKey;

    if (!nextDateKey) {
      return;
    }

    setMobileVisibleDateKey(prevDateKey =>
      prevDateKey === nextDateKey ? prevDateKey : nextDateKey,
    );
  };

  useEffect(() => {
    setMobileVisibleDateKey(getDateKey(businessDays[0]));
    const animationFrame = window.requestAnimationFrame(() => {
      const container = mobileDaysRef.current;

      if (!container) {
        return;
      }

      const dayButtons = Array.from(
        container.querySelectorAll<HTMLButtonElement>('button[data-day-key]'),
      );

      if (!dayButtons.length) {
        return;
      }

      const viewportCenter = container.scrollLeft + container.clientWidth / 2;
      const activeButton = dayButtons.reduce((closestButton, button) => {
        const buttonCenter = button.offsetLeft + button.offsetWidth / 2;
        const closestCenter =
          closestButton.offsetLeft + closestButton.offsetWidth / 2;

        return Math.abs(buttonCenter - viewportCenter) <
          Math.abs(closestCenter - viewportCenter)
          ? button
          : closestButton;
      });

      const nextDateKey = activeButton.dataset.dayKey;

      if (nextDateKey) {
        setMobileVisibleDateKey(nextDateKey);
      }
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [businessDays]);

  const renderDayButton = (day: Date) => {
    const dayKey = getDateKey(day);
    const isSelected = selectedDateValue === dayKey;

    return (
      <button
        type="button"
        key={dayKey}
        onClick={() => onChange(dayKey)}
        className={`${styles.datePicker__day} ${
          isSelected ? styles.datePicker__daySelected : ''
        }`}
        data-day-key={dayKey}
      >
        <span className={styles.datePicker__dayOfWeek}>
          {formatWeekday(day)}
        </span>
        <span className={styles.datePicker__dayNumber}>{day.getDate()}</span>
      </button>
    );
  };

  const mobileMonthLabel = formatMonthYear(
    parseDateKey(mobileVisibleDateKey) ?? businessDays[0],
  );
  const desktopMonthLabel = formatMonthYear(weekDays[0]);

  return (
    <div className={styles.datePicker}>
      <h2 className={styles.datePicker__heading}>
        Wybierz preferowany dzień wizyty
      </h2>
      <div
        className={`${styles.datePicker__navigation} ${styles['datePicker__navigation--mobile']}`}
      >
        <div
          className={styles.datePicker__days}
          ref={mobileDaysRef}
          onScroll={handleMobileDaysScroll}
        >
          {businessDays.map(day => renderDayButton(day))}
        </div>
      </div>

      <div
        className={`${styles.datePicker__navigation} ${styles['datePicker__navigation--desktop']}`}
      >
        <button
          type="button"
          onClick={handlePrevWeek}
          className={styles.datePicker__button}
          disabled={currentWeekIndex === 0}
        >
          <Image
            className={styles.datePicker__buttonImagePrev}
            src={RedArrow}
            alt="Strzałka"
          />
        </button>
        <div className={styles.datePicker__days}>
          {weekDays.map(day => renderDayButton(day))}
        </div>
        <button
          type="button"
          onClick={handleNextWeek}
          className={styles.datePicker__button}
          disabled={currentWeekIndex >= totalWeeks - 1}
        >
          <Image
            className={styles.datePicker__buttonImage}
            src={RedArrow}
            alt="Strzałka"
          />
        </button>
      </div>
      <div className={`${styles.datePicker__monthLabel} lg:hidden`}>
        {mobileMonthLabel}
      </div>
      <div className={`${styles.datePicker__monthLabel} hidden lg:block`}>
        {desktopMonthLabel}
      </div>
    </div>
  );
};

export default ChooseTheDate;
