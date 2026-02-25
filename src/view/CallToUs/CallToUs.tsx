import Image from 'next/image';
import React from 'react';

import PhoneRed from '@/../public/assets/icons/phoneRed.svg';
import LocationPin from '@/../public/assets/icons/redLocationPin.svg';
import { businessLocations } from '@/data/businessLocations';

import styles from './CallToUs.module.scss';

const contacts = businessLocations.map(location => ({
  location: location.city,
  branch: location.district,
  address: location.fullAddress,
  phone: location.landlineDisplay,
  mobile: location.mobileDisplay,
  hoursStation: {
    weekdays: '07:00 - 19:00',
    saturday: '08:00 - 14:00',
  },
  hoursMechanic: location.workshopOpeningHours
    ? { weekdays: '08:00 - 16:00', saturday: 'Nieczynne' }
    : undefined,
}));

const CallToUs = () => {
  return (
    <div className={styles['call-to-us']}>
      <p className={styles['call-to-us__title']}>Potrzebujesz pomocy?</p>
      <h2 className={styles['call-to-us__subtitle']}>Zadzwoń do nas</h2>

      <hr className={styles['call-to-us__divider']} />

      <div className={styles['call-to-us__grids']}>
        {contacts.map((contact, index) => (
          <div key={index} className={styles['call-to-us__card']}>
            <div className={styles['call-to-us__contact']}>
              <div className={styles['call-to-us__icon']}>
                <Image src={LocationPin} alt="Ikona lokalizacji" />
              </div>
              <div className={styles['call-to-us__location-info']}>
                <p className={styles['call-to-us__location']}>
                  {contact.location}
                </p>
                {contact.branch && (
                  <p className={styles['call-to-us__branch']}>
                    {contact.branch}
                  </p>
                )}
                <h6 className={styles['call-to-us__address']}>
                  {contact.address}
                </h6>
              </div>
            </div>
            <div className={styles['call-to-us__contact']}>
              <div className={styles['call-to-us__icon']}>
                <Image src={PhoneRed} alt="Ikona telefonu" />
              </div>
              <div className={styles['call-to-us__location-info']}>
                <h6 className={styles['call-to-us__address']}>
                  tel.{' '}
                  <span className={styles['call-to-us__address--bold']}>
                    {contact.phone}
                  </span>
                </h6>

                <h6 className={styles['call-to-us__address']}>
                  {contact.mobile && (
                    <>
                      kom.{' '}
                      <span className={styles['call-to-us__address--bold']}>
                        {contact.mobile}
                      </span>
                    </>
                  )}
                </h6>

                <br />

                {contact.hoursMechanic && (
                  <p className={styles['call-to-us__branch']}>
                    Stacja Kontroli Pojazdów
                  </p>
                )}

                <p className={styles['call-to-us__address']}>
                  Pn-Pt.{' '}
                  <span className={styles['call-to-us__address--bold']}>
                    {contact.hoursStation.weekdays}
                  </span>
                </p>

                <p className={styles['call-to-us__address']}>
                  Sobota.{' '}
                  <span className={styles['call-to-us__address--bold']}>
                    {contact.hoursStation.saturday}
                  </span>
                </p>

                {contact.hoursMechanic && (
                  <>
                    <br />
                    <p className={styles['call-to-us__branch']}>Warsztat</p>
                    <p className={styles['call-to-us__address']}>
                      Pn-Pt.{' '}
                      <span className={styles['call-to-us__address--bold']}>
                        {contact.hoursMechanic.weekdays}
                      </span>
                    </p>

                    <p className={styles['call-to-us__address']}>
                      Sobota.{' '}
                      <span className={styles['call-to-us__address--bold']}>
                        {contact.hoursMechanic.saturday}
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallToUs;
