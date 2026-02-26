'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import Select from '@/components/Select/Select';
import { bookingServiceNames } from '@/constants/serviceCatalog';
import { workshopPricing } from '@/constants/workshopPricing';
import { businessLocations } from '@/data/businessLocations';

import ChooseTheDate from '../ChooseTheDate/ChooseTheDate';
import ChooseTheTime from '../ChooseTheTime/ChooseTheTime';
import StepProgressBar from '../StepProgressBar/StepProgressBar';

import styles from './BookingStepOne.module.scss';

type WizardStep = 1 | 2 | 3;
type PreferredTimeOfDay = 'RANO' | 'POLUDNIE';

interface ServiceOption {
  id: string;
  name: string;
}

interface ReservationFormData {
  locationId: string;
  serviceId: string;
  issueDescription: string;
  preferredDate: string;
  preferredTimeOfDay: PreferredTimeOfDay | '';
  plate: string;
  makeModel: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

interface SubmittedReservationData {
  locationName: string;
  locationAddress: string;
  serviceName: string;
  issueDescription: string;
  preferredDate: string;
  preferredTimeOfDay: PreferredTimeOfDay;
  plate: string;
  makeModel: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

const REQUIRED_FIELD_MESSAGE = 'To pole jest wymagane';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeServiceName = (serviceName: string) =>
  serviceName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const buildServiceId = (serviceName: string) =>
  normalizeServiceName(serviceName)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const EXCLUDED_BOOKING_SERVICE_PATTERNS = [
  'przeglady okresowe',
  'przeglad okresowy',
  'przeglad techniczny',
  'badanie techniczne',
  'pomoc drogowa 24h',
  'pomoc 24h',
];

const isExcludedBookingService = (serviceName: string) => {
  const normalizedServiceName = normalizeServiceName(serviceName);

  return EXCLUDED_BOOKING_SERVICE_PATTERNS.some(pattern =>
    normalizedServiceName.includes(pattern),
  );
};

const dedupeServiceOptions = (services: ServiceOption[]) => {
  const seen = new Set<string>();

  return services.filter(service => {
    const key = buildServiceId(service.name);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

const catalogServiceOptions: ServiceOption[] = bookingServiceNames.map(
  serviceName => ({
    id: `katalog-${buildServiceId(serviceName)}`,
    name: serviceName,
  }),
);

const pricingServiceOptions: ServiceOption[] = workshopPricing
  .filter(item => !item.service.toLowerCase().includes('roboczogodzina'))
  .map(item => ({
    id: `cennik-${buildServiceId(item.service)}`,
    name: item.service,
  }));

const baseServiceOptions: ServiceOption[] = [
  ...dedupeServiceOptions([
    ...catalogServiceOptions,
    ...pricingServiceOptions,
  ]).filter(service => !isExcludedBookingService(service.name)),
  { id: 'inne', name: 'Inne' },
];

const servicesByLocation: Record<string, ServiceOption[]> = {
  swietochlowice: baseServiceOptions,
};

const bookableLocations = businessLocations.filter(location =>
  Boolean(location.workshopOpeningHours?.length),
);
const availableLocations =
  bookableLocations.length > 0 ? bookableLocations : businessLocations;
const hasSingleLocation = availableLocations.length === 1;
const singleLocation = hasSingleLocation ? availableLocations[0] : null;

const getServicesForLocation = (locationId: string) =>
  servicesByLocation[locationId] ?? baseServiceOptions;

const formatPreferredDate = (preferredDate: string) => {
  const [year, month, day] = preferredDate.split('-').map(Number);
  if (!year || !month || !day) {
    return preferredDate;
  }

  const date = new Date(year, month - 1, day);
  const weekday = date.toLocaleDateString('pl-PL', { weekday: 'long' });
  const weekdayLabel = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  const dateLabel = date.toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return `${weekdayLabel}, ${dateLabel}`;
};

const formatPreferredTime = (value: PreferredTimeOfDay) =>
  value === 'RANO' ? 'Rano' : 'Południe';

const BookingStepOne = () => {
  const [step, setStep] = useState<WizardStep>(1);
  const [showStepTwoError, setShowStepTwoError] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] =
    useState<SubmittedReservationData | null>(null);

  const {
    control,
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    defaultValues: {
      locationId: singleLocation?.id ?? '',
      serviceId: '',
      issueDescription: '',
      preferredDate: '',
      preferredTimeOfDay: '',
      plate: '',
      makeModel: '',
      fullName: '',
      email: '',
      phone: '',
      notes: '',
    },
  });

  const selectedLocationId = watch('locationId');
  const selectedServiceId = watch('serviceId');
  const issueDescription = watch('issueDescription') ?? '';
  const selectedDate = watch('preferredDate');
  const selectedTimeOfDay = watch('preferredTimeOfDay');
  const previousLocationRef = useRef(selectedLocationId);

  useEffect(() => {
    if (singleLocation && !selectedLocationId) {
      setValue('locationId', singleLocation.id);
    }
  }, [selectedLocationId, setValue]);

  useEffect(() => {
    if (
      previousLocationRef.current &&
      previousLocationRef.current !== selectedLocationId
    ) {
      setValue('serviceId', '');
    }
    previousLocationRef.current = selectedLocationId;
  }, [selectedLocationId, setValue]);

  const locationOptions = useMemo(
    () =>
      availableLocations.map(location => ({
        value: location.id,
        label: `${location.city}, ${location.district}`,
      })),
    [],
  );

  const currentServiceOptions = useMemo(() => {
    if (!selectedLocationId) {
      return hasSingleLocation && singleLocation
        ? getServicesForLocation(singleLocation.id)
        : [];
    }
    return getServicesForLocation(selectedLocationId);
  }, [selectedLocationId]);

  useEffect(() => {
    if (
      selectedServiceId &&
      !currentServiceOptions.some(service => service.id === selectedServiceId)
    ) {
      setValue('serviceId', '');
    }
  }, [currentServiceOptions, selectedServiceId, setValue]);

  const serviceOptions = currentServiceOptions.map(service => ({
    value: service.id,
    label: service.name,
  }));

  const requiresIssueDescription = selectedServiceId === 'inne';
  const hasIssueDescription = issueDescription.trim().length > 0;
  const isLocationSelected = hasSingleLocation || Boolean(selectedLocationId);
  const canProceedToStepTwo = Boolean(
    isLocationSelected &&
    selectedServiceId &&
    (!requiresIssueDescription || hasIssueDescription) &&
    selectedDate &&
    selectedTimeOfDay,
  );

  const handleStepOneSubmit = () => {
    if (!canProceedToStepTwo) {
      return;
    }

    setShowStepTwoError(false);
    setSubmitError(null);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToStepOne = () => {
    setShowStepTwoError(false);
    setSubmitError(null);
    setStep(1);
  };

  const onSubmit = async (formData: ReservationFormData) => {
    setShowStepTwoError(false);
    setSubmitError(null);

    const location =
      availableLocations.find(item => item.id === formData.locationId) ??
      singleLocation;
    const servicesForSelectedLocation = getServicesForLocation(
      formData.locationId || singleLocation?.id || '',
    );
    const service =
      servicesForSelectedLocation.find(
        item => item.id === formData.serviceId,
      ) ?? null;

    const preferredTimeOfDay =
      formData.preferredTimeOfDay as PreferredTimeOfDay;

    const payload = {
      locationId: location?.id,
      locationName: location?.name,
      serviceId: service?.id ?? formData.serviceId,
      serviceName: service?.name ?? formData.serviceId,
      issueDescription: formData.issueDescription.trim(),
      preferredDate: formData.preferredDate,
      preferredVisitDate: formData.preferredDate,
      preferredTimeOfDay,
      preferredContactTimeOfDay: preferredTimeOfDay,
      plate: formData.plate.trim(),
      makeModel: formData.makeModel.trim(),
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      notes: formData.notes.trim(),
    };

    try {
      const response = await fetch('/api/reservation-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('REQUEST_ERROR');
      }

      setSubmittedData({
        locationName: location?.name ?? 'Nie podano',
        locationAddress: location?.fullAddress ?? 'Nie podano',
        serviceName: service?.name ?? 'Nie podano',
        issueDescription: formData.issueDescription.trim(),
        preferredDate: formData.preferredDate,
        preferredTimeOfDay,
        plate: formData.plate.trim(),
        makeModel: formData.makeModel.trim(),
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        notes: formData.notes.trim(),
      });

      setStep(3);
    } catch (error) {
      console.error('Błąd wysyłki zgłoszenia wizyty:', error);
      setSubmitError(
        'Nie udało się wysłać zgłoszenia. Spróbuj ponownie za chwilę.',
      );
    }
  };

  const onInvalid = () => {
    setShowStepTwoError(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className={styles.bookingStepOne}
    >
      <StepProgressBar activeStep={step} />

      {step === 1 && (
        <>
          {hasSingleLocation && singleLocation ? (
            <Select
              name="locationId"
              label={`Na ten moment oferujemy naprawę tylko w miejscowości ${singleLocation.city}`}
              placeholder={singleLocation.city}
              options={locationOptions}
              disabled
              control={control}
            />
          ) : (
            <Select
              name="locationId"
              label="Wybierz miejsce"
              placeholder="Rozwiń listę i wybierz miejsce"
              options={locationOptions}
              control={control}
            />
          )}

          <Select
            name="serviceId"
            label="Wybierz typ naprawy"
            placeholder={
              isLocationSelected
                ? 'Rozwiń listę i wybierz typ naprawy'
                : 'Najpierw wybierz miejsce'
            }
            options={serviceOptions}
            control={control}
            disabled={!isLocationSelected}
          />

          <div className={styles.bookingStepOne__stepOneDescription}>
            <label
              className={styles.bookingStepOne__fieldLabel}
              htmlFor="issueDescription"
            >
              Opis problemu / cel wizyty
              {requiresIssueDescription && <span>*</span>}
            </label>
            <textarea
              id="issueDescription"
              placeholder="Np. auto gaśnie na wolnych obrotach, świeci się kontrolka silnika, potrzebuję diagnostyki przed trasą."
              className={`${styles.bookingStepOne__textarea} ${styles.bookingStepOne__stepOneTextarea} ${
                requiresIssueDescription && !hasIssueDescription
                  ? styles.bookingStepOne__inputError
                  : ''
              }`}
              {...register('issueDescription', {
                validate: value =>
                  selectedServiceId !== 'inne' ||
                  Boolean(value.trim()) ||
                  'Przy opcji "Inne" opisz czego dotyczy wizyta.',
              })}
            />
            <p className={styles.bookingStepOne__stepOneDescriptionHint}>
              Im więcej szczegółów podasz, tym łatwiej przygotujemy się do
              wizyty.
            </p>
            {requiresIssueDescription && !hasIssueDescription && (
              <p className={styles.bookingStepOne__errorMessage}>
                Przy opcji &quot;Inne&quot; opisz czego dotyczy wizyta.
              </p>
            )}
          </div>

          <ChooseTheDate name="preferredDate" control={control} />
          <ChooseTheTime name="preferredTimeOfDay" control={control} />
          <p className={styles.bookingStepOne__stepOneHint}>
            Podajesz preferowany dzień wizyty i porę kontaktu. Oddzwonimy, aby
            potwierdzić realny termin.
          </p>

          <div className={styles.bookingStepOne__stepOneActions}>
            <button
              type="button"
              className={styles.bookingStepOne__primaryButton}
              disabled={!canProceedToStepTwo}
              onClick={handleStepOneSubmit}
            >
              Przejdź dalej
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <div className={styles.bookingStepOne__stepTwo}>
          <h2 className={styles.bookingStepOne__stepTitle}>Dane osobowe</h2>

          <div className={styles.bookingStepOne__formGrid}>
            <div className={styles.bookingStepOne__field}>
              <label
                className={styles.bookingStepOne__fieldLabel}
                htmlFor="plate"
              >
                Numer rejestracyjny<span>*</span>
              </label>
              <input
                id="plate"
                type="text"
                placeholder="Wpisz nr rejestracyjny samochodu"
                className={`${styles.bookingStepOne__input} ${
                  errors.plate ? styles.bookingStepOne__inputError : ''
                }`}
                {...register('plate', { required: REQUIRED_FIELD_MESSAGE })}
              />
              {errors.plate && (
                <p className={styles.bookingStepOne__errorMessage}>
                  {errors.plate.message}
                </p>
              )}
            </div>

            <div className={styles.bookingStepOne__field}>
              <label
                className={styles.bookingStepOne__fieldLabel}
                htmlFor="makeModel"
              >
                Model/Marka<span>*</span>
              </label>
              <input
                id="makeModel"
                type="text"
                placeholder="Podaj model/markę samochodu"
                className={`${styles.bookingStepOne__input} ${
                  errors.makeModel ? styles.bookingStepOne__inputError : ''
                }`}
                {...register('makeModel', { required: REQUIRED_FIELD_MESSAGE })}
              />
              {errors.makeModel && (
                <p className={styles.bookingStepOne__errorMessage}>
                  {errors.makeModel.message}
                </p>
              )}
            </div>

            <div className={styles.bookingStepOne__field}>
              <label
                className={styles.bookingStepOne__fieldLabel}
                htmlFor="fullName"
              >
                Imię i nazwisko<span>*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Wpisz swoje imię i nazwisko"
                className={`${styles.bookingStepOne__input} ${
                  errors.fullName ? styles.bookingStepOne__inputError : ''
                }`}
                {...register('fullName', { required: REQUIRED_FIELD_MESSAGE })}
              />
              {errors.fullName && (
                <p className={styles.bookingStepOne__errorMessage}>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className={styles.bookingStepOne__field}>
              <label
                className={styles.bookingStepOne__fieldLabel}
                htmlFor="email"
              >
                Twój email<span>*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Podaj swój adres email"
                className={`${styles.bookingStepOne__input} ${
                  errors.email ? styles.bookingStepOne__inputError : ''
                }`}
                {...register('email', {
                  required: REQUIRED_FIELD_MESSAGE,
                  pattern: {
                    value: EMAIL_PATTERN,
                    message: 'Niepoprawny adres email',
                  },
                })}
              />
              {errors.email && (
                <p className={styles.bookingStepOne__errorMessage}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className={styles.bookingStepOne__field}>
              <label
                className={styles.bookingStepOne__fieldLabel}
                htmlFor="phone"
              >
                Twój telefon<span>*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Wpisz numer telefonu"
                className={`${styles.bookingStepOne__input} ${
                  errors.phone ? styles.bookingStepOne__inputError : ''
                }`}
                {...register('phone', { required: REQUIRED_FIELD_MESSAGE })}
              />
              {errors.phone && (
                <p className={styles.bookingStepOne__errorMessage}>
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div
              className={`${styles.bookingStepOne__field} ${styles.bookingStepOne__fieldFull}`}
            >
              <label
                className={styles.bookingStepOne__fieldLabel}
                htmlFor="notes"
              >
                Uwagi
              </label>
              <textarea
                id="notes"
                placeholder="Jeśli masz uwagi, daj nam znać."
                className={styles.bookingStepOne__textarea}
                {...register('notes')}
              />
            </div>
          </div>

          {showStepTwoError && Object.keys(errors).length > 0 && (
            <p className={styles.bookingStepOne__globalError}>
              Błędnie uzupełnione pola, popraw je przed przejściem dalej
            </p>
          )}

          {submitError && (
            <p className={styles.bookingStepOne__globalError}>{submitError}</p>
          )}

          <div className={styles.bookingStepOne__stepTwoActions}>
            <button
              type="button"
              onClick={handleBackToStepOne}
              className={styles.bookingStepOne__secondaryButton}
            >
              Wróć
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.bookingStepOne__primaryButton}
            >
              {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
            </button>
          </div>
        </div>
      )}

      {step === 3 && submittedData && (
        <div className={styles.bookingStepOne__stepThree}>
          <h2 className={styles.bookingStepOne__stepTitle}>Dziękujemy!</h2>
          <p className={styles.bookingStepOne__thankYouText}>
            Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się telefonicznie, aby
            ustalić i potwierdzić termin wizyty.
          </p>

          <div className={styles.bookingStepOne__summaryGrid}>
            <div className={styles.bookingStepOne__summaryCard}>
              <h3>Preferencje</h3>
              <p>
                Dzień wizyty:{' '}
                <strong>
                  {formatPreferredDate(submittedData.preferredDate)}
                </strong>
              </p>
              <p>
                Pora kontaktu:{' '}
                <strong>
                  {formatPreferredTime(submittedData.preferredTimeOfDay)}
                </strong>
              </p>
            </div>

            <div className={styles.bookingStepOne__summaryCard}>
              <h3>Miejsce</h3>
              <p>{submittedData.locationName}</p>
              <p>{submittedData.locationAddress}</p>
              <p className={styles.bookingStepOne__summaryMuted}>
                Usługa: {submittedData.serviceName}
              </p>
              {submittedData.issueDescription && (
                <p
                  className={`${styles.bookingStepOne__summaryMuted} ${styles.bookingStepOne__summaryLongText}`}
                >
                  Opis: {submittedData.issueDescription}
                </p>
              )}
            </div>

            <div className={styles.bookingStepOne__summaryCard}>
              <h3>Dane</h3>
              <p>{submittedData.fullName}</p>
              <p>{submittedData.phone}</p>
              <p>{submittedData.email}</p>
              {submittedData.plate && (
                <p className={styles.bookingStepOne__summaryMuted}>
                  Nr rej.: {submittedData.plate}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default BookingStepOne;
