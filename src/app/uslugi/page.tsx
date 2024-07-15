import CarWashIcon from '@/../public/assets/icons/locations/carWash.svg';
import MechanicIcon from '@/../public/assets/icons/locations/mechanic.svg';
import RentCarIcon from '@/../public/assets/icons/locations/rentCar.svg';
import StationIcon from '@/../public/assets/icons/locations/vehicleStation.svg';
import RoadAssitanceDesktop from '@/../public/assets/images/general/services/roadAssistanceDesktop.png';
import GalleryImage1 from '@/../public/assets/images/godula/gallery/1.jpg';
import GalleryImage2 from '@/../public/assets/images/godula/gallery/2.jpg';
import GalleryImage3 from '@/../public/assets/images/godula/gallery/3.jpg';
import ObjectInfoCard from '@/components/ObjectInfoCard/ObjectInfoCard';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import TextHeader from '@/components/TextHeader/TextHeader';
import LocationGallery from '@/view/LocationGallery/LocationGallery';

const Uslugi = () => {
  return (
    <>
      <TextHeader title="Nasze usługi">
        Poznaj szeroką gamę naszych usług motoryzacyjnych, które zaspokoją
        wszystkie potrzeby Twojego pojazdu. <br /> Nasza oferta to synonim
        jakości, profesjonalizmu i zaufania.
      </TextHeader>
      <ObjectInfoCard
        title="Stacja Kontroli Pojazdów"
        locations={[
          'Ruda Śląska, Godula',
          'Ruda Śląska, Bykowina',
          'Świętochłowice',
        ]}
        description="Nasze stacje kontroli pojazdów to miejsca, gdzie bezpieczeństwo spotyka się z precyzją. Zadbaj o swoje auto w jednym z naszych profesjonalnych punktów i podróżuj bez obaw."
        services={[
          {
            name: 'Przegląd techniczny',
            price: '100zł',
          },
          {
            name: 'Diagnostyka komputerowa',
            price: '50zł',
          },
          {
            name: 'Naprawa zawieszenia',
            price: 'od 200zł',
          },
        ]}
        icon={StationIcon}
      />

      <ObjectInfoCard
        title="Warsztat Samochodowy"
        locations={['Świętochłowice']}
        description="Nasz warsztat samochodowy to królestwo mechaniki i nowoczesnych technologii. Powierz swoje auto w ręce naszych doświadczonych specjalistów i ciesz się bezproblemową jazdą."
        services={[
          {
            name: 'Przegląd techniczny',
            price: '100 zł',
          },
          {
            name: 'Diagnostyka komputerowa',
            price: '50 zł',
          },
          {
            name: 'Naprawa zawieszenia',
            price: 'od 200 zł',
          },
        ]}
        icon={MechanicIcon}
      />

      <ObjectInfoCard
        title="Myjnia bezdotykowa"
        locations={['Ruda Śląska, Godula']}
        description="Nasza myjnia bezdotykowa to idealne miejsce, by Twój samochód lśnił jak nowy. Szybko, skutecznie i bezpiecznie dla lakieru - oto nasza obietnica."
        services={[
          {
            name: '30 sekund mycia',
            price: '1 zł',
          },
        ]}
        icon={CarWashIcon}
      />

      <ObjectInfoCard
        title="Samochód zastępczy"
        description="Nie pozwól, by naprawa samochodu pokrzyżowała Twoje plany. Skorzystaj z naszej oferty wynajmu samochodu zastępczego i ciesz się mobilnością w każdej sytuacji."
        services={[
          {
            name: 'Dzień wypożyczenia',
            price: '200 zł',
          },
        ]}
        icon={RentCarIcon}
      />
      <LocationGallery
        title="Auto zastępcze"
        description="Jakim samochodem dysponujemy"
        images={[GalleryImage1, GalleryImage2, GalleryImage3]}
      />

      <ObjectInfoCard
        title="Pomoc drogowa"
        description="Nie pozwól, by naprawa samochodu pokrzyżowała Twoje plany. Skorzystaj z naszej oferty wynajmu samochodu zastępczego i ciesz się mobilnością w każdej sytuacji."
        services={[
          {
            name: 'Dzień wypożyczenia',
            price: '200 zł',
          },
        ]}
        icon={RentCarIcon}
      />

      <ServiceCard
        title="W razie potrzeby"
        subtitle="Pomoc drogowa 24h"
        description={
          <>
            KOD STACJI: SRS/005
            <br />
            <br />
            Nasza Stacja Kontroli Pojazdów oferuje kompleksowe przeglądy
            techniczne, które zapewniają, że Twój pojazd jest w pełni sprawny i
            bezpieczny do jazdy. Profesjonalizm, precyzja i nowoczesne
            technologie to nasze atuty.
          </>
        }
        imageMobile={RoadAssitanceDesktop}
        imageDesktop={RoadAssitanceDesktop}
      />
    </>
  );
};

export default Uslugi;
