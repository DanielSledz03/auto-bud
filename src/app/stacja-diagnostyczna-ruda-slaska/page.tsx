import Link from 'next/link';

import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import { buildPageMetadata, createLocationJsonLd } from '@/lib/seo';

const stationFaq = [
  {
    question: 'Gdzie wykonać przegląd techniczny w Rudzie Śląskiej?',
    answer:
      'Badania techniczne wykonasz w dwóch punktach Auto-Bud: Godula (ul. Stara 1) oraz Bykowina (ul. Szpaków 51).',
  },
  {
    question: 'Czy stacja diagnostyczna obsługuje auta z LPG?',
    answer:
      'Tak. W obu lokalizacjach wykonujemy badania techniczne pojazdów wyposażonych w instalację LPG.',
  },
  {
    question: 'Czy muszę rezerwować termin wcześniej?',
    answer:
      'Nie. Na badanie techniczne podjeżdżasz bez umawiania, na dowolną stację Auto-Bud.',
  },
  {
    question: 'Ile trwa standardowy przegląd techniczny?',
    answer:
      'Czas wizyty zależy od rodzaju badania i obłożenia stacji, ale standardowy przegląd trwa zwykle kilkanaście do kilkudziesięciu minut.',
  },
  {
    question: 'Jak wybrać punkt Godula lub Bykowina?',
    answer:
      'Wybierz lokalizację, do której masz najwygodniejszy dojazd. Obie stacje realizują badania okresowe i dodatkowe.',
  },
];

const nearbyAreas = [
  'Godula',
  'Bykowina',
  'Nowy Bytom',
  'Halemba',
  'Kochłowice',
  'Chorzów',
  'Świętochłowice',
  'Bytom',
  'Zabrze',
];

export const metadata = buildPageMetadata({
  title: 'Stacja diagnostyczna Ruda Śląska | Okręgowa SKP Godula i Bykowina',
  description:
    'Stacja diagnostyczna i stacja kontroli pojazdów Ruda Śląska: Auto-Bud Godula (ul. Stara 1) oraz Bykowina (ul. Szpaków 51).',
  path: '/stacja-diagnostyczna-ruda-slaska',
  keywords: [
    'stacja diagnostyczna ruda śląska',
    'stacja diagnostyczna ruda slaska',
    'stacja kontroli pojazdów ruda śląska',
    'stacja kontroli pojazdów ruda slaska',
    'przegląd techniczny ruda śląska',
  ],
});

export default function StacjaDiagnostycznaRudaSlaskaPage() {
  const godulaJsonLd = createLocationJsonLd('godula');
  const bykowinaJsonLd = createLocationJsonLd('bykowina');

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          {
            name: 'Stacja diagnostyczna Ruda Śląska',
            path: '/stacja-diagnostyczna-ruda-slaska',
          },
        ]}
      />

      <section className="mt-8 px-5 md:px-10 lg:mt-10 lg:px-20 xl:px-48 2xl:px-64">
        <p className="text-sm text-red">Lokalne badania techniczne</p>
        <h1 className="mt-2 text-3xl font-semibold text-darkGray lg:text-5xl">
          Stacja diagnostyczna Ruda Śląska
        </h1>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Jeśli szukasz punktu na przegląd techniczny w Rudzie Śląskiej,
          Auto-Bud prowadzi dwie lokalizacje: Godula przy ul. Starej 1 oraz
          Bykowina przy ul. Szpaków 51. Dzięki temu możesz wybrać stację
          kontroli pojazdów bliżej domu albo trasy do pracy. Obie lokalizacje
          obsługują kierowców z Rudy Śląskiej i całej aglomeracji śląskiej.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Kierowcy wpisują w wyszukiwarce różne warianty, na przykład stacja
          diagnostyczna ruda slaska albo stacja kontroli pojazdów Ruda Śląska.
          Niezależnie od zapisu, na tej stronie znajdziesz praktyczne informacje
          o punktach Auto-Bud: adresy, kontakt, zakres badań i godziny pracy.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#lokalizacje-stacji"
            className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
          >
            Wybierz stację i podjedź
          </Link>
          <Link
            href="/uslugi/przeglad-techniczny"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Zakres przeglądu technicznego
          </Link>
          <Link
            href="/kontakt"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Kontakt do wszystkich punktów
          </Link>
        </div>
      </section>

      <section
        id="lokalizacje-stacji"
        className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64"
      >
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Którą lokalizację wybrać: Godula czy Bykowina?
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Oba punkty wykonują badania okresowe i dodatkowe, w tym przeglądy aut
          z instalacją LPG. Lokalizacja Godula to okręgowa stacja kontroli
          pojazdów oraz myjnia bezdotykowa, dlatego jest często wybierana przez
          kierowców z północnej części Rudy Śląskiej, Bytomia i Chorzowa.
          Bykowina jest wygodnym rozwiązaniem dla kierowców z południowych
          dzielnic Rudy Śląskiej i okolic.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Wybierz punkt, do którego masz najwygodniejszy dojazd i po prostu
          podjedź w godzinach pracy stacji. Jeśli chcesz dopytać o zakres
          badania technicznego, zadzwoń do wybranej lokalizacji.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[10px] border border-lightGray2 p-5">
            <h3 className="text-lg font-semibold text-darkGray">
              Ruda Śląska Godula
            </h3>
            <p className="mt-3 text-sm leading-7 text-mediumGray">
              ul. Stara 1, 41-703 Ruda Śląska
              <br />
              tel. 32 72 55 888
              <br />
              kom. 570 190 829
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/godula"
                className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
              >
                Strona lokalizacji Godula
              </Link>
              <Link
                href="/uslugi/myjnia-ruda-slaska-godula"
                className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
              >
                Myjnia bezdotykowa Godula
              </Link>
              <Link
                href="https://maps.app.goo.gl/uevhCXnHGWYJm6NX8"
                target="_blank"
                className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
              >
                Mapa dojazdu
              </Link>
            </div>
          </article>

          <article className="rounded-[10px] border border-lightGray2 p-5">
            <h3 className="text-lg font-semibold text-darkGray">
              Ruda Śląska Bykowina
            </h3>
            <p className="mt-3 text-sm leading-7 text-mediumGray">
              ul. Szpaków 51, 41-705 Ruda Śląska
              <br />
              tel. 32 74 09 221
              <br />
              kom. 510 049 787
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/bykowina"
                className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
              >
                Strona lokalizacji Bykowina
              </Link>
              <Link
                href="https://maps.app.goo.gl/UFvFUSnpor4dTKHd6"
                target="_blank"
                className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
              >
                Mapa dojazdu
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Obsługujemy kierowców z całego regionu
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Stacje kontroli pojazdów Auto-Bud w Rudzie Śląskiej są regularnie
          wybierane przez kierowców z wielu dzielnic i miast regionu.
          Najczęściej odwiedzają nas mieszkańcy obszarów:
        </p>
        <ul className="mt-4 grid gap-2 text-sm leading-7 text-mediumGray lg:grid-cols-3">
          {nearbyAreas.map(area => (
            <li key={area}>- {area}</li>
          ))}
        </ul>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Jeżeli potrzebujesz jednocześnie serwisu mechanicznego, możesz
          połączyć przegląd z wizytą w warsztacie w Świętochłowicach. Sprawdź
          zakres usług i wybierz najlepszy scenariusz dla swojego pojazdu.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/mechanik-swietochlowice"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Mechanik Świętochłowice
          </Link>
          <Link
            href="/slask"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Obszar działania na Śląsku
          </Link>
        </div>
      </section>

      <section className="mt-10 px-5 pb-8 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <div className="rounded-[10px] border border-lightGray2 bg-lightGray p-5 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:p-6">
          <div>
            <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
              Przegląd techniczny bez umawiania
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-mediumGray lg:text-base">
              Na badanie techniczne podjeżdżasz od razu do Goduli albo Bykowiny.
              Sprawdź adresy i numery telefonów, jeśli chcesz wcześniej
              potwierdzić szczegóły.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="mt-5 inline-flex rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white lg:mt-0"
          >
            Adresy i telefony
          </Link>
        </div>
      </section>

      <FaqSection
        title="FAQ: stacja diagnostyczna Ruda Śląska"
        description="Najczęstsze pytania o badania techniczne, dojazd i wybór lokalizacji Godula lub Bykowina."
        items={stationFaq}
      />

      {godulaJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(godulaJsonLd),
          }}
        />
      )}

      {bykowinaJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(bykowinaJsonLd),
          }}
        />
      )}
    </>
  );
}
