import DesktopBackground from '@/images/swietochlowice/backgroundHeaderDesktop.png';
import MobileBackground from '@/images/swietochlowice/backroundMobile.png';
import ImageDekstop from '@/images/swietochlowice/MechanicDesktop.png';
import ImageMobile from '@/images/swietochlowice/MechanicMobile.png';

const locationHeaderProps = {
  mobileBackgroundUrl: MobileBackground,
  desktopBackgroundUrl: DesktopBackground,
  city: 'Ruda Śląska',
  district: 'Bykowina',
  street: 'ul. Szpaków 51',
  postalCode: 'Ruda Śląska 41-705',
  googleMapsLink: 'https://maps.app.goo.gl/UFvFUSnpor4dTKHd6',
};

const availableServicesProps = {
  isOffice: false,
  isStation: true,
  isCarRepair: false,
};

const serviceCardProps = {
  title: 'Alfa',
  subtitle: 'Stacja Kontroli Pojazdów',
  openHours: [
    {
      day: 'Pn - Pt',
      hours: '07:00 - 19:00',
    },
    {
      day: 'Sobota',
      hours: '08:00 - 14:00',
    },
  ],
  description: (
    <>
      KOD STACJI: SRS/005
      <br />
      <br />
      Oferuje Dynamiczną wymianę oleju w automatycznych skrzyniach biegu. <br />
      Co to takiego ?<br />
      <br />
      Dynamiczna wymiana oleju w automatycznej skrzyni biegów jest procesem,
      który umożliwia wymianę CAŁEGO oleju w układzie. Przy wymianie metodami
      tradycyjnymi (grawitacyjnie) wymieniane jest zaledwie 40-60% płynów.
      Reszta pozostaje w przewodach, sterowniku, konwerterze. Tak naprawdę,
      wymiana tradycyjna to rozmieszanie nowego oleju w starym.
    </>
  ),
  imageMobile: ImageMobile,
  imageDesktop: ImageDekstop,
};

export { locationHeaderProps, availableServicesProps, serviceCardProps };
