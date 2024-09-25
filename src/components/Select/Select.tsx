import Image from 'next/image';
import React from 'react';
import {
  Control,
  useController,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';

import ArrowRed from '@/icons/redArrowDown.svg';

import styles from './Select.module.scss';

interface Option {
  value: string;
  label: string;
}

interface SelectProps<T extends FieldValues> {
  name: Path<T>;
  options: Option[];
  label?: string;
  placeholder?: string;
  control: Control<T>;
  defaultValue?: string;
  disabled?: boolean;
}

// Dodanie typu generycznego T w definicji komponentu
const Select = <T extends FieldValues>({
  name,
  options,
  label,
  placeholder,
  control,
  defaultValue = '',
  disabled = false,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  // Hook controller from react-hook-form
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: defaultValue as PathValue<T, Path<T>>, // Cast to PathValue
  });

  const handleSelectClick = () => {
    if (disabled) return;

    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedValue: string) => {
    if (disabled) return;
    onChange(selectedValue); // Używamy onChange z react-hook-form
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.select} ref={selectRef}>
      <label htmlFor={name} className={`${styles['select__label']} `}>
        {label}
      </label>
      <div
        className={styles['select__container']}
        onClick={handleSelectClick}
        onKeyDown={handleSelectClick}
        role="button"
        tabIndex={0}
      >
        <div
          className={`${styles['select__box']} ${value ? styles['select__option__value'] : styles['select__option__placeholder']}`}
        >
          {value
            ? options.find(option => option.value === value)?.label
            : placeholder}

          {!disabled && (
            <div
              className={`${styles['select__box-icon']} ${
                isOpen ? styles['select__box-icon--open'] : ''
              }`}
            >
              <Image src={ArrowRed} alt="Wybierz miejsce" />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={styles['select__dropdown']}>
          {options.map(option => (
            <div
              key={option.value}
              className={`${styles['select__option']} `}
              onClick={() => handleOptionClick(option.value)}
              onKeyDown={() => handleOptionClick(option.value)}
              role="button"
              tabIndex={0}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
