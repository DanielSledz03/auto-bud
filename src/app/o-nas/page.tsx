import { TextHeader } from '@/components';
import GalleryImage1 from '@/images/godula/gallery/1.jpg';
import GalleryImage2 from '@/images/godula/gallery/2.jpg';
import GalleryImage3 from '@/images/godula/gallery/3.jpg';
import { AboutUs, AboutUsNumbers, HomeOpinions, LocationGallery } from '@/view';

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
