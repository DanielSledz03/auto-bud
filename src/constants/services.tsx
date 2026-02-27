import Link from 'next/link';

import CarWashIcon from '@/icons/locations/carWash.svg';
import MechanicIcon from '@/icons/locations/mechanic.svg';
import RentCarIcon from '@/icons/locations/rentCar.svg';
import StationIcon from '@/icons/locations/vehicleStation.svg';
import RoadAssitanceDesktop from '@/images/general/services/roadAssistanceDesktop.png';
import GalleryImage1 from '@/images/godula/gallery/1.jpg';
import GalleryImage2 from '@/images/godula/gallery/2.jpg';
import GalleryImage3 from '@/images/godula/gallery/3.jpg';

const servicesHeader = {
  title: 'Nasze usługi',
  description: (
    <>
      Oferujemy najważniejsze usługi serwisowe i naprawcze w jednym miejscu.
      <br /> Każde zlecenie zaczynamy od diagnostyki i jasnej wyceny.
    </>
  ),
};

const stationControlProps = {
  title: 'Stacja Kontroli Pojazdów',
  locations: ['Ruda Śląska, Godula', 'Ruda Śląska, Bykowina', 'Świętochłowice'],
  description:
    'Wykonujemy badania okresowe i dodatkowe w Goduli, Bykowinie i Świętochłowicach. Okręgowa Stacja Diagnostyczna działa w dzielnicy Godula.',
  services: [],
  icon: StationIcon,
};

const mechanicWorkshopProps = {
  title: 'Warsztat Samochodowy',
  locations: ['Świętochłowice'],
  description:
    'Warsztat w Świętochłowicach realizuje naprawy mechaniczne, elektryczne i bieżący serwis pojazdów.',
  services: [],
  icon: MechanicIcon,
};

const carWashProps = {
  title: 'Myjnia bezdotykowa',
  locations: ['Ruda Śląska, Godula'],
  description:
    'Myjnia bezdotykowa w Goduli pozwala szybko i bezpiecznie odświeżyć auto.',
  services: [],
  icon: CarWashIcon,
};

const rentCarProps = {
  title: 'Samochód zastępczy',
  description:
    'Na czas naprawy udostępniamy samochód zastępczy po wcześniejszej rezerwacji.',
  services: [],
  icon: RentCarIcon,
};

const galleryProps = {
  title: 'Auto zastępcze',
  description: 'Jakim samochodem dysponujemy',
  images: [GalleryImage1, GalleryImage2, GalleryImage3],
};

const roadAssistanceProps = {
  title: 'W razie potrzeby',
  subtitle: 'Pomoc drogowa 24h',
  description: (
    <>
      Pomoc drogowa działa całodobowo przy awarii, kolizji lub problemie z
      uruchomieniem auta. Reagujemy szybko na terenie Śląska.
      <br />
      <br />
      Numer telefonu:{' '}
      <Link className="font-semibold text-darkGray" href={'tel:+48502752634'}>
        +48 502 752 634
      </Link>
    </>
  ),
  imageMobile: RoadAssitanceDesktop,
  imageDesktop: RoadAssitanceDesktop,
  imageAlt: 'Laweta w drodze, z samochodem na platformie',
};

export {
  servicesHeader,
  stationControlProps,
  mechanicWorkshopProps,
  carWashProps,
  rentCarProps,
  galleryProps,
  roadAssistanceProps,
};
