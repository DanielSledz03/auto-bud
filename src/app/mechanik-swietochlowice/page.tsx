import Link from 'next/link';

import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import { buildPageMetadata, createLocationJsonLd } from '@/lib/seo';

const mechanicFaq = [
  {
    question: 'Jak umówić wizytę u mechanika w Świętochłowicach?',
    answer:
      'Najwygodniej przez formularz online lub telefonicznie. Po zgłoszeniu potwierdzamy termin i zakres prac.',
  },
  {
    question: 'Czy wykonujecie naprawy aut różnych marek?',
    answer:
      'Tak. Serwisujemy samochody wielu marek, zarówno w podstawowej obsłudze eksploatacyjnej, jak i przy większych naprawach mechanicznych.',
  },
  {
    question: 'Czy przed naprawą dostanę wycenę?',
    answer:
      'Tak. Każdą naprawę rozpoczynamy od diagnostyki i ustalenia kosztów. Prace realizujemy po akceptacji zakresu usługi.',
  },
  {
    question: 'Czy obsługujecie kierowców spoza Świętochłowic?',
    answer:
      'Tak. Do warsztatu regularnie przyjeżdżają klienci z Katowic, Chorzowa, Rudy Śląskiej, Bytomia i innych miast aglomeracji.',
  },
  {
    question: 'Jakie usługi najczęściej wykonujecie?',
    answer:
      'Najczęściej realizujemy diagnostykę komputerową, serwis klimatyzacji, wymianę oleju i filtrów, naprawy hamulców oraz przeglądy techniczne.',
  },
];

const nearbyCities = [
  'Świętochłowice',
  'Katowice',
  'Chorzów',
  'Ruda Śląska',
  'Bytom',
  'Siemianowice Śląskie',
  'Zabrze',
];

export const metadata = buildPageMetadata({
  title:
    'Mechanik Świętochłowice | Warsztat samochodowy Bosch Car Service Auto-Bud',
  description:
    'Szukasz frazy mechanik Świętochłowice? Auto-Bud Bosch Car Service, ul. Katowicka 73: diagnostyka, naprawa auta, serwis okresowy i przeglądy.',
  path: '/mechanik-swietochlowice',
  keywords: [
    'mechanik świętochłowice',
    'mechanik swietochlowice',
    'warsztat samochodowy świętochłowice',
    'naprawa auta świętochłowice',
    'serwis samochodowy śląsk',
  ],
});

export default function MechanikSwietochlowicePage() {
  const localBusinessJsonLd = createLocationJsonLd('swietochlowice');

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          { name: 'Mechanik Świętochłowice', path: '/mechanik-swietochlowice' },
        ]}
      />

      <section className="mt-8 px-5 md:px-10 lg:mt-10 lg:px-20 xl:px-48 2xl:px-64">
        <p className="text-sm text-red">Lokalna oferta serwisowa</p>
        <h1 className="mt-2 text-3xl font-semibold text-darkGray lg:text-5xl">
          Mechanik Świętochłowice
        </h1>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Jeśli szukasz sprawdzonego mechanika w Świętochłowicach, w Auto-Bud
          Bosch Car Service przy ul. Katowickiej 73 wykonasz zarówno bieżący
          serwis, jak i większe naprawy mechaniczne. Na miejscu działa warsztat,
          stacja kontroli pojazdów i Biuro Obsługi Klienta, dzięki czemu możesz
          załatwić diagnostykę, wycenę i naprawę w jednym punkcie.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Część kierowców wpisuje w wyszukiwarce frazę bez polskich znaków:
          mechanik swietochlowice. Niezależnie od zapisu, chodzi o ten sam cel:
          szybka diagnoza problemu i rzetelna naprawa auta. W naszym serwisie
          każdą usługę rozpoczynamy od sprawdzenia stanu pojazdu, a następnie
          omawiamy zakres prac i orientacyjny koszt.
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
            Kontakt i telefony
          </Link>
          <Link
            href="/swietochlowice"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Strona lokalizacji Świętochłowice
          </Link>
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Co obejmuje naprawa auta w naszej lokalizacji
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Realizujemy diagnostykę komputerową, naprawy układu hamulcowego,
          wymianę oleju i filtrów, serwis klimatyzacji, naprawy mechaniczne oraz
          prace elektryczne. Zakres usługi dopasowujemy do rzeczywistego stanu
          pojazdu. Dzięki temu unikasz przypadkowych wymian i otrzymujesz plan
          naprawy oparty na konkretnej diagnozie.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Dla kierowców z całego regionu ważna jest również przewidywalność
          terminu. Dlatego umawiając wizytę możesz wskazać preferowany dzień i
          porę kontaktu, a zespół serwisu potwierdzi dostępność stanowiska.
          Takie podejście skraca czas postoju auta i ułatwia zaplanowanie
          codziennych obowiązków.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/uslugi/diagnostyka-komputerowa"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Diagnostyka komputerowa
          </Link>
          <Link
            href="/uslugi/wymiana-oleju"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Wymiana oleju i filtrów
          </Link>
          <Link
            href="/uslugi/serwis-hamulcow"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Serwis hamulców
          </Link>
          <Link
            href="/uslugi/serwis-klimatyzacji"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Serwis klimatyzacji
          </Link>
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          NAP i dane punktu obsługi
        </h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[10px] border border-lightGray2 p-5">
            <h3 className="text-lg font-semibold text-darkGray">
              Auto-Bud Bosch Car Service
            </h3>
            <p className="mt-3 text-sm leading-7 text-mediumGray">
              ul. Katowicka 73
              <br />
              41-600 Świętochłowice
              <br />
              tel. 32 245 28 91
              <br />
              kom. 502 567 630
            </p>
            <Link
              href="https://maps.app.goo.gl/PQVm43rL5RzVfys77"
              target="_blank"
              className="mt-3 inline-block text-sm font-medium text-red"
            >
              Otwórz mapę dojazdu
            </Link>
          </article>
          <article className="rounded-[10px] border border-lightGray2 p-5">
            <h3 className="text-lg font-semibold text-darkGray">
              Obsługiwane miasta i dzielnice
            </h3>
            <p className="mt-3 text-sm leading-7 text-mediumGray">
              Najczęściej obsługujemy kierowców z:
            </p>
            <ul className="mt-3 grid gap-2 text-sm leading-7 text-mediumGray">
              {nearbyCities.map(city => (
                <li key={city}>- {city}</li>
              ))}
            </ul>
            <Link
              href="/slask"
              className="mt-3 inline-block text-sm font-medium text-red"
            >
              Sprawdź pełny obszar działania
            </Link>
          </article>
        </div>
      </section>

      <section className="mt-10 px-5 pb-8 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <div className="rounded-[10px] border border-lightGray2 bg-lightGray p-5 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:p-6">
          <div>
            <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
              Szukasz terminu na naprawę auta w Świętochłowicach?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-mediumGray lg:text-base">
              Zgłoś wizytę online i opisz objawy usterki. To przyspiesza
              diagnostykę i pozwala wcześniej przygotować stanowisko serwisowe.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 lg:mt-0">
            <Link
              href="/wizyta"
              className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
            >
              Zgłoś wizytę
            </Link>
            <Link
              href="/uslugi"
              className="rounded-md border border-lightGray2 bg-white px-5 py-3 text-sm font-medium text-darkGray"
            >
              Zobacz wszystkie usługi
            </Link>
          </div>
        </div>
      </section>

      <FaqSection
        title="FAQ: mechanik Świętochłowice"
        description="Najczęstsze pytania o naprawę auta, terminy i zakres usług w lokalizacji przy ul. Katowickiej 73."
        items={mechanicFaq}
      />

      {localBusinessJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      )}
    </>
  );
}
