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
        description={`KOD STACJI: SRS/005<br /><br />Oferuje Dynamiczną wymianę oleju w automatycznych skrzyniach biegu. <br />
  Co to takiego ?<br /><br />
  Dynamiczna wymiana oleju w automatycznej skrzyni biegów jest procesem, który umożliwia wymianę CAŁEGO oleju w układzie. Przy wymianie metodami tradycyjnymi (grawitacyjnie) wymieniane jest zaledwie 40-60% płynów. Reszta pozostaje w przewodach, sterowniku, konwerterze. Tak naprawdę, wymiana tradycyjna to rozmieszanie nowego oleju w starym.`}
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
        description={`Oferuje Dynamiczną wymianę oleju w automatycznych skrzyniach biegów.<br />
  Co to takiego?<br /><br />
  Dynamiczna wymiana oleju w automatycznej skrzyni biegów jest procesem, który umożliwia wymianę CAŁEGO oleju w układzie. Przy wymianie metodami tradycyjnymi (grawitacyjnie) wymieniane jest zaledwie 40-60% płynów. Reszta pozostaje w przewodach, sterowniku, konwerterze. Tak naprawdę, wymiana tradycyjna to rozmieszanie nowego oleju w starym.`}
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
          'Centrum motoryzacyjne Grupy AUTO-BUD w Świętochłowicach wyposażone jest także w nowoczesne Biuro Obsługi Klienta, które koordynuje pracę całego centrum zapewniając najwyższą jakość obsługi, wygodę i szybkość działania. Podczas oczekiwania na odbiór samochodu klient może skorzystać z drobnego poczęstunku, gorących lub zimnych napoi oraz oglądać, co się dzieje z jego samochodem, dzięki podglądowi na żywo warsztatu. Goście BOK mają także bezpłatny dostęp do Wi-Fi.'
        }
        imageDesktop={OfficeDesktop}
        imageMobile={OfficeMobile}
      />
    </main>
  );
};

export default SwietochlowicePage;
