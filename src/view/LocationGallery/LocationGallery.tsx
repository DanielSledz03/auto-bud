'use client';

import dynamic from 'next/dynamic';
import Image, { StaticImageData } from 'next/image';
import { useRef, useState } from 'react';

import styles from './LocationGalleru.module.scss';

interface LocationGalleryProps {
  images: StaticImageData[];
  title: string;
  description: string;
}

const SlideshowLightbox = dynamic(
  () => import('lightbox.js-react').then(mod => mod.SlideshowLightbox),
  {
    ssr: false,
  },
);

export const LocationGallery = ({
  images,
  title,
  description,
}: LocationGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]); // Initialize refs as an array

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (refs.current && refs.current[index]) {
      refs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  return (
    <div className={styles['location-gallery']}>
      <h5 className={styles['location-gallery__title']}>{title}</h5>
      <h4 className={styles['location-gallery__subtitle']}>{description}</h4>
      <hr className={styles['location-gallery__divider']} />

      <div className={styles['location-gallery__gallery']}>
        <SlideshowLightbox
          lightboxIdentifier={'lightbox' + images.length}
          framework="next"
          images={images}
        >
          <div
            className={styles['location-gallery__images']}
            ref={el => {
              if (el) refs.current.push(el);
            }}
          >
            {images.length > 0 &&
              images.map((image, index) => (
                <div
                  key={image.src}
                  className={styles['location-gallery__image']}
                  ref={(el: HTMLDivElement | null) => {
                    if (el) refs.current[index] = el;
                  }}
                >
                  <Image
                    width={500}
                    height={300}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                    src={image.src}
                    alt="Jeden z naszych obiektów"
                    data-lightboxjs={'lightbox' + images.length}
                  />
                </div>
              ))}
          </div>
        </SlideshowLightbox>
      </div>

      <div className={styles['gallery__pagination']}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles['gallery__pagination-dot']} ${
              index === activeIndex
                ? styles['gallery__pagination-dot--active']
                : ''
            }`}
            onClick={() => handleDotClick(index)}
            onKeyDown={() => handleDotClick(index)}
            role="button"
            tabIndex={index}
          ></div>
        ))}
      </div>
    </div>
  );
};
