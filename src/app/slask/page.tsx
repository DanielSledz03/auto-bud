import Link from 'next/link';

import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import { serviceAreaCities } from '@/data/businessLocations';
import { buildPageMetadata } from '@/lib/seo';

const cityDescriptions: Record<string, string> = {
  Katowice:
    'Obsługujemy klientów z Katowic w naszych lokalizacjach w Świętochłowicach i Rudzie Śląskiej.',
  Świętochłowice:
    'Główna lokalizacja z warsztatem samochodowym i stacją kontroli pojazdów znajduje się przy ul. Katowickiej 73.',
  'Ruda Śląska':
    'Działamy w dwóch punktach: Godula (ul. Stara 1) i Bykowina (ul. Szpaków 51).',
  Chorzów:
    'Klienci z Chorzowa regularnie korzystają z usług diagnostycznych i mechanicznych w Świętochłowicach.',
  'Siemianowice Śląskie':
    'Dojazd do naszego serwisu ze Siemianowic jest szybki, szczególnie do lokalizacji Świętochłowice.',
  Bytom:
    'Dla kierowców z Bytomia wygodnym punktem jest Ruda Śląska Godula oraz Świętochłowice.',
  Zabrze:
    'Wielu klientów z Zabrza wybiera naprawy i serwis planowane z wyprzedzeniem online.',
  Mikołów:
    'Obsługujemy także kierowców z Mikołowa, szczególnie w zakresie diagnostyki i serwisu okresowego.',
  Mysłowice:
    'Z Mysłowic najczęściej przyjeżdżają do nas klienci na wymianę oleju, klimatyzację i hamulce.',
  Tychy:
    'Klienci z Tychów korzystają z naszych usług przy większych naprawach i serwisie sezonowym.',
};

const katowiceFaq = [
  {
    question: 'Czy macie oddział Auto-Bud w Katowicach?',
    answer:
      'Nie prowadzimy oddziału z adresem w Katowicach. Obsługujemy klientów z Katowic w naszych lokalizacjach w Świętochłowicach i Rudzie Śląskiej.',
  },
  {
    question: 'Ile trwa dojazd z centrum Katowic do Świętochłowic?',
    answer:
      'W typowych warunkach dojazd zajmuje około 15-25 minut. Rekomendujemy rezerwację z wyprzedzeniem, aby skrócić czas całej wizyty.',
  },
  {
    question: 'Jakie usługi najczęściej zlecają klienci z Katowic?',
    answer:
      'Najczęściej wykonujemy diagnostykę komputerową, serwis klimatyzacji, wymianę oleju i filtrów oraz naprawy układu hamulcowego.',
  },
  {
    question: 'Jak umówić wizytę, jeśli mieszkam w Katowicach?',
    answer:
      'Wizytę możesz umówić online przez formularz lub telefonicznie. Podczas kontaktu podaj preferowaną lokalizację i zakres prac.',
  },
];

const getCityAnchor = (city: string) =>
  city
    .toLowerCase()
    .replaceAll('ą', 'a')
    .replaceAll('ć', 'c')
    .replaceAll('ę', 'e')
    .replaceAll('ł', 'l')
    .replaceAll('ń', 'n')
    .replaceAll('ó', 'o')
    .replaceAll('ś', 's')
    .replaceAll('ż', 'z')
    .replaceAll('ź', 'z')
    .replaceAll(' ', '-');

export const metadata = buildPageMetadata({
  title: 'Serwis samochodowy na Śląsku | Auto-Bud Bosch Car Service',
  description:
    'Serwis samochodowy na Śląsku: obsługiwane miasta, dojazd i zakres usług Auto-Bud Bosch Car Service dla kierowców z aglomeracji śląskiej.',
  path: '/slask',
  keywords: [
    'serwis samochodowy śląsk',
    'warsztat samochodowy śląsk',
    'serwis samochodowy katowice',
    'warsztat samochodowy chorzów',
    'warsztat samochodowy bytom',
  ],
});

export default function SlaskPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          { name: 'Śląsk', path: '/slask' },
        ]}
      />

      <section className="mt-8 px-5 md:px-10 lg:mt-10 lg:px-20 xl:px-48 2xl:px-64">
        <p className="text-sm text-red">Obszar działania</p>
        <h1 className="mt-2 text-3xl font-semibold text-darkGray lg:text-5xl">
          Serwis samochodowy na Śląsku
        </h1>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Auto-Bud Bosch Car Service obsługuje kierowców z całej aglomeracji
          śląskiej. Poniżej znajdziesz miasta, z których najczęściej przyjmujemy
          samochody do diagnostyki, przeglądów i napraw mechanicznych.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/wizyta"
            className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
          >
            Umów wizytę online
          </Link>
          <Link
            href="/swietochlowice"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Warsztat samochodowy Świętochłowice
          </Link>
          <Link
            href="#katowice-dojazd"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Dojazd z Katowic
          </Link>
        </div>
      </section>

      <section className="mt-10 px-5 pb-4 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Obsługiwane miasta
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {serviceAreaCities.map(city => (
            <article
              key={city}
              id={getCityAnchor(city)}
              className="rounded-[10px] border border-lightGray2 p-5"
            >
              <h3 className="text-lg font-semibold text-darkGray">{city}</h3>
              <p className="mt-2 text-sm leading-7 text-mediumGray lg:text-base">
                {cityDescriptions[city]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="katowice-dojazd"
        className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64"
      >
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Warsztat samochodowy Katowice - obsługa klientów z Katowic i okolic
        </h2>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Mieszkasz w Katowicach i szukasz sprawdzonego serwisu? Auto-Bud Bosch
          Car Service obsługuje kierowców z Katowic w lokalizacjach
          Świętochłowice i Ruda Śląska. Najbliższy punkt dla wielu dzielnic
          Katowic to serwis przy ul. Katowickiej 73 w Świętochłowicach.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Orientacyjny czas dojazdu z centrum Katowic: około 15-25 minut
          samochodem. Nie podajemy fikcyjnego adresu w Katowicach - jasno
          wskazujemy, gdzie faktycznie wykonujemy naprawy i przeglądy.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Link
            href="/uslugi/diagnostyka-komputerowa"
            className="rounded-[10px] border border-lightGray2 p-5"
          >
            <h3 className="text-lg font-semibold text-darkGray">
              Diagnostyka komputerowa
            </h3>
            <p className="mt-2 text-sm leading-7 text-mediumGray">
              Szybkie wykrywanie usterek elektroniki i silnika przed większą
              awarią.
            </p>
          </Link>
          <Link
            href="/uslugi/serwis-klimatyzacji"
            className="rounded-[10px] border border-lightGray2 p-5"
          >
            <h3 className="text-lg font-semibold text-darkGray">
              Serwis klimatyzacji
            </h3>
            <p className="mt-2 text-sm leading-7 text-mediumGray">
              Odgrzybianie, kontrola szczelności i napełnienie czynnika.
            </p>
          </Link>
          <Link
            href="/uslugi/wymiana-oleju"
            className="rounded-[10px] border border-lightGray2 p-5"
          >
            <h3 className="text-lg font-semibold text-darkGray">
              Wymiana oleju i filtrów
            </h3>
            <p className="mt-2 text-sm leading-7 text-mediumGray">
              Obsługa zgodna z zaleceniami producenta i historią serwisową auta.
            </p>
          </Link>
          <Link
            href="/uslugi/serwis-hamulcow"
            className="rounded-[10px] border border-lightGray2 p-5"
          >
            <h3 className="text-lg font-semibold text-darkGray">
              Serwis hamulców
            </h3>
            <p className="mt-2 text-sm leading-7 text-mediumGray">
              Kontrola i wymiana klocków, tarcz oraz płynu hamulcowego.
            </p>
          </Link>
        </div>
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
            Kontakt i dojazd
          </Link>
        </div>
      </section>

      <section className="mt-10 px-5 pb-8 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Przydatne linki do usług
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/uslugi/diagnostyka-komputerowa"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Diagnostyka komputerowa
          </Link>
          <Link
            href="/uslugi/serwis-klimatyzacji"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Serwis klimatyzacji
          </Link>
          <Link
            href="/uslugi/wymiana-oleju"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Wymiana oleju
          </Link>
          <Link
            href="/uslugi/serwis-hamulcow"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Serwis hamulców
          </Link>
          <Link
            href="/uslugi/przeglad-techniczny"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Przegląd techniczny
          </Link>
          <Link
            href="/uslugi/myjnia-ruda-slaska-godula"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Myjnia bezdotykowa Godula
          </Link>
          <Link
            href="/uslugi/mycie-reczne-swietochlowice"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Mycie ręczne Świętochłowice
          </Link>
        </div>
      </section>

      <FaqSection
        title="FAQ: warsztat samochodowy Katowice"
        description="Pytania, które najczęściej zadają kierowcy z Katowic przed pierwszą wizytą."
        items={katowiceFaq}
      />
    </>
  );
}
