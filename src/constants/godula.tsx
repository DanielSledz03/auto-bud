import Image from 'next/image';

import DesktopBackground from '@/images/godula/BackgroundDesktop.png';
import MobileBackground from '@/images/godula/BackgroundMobile.png';
import CarWashDesktop from '@/images/godula/CarWashDesktop.png';
import CarWashMobile from '@/images/godula/CarWashMobile.png';
import GalleryImage1 from '@/images/godula/gallery/1.jpg';
import GalleryImage2 from '@/images/godula/gallery/2.jpg';
import GalleryImage3 from '@/images/godula/gallery/3.jpg';
import StationDesktop from '@/images/godula/StationDesktop.png';
import StationMobile from '@/images/godula/StationMobile.png';
import UEGraphic from '@/images/godula/ue.png';

const locationHeaderProps = {
  mobileBackgroundUrl: MobileBackground,
  desktopBackgroundUrl: DesktopBackground,
  city: 'Ruda Śląska',
  district: 'Godula',
  street: 'ul. Stara 1',
  postalCode: 'Ruda Śląska 41-703',
  googleMapsLink: 'https://maps.app.goo.gl/uevhCXnHGWYJm6NX8',
  imageAlt: 'Samochód myjący się w myjni bezdotykowej',
};

const availableServicesProps = {
  isOffice: false,
  isStation: true,
  isCarRepair: false,
};

const serviceCardOmegaProps = {
  title: 'Omega',
  subtitle: 'Okręgowa Stacja Kontroli Pojazdów',
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
      Okręgowa Stacja Kontroli Pojazdów Omega przeprowadza badania techniczne
      wszystkich pojazdów zarejestrowanych.
      <br />
      <br /> SPRAWDZAMY WSZYSTKO, CO JEŹDZI! <br />
      <br /> Stacja Kontroli Pojazdów obsługuje także pojazdy wyposażone w
      instalacje LPG. Ponadto Okręgowa Stacja Kontroli Pojazdów Omega stanowi
      gratkę dla fanów Agenta 007. We wnętrzu stacji można zobaczyć przekrój
      plakatów promujących poszczególne filmy ze słynnym agentem.
    </>
  ),
  imageMobile: StationMobile,
  imageDesktop: StationDesktop,
  imageAlt: 'Okręgowa Stacja Kontroli Pojazdów - Omega',
};

const serviceCardBetaProps = {
  title: 'Beta',
  subtitle: 'Myjnia bezdotykowa',
  openHours: [
    {
      day: 'Codziennie',
      hours: '07:00 - 22:00',
    },
  ],
  description: (
    <>
      Nasza myjnia bezdotykowa na Śląsku oferuje najwyższą jakość mycia w
      krótkim czasie, z wykorzystaniem nowoczesnych technologii chroniących
      środowisko i obniżających koszty. Dzięki temu możemy zaoferować
      konkurencyjne ceny dla naszych klientów.
      <br />
      <br />
      Myjnia oferuje 5 zoptymalizowanych programów, które zapewniają dokładne
      umycie i ochronę karoserii przed zabrudzeniem. Szczegóły dotyczące
      programów znajdziesz poniżej.
      <br />
      <br />
      Przed pierwszym myciem zapoznaj się z Regulaminem.
      <br />
      <br />
      <p className="text-[10px] italic">
        PROJEKT WSPÓŁFINANSOWANY PRZEZ UNIĘ EUROPEJSKĄ Z EUROPEJSKIEGO FUNDUSZU
        ROZWOJU REGIONALNEGO W RAMACH REGIONALNEGO PROGRAMU OPERACYJNEGO
        WOJEWODZTWA ŚLĄSKIEGO NA LATA 2007-2013. Regionalny Program Operacyjny
        Województwa Śląskiego – realna odpowiedź na realne potrzeby Firma
        „AUTO-BUD” Spółka z o.o. jest beneficjentem projektu „Budowa myjni
        bezdotykowej TechWash w wersji solarnej, tj. z kolektorami słonecznymi
        wspomagającymi pracę układu grzewczego przy Okręgowej Stacji Kontroli
        Pojazdów w Rudzie Śląskiej, ul. Stara 1.” Wartość projektu: 1 207 800,00
        zł Wartość dofinansowania: 200 000 zł Informacje źródłowe na temat
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
  ),
  imageDesktop: CarWashDesktop,
  imageMobile: CarWashMobile,
  imageAlt: 'Myjnia bezdotykowa Beta',
};

const locationGalleryProps = {
  title: 'Galeria zdjęć',
  description: 'Zobacz jak wygląda obiekt',
  images: [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
  ],
};

export {
  locationHeaderProps,
  availableServicesProps,
  serviceCardOmegaProps,
  serviceCardBetaProps,
  locationGalleryProps,
};
