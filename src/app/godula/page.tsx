import DesktopBackground from '@/../public/assets/images/godula/BackgroundDesktop.png';
import MobileBackground from '@/../public/assets/images/godula/BackgroundMobile.png';
import ImageDekstop from '@/../public/assets/images/swietochlowice/MechanicDesktop.png';
import ImageMobile from '@/../public/assets/images/swietochlowice/MechanicMobile.png';
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
    </main>
  );
};

export default SwietochlowicePage;
