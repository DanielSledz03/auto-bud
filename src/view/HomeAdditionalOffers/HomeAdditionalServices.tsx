import Image from 'next/image';

import CarIcon from '@/../public/assets/icons/carIcon.svg';
import RoadsideAssistIcon from '@/../public/assets/icons/roadsideAssits.svg';
import WhiteButton from '@/components/WhiteButton/WhiteButton';

import styles from './HomeAdditionalServices.module.scss';

const HomeAdditionalServices = () => {
  return (
    <div className={styles['home-additional-services']}>
      <div className={styles['home-additional-services__header']}>
        <h5 className={styles['home-additional-services__title']}>
          Co jeszcze oferujemy?
        </h5>

        <h4 className={styles['home-additional-services__subtitle']}>
          Usługi Dodatkowe
        </h4>
        <hr className={styles['home-additional-services__divider']} />
      </div>
      <div className={styles['home-additional-services__section']}>
        <div className={styles['home-additional-services__item']}>
          <div className={styles['home-additional-services__icon']}>
            <Image src={CarIcon} alt="Car Icon" />
          </div>
          <div className={styles['home-additional-services__details']}>
            <p className={styles['home-additional-services__service-title']}>
              Samochód zastępczy
            </p>
            <p
              className={
                styles['home-additional-services__service-description']
              }
            >
              Potrzebujesz auta na czas naprawy?
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
            <Image src={RoadsideAssistIcon} alt="Car Icon" />
          </div>
          <div className={styles['home-additional-services__details']}>
            <p className={styles['home-additional-services__service-title']}>
              Pomoc drogowa
            </p>
            <p
              className={
                styles['home-additional-services__service-description']
              }
            >
              Potrzebujesz pomoc na drodze?
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

export default HomeAdditionalServices;
