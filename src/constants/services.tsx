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
      Poznaj szeroką gamę naszych usług motoryzacyjnych, które zaspokoją
      wszystkie potrzeby Twojego pojazdu.
      <br /> Nasza oferta to synonim jakości, profesjonalizmu i zaufania.
    </>
  ),
};

const stationControlProps = {
  title: 'Stacja Kontroli Pojazdów',
  locations: ['Ruda Śląska, Godula', 'Ruda Śląska, Bykowina', 'Świętochłowice'],
  description:
    'Nasze Stacje Kontroli Pojazdów zlokalizowane w Rudzie Śląskiej i Świętochłowicach to miejsca, gdzie bezpieczeństwo spotyka się z precyzją. Zadbaj o swoje auto w jednym z naszych profesjonalnych punktów i podróżuj bez obaw. Okręgowa Stacja Diagnostyczna znajduję się w dzielnicy Godula',
  services: [
    {
      name: 'Przegląd techniczny',
      price: '98 zł',
    },
  ],
  icon: StationIcon,
};

const mechanicWorkshopProps = {
  title: 'Warsztat Samochodowy',
  locations: ['Świętochłowice'],
  description:
    'Nasz warsztat samochodowy to królestwo mechaniki i nowoczesnych technologii. Powierz swoje auto w ręce naszych doświadczonych specjalistów i ciesz się bezproblemową jazdą.',
  services: [
    {
      name: 'Przegląd techniczny',
      price: '100 zł',
    },
  ],
  icon: MechanicIcon,
};

const carWashProps = {
  title: 'Myjnia bezdotykowa',
  locations: ['Ruda Śląska, Godula'],
  description:
    'Nasza myjnia bezdotykowa to idealne miejsce, by Twój samochód lśnił jak nowy. Szybko, skutecznie i bezpiecznie dla lakieru - oto nasza obietnica.',
  services: [],
  icon: CarWashIcon,
};

const rentCarProps = {
  title: 'Samochód zastępczy',
  description:
    'Nie pozwól, by naprawa samochodu pokrzyżowała Twoje plany. Skorzystaj z naszej oferty wynajmu samochodu zastępczego i ciesz się mobilnością w każdej sytuacji.',
  services: [
    {
      name: 'Dzień wypożyczenia',
      price: '80 zł',
    },
  ],
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
      Nasza usługa pomocy drogowej to profesjonalne wsparcie dostępne 24 godziny
      na dobę, 7 dni w tygodniu. Niezależnie od sytuacji, w której się
      znajdziesz – awaria, wypadek czy problemy z uruchomieniem pojazdu –
      jesteśmy gotowi, aby Ci pomóc. Dzięki naszemu doświadczeniu i nowoczesnemu
      sprzętowi, zapewniamy szybkie i skuteczne rozwiązanie problemów na drodze.
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
