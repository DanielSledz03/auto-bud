import Link from 'next/link';

import { ObjectInfoCard, ServiceCard } from '@/components';
import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import {
  carWashProps,
  mechanicWorkshopProps,
  rentCarProps,
  roadAssistanceProps,
  stationControlProps,
} from '@/constants/services';
import { workshopPricing } from '@/constants/workshopPricing';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Usługi serwisu samochodowego | Auto-Bud Bosch Car Service',
  description:
    'Usługi Auto-Bud: diagnostyka, serwis klimatyzacji, wymiana oleju, hamulce, przeglądy techniczne i orientacyjny cennik.',
  path: '/uslugi',
  keywords: [
    'serwis samochodowy usługi',
    'diagnostyka komputerowa śląsk',
    'serwis klimatyzacji katowice',
    'wymiana oleju świętochłowice',
    'serwis hamulców śląsk',
    'przegląd techniczny ruda śląska',
    'wymiana sprzęgła śląsk',
    'wymiana rozrządu śląsk',
    'wymiana silnika śląsk',
    'elektryk samochodowy śląsk',
    'wulkanizacja śląsk',
    'cennik warsztatu samochodowego śląsk',
    'cennik napraw samochodowych świętochłowice',
  ],
});

const services = [
  stationControlProps,
  mechanicWorkshopProps,
  carWashProps,
  rentCarProps,
];

const serviceLinks = [
  {
    href: '/uslugi/diagnostyka-komputerowa',
    label: 'Diagnostyka komputerowa',
    description: 'Sprawdzenie błędów i parametrów pracy podzespołów.',
  },
  {
    href: '/uslugi/serwis-klimatyzacji',
    label: 'Serwis klimatyzacji',
    description: 'Kontrola układu, odgrzybianie i uzupełnienie czynnika.',
  },
  {
    href: '/uslugi/wymiana-oleju',
    label: 'Wymiana oleju i filtrów',
    description: 'Podstawowy serwis eksploatacyjny zgodny z zaleceniami.',
  },
  {
    href: '/uslugi/serwis-hamulcow',
    label: 'Serwis hamulców',
    description: 'Kontrola i wymiana klocków, tarcz oraz płynu hamulcowego.',
  },
  {
    href: '/uslugi/przeglad-techniczny',
    label: 'Przegląd techniczny',
    description: 'Badania okresowe i dodatkowe na naszych stacjach kontroli.',
  },
];

const serviceCatalog = [
  {
    title: 'Obsługa okresowa',
    items: [
      { name: 'Przeglądy okresowe', href: '/uslugi/przeglad-techniczny' },
      { name: 'Badanie techniczne', href: '/uslugi/przeglad-techniczny' },
      { name: 'Kontrola przed trasą', href: '/wizyta' },
      { name: 'Wymiana oleju i filtrów', href: '/uslugi/wymiana-oleju' },
    ],
  },
  {
    title: 'Naprawy mechaniczne',
    items: [
      { name: 'Naprawy silnika', href: '/wizyta' },
      { name: 'Wymiana sprzęgła i rozrządu', href: '/wizyta' },
      { name: 'Naprawy zawieszenia i układu kierowniczego', href: '/wizyta' },
      {
        name: 'Serwis hamulców (klocki, tarcze, płyn)',
        href: '/uslugi/serwis-hamulcow',
      },
    ],
  },
  {
    title: 'Elektryka i elektronika',
    items: [
      {
        name: 'Diagnostyka komputerowa',
        href: '/uslugi/diagnostyka-komputerowa',
      },
      { name: 'Naprawy instalacji elektrycznych', href: '/wizyta' },
      { name: 'Serwis systemów bezpieczeństwa', href: '/wizyta' },
      { name: 'Kalibracja ADAS', href: '/wizyta' },
    ],
  },
  {
    title: 'Usługi dodatkowe',
    items: [
      { name: 'Wymiana opon i wulkanizacja', href: '/wizyta' },
      { name: 'Geometria kół', href: '/wizyta' },
      { name: 'Serwis klimatyzacji', href: '/uslugi/serwis-klimatyzacji' },
      { name: 'Samochód zastępczy', href: '/wizyta' },
      { name: 'Pomoc drogowa 24h', href: '/kontakt' },
    ],
  },
];

const Uslugi = () => (
  <>
    <Breadcrumbs
      items={[
        { name: 'Strona główna', path: '/' },
        { name: 'Usługi', path: '/uslugi' },
      ]}
    />
    <section className="px-5 pt-8 md:px-10 md:pt-10 lg:px-20 lg:pt-12 xl:px-48 2xl:px-64">
      <p className="text-sm text-red">Usługi Auto-Bud</p>
      <h1 className="mt-2 text-3xl font-semibold text-darkGray lg:text-5xl">
        Usługi i cennik
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-mediumGray lg:text-base">
        Realizujemy serwis bieżący, naprawy mechaniczne i diagnostykę. Zakres
        prac i koszt potwierdzamy po wstępnej ocenie pojazdu.
      </p>
    </section>

    <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
      <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
        Najczęściej wyszukiwane usługi
      </h2>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {serviceLinks.map(service => (
          <Link
            key={service.label}
            href={service.href}
            className="group rounded-[10px] border border-lightGray2 p-5 transition-colors hover:border-red hover:bg-lightGray"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-darkGray">
                {service.label}
              </h3>
              <span className="text-red transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </div>
            <p className="mt-2 text-sm leading-7 text-mediumGray">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>

    <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
      <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
        Zakres usług
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
        Poniżej znajdziesz najczęściej realizowane prace. Jeśli nie widzisz
        swojej usługi, skontaktuj się z nami i przygotujemy indywidualną
        propozycję.
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {serviceCatalog.map(group => (
          <article
            key={group.title}
            className="rounded-[10px] border border-lightGray2 p-5"
          >
            <h3 className="text-lg font-semibold text-darkGray">
              {group.title}
            </h3>
            <div className="mt-4 grid gap-2">
              {group.items.map(item => (
                <Link
                  key={`${group.title}-${item.name}`}
                  href={item.href}
                  className="group flex items-center justify-between rounded-md border border-lightGray2 px-3 py-2 text-sm text-darkGray transition-colors hover:border-red hover:bg-lightGray"
                >
                  <span>{item.name}</span>
                  <span className="text-red transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-[10px] border border-lightGray2 p-5">
        <h3 className="text-lg font-semibold text-darkGray">
          Dostępność usług w lokalizacjach
        </h3>
        <p className="mt-2 max-w-4xl text-sm leading-7 text-mediumGray">
          Pełny zakres napraw wykonujemy w Świętochłowicach. Przeglądy
          techniczne realizujemy w Goduli, Bykowinie i Świętochłowicach.
          Dodatkowo w Goduli działa myjnia bezdotykowa.
        </p>
      </div>
    </section>

    <section
      id="cennik"
      className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64"
    >
      <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
        Cennik orientacyjny
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
        Podane ceny dotyczą podstawowego zakresu prac w Świętochłowicach.
        Ostateczny koszt zależy od modelu auta i stanu podzespołów.
      </p>

      <div className="mt-5 overflow-hidden rounded-[10px] border border-lightGray2">
        <div className="grid grid-cols-[1fr_auto] gap-3 bg-lightGray px-4 py-3 text-sm font-semibold text-darkGray lg:px-5">
          <p>Usługa</p>
          <p>Cena</p>
        </div>
        {workshopPricing.map(item => (
          <div
            key={item.service}
            className="grid grid-cols-[1fr_auto] gap-3 border-t border-lightGray2 px-4 py-3 text-sm text-darkGray lg:px-5"
          >
            <p>{item.service}</p>
            <p className="whitespace-nowrap font-medium">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/wizyta"
          className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
        >
          Umów wizytę i dokładną wycenę
        </Link>
      </div>
    </section>

    {services.map((props, index) => (
      <ObjectInfoCard key={index} {...props} />
    ))}
    <ServiceCard {...roadAssistanceProps} />
  </>
);

export default Uslugi;
