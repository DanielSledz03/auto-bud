'use client';
import { useState } from 'react';

import BookingStepOne from '@/view/BookingStepOne/BookingStepOne';
import BookingStepTwo from '@/view/BookingStepTwo/BookingStepTwo';
import StepProgressBar from '@/view/StepProgressBar/StepProgressBar';

const WizytaPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <>
      <StepProgressBar activeStep={activeStep} />
      {activeStep === 1 && <BookingStepOne setActiveStep={setActiveStep} />}
      {activeStep === 2 && <BookingStepTwo setActiveStep={setActiveStep} />}
    </>
  );
};

export default WizytaPage;
