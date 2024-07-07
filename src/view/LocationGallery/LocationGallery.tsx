import Image, { StaticImageData } from 'next/image';

import styles from './LocationGalleru.module.scss';

interface LocationGalleryProps {
  images: StaticImageData[];
}

const LocationGallery = ({ images }: LocationGalleryProps) => {
  return (
    <div className={styles['location-gallery']}>
      <h5 className={styles['location-gallery__title']}>Galeria zdjęć</h5>

      <h4 className={styles['location-gallery__subtitle']}>
        Zobacz jak wygląda obiekt
      </h4>

      <hr className={styles['location-gallery__divider']} />

      <div className={styles['opinions']}>
        {images.map((image, index) => (
          <div key={index} className={styles['opinions__item']}>
            <Image src={image} alt="Galeria" />
          </div>
        ))}
      </div>

      <div className={styles['opinions__pagination']}>
        {images.map((review, index) => (
          <div key={index} className={styles['opinions__pagination-dot']}></div>
        ))}
      </div>
    </div>
  );
};

export default LocationGallery;
