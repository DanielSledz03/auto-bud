import DesktopBackground from '@/../public/assets/images/swietochlowice/backgroundHeaderDesktop.png';
import MobileBackground from '@/../public/assets/images/swietochlowice/backroundMobile.png';
import CarRepairDesktop from '@/../public/assets/images/swietochlowice/carRepairDesktopo.png';
import CarRepairMobile from '@/../public/assets/images/swietochlowice/carRepairMobile.png';
import ImageDekstop from '@/../public/assets/images/swietochlowice/MechanicDesktop.png';
import ImageMobile from '@/../public/assets/images/swietochlowice/MechanicMobile.png';
import OfficeDesktop from '@/../public/assets/images/swietochlowice/officeDesktop.png';
import OfficeMobile from '@/../public/assets/images/swietochlowice/officeMobile.png';
import AvailableServices from '@/components/AvailableServices/AvailableServices';
import LocationHeader from '@/components/LocationHeader/LocationHeader';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import Packages from '@/view/Packages/Packages';

const SwietochlowicePage = () => {
  return (
    <main className="">
      <LocationHeader
        mobileBackgroundUrl={MobileBackground}
        desktopBackgroundUrl={DesktopBackground}
        city="Świętochłowice"
        district="Centrum"
        street="ul. Katowicka 73"
        postalCode="Świętochłowice 41-600"
        googleMapsLink="https://maps.app.goo.gl/PQVm43rL5RzVfys77"
      />
      <AvailableServices isOffice={true} isStation={true} isCarRepair={true} />
      <ServiceCard
        title="Gamma"
        subtitle="Stacja Kontroli Pojazdów"
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
            Nasza Stacja Kontroli Pojazdów oferuje kompleksowe przeglądy
            techniczne, które zapewniają, że Twój pojazd jest w pełni sprawny i
            bezpieczny do jazdy. Profesjonalizm, precyzja i nowoczesne
            technologie to nasze atuty.
          </>
        }
        imageMobile={ImageMobile}
        imageDesktop={ImageDekstop}
      />
      <Packages />
      <ServiceCard
        title="Warsztat Samochodowy"
        subtitle="Lambda"
        openHours={[
          {
            day: 'Pn - Pt',
            hours: '07:00 - 18:30',
          },
          {
            day: 'Sobota',
            hours: '08:00 - 14:00',
          },
        ]}
        description={
          <>
            Nasz warsztat samochodowy to miejsce, gdzie pasja do motoryzacji
            łączy się z najnowszymi technologiami. Oferujemy szeroki zakres
            usług, od przeglądów technicznych po skomplikowane naprawy
            mechaniczne. Nasz zespół doświadczonych mechaników gwarantuje, że
            każda naprawa będzie wykonana profesjonalnie i terminowo.
          </>
        }
        imageDesktop={CarRepairDesktop}
        imageMobile={CarRepairMobile}
      />

      <ServiceCard
        title="Biuro Obsługi Klienta"
        subtitle="Biuro"
        openHours={[
          {
            day: 'Pn - Pt',
            hours: '07:00 - 18:30',
          },
          {
            day: 'Sobota',
            hours: '08:00 - 14:00',
          },
        ]}
        description={
          <>
            Nasze nowoczesne Biuro Obsługi Klienta w centrum motoryzacyjnym
            Grupy AUTO-BUD w Świętochłowicach to miejsce, gdzie najwyższa jakość
            obsługi łączy się z wygodą i szybkością działania. Nasz zespół
            koordynuje pracę całego centrum, zapewniając, że każda wizyta
            przebiega sprawnie i komfortowo. <br />
            <br /> Podczas oczekiwania na odbiór samochodu, możesz skorzystać z
            naszego kawomatu. Dodatkowo, nasi goście mają dostęp do bezpłatnego
            Wi-Fi, co pozwala na wygodne korzystanie z internetu w trakcie
            oczekiwania.
          </>
        }
        imageDesktop={OfficeDesktop}
        imageMobile={OfficeMobile}
      />
    </main>
  );
};

export default SwietochlowicePage;
