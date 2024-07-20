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
  imageAlt:
    'Mechanik w niebieskim kombinezonie pracuje nad silnikiem samochodu w nowoczesnym warsztacie',
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
      Stacja Kontroli Pojazdów Alfa przeprowadza badania techniczne wszystkich
      pojazdów zarejestrowanych do 3,5 tony.
      <br />
      <br /> Stacja Kontroli Pojazdów obsługuje także pojazdy wyposażone w
      instalacje LPG.
    </>
  ),
  imageMobile: ImageMobile,
  imageDesktop: ImageDekstop,
  imageAlt: 'Stacja Kontroli Pojazdów - Alfa',
};

export { locationHeaderProps, availableServicesProps, serviceCardProps };
