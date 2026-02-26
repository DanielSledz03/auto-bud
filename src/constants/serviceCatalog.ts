type ServiceLink = {
  href: string;
  label: string;
  description: string;
};

type ServiceCatalogItem = {
  name: string;
  href: string;
};

type ServiceCatalogGroup = {
  title: string;
  items: ServiceCatalogItem[];
};

export const serviceLinks: ServiceLink[] = [
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

export const serviceCatalog: ServiceCatalogGroup[] = [
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

export const bookingServiceNames = Array.from(
  new Set([
    ...serviceLinks.map(service => service.label),
    ...serviceCatalog.flatMap(group => group.items.map(item => item.name)),
  ]),
);

export type { ServiceCatalogGroup, ServiceCatalogItem, ServiceLink };
