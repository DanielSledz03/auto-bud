import Image from 'next/image';

import HeaderImageDesktop from '@/../public/assets/images/general/index/headerIndexPageDesktop.png';
import HeaderImageMobile from '@/../public/assets/images/general/index/headerIndexPageMobile.png';
import LocationItem from '@/components/LocationItem/LocationItem';

import styles from './HomeHeader.module.scss';

const locations = [
  {
    heading: 'Świętochłowice',
    heading2: '',
    details: ['Stacja Kontroli Pojazdów', 'Warsztat Samochodowy'],
    url: '/swietochlowice',
  },
  {
    heading: 'Ruda Śląska',
    heading2: 'Godula',
    details: ['Okręgowa Stacja Kontroli Pojazdów', 'Myjnia bezdotykowa'],
    url: '/godula',
  },
  {
    heading: 'Ruda Śląska',
    heading2: 'Bykowina',
    details: ['Stacja Kontroli Pojazdów'],
    url: '/bykowina',
  },
];

const HomeHeader = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={HeaderImageMobile} alt="header" />
      <Image
        className={styles.imageDesktop}
        src={HeaderImageDesktop}
        alt="header"
      />

      <h1 className={styles.heading}>
        Autoryzowany
        <br /> Bosch Car Service
      </h1>

      <div className={styles.location__container}>
        <p className={styles.location__text}>Wybierz lokalizację</p>
        <div className={styles.location__wrapper}>
          {locations.map((location, index) => (
            <LocationItem
              key={index}
              heading={location.heading}
              heading2={location.heading2}
              details={location.details}
              url={location.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
