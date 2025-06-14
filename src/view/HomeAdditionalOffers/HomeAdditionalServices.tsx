import Image from 'next/image';

import { WhiteButton } from '@/components';
import CarIcon from '@/icons/carIcon.svg';
import RoadsideAssistIcon from '@/icons/roadsideAssits.svg';

import styles from './HomeAdditionalServices.module.scss';

export const HomeAdditionalServices = () => {
  return (
    <div className={styles['home-additional-services']}>
      <div className={styles['home-additional-services__header']}>
        <p className={styles['home-additional-services__title']}>
          Co jeszcze oferujemy?
        </p>

        <h2 className={styles['home-additional-services__subtitle']}>
          Usługi Dodatkowe
        </h2>
        <hr className={styles['home-additional-services__divider']} />
      </div>
      <div className={styles['home-additional-services__section']}>
        <div className={styles['home-additional-services__item']}>
          <div className={styles['home-additional-services__icon']}>
            <Image src={CarIcon} alt="Ikona samochodu" loading="lazy" />
          </div>
          <div className={styles['home-additional-services__details']}>
            <h4 className={styles['home-additional-services__service-title']}>
              Samochód zastępczy
            </h4>
            <p
              className={
                styles['home-additional-services__service-description']
              }
            >
              Potrzebujesz auta na czas naprawy? Oferujemy samochody zastępcze,
              abyś mógł kontynuować codzienne obowiązki podczas gdy Twoje auto
              jest w serwisie. Nasze pojazdy są w pełni ubezpieczone i sprawne
              technicznie.
            </p>
            <WhiteButton
              buttonStyles={styles['home-additional-services__button-desktop']}
              title="Dowiedz się więcej"
            />
          </div>
        </div>
        <hr className={styles['home-additional-services__item-divider']} />
        <WhiteButton
          buttonStyles={styles['home-additional-services__button']}
          title="Dowiedz się więcej"
        />
      </div>
      <div className={styles['home-additional-services__section']}>
        <div className={styles['home-additional-services__item']}>
          <div className={styles['home-additional-services__icon']}>
            <Image
              src={RoadsideAssistIcon}
              alt="Ikona samochodu"
              loading="lazy"
            />
          </div>
          <div className={styles['home-additional-services__details']}>
            <h4 className={styles['home-additional-services__service-title']}>
              Pomoc drogowa
            </h4>
            <p
              className={
                styles['home-additional-services__service-description']
              }
            >
              Potrzebujesz pomoc na drodze? Nasza pomoc drogowa jest dostępna
              24/7. Oferujemy holowanie, rozruch baterii, dostarczenie paliwa
              oraz podstawową pomoc techniczną. Działamy na terenie całego
              Śląska.
            </p>
            <WhiteButton
              buttonStyles={styles['home-additional-services__button-desktop']}
              title="Dowiedz się więcej"
            />
          </div>
        </div>
        <hr className={styles['home-additional-services__item-divider']} />
        <WhiteButton
          buttonStyles={styles['home-additional-services__button']}
          title="Dowiedz się więcej"
        />
      </div>
    </div>
  );
};
