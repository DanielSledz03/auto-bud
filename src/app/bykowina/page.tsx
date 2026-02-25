import Image from 'next/image';
import Link from 'next/link';

import { LocationHeader } from '@/components';
import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import { locationHeaderProps } from '@/constants/bykowina';
import StationImage from '@/images/location-cards/station.jpg';
import { buildPageMetadata } from '@/lib/seo';

const popularServices = [
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
    question: 'Jak umówić wizytę w stacji Bykowina?',
    answer:
      'Najwygodniej przez formularz online lub telefonicznie. Dzięki temu szybciej dopasujemy termin i zakres usługi.',
  },
];

export const metadata = buildPageMetadata({
  title:
    'Ruda Śląska Bykowina - stacja kontroli pojazdów | Auto-Bud Bosch Car Service',
  description:
    'Stacja kontroli pojazdów Auto-Bud w Rudzie Śląskiej (Bykowina), ul. Szpaków 51. Badania techniczne i obsługa kierowców z całego Śląska.',
  path: '/bykowina',
  keywords: [
    'stacja kontroli pojazdów bykowina',
    'przegląd techniczny bykowina',
    'stacja diagnostyczna ruda śląska',
    'auto-bud bykowina',
  ],
});

const BykowinaPage = () => {
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
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
          Stacja kontroli pojazdów Ruda Śląska Bykowina - najważniejsze
          informacje
        </h2>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Lokalizacja Auto-Bud Bykowina przy ul. Szpaków 51 obsługuje kierowców
          z Rudy Śląskiej, Chorzowa i Katowic. To punkt nastawiony na szybkie
          badania techniczne oraz sprawną obsługę kierowców.
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
            href="/wizyta"
            className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
          >
            Umów wizytę online
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
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
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

      <section className="mt-10 px-5 pb-8 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
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
        description="Najczęstsze pytania kierowców dotyczące badań technicznych i umawiania wizyty."
        items={bykowinaFaq}
      />
    </>
  );
};

export default BykowinaPage;
