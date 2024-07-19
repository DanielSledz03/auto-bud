import Image from 'next/image';
import React from 'react';

import PhoneRed from '@/../public/assets/icons/phoneRed.svg';
import LocationPin from '@/../public/assets/icons/redLocationPin.svg';

import styles from './CallToUs.module.scss';
const contacts = [
  {
    location: 'Ruda Śląska',
    branch: 'Godula',
    address: 'ul. Stara 1, 41-703 Ruda Śląska',
    phone: '32 72 55 888',
    mobile: '570 190 829',

    hoursStation: {
      weekdays: '7.00 – 19.00',
      saturday: '7:00 – 14:00',
    },
  },
  {
    location: 'Ruda Śląska',
    branch: 'Bykowina',
    address: 'ul. Szpaków 51, 41-705 Ruda Śląska',
    phone: '32 74 09 221',
    mobile: '510 049 787',
    hoursStation: {
      weekdays: '7.00 – 19.00',
      saturday: '8:00 – 14:00',
    },
  },
  {
    location: 'Świętochłowice',
    branch: 'Centrum',
    address: 'ul. Katowicka 73, 41-600 Świętochłowice',
    phone: '32 245 28 91',
    mobile: '502 567 630',
    hoursStation: {
      weekdays: '7.00 – 19.00',
      saturday: '7:00 – 14:00',
    },
    hoursMechanic: {
      weekdays: '8.00 – 16.00',
      saturday: 'Nieczynne',
    },
  },
];

const CallToUs = () => {
  return (
    <div className={styles['call-to-us']}>
      <p className={styles['call-to-us__title']}>Masz pytania?</p>
      <h2 className={styles['call-to-us__subtitle']}>Skontaktuj się z nami</h2>

      <hr className={styles['call-to-us__divider']} />

      <div className={styles['call-to-us__grids']}>
        {contacts.map((contact, index) => (
          <div key={index} className={styles['call-to-us__card']}>
            <div className={styles['call-to-us__contact']}>
              <div className={styles['call-to-us__icon']}>
                <Image src={LocationPin} alt={contact.address} />
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
                <Image src={PhoneRed} alt={contact.phone} />
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
