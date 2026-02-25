type WorkshopPricingItem = {
  service: string;
  price: string;
};

const workshopPricing: WorkshopPricingItem[] = [
  { service: 'Podstawowa diagnostyka silnika', price: '150,00 zł' },
  { service: 'Wymiana oleju silnikowego', price: 'od 115,00 zł' },
  {
    service: 'Wymiana klocków hamulcowych (przód/tył)',
    price: 'od 180,00 zł',
  },
  {
    service: 'Wymiana tarcz hamulcowych (przód/tył)',
    price: 'od 230,00 zł',
  },
  { service: 'Wymiana amortyzatora (przód/tył)', price: 'od 460,00 zł' },
  { service: 'Geometria zawieszenia', price: '250,00 zł' },
  { service: 'Wymiana płynu hamulcowego', price: 'od 150,00 zł' },
  { service: 'Wymiana płynu chłodzącego', price: 'od 150,00 zł' },
  { service: 'Wymiana paska rozrządu', price: 'od 600,00 zł' },
  { service: 'Serwis klimatyzacji', price: 'od 150,00 zł' },
  { service: 'Wymiana opon z wyważeniem koła', price: 'od 120,00 zł' },
  {
    service: 'Ustawienie świateł i kontrola oświetlenia',
    price: 'od 35,00 zł',
  },
  { service: 'Roboczogodzina (stawka podstawowa)', price: '230,00 zł' },
  { service: 'Roboczogodzina (usługi elektroniczne)', price: '230,00 zł' },
];

export { workshopPricing };
export type { WorkshopPricingItem };
