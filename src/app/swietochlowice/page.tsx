import ImageMobile from '@/../public/assets/images/swietochlowice//Group 214.png';
import DesktopBackground from '@/../public/assets/images/swietochlowice/backgroundHeaderDesktop.png';
import MobileBackground from '@/../public/assets/images/swietochlowice/backroundMobile.png';
import ImageDekstop from '@/../public/assets/images/swietochlowice/Group 94 (1).png';
import AvailableServices from '@/components/AvailableServices/AvailableServices';
import LocationHeader from '@/components/LocationHeader/LocationHeader';
import ServiceCard from '@/components/ServiceCard/ServiceCard';

const SwietochlowicePage = () => {
  return (
    <main className="">
      <LocationHeader
        mobileBackgroundUrl={MobileBackground}
        desktopBackgroundUrl={DesktopBackground}
        city="Świętochłowice"
        district="Godula"
        street="ul. Katowicka 73"
        postalCode="Świętochłowice 41-600"
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
    </main>
  );
};

export default SwietochlowicePage;
