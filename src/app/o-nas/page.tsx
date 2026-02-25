import Image from 'next/image';
import Link from 'next/link';

import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import CarWashImage from '@/images/location-cards/carwash.jpg';
import MechanicImage from '@/images/location-cards/mechanic.jpg';
import StationImage from '@/images/location-cards/station.jpg';
import WorkshopImage from '@/images/location-cards/workshop.jpg';
import GalleryImage1 from '@/images/godula/gallery/1.jpg';
import GalleryImage2 from '@/images/godula/gallery/2.jpg';
import GalleryImage3 from '@/images/godula/gallery/3.jpg';
import { buildPageMetadata } from '@/lib/seo';
import { HomeOpinions } from '@/view';

const establishedYear = 2006;
const experienceYears = Math.max(new Date().getFullYear() - establishedYear, 1);

const companyMetrics = [
  {
    value: `${experienceYears}+`,
    label: 'lat doświadczenia',
  },
  {
    value: '3',
    label: 'lokalizacje na Śląsku',
  },
  {
    value: '12',
    label: 'stanowisk serwisowych w Świętochłowicach',
  },
  {
    value: '25000+',
    label: 'obsłużonych klientów rocznie',
  },
];

const qualityStandards = [
  {
    title: 'Diagnostyka i transparentna wycena',
    description:
      'Każdą naprawę zaczynamy od oceny stanu pojazdu i potwierdzenia zakresu prac.',
  },
  {
    title: 'Bosch Car Service od 2017 roku',
    description:
      'Pracujemy zgodnie ze standardami sieci Bosch Car Service i na nowoczesnym sprzęcie.',
  },
  {
    title: 'Obsługa aut na gwarancji i po gwarancji',
    description:
      'Serwisujemy samochody różnych marek, zarówno w bieżącej eksploatacji, jak i przy większych naprawach.',
  },
  {
    title: 'Kompleksowa oferta usług',
    description:
      'Diagnostyka, przeglądy techniczne, klimatyzacja, hamulce, olej, elektryka i usługi dodatkowe.',
  },
];

const locationCards = [
  {
    href: '/swietochlowice',
    title: 'Świętochłowice - serwis i stacja kontroli',
    description:
      'Główna lokalizacja Auto-Bud przy ul. Katowickiej 73: warsztat, SKP i Biuro Obsługi Klienta.',
    image: WorkshopImage,
    imageAlt: 'Warsztat samochodowy Auto-Bud w Świętochłowicach',
    linkLabel: 'Przejdź do lokalizacji Świętochłowice',
  },
  {
    href: '/godula',
    title: 'Ruda Śląska Godula - stacja diagnostyczna',
    description:
      'Punkt przy ul. Starej 1 z badaniami technicznymi i myjnią bezdotykową.',
    image: CarWashImage,
    imageAlt: 'Myjnia i stacja diagnostyczna Auto-Bud Godula',
    linkLabel: 'Przejdź do lokalizacji Godula',
  },
  {
    href: '/bykowina',
    title: 'Ruda Śląska Bykowina - stacja kontroli',
    description:
      'Szybkie badania techniczne i obsługa pojazdów z instalacją LPG przy ul. Szpaków 51.',
    image: StationImage,
    imageAlt: 'Stacja kontroli pojazdów Auto-Bud Bykowina',
    linkLabel: 'Przejdź do lokalizacji Bykowina',
  },
];

const popularServiceLinks = [
  { href: '/uslugi/diagnostyka-komputerowa', label: 'Diagnostyka komputerowa' },
  { href: '/uslugi/serwis-klimatyzacji', label: 'Serwis klimatyzacji' },
  { href: '/uslugi/wymiana-oleju', label: 'Wymiana oleju i filtrów' },
  { href: '/uslugi/serwis-hamulcow', label: 'Serwis hamulców' },
  { href: '/uslugi/przeglad-techniczny', label: 'Przegląd techniczny' },
  { href: '/wizyta', label: 'Wycena i termin wizyty' },
];

const aboutFaq = [
  {
    question: 'Od kiedy działa Auto-Bud Bosch Car Service?',
    answer:
      'Firma działa od 2006 roku. Od 2017 roku należymy do sieci Bosch Car Service.',
  },
  {
    question: 'W jakich miastach znajdują się lokalizacje Auto-Bud?',
    answer:
      'Działamy w trzech lokalizacjach: Świętochłowice (ul. Katowicka 73), Ruda Śląska Godula (ul. Stara 1) i Ruda Śląska Bykowina (ul. Szpaków 51).',
  },
  {
    question: 'Czy serwisujecie auta na gwarancji producenta?',
    answer:
      'Tak. Obsługujemy auta na gwarancji i po gwarancji, zgodnie ze standardami Bosch Car Service.',
  },
  {
    question: 'Jak umówić wizytę i otrzymać wycenę naprawy?',
    answer:
      'Najwygodniej przez formularz online lub telefonicznie. Najpierw wykonujemy diagnostykę, a zakres i koszt potwierdzamy przed rozpoczęciem naprawy.',
  },
];

export const metadata = buildPageMetadata({
  title: 'O nas | Auto-Bud Bosch Car Service - warsztat samochodowy na Śląsku',
  description:
    'Poznaj Auto-Bud Bosch Car Service: od 2006 roku serwisujemy auta w trzech lokalizacjach na Śląsku. Diagnostyka, naprawy, przeglądy i obsługa Bosch Car Service.',
  path: '/o-nas',
  keywords: [
    'o nas auto-bud',
    'bosch car service śląsk',
    'auto-bud świętochłowice',
    'auto-bud ruda śląska',
    'serwis samochodowy śląsk',
    'warsztat samochodowy świętochłowice',
    'stacja kontroli pojazdów ruda śląska',
  ],
});

const ONasPage = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          { name: 'O nas', path: '/o-nas' },
        ]}
      />

      <section className="mt-8 px-5 md:px-10 lg:mt-10 lg:px-20 xl:px-48 2xl:px-64">
        <p className="text-sm text-red">O Auto-Bud</p>
        <h1 className="mt-2 text-3xl font-semibold text-darkGray lg:text-5xl">
          O naszej firmie
        </h1>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Auto-Bud Bosch Car Service to kompleks obiektów motoryzacyjnych w
          Świętochłowicach i Rudzie Śląskiej. Od 2006 roku obsługujemy kierowców
          z całego Śląska, zapewniając diagnostykę, naprawy mechaniczne,
          przeglądy techniczne i wsparcie doświadczonego zespołu.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          W Świętochłowicach działa nasz główny warsztat z 12 stanowiskami
          serwisowymi i Biurem Obsługi Klienta. W Goduli i Bykowinie prowadzimy
          stacje kontroli pojazdów, dzięki czemu łatwo dopasujesz lokalizację do
          rodzaju usługi.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/wizyta"
            className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
          >
            Umów wizytę online
          </Link>
          <Link
            href="/kontakt"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Kontakt i lokalizacje
          </Link>
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
          Auto-Bud w liczbach
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyMetrics.map(metric => (
            <article
              key={metric.label}
              className="rounded-[10px] border border-lightGray2 p-5"
            >
              <p className="text-4xl font-semibold text-darkGray lg:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-7 text-mediumGray">
                {metric.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="relative h-64 overflow-hidden rounded-[10px] border border-lightGray2 lg:h-full lg:min-h-[420px]">
            <Image
              src={MechanicImage}
              alt="Mechanik Auto-Bud podczas pracy przy samochodzie"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
              Jak pracujemy i co nas wyróżnia
            </h2>
            <p className="mt-5 text-sm leading-7 text-mediumGray lg:text-base">
              Stawiamy na dokładną diagnostykę, jasną komunikację i rzetelną
              realizację napraw. Każdy etap serwisu planujemy tak, aby kierowca
              znał zakres prac, orientacyjny czas i koszt przed rozpoczęciem
              usługi.
            </p>
            <p className="mt-4 text-sm leading-7 text-mediumGray lg:text-base">
              Obsługujemy samochody różnych marek, zarówno w regularnym serwisie
              eksploatacyjnym, jak i w bardziej złożonych naprawach. Pracujemy
              według standardów Bosch Car Service, wykorzystując nowoczesne
              narzędzia diagnostyczne.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {qualityStandards.map(item => (
                <article
                  key={item.title}
                  className="rounded-[10px] border border-lightGray2 p-4"
                >
                  <h3 className="text-base font-semibold text-darkGray">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-mediumGray">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
          Nasze lokalizacje na Śląsku
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Każda lokalizacja ma własny zakres usług. Sprawdź, gdzie najszybciej
          wykonasz interesującą Cię usługę i wybierz punkt najwygodniejszy dla
          siebie.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {locationCards.map(location => (
            <article
              key={location.href}
              className="overflow-hidden rounded-[10px] border border-lightGray2"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={location.image}
                  alt={location.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-darkGray">
                  {location.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-mediumGray">
                  {location.description}
                </p>
                <Link
                  href={location.href}
                  className="mt-3 inline-block text-sm font-medium text-red"
                >
                  {location.linkLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
          Najczęściej wybierane usługi
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {popularServiceLinks.map(link => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray transition-colors hover:border-red hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 px-5 pb-8 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <div className="rounded-[10px] border border-lightGray2 bg-lightGray p-5 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:p-6">
          <div>
            <h2 className="text-[22px] font-semibold text-darkGray lg:text-[28px]">
              Szukasz sprawdzonego serwisu na Śląsku?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-mediumGray lg:text-base">
              Umów termin online lub skontaktuj się z nami telefonicznie.
              Dopasujemy lokalizację i zakres usługi do Twojego auta.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 lg:mt-0">
            <Link
              href="/uslugi"
              className="rounded-md border border-lightGray2 bg-white px-5 py-3 text-sm font-medium text-darkGray"
            >
              Zobacz usługi
            </Link>
            <Link
              href="/wizyta"
              className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
            >
              Umów wizytę
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 px-5 pb-8 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
          Galeria Auto-Bud
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Zobacz nasze obiekty i zaplecze techniczne. Zdjęcia przedstawiają
          lokalizacje, w których na co dzień obsługujemy kierowców.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {[GalleryImage1, GalleryImage2, GalleryImage3].map((image, index) => (
            <article
              key={image.src}
              className="overflow-hidden rounded-[10px] border border-lightGray2"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={image}
                  alt={`Obiekt Auto-Bud - zdjęcie ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <HomeOpinions />

      <FaqSection
        title="FAQ: O Auto-Bud Bosch Car Service"
        description="Najczęstsze pytania o doświadczenie firmy, lokalizacje i organizację wizyty."
        items={aboutFaq}
      />
    </>
  );
};

export default ONasPage;
