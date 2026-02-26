'use client';

import dynamic from 'next/dynamic';
import Image, { type StaticImageData } from 'next/image';

type AboutGalleryImage = {
  src: StaticImageData;
  alt: string;
};

type AboutGalleryPreviewProps = {
  images: AboutGalleryImage[];
};

const SlideshowLightbox = dynamic(
  () => import('lightbox.js-react').then(mod => mod.SlideshowLightbox),
  {
    ssr: false,
  },
);

const MOBILE_IMAGES_LIMIT = 3;
const DESKTOP_IMAGES_LIMIT = 9;

export const AboutGalleryPreview = ({ images }: AboutGalleryPreviewProps) => {
  if (!images.length) {
    return null;
  }

  const mobileImages = images.slice(0, MOBILE_IMAGES_LIMIT);
  const desktopImages = images.slice(0, DESKTOP_IMAGES_LIMIT);

  return (
    <>
      <div className="lg:hidden">
        <SlideshowLightbox
          framework="next"
          lightboxIdentifier="about-gallery-mobile"
          images={mobileImages.map(image => image.src)}
        >
          <div className="mt-6 grid gap-4">
            {mobileImages.map((image, index) => (
              <article
                key={`mobile-${image.src.src}-${index}`}
                className="overflow-hidden rounded-[10px] border border-lightGray2"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="cursor-zoom-in object-cover"
                    sizes="100vw"
                    data-lightboxjs="about-gallery-mobile"
                  />
                </div>
              </article>
            ))}
          </div>
        </SlideshowLightbox>
      </div>

      <div className="hidden lg:block">
        <SlideshowLightbox
          framework="next"
          lightboxIdentifier="about-gallery-desktop"
          images={desktopImages.map(image => image.src)}
        >
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {desktopImages.map((image, index) => (
              <article
                key={`desktop-${image.src.src}-${index}`}
                className="overflow-hidden rounded-[10px] border border-lightGray2"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="cursor-zoom-in object-cover"
                    sizes="33vw"
                    data-lightboxjs="about-gallery-desktop"
                  />
                </div>
              </article>
            ))}
          </div>
        </SlideshowLightbox>
      </div>
    </>
  );
};
