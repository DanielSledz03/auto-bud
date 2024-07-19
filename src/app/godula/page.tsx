import Image from 'next/image';

import DesktopBackground from '@/../public/assets/images/godula/BackgroundDesktop.png';
import MobileBackground from '@/../public/assets/images/godula/BackgroundMobile.png';
import CarWashDesktop from '@/../public/assets/images/godula/CarWashDesktop.png';
import CarWashMobile from '@/../public/assets/images/godula/CarWashMobile.png';
import GalleryImage1 from '@/../public/assets/images/godula/gallery/1.jpg';
import GalleryImage2 from '@/../public/assets/images/godula/gallery/2.jpg';
import GalleryImage3 from '@/../public/assets/images/godula/gallery/3.jpg';
import UEGraphic from '@/../public/assets/images/godula/ue.png';
import ImageDekstop from '@/../public/assets/images/swietochlowice/MechanicDesktop.png';
import ImageMobile from '@/../public/assets/images/swietochlowice/MechanicMobile.png';
import AvailableServices from '@/components/AvailableServices/AvailableServices';
import LocationHeader from '@/components/LocationHeader/LocationHeader';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import LocationGallery from '@/view/LocationGallery/LocationGallery';
import Packages from '@/view/Packages/Packages';

const GodulaPage = () => {
  return (
    <main className="">
      <LocationHeader
        mobileBackgroundUrl={MobileBackground}
        desktopBackgroundUrl={DesktopBackground}
        city="Ruda Śląska"
        district="Godula"
        street="ul. Stara 1"
        postalCode="Ruda Śląska 41-703"
        googleMapsLink="https://maps.app.goo.gl/uevhCXnHGWYJm6NX8"
      />
      <AvailableServices
        isOffice={false}
        isStation={true}
        isCarRepair={false}
      />
      <ServiceCard
        title="Omega"
        subtitle="Okręgowa Stacja Kontroli Pojazdów"
        openHours={[
          {
            day: 'Pn - Pt',
            hours: '07:00 - 19:00',
          },
          {
            day: 'Sobota',
            hours: '08:00 - 14:00',
          },
        ]}
        description={
          <>
            Okręgowa Stacja Kontroli Pojazdów Omega przeprowadza badania
            techniczne wszystkich pojazdów zarejestrowanych.
            <br />
            <br /> SPRAWDZAMY WSZYSTKO, CO JEŹDZI! <br />
            <br /> Stacja Kontroli Pojazdów obsługuje także pojazdy wyposażone w
            instalacje LPG. Ponadto Okręgowa Stacja Kontroli Pojazdów Omega
            stanowi gratkę dla fanów Agenta 007. We wnętrzu stacji można
            zobaczyć przekrój plakatów promujących poszczególne filmy ze słynnym
            agentem
          </>
        }
        imageMobile={ImageMobile}
        imageDesktop={ImageDekstop}
      />
      <Packages />

      <ServiceCard
        title="Myjnia bezdotykowa"
        subtitle="Beta"
        openHours={[
          {
            day: 'Codziennie',
            hours: '07:00 - 22:00',
          },
        ]}
        description={
          <>
            Nasza myjnia bezdotykowa na Śląsku oferuje najwyższą jakość mycia w
            krótkim czasie, z wykorzystaniem nowoczesnych technologii
            chroniących środowisko i obniżających koszty. Dzięki temu możemy
            zaoferować konkurencyjne ceny dla naszych klientów.
            <br />
            <br />
            Myjnia oferuje 5 zoptymalizowanych programów, które zapewniają
            dokładne umycie i ochronę karoserii przed zabrudzeniem. Szczegóły
            dotyczące programów znajdziesz poniżej.
            <br />
            <br />
            Przed pierwszym myciem zapoznaj się z Regulaminem.
            <br />
            <br />
            <p className="text-[10px] italic">
              PROJEKT WSPÓŁFINANSOWANY PRZEZ UNIĘ EUROPEJSKĄ Z EUROPEJSKIEGO
              FUNDUSZU ROZWOJU REGIONALNEGO W RAMACH REGIONALNEGO PROGRAMU
              OPERACYJNEGO WOJEWODZTWA ŚLĄSKIEGO NA LATA 2007-2013. Regionalny
              Program Operacyjny Województwa Śląskiego – realna odpowiedź na
              realne potrzeby Firma „AUTO-BUD” Spółka z o.o. jest beneficjentem
              projektu „Budowa myjni bezdotykowej TechWash w wersji solarnej,
              tj. z kolektorami słonecznymi wspomagającymi pracę układu
              grzewczego przy Okręgowej Stacji Kontroli Pojazdów w Rudzie
              Śląskiej, ul. Stara 1.” Wartość projektu: 1 207 800,00 zł Wartość
              dofinansowania: 200 000 zł Informacje źródłowe na temat
              Regionalnego Programu Operacyjnego Województwa Śląskiego na lata
              2007-2013 znajdują się na stronie www.rpo.silesia-region.pl
            </p>
            <Image
              src={UEGraphic}
              alt="PROJEKT WSPÓŁFINANSOWANY PRZEZ UNIĘ EUROPEJSKĄ Z EUROPEJSKIEGO
              FUNDUSZU ROZWOJU REGIONALNEGO W RAMACH REGIONALNEGO PROGRAMU
              OPERACYJNEGO WOJEWODZTWA ŚLĄSKIEGO NA LATA 2007-2013."
            />
          </>
        }
        imageDesktop={CarWashDesktop}
        imageMobile={CarWashMobile}
      />

      <LocationGallery
        title="Galeria zdjęć"
        description="Zobacz jak wygląda obiekt"
        images={[
          GalleryImage1,
          GalleryImage2,
          GalleryImage3,
          GalleryImage1,
          GalleryImage2,
          GalleryImage3,
        ]}
      />
    </main>
  );
};

export default GodulaPage;
