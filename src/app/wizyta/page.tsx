'use client';
import { useState } from 'react';

import BookingStepOne from '@/view/BookingStepOne/BookingStepOne';
import StepProgressBar from '@/view/StepProgressBar/StepProgressBar';

const WizytaPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <>
      <StepProgressBar activeStep={activeStep} />
      <BookingStepOne />
    </>
  );
};

export default WizytaPage;
