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
    mobile: '500 097 840',

    hours: {
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
    hours: {
      weekdays: '7.00 – 19.00',
      saturday: '8:00 – 14:00',
    },
  },
  {
    location: 'Świętochłowice',
    branch: 'Centrum',
    address: 'ul. Katowicka 73, 41-600 Świętochłowice',
    phone: '32 245 28 91',
    mobile: '500 097 840',
    hours: {
      weekdays: '7.00 – 19.00',
      saturday: '7:00 – 14:00',
    },
  },
];

const CallToUs = () => {
  return (
    <div className={styles['call-to-us']}>
      <h2 className={styles['call-to-us__title']}>Masz pytania?</h2>
      <h3 className={styles['call-to-us__subtitle']}>Skontaktuj się z nami</h3>

      <hr className={styles['call-to-us__divider']} />

      <div className={styles['call-to-us__grids']}>
        {contacts.map((contact, index) => (
          <div key={index} className={styles['call-to-us__card']}>
            <div className={styles['call-to-us__contact']}>
              <div className={styles['call-to-us__icon']}>
                <Image src={LocationPin} alt={contact.address} />
              </div>
              <div className={styles['call-to-us__location-info']}>
                <h3 className={styles['call-to-us__location']}>
                  {contact.location}
                </h3>
                {contact.branch && (
                  <p className={styles['call-to-us__branch']}>
                    {contact.branch}
                  </p>
                )}
                <p className={styles['call-to-us__address']}>
                  {contact.address}
                </p>
              </div>
            </div>
            <div className={styles['call-to-us__contact']}>
              <div className={styles['call-to-us__icon']}>
                <Image src={PhoneRed} alt={contact.phone} />
              </div>
              <div className={styles['call-to-us__location-info']}>
                <p className={styles['call-to-us__address']}>
                  tel.{' '}
                  <span className={styles['call-to-us__address--bold']}>
                    {contact.phone}
                  </span>
                </p>

                <p className={styles['call-to-us__address']}>
                  {contact.mobile && (
                    <>
                      kom.{' '}
                      <span className={styles['call-to-us__address--bold']}>
                        {contact.mobile}
                      </span>
                    </>
                  )}
                </p>

                <br />

                <p className={styles['call-to-us__address']}>
                  Pn-Pt.{' '}
                  <span className={styles['call-to-us__address--bold']}>
                    {contact.hours.weekdays}
                  </span>
                </p>

                <p className={styles['call-to-us__address']}>
                  Sobota.{' '}
                  <span className={styles['call-to-us__address--bold']}>
                    {contact.hours.saturday}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallToUs;
