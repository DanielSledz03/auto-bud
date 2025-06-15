import type { Metadata } from 'next';

import { TextHeader } from '@/components';
import GalleryImage1 from '@/images/godula/gallery/1.jpg';
import GalleryImage2 from '@/images/godula/gallery/2.jpg';
import GalleryImage3 from '@/images/godula/gallery/3.jpg';
import { AboutUs, AboutUsNumbers, HomeOpinions, LocationGallery } from '@/view';

export const metadata: Metadata = {
  title: 'O nas - Auto-Bud Bosch Car Service | Historia i doświadczenie',
  description:
    'Poznaj historię Auto-Bud Bosch Car Service. Kompleks obiektów motoryzacyjnych w Rudzie Śląskiej i Świętochłowicach. Autoryzowany serwis Bosch z wieloletnim doświadczeniem.',
  keywords: [
    'o auto-bud',
    'historia auto-bud',
    'auto-bud firma',
    'bosch car service historia',
    'serwis samochodowy ruda śląska',
    'serwis samochodowy świętochłowice',
    'autoryzowany serwis bosch',
    'doświadczenie warsztat',
    'grupa auto-bud',
    'obiekty motoryzacyjne',
  ],
  openGraph: {
    title: 'O nas - Auto-Bud Bosch Car Service',
    description:
      'Poznaj historię Auto-Bud Bosch Car Service. Kompleks obiektów motoryzacyjnych w Rudzie Śląskiej i Świętochłowicach.',
    type: 'website',
    url: 'https://www.auto-bud.com.pl/o-nas',
  },
  alternates: {
    canonical: 'https://www.auto-bud.com.pl/o-nas',
  },
};

const ONas = () => {
  return (
    <>
      <TextHeader title="O naszej firmie">
        Grupa AUTO-BUD to kompleks obiektów motoryzacyjnych mieszczących się w
        Rudzie Śląskiej i Świętochłowicach.
      </TextHeader>
      <AboutUsNumbers />
      <AboutUs />
      <LocationGallery
        title="Galeria zdjęć"
        description="Nasze obiekty w Rudzie Śląskiej i Świętochłowicach"
        images={[GalleryImage1, GalleryImage2, GalleryImage3]}
      />
      <HomeOpinions />
    </>
  );
};

export default ONas;
