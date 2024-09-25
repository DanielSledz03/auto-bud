'use client';

import styles from './StepProgressBar.module.scss';

interface StepProgressBarProps {
  activeStep: number;
}

const StepProgressBar = ({ activeStep }: StepProgressBarProps) => {
  const stepClass = (step: number) => {
    return `${styles.stepProgressBar__progress__step} ${activeStep >= step ? styles.stepProgressBar__progress__step__active : ''}`;
  };

  return (
    <div className={styles.stepProgressBar}>
      <h1 className={styles.stepProgressBar__title}>Rezerwacja</h1>

      <div className={styles.stepProgressBar__progress}>
        <div className={stepClass(1)}>
          <div className={styles.stepProgressBar__progress__step__square}></div>
          <p className={styles.stepProgressBar__progress__step__text}>
            Termin i miejsce
          </p>
        </div>

        <div className={styles.stepProgressBar__progress__separator}></div>

        <div className={stepClass(2)}>
          <div className={styles.stepProgressBar__progress__step__square}></div>
          <p className={styles.stepProgressBar__progress__step__text}>
            Dane klienta
          </p>
        </div>

        <div className={styles.stepProgressBar__progress__separator}></div>

        <div className={stepClass(3)}>
          <div className={styles.stepProgressBar__progress__step__square}></div>
          <p className={styles.stepProgressBar__progress__step__text}>
            Podsumowanie
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepProgressBar;
