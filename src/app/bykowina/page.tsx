import Image from 'next/image';
import Link from 'next/link';

import { LocationHeader } from '@/components';
import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import { locationHeaderProps } from '@/constants/bykowina';
import StationImage from '@/images/location-cards/station.jpg';
import { buildPageMetadata, createLocationJsonLd } from '@/lib/seo';

const popularServices = [
  {
    href: '/stacja-diagnostyczna-ruda-slaska',
    title: 'Stacja diagnostyczna Ruda Śląska',
    description:
      'Sprawdź różnice między punktami Godula i Bykowina oraz wybierz dogodną lokalizację.',
  },
  {
    href: '/uslugi/przeglad-techniczny',
    title: 'Przegląd techniczny okresowy',
    description:
      'Badania okresowe i dodatkowe dla aut osobowych i dostawczych do 3,5 tony.',
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
    title: 'Stacja kontroli pojazdów - Bykowina',
    description:
      'Na miejscu wykonasz badania techniczne i przeglądy aut z instalacją LPG.',
    image: StationImage,
    imageAlt: 'Stacja kontroli pojazdów Auto-Bud',
    link: '/uslugi/przeglad-techniczny',
    linkLabel: 'Zakres badań technicznych',
  },
];

const serviceAreaLinks = [
  { href: '/slask#ruda-slaska', label: 'Ruda Śląska' },
  { href: '/slask#swietochlowice', label: 'Świętochłowice' },
  { href: '/slask#chorzow', label: 'Chorzów' },
  { href: '/slask#katowice', label: 'Katowice' },
  { href: '/slask#bytom', label: 'Bytom' },
  { href: '/slask#zabrze', label: 'Zabrze' },
];

const bykowinaFaq = [
  {
    question: 'Czy w Bykowinie wykonujecie przegląd auta z instalacją LPG?',
    answer:
      'Tak. W lokalizacji przy ul. Szpaków 51 wykonujemy badania techniczne pojazdów z instalacją LPG.',
  },
  {
    question: 'Czy w Bykowinie wykonujecie naprawy mechaniczne?',
    answer:
      'Nie. Lokalizacja Bykowina realizuje wyłącznie badania i przeglądy techniczne.',
  },
  {
    question: 'Czy na badanie w Bykowinie trzeba umawiać się wcześniej?',
    answer:
      'Nie. Na przegląd techniczny możesz podjechać bez umawiania w godzinach pracy stacji.',
  },
];

export const metadata = buildPageMetadata({
  title:
    'Stacja kontroli pojazdów Ruda Śląska (Bykowina) | Auto-Bud Bosch Car Service',
  description:
    'Auto-Bud, ul. Szpaków 51: stacja diagnostyczna i stacja kontroli pojazdów w Rudzie Śląskiej (Bykowina). Badania techniczne aut i LPG.',
  path: '/bykowina',
  keywords: [
    'stacja diagnostyczna bykowina',
    'stacja kontroli pojazdów bykowina',
    'przegląd techniczny bykowina',
    'stacja diagnostyczna ruda śląska',
    'stacja kontroli pojazdów ruda slaska',
    'auto-bud bykowina',
  ],
});

const BykowinaPage = () => {
  const localBusinessJsonLd = createLocationJsonLd('bykowina');

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          { name: 'Ruda Śląska Bykowina', path: '/bykowina' },
        ]}
      />
      <LocationHeader {...locationHeaderProps} />

      <section className="mt-8 px-5 md:px-10 lg:mt-10 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Stacja kontroli pojazdów Ruda Śląska Bykowina - najważniejsze
          informacje
        </h2>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Lokalizacja Auto-Bud Bykowina przy ul. Szpaków 51 obsługuje kierowców
          z Rudy Śląskiej, Chorzowa i Katowic. To punkt nastawiony na szybkie
          badania techniczne oraz sprawną obsługę kierowców. Na badanie
          techniczne podjeżdżasz bez wcześniejszego umawiania.
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
              <Link href="tel:+48327409221" className="text-darkGray">
                32 74 09 221
              </Link>
              <br />
              tel. komórkowy:{' '}
              <Link href="tel:+48510049787" className="text-darkGray">
                510 049 787
              </Link>
            </p>
          </article>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="https://maps.app.goo.gl/UFvFUSnpor4dTKHd6"
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
          Najczęściej wybierane usługi w Bykowinie
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
          Kierowcy z południowej części Rudy Śląskiej i okolic wybierają punkt
          Bykowina ze względu na szybkie badania techniczne i dogodny dojazd.
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
          Co znajdziesz w lokalizacji Bykowina
        </h2>
        <div className="mt-6 grid max-w-3xl gap-6">
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
        title="FAQ: stacja diagnostyczna Ruda Śląska Bykowina"
        description="Najczęstsze pytania kierowców dotyczące badań technicznych i kontaktu."
        items={bykowinaFaq}
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

export default BykowinaPage;
