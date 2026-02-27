'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

interface CarWashGalleryLightboxProps {
  images: GalleryImage[];
}

const CarWashGalleryLightbox = ({ images }: CarWashGalleryLightboxProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = useMemo(
    () => (activeIndex === null ? null : images[activeIndex]),
    [activeIndex, images],
  );

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex(prev => {
          if (prev === null) {
            return prev;
          }
          return prev === 0 ? images.length - 1 : prev - 1;
        });
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex(prev => {
          if (prev === null) {
            return prev;
          }
          return prev === images.length - 1 ? 0 : prev + 1;
        });
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <>
      <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <article
            key={`${image.src}-${index}`}
            className="mb-4 break-inside-avoid overflow-hidden rounded-[10px] border border-lightGray2 bg-lightGray"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${image.alt} - otwórz podgląd`}
              className="block w-full"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
          </article>
        ))}
      </div>

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[1000] bg-black/90 p-4 md:p-8"
        >
          <button
            type="button"
            onClick={event => {
              event.stopPropagation();
              setActiveIndex(null);
            }}
            className="absolute right-4 top-4 rounded bg-white px-3 py-2 text-sm font-medium text-darkGray"
          >
            Zamknij
          </button>

          <div className="flex h-full items-center justify-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={event => {
                event.stopPropagation();
                setActiveIndex(prev => {
                  if (prev === null) {
                    return prev;
                  }
                  return prev === 0 ? images.length - 1 : prev - 1;
                });
              }}
              aria-label="Poprzednie zdjęcie"
              className="rounded bg-white px-3 py-2 text-sm font-semibold text-darkGray"
            >
              ←
            </button>

            <figure
              className="max-w-[90vw]"
              onClick={event => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                className="max-h-[82vh] w-auto max-w-full rounded-[10px]"
              />
              <figcaption className="mt-2 text-center text-xs text-white/90">
                {(activeIndex ?? 0) + 1} / {images.length}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={event => {
                event.stopPropagation();
                setActiveIndex(prev => {
                  if (prev === null) {
                    return prev;
                  }
                  return prev === images.length - 1 ? 0 : prev + 1;
                });
              }}
              aria-label="Następne zdjęcie"
              className="rounded bg-white px-3 py-2 text-sm font-semibold text-darkGray"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export type { GalleryImage };
export default CarWashGalleryLightbox;
