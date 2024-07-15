import GalleryImage1 from '@/../public/assets/images/godula/gallery/1.jpg';
import GalleryImage2 from '@/../public/assets/images/godula/gallery/2.jpg';
import GalleryImage3 from '@/../public/assets/images/godula/gallery/3.jpg';
import TextHeader from '@/components/TextHeader/TextHeader';
import AboutUs from '@/view/AboutUs/AboutUs';
import AboutUsNumbers from '@/view/AboutUsNumbers/AboutUsNumbers';
import HomeOpinions from '@/view/HomeOpinions/HomeOpinions';
import LocationGallery from '@/view/LocationGallery/LocationGallery';
const ONas = () => {
  return (
    <main>
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
    </main>
  );
};

export default ONas;
