import Image from 'next/image';
import Link from 'next/link';

import { LocationHeader } from '@/components';
import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import { locationHeaderProps } from '@/constants/godula';
import CarWashImage from '@/images/location-cards/carwash.jpg';
import StationImage from '@/images/location-cards/station.jpg';
import { buildPageMetadata, createLocationJsonLd } from '@/lib/seo';

const popularServices = [
  {
    href: '/stacja-diagnostyczna-ruda-slaska',
    title: 'Stacja diagnostyczna Ruda Śląska',
    description:
      'Porównaj lokalizacje Godula i Bykowina oraz wybierz dogodny punkt badania technicznego.',
  },
  {
    href: '/uslugi/przeglad-techniczny',
    title: 'Przegląd techniczny okresowy',
    description:
      'Badania okresowe i dodatkowe wykonywane w Okręgowej Stacji Kontroli Pojazdów.',
  },
  {
    href: '/uslugi/przeglad-techniczny',
    title: 'Przegląd techniczny pojazdów z LPG',
    description:
      'Wykonujemy badania techniczne aut wyposażonych w instalację gazową.',
  },
];

const locationFacilities = [
  {
    title: 'Okręgowa stacja kontroli pojazdów - Godula',
    description:
      'Wykonujemy badania techniczne aut osobowych, dostawczych i pojazdów z instalacją LPG.',
    image: StationImage,
    imageAlt: 'Budynek stacji kontroli pojazdów Auto-Bud Godula',
    link: '/uslugi/przeglad-techniczny',
    linkLabel: 'Sprawdź przeglądy techniczne',
  },
  {
    title: 'Myjnia bezdotykowa',
    description:
      'Pięć programów mycia i wygodny dojazd dla kierowców z Rudy Śląskiej, Bytomia i Chorzowa.',
    image: CarWashImage,
    imageAlt: 'Auto-Bud myjnia bezdotykowa w lokalizacji Godula',
    link: '/godula',
    linkLabel: 'Ta usługa jest dostępna na miejscu',
  },
];

const serviceAreaLinks = [
  { href: '/slask#ruda-slaska', label: 'Ruda Śląska' },
  { href: '/slask#bytom', label: 'Bytom' },
  { href: '/slask#chorzow', label: 'Chorzów' },
  { href: '/slask#katowice', label: 'Katowice' },
  { href: '/slask#zabrze', label: 'Zabrze' },
  { href: '/slask#swietochlowice', label: 'Świętochłowice' },
];

const godulaFaq = [
  {
    question: 'Czy w Goduli wykonujecie badania techniczne pojazdów z LPG?',
    answer:
      'Tak. Okręgowa stacja przy ul. Starej 1 wykonuje badania techniczne pojazdów z instalacją LPG.',
  },
  {
    question: 'Jakie są godziny pracy stacji i myjni w Goduli?',
    answer:
      'Stacja działa od poniedziałku do piątku 07:00-19:00 oraz w soboty 08:00-14:00. Myjnia jest czynna codziennie 07:00-22:00.',
  },
  {
    question: 'Czy w Goduli wykonujecie naprawy mechaniczne?',
    answer:
      'Nie. Lokalizacja Godula realizuje przeglądy techniczne oraz udostępnia myjnię bezdotykową.',
  },
];

export const metadata = buildPageMetadata({
  title:
    'Stacja diagnostyczna Ruda Śląska (Godula) | Auto-Bud Bosch Car Service',
  description:
    'Auto-Bud, ul. Stara 1: okręgowa stacja kontroli pojazdów w Rudzie Śląskiej (Godula), przeglądy techniczne i myjnia bezdotykowa.',
  path: '/godula',
  keywords: [
    'stacja diagnostyczna ruda śląska godula',
    'stacja kontroli pojazdów ruda śląska godula',
    'okręgowa stacja kontroli pojazdów ruda śląska',
    'przegląd techniczny godula',
    'przegląd techniczny ruda śląska',
    'stacja kontroli pojazdów ruda slaska',
    'myjnia bezdotykowa godula',
  ],
});

const GodulaPage = () => {
  const localBusinessJsonLd = createLocationJsonLd('godula');

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          { name: 'Ruda Śląska Godula', path: '/godula' },
        ]}
      />
      <LocationHeader {...locationHeaderProps} />

      <section className="mt-8 px-5 md:px-10 lg:mt-10 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Okręgowa stacja diagnostyczna Ruda Śląska Godula - najważniejsze
          informacje
        </h2>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Punkt Auto-Bud Godula przy ul. Starej 1 to lokalizacja dla kierowców,
          którzy chcą szybko wykonać przegląd techniczny i skorzystać z myjni
          bezdotykowej w jednym miejscu. Obsługujemy klientów z Rudy Śląskiej,
          Bytomia, Chorzowa i Katowic. Na badanie techniczne podjeżdżasz bez
          wcześniejszego umawiania.
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
              <Link href="tel:+48327255888" className="text-darkGray">
                32 72 55 888
              </Link>
              <br />
              tel. komórkowy:{' '}
              <Link href="tel:+48570190829" className="text-darkGray">
                570 190 829
              </Link>
            </p>
          </article>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="https://maps.app.goo.gl/uevhCXnHGWYJm6NX8"
            target="_blank"
            className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
          >
            Dojazd do stacji
          </Link>
          <Link
            href="/uslugi/przeglad-techniczny"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Przegląd techniczny
          </Link>
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Najczęściej wybierane usługi w Goduli
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {popularServices.map(service => (
            <Link
              key={`${service.href}-${service.title}`}
              href={service.href}
              className="rounded-[10px] border border-lightGray2 p-5 transition-colors hover:border-red"
            >
              <h3 className="text-lg font-semibold text-darkGray">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-mediumGray">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Obsługujemy Śląsk
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Stacja diagnostyczna w Goduli jest wygodna dla kierowców z Rudy
          Śląskiej oraz sąsiednich miast. Na przegląd techniczny przyjeżdżasz
          bez umawiania, bezpośrednio w godzinach pracy stacji.
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
          Co znajdziesz w lokalizacji Godula
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
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
        title="FAQ: stacja diagnostyczna Ruda Śląska Godula"
        description="Najczęstsze pytania kierowców o przeglądy techniczne, kontakt i zakres badań."
        items={godulaFaq}
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

export default GodulaPage;
