import Image from 'next/image';
import Link from 'next/link';

import { LocationHeader } from '@/components';
import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import { locationHeaderProps } from '@/constants/swietochlowice';
import MechanicImage from '@/images/location-cards/mechanic.jpg';
import OfficeImage from '@/images/location-cards/office.jpg';
import WorkshopImage from '@/images/location-cards/workshop.jpg';
import { buildPageMetadata, createLocationJsonLd } from '@/lib/seo';

const quickServiceLinks = [
  { href: '/mechanik-swietochlowice', label: 'Mechanik Świętochłowice' },
  { href: '/uslugi/przeglad-techniczny', label: 'Przeglądy techniczne' },
  { href: '/uslugi/diagnostyka-komputerowa', label: 'Diagnostyka' },
  { href: '/uslugi/wymiana-oleju', label: 'Wymiana oleju' },
  { href: '/uslugi/serwis-hamulcow', label: 'Hamulce' },
  { href: '/uslugi/serwis-klimatyzacji', label: 'Klimatyzacja' },
  { href: '/wizyta', label: 'Wycena i termin' },
];

const repairCategories = [
  {
    title: 'Silnik i układ napędowy',
    description:
      'Wymiana silnika, remont silnika, rozrząd, sprzęgło i naprawy podzespołów napędowych.',
  },
  {
    title: 'Mechanika pojazdowa',
    description:
      'Hamulce, zawieszenie, układ kierowniczy i bieżące naprawy eksploatacyjne.',
  },
  {
    title: 'Elektryka i elektronika',
    description:
      'Diagnostyka usterek i naprawy instalacji elektrycznych oraz systemów elektronicznych.',
  },
  {
    title: 'Opony i wulkanizacja',
    description:
      'Wymiana i naprawa opon, usługi wulkanizacyjne i przygotowanie auta do sezonu.',
  },
];

const locationFacilities = [
  {
    title: 'Stacja kontroli pojazdów',
    description: 'Badania okresowe i dodatkowe, również dla pojazdów z LPG.',
    image: MechanicImage,
    imageAlt: 'Stacja kontroli pojazdów Auto-Bud w Świętochłowicach',
    link: '/uslugi/przeglad-techniczny',
    linkLabel: 'Sprawdź badania techniczne',
  },
  {
    title: 'Warsztat samochodowy',
    description:
      'Pełny zakres napraw mechanicznych i elektrycznych, od serwisu po duże naprawy.',
    image: WorkshopImage,
    imageAlt: 'Stanowisko warsztatowe Auto-Bud',
    link: '/wizyta',
    linkLabel: 'Umów diagnostykę i wycenę',
  },
  {
    title: 'Biuro Obsługi Klienta',
    description:
      'Kontakt, terminy i wyceny napraw. Przed pracą zawsze ustalamy koszt i zakres.',
    image: OfficeImage,
    imageAlt: 'Biuro obsługi klienta Auto-Bud',
    link: '/kontakt',
    linkLabel: 'Dane kontaktowe',
  },
];

const serviceAreaLinks = [
  { href: '/slask#swietochlowice', label: 'Świętochłowice' },
  { href: '/slask#ruda-slaska', label: 'Ruda Śląska' },
  { href: '/slask#chorzow', label: 'Chorzów' },
  { href: '/slask#katowice', label: 'Katowice' },
  { href: '/slask#siemianowice-slaskie', label: 'Siemianowice Śląskie' },
  { href: '/slask#bytom', label: 'Bytom' },
];

const swietochlowiceFaq = [
  {
    question: 'Czy wykonujecie wszystkie naprawy samochodowe?',
    answer:
      'Wykonujemy praktycznie pełen zakres napraw mechanicznych i elektrycznych, w tym większe naprawy silnika. Nie realizujemy blacharki i lakiernictwa.',
  },
  {
    question: 'Czy przed naprawą przygotowujecie wycenę?',
    answer:
      'Tak. Każdą naprawę rozpoczynamy od diagnostyki i wyceny. Prace wykonujemy po akceptacji zakresu i kosztu.',
  },
  {
    question: 'Czy wykonujecie przeglądy techniczne i diagnostykę komputerową?',
    answer:
      'Tak. W Świętochłowicach wykonujemy zarówno badania techniczne, jak i diagnostykę komputerową oraz naprawy serwisowe.',
  },
  {
    question: 'Jak szybko dojechać z Katowic do serwisu w Świętochłowicach?',
    answer:
      'Dojazd z centrum Katowic zajmuje zwykle około 15-25 minut, w zależności od pory dnia i ruchu.',
  },
];

export const metadata = buildPageMetadata({
  title:
    'Mechanik i warsztat samochodowy Świętochłowice | Bosch Car Service Auto-Bud',
  description:
    'Auto-Bud Bosch Car Service, ul. Katowicka 73: mechanik i warsztat samochodowy w Świętochłowicach, przeglądy techniczne, diagnostyka i naprawa auta na Śląsku.',
  path: '/swietochlowice',
  keywords: [
    'mechanik świętochłowice',
    'mechanik swietochlowice',
    'warsztat samochodowy świętochłowice',
    'serwis samochodowy świętochłowice',
    'naprawa auta świętochłowice',
    'naprawa samochodów świętochłowice',
    'wymiana silnika świętochłowice',
    'remont silnika świętochłowice',
    'wymiana sprzęgła świętochłowice',
    'elektryk samochodowy świętochłowice',
    'wulkanizacja świętochłowice',
    'przegląd techniczny świętochłowice',
  ],
});

const SwietochlowicePage = () => {
  const localBusinessJsonLd = createLocationJsonLd('swietochlowice');

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          { name: 'Świętochłowice', path: '/swietochlowice' },
        ]}
      />
      <LocationHeader {...locationHeaderProps} />

      <section className="mt-8 px-5 md:px-10 lg:mt-10 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Warsztat samochodowy Świętochłowice - najważniejsze informacje
        </h2>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Auto-Bud Bosch Car Service przy ul. Katowickiej 73 obsługuje kierowców
          ze Świętochłowic, Katowic, Chorzowa i Rudy Śląskiej. Na miejscu
          działają stacja kontroli pojazdów, warsztat oraz biuro obsługi
          klienta.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Wykonujemy pełny zakres napraw mechanicznych i elektrycznych. Nie
          realizujemy blacharki i lakiernictwa. Każdą naprawę zaczynamy od
          wyceny i akceptacji zakresu prac.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[10px] border border-lightGray2 p-5">
            <h3 className="text-lg font-semibold text-darkGray">
              Godziny stacji
            </h3>
            <p className="mt-2 text-sm leading-7 text-mediumGray">
              Poniedziałek - piątek: 07:00 - 19:00
              <br />
              Sobota: 08:00 - 14:00
            </p>
          </article>
          <article className="rounded-[10px] border border-lightGray2 p-5">
            <h3 className="text-lg font-semibold text-darkGray">Kontakt</h3>
            <p className="mt-2 text-sm leading-7 text-mediumGray">
              tel. stacjonarny:{' '}
              <Link href="tel:+48322452891" className="text-darkGray">
                32 245 28 91
              </Link>
              <br />
              tel. komórkowy:{' '}
              <Link href="tel:+48502567630" className="text-darkGray">
                502 567 630
              </Link>
            </p>
          </article>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/wizyta"
            className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
          >
            Umów wizytę i wycenę
          </Link>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-darkGray">
          Szybkie linki do usług
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {quickServiceLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Zakres napraw w serwisie
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {repairCategories.map(category => (
            <article
              key={category.title}
              className="rounded-[10px] border border-lightGray2 p-5"
            >
              <h3 className="text-lg font-semibold text-darkGray">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-mediumGray">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Obsługujemy Śląsk
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Z warsztatu w Świętochłowicach korzystają kierowcy z okolicznych miast
          i dzielnic. Jeśli dojeżdżasz spoza miasta, sprawdź dojazd i wybierz
          dogodny termin wizyty.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {serviceAreaLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 px-5 pb-8 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Co znajdziesz w tej lokalizacji
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {locationFacilities.map(facility => (
            <article
              key={facility.title}
              className="overflow-hidden rounded-[10px] border border-lightGray2"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={facility.image}
                  alt={facility.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-darkGray">
                  {facility.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-mediumGray">
                  {facility.description}
                </p>
                <Link
                  href={facility.link}
                  className="mt-3 inline-block text-sm font-medium text-red"
                >
                  {facility.linkLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FaqSection
        title="FAQ: warsztat samochodowy Świętochłowice"
        description="Najczęstsze pytania kierowców dotyczące napraw, wyceny i wizyty w serwisie."
        items={swietochlowiceFaq}
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
};

export default SwietochlowicePage;
