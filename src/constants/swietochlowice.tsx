import DesktopBackground from '@/images/swietochlowice/backgroundHeaderDesktop.png';
import MobileBackground from '@/images/swietochlowice/backroundMobile.png';
import CarRepairDesktop from '@/images/swietochlowice/carRepairDesktop.png';
import CarRepairMobile from '@/images/swietochlowice/carRepairMobile.png';
import ImageDekstop from '@/images/swietochlowice/MechanicDesktop.png';
import ImageMobile from '@/images/swietochlowice/MechanicMobile.png';
import OfficeDesktop from '@/images/swietochlowice/officeDesktop.png';
import OfficeMobile from '@/images/swietochlowice/officeMobile.png';

const locationHeaderProps = {
  mobileBackgroundUrl: MobileBackground,
  desktopBackgroundUrl: DesktopBackground,
  city: 'Świętochłowice',
  district: 'Centrum',
  street: 'ul. Katowicka 73',
  postalCode: 'Świętochłowice 41-600',
  googleMapsLink: 'https://maps.app.goo.gl/PQVm43rL5RzVfys77',
  imageAlt:
    'Mechanik w niebieskim kombinezonie pracuje nad silnikiem samochodu w nowoczesnym warsztacie',
};

const serviceCardGammaProps = {
  title: 'Gamma',
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
      Podstawowa Stacja Kontroli Pojazdów Gamma działa w zakresie sprawdzenia
      oraz oceny prawidłowości działania poszczególnych zespołów i układów
      pojazdu w szczególności pod względem bezpieczeństwa jazdy i ochrony
      środowiska. Stacja jest również upoważniona do umieszczenia nadanych cech
      identyfikacyjnych pojazdu.
      <br />
      <br />
      Stacja Kontroli Pojazdów Gamma prowadzi również liczne akcje zapewniające
      możliwość bezpłatnego sprawdzenia samochodu. Dbamy bowiem o bezpieczeństwo
      naszych klientów przez cały rok, a nie tylko pordczas obowiązkowego
      przeglądu technicznego wpisywanego do dowodu. Podczas naszych akcji wielu
      kierowców uniknęło poważnych awarii dzięki wczesnemu zdiagnozowaniu
      usterki, tym samym zapewniając sobie i innym większe bezpieczeństwo
      podczas jazdy.
    </>
  ),
  imageMobile: ImageMobile,
  imageDesktop: ImageDekstop,
  imageAlt: 'Stacja Kontroli Pojazdów - Bosch Car Service',
};

const serviceCardLambdaProps = {
  title: 'Warsztat Samochodowy',
  subtitle: 'Lambda',
  openHours: [
    {
      day: 'Pn - Pt',
      hours: '08:00 - 16:00',
    },
    {
      day: 'Sobota',
      hours: 'Nieczynne',
    },
  ],
  description: (
    <>
      Nasz warsztat samochodowy to miejsce, gdzie pasja do motoryzacji łączy się
      z najnowszymi technologiami. Oferujemy szeroki zakres usług, od przeglądów
      technicznych po skomplikowane naprawy mechaniczne. Nasz zespół
      doświadczonych mechaników gwarantuje, że każda naprawa będzie wykonana
      profesjonalnie i terminowo.
    </>
  ),
  imageDesktop: CarRepairDesktop,
  imageMobile: CarRepairMobile,
  imageAlt: 'Warsztat samochodowy - Lambda',
  button: true,
};

const serviceCardOfficeProps = {
  title: 'Biuro Obsługi Klienta',
  subtitle: 'Biuro',
  openHours: [
    {
      day: 'Pn - Pt',
      hours: '07:00 - 16:00',
    },
    {
      day: 'Sobota',
      hours: 'Nieczynne',
    },
  ],
  description: (
    <>
      Centrum motoryzacyjne Grupy AUTO-BUD w Świętochłowicach wyposażone jest
      także w nowoczesne Biuro Obsługi Klienta, które koordynuje pracę całego
      centrum zapewniając najwyższą jakość obsługi, wygodę i szybkość działania.{' '}
      <br />
      <br />
      Podczas oczekiwania na odbiór samochodu klient może skorzystać z
      bezpłatnego kawomatu, a także bezpłatnego dostępu do Wi-Fi.
    </>
  ),
  imageDesktop: OfficeDesktop,
  imageMobile: OfficeMobile,
  imageAlt: 'Przytulne, nowoczesne Biuro Obsługi Klienta firmy Auto-Bud',
};

export {
  locationHeaderProps,
  serviceCardGammaProps,
  serviceCardLambdaProps,
  serviceCardOfficeProps,
};
