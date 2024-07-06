import Image from 'next/image';

import OpinionsBackgroundDesktopImage from '@/../public/assets/images/general/index/opinionsBackgroundDesktop.png';
import OpinionsBackgroundImage from '@/../public/assets/images/general/index/opinionsBackgroundMobile.png';

import styles from './HomeOpinions.module.scss';

const reviews = [
  {
    name: 'Adam',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis quam in purus pharetra dictum. Donec semper mattis magna, sit amet scelerisque eros tristique eget. In auctor nunc nisl, at dapibus velit lacinia non.',
    department: 'Okręgowa Stacja Kontroli Pojazdów',
  },
  {
    name: 'Monika',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis quam in purus pharetra dictum. Donec semper mattis magna, sit amet scelerisque eros tristique eget. In auctor nunc nisl, at dapibus velit lacinia non.',
    department: 'Samochód zastępczy',
  },
  {
    name: 'Marek',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis quam in purus pharetra dictum. Donec semper mattis magna, sit amet scelerisque eros tristique eget. In auctor nunc nisl, at dapibus velit lacinia non.',
    department: 'Myjnia bezdotykowa',
  },
  {
    name: 'Marek',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis quam in purus pharetra dictum. Donec semper mattis magna, sit amet scelerisque eros tristique eget. In auctor nunc nisl, at dapibus velit lacinia non.',
    department: 'Myjnia bezdotykowa',
  },
];

const HomeOpinions = () => {
  return (
    <div className={styles['home-opinions']}>
      <div className={styles['home-opinions__background']}>
        <Image
          className={styles['home-opinions__background-mobile']}
          src={OpinionsBackgroundImage}
          alt="Opinie klientów"
        />
        <Image
          className={styles['home-opinions__background-desktop']}
          src={OpinionsBackgroundDesktopImage}
          alt="Opinie klientów"
        />
      </div>
      <h5 className={styles['home-opinions__title']}>Opinie klientów</h5>

      <h4 className={styles['home-opinions__subtitle']}>
        Co klienci mówią o nas?
      </h4>

      <hr className={styles['home-opinions__divider']} />

      <div className={styles['opinions']}>
        {reviews.map((review, index) => (
          <div key={index} className={styles['opinions__item']}>
            <div className={styles['opinions__rating-container']}>
              <p className={styles['opinions__name']}>{review.name}</p>
              <div className={styles['opinions__rating']}>
                {[0, 1, 2, 3, 4].map(star => (
                  <span key={star} className={styles['opinions__rating-star']}>
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className={styles['opinions__department-container']}>
              <p className={styles['opinions__department']}>
                Opinia dotycząca:
              </p>

              <p className={styles['opinions__department-bold']}>
                {review.department}
              </p>
            </div>

            <p className={styles['opinions__review']}>{review.review}</p>
          </div>
        ))}
      </div>

      <div className={styles['opinions__pagination']}>
        {reviews.map((review, index) => (
          <div key={index} className={styles['opinions__pagination-dot']}></div>
        ))}
      </div>
    </div>
  );
};

export default HomeOpinions;
