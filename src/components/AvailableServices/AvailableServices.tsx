import Image from 'next/image';

import CarRepairIcon from '@/../public/assets/icons/locations/mechanic.svg';
import OfficeIcon from '@/../public/assets/icons/locations/office.svg';
import StationIcon from '@/../public/assets/icons/locations/vehicleStation.svg';
import RedArrow from '@/../public/assets/icons/redArrowTopRight.svg';

import styles from './AvailableServices.module.scss';

interface AvailableServicesProps {
  isOffice: boolean;
  isStation: boolean;
  isCarRepair: boolean;
}

const AvailableServices = ({
  isOffice,
  isCarRepair,
  isStation,
}: AvailableServicesProps) => {
  return (
    <div className={styles.availableServices}>
      <h2 className={styles.availableServices__title}>
        <Image
          className={styles.availableServices__arrow}
          src={RedArrow}
          alt="Czerwona strzałka"
        />
        Dostępne usługi
      </h2>

      <div className={styles.availableServices__services__grid}>
        {isOffice && (
          <div className={styles.availableServices__service}>
            <div className={styles.availableServices__service__icon}>
              <Image
                src={OfficeIcon}
                alt="Ikona przedstawiająca profesjonalną obsługę klienta"
              />
            </div>

            <div className={styles.availableServices__service__text}>
              Biuro Obsługi Klienta
            </div>
          </div>
        )}

        {isStation && (
          <div className={styles.availableServices__service}>
            <div className={styles.availableServices__service__icon}>
              <Image src={StationIcon} alt="Stacja Diagnostyczna" />
            </div>
            <div className={styles.availableServices__service__text}>
              Stacja Kontroli Pojazdów
            </div>
          </div>
        )}

        {isCarRepair && (
          <div className={styles.availableServices__service}>
            <div className={styles.availableServices__service__icon}>
              <Image src={CarRepairIcon} alt="Mechanik Samochodowy" />
            </div>
            <div className={styles.availableServices__service__text}>
              Warsztat Samochodowy
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { AvailableServices };
