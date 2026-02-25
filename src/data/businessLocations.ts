export interface OpeningHoursEntry {
  dayOfWeek:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
  opens: string;
  closes: string;
}

export interface BusinessLocation {
  id: 'swietochlowice' | 'godula' | 'bykowina';
  slug: '/swietochlowice' | '/godula' | '/bykowina';
  name: string;
  shortName: string;
  city: string;
  district: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  fullAddress: string;
  landlineDisplay: string;
  landlineE164: string;
  mobileDisplay: string;
  mobileE164: string;
  mapUrl: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  stationOpeningHours: OpeningHoursEntry[];
  workshopOpeningHours?: OpeningHoursEntry[];
}

const stationOpeningHours: OpeningHoursEntry[] = [
  {
    dayOfWeek: 'Monday',
    opens: '07:00',
    closes: '19:00',
  },
  {
    dayOfWeek: 'Tuesday',
    opens: '07:00',
    closes: '19:00',
  },
  {
    dayOfWeek: 'Wednesday',
    opens: '07:00',
    closes: '19:00',
  },
  {
    dayOfWeek: 'Thursday',
    opens: '07:00',
    closes: '19:00',
  },
  {
    dayOfWeek: 'Friday',
    opens: '07:00',
    closes: '19:00',
  },
  {
    dayOfWeek: 'Saturday',
    opens: '08:00',
    closes: '14:00',
  },
];

const workshopOpeningHours: OpeningHoursEntry[] = [
  {
    dayOfWeek: 'Monday',
    opens: '08:00',
    closes: '16:00',
  },
  {
    dayOfWeek: 'Tuesday',
    opens: '08:00',
    closes: '16:00',
  },
  {
    dayOfWeek: 'Wednesday',
    opens: '08:00',
    closes: '16:00',
  },
  {
    dayOfWeek: 'Thursday',
    opens: '08:00',
    closes: '16:00',
  },
  {
    dayOfWeek: 'Friday',
    opens: '08:00',
    closes: '16:00',
  },
];

export const businessLocations: BusinessLocation[] = [
  {
    id: 'swietochlowice',
    slug: '/swietochlowice',
    name: 'Auto-Bud Bosch Car Service Świętochłowice',
    shortName: 'Świętochłowice (Centrum)',
    city: 'Świętochłowice',
    district: 'Centrum',
    streetAddress: 'ul. Katowicka 73',
    postalCode: '41-600',
    addressLocality: 'Świętochłowice',
    fullAddress: 'ul. Katowicka 73, 41-600 Świętochłowice',
    landlineDisplay: '32 245 28 91',
    landlineE164: '+48322452891',
    mobileDisplay: '502 567 630',
    mobileE164: '+48502567630',
    mapUrl: 'https://maps.app.goo.gl/PQVm43rL5RzVfys77',
    geo: {
      latitude: 50.2848595,
      longitude: 18.9342162,
    },
    stationOpeningHours,
    workshopOpeningHours,
  },
  {
    id: 'godula',
    slug: '/godula',
    name: 'Auto-Bud Stacja Diagnostyczna Ruda Śląska Godula',
    shortName: 'Ruda Śląska (Godula)',
    city: 'Ruda Śląska',
    district: 'Godula',
    streetAddress: 'ul. Stara 1',
    postalCode: '41-703',
    addressLocality: 'Ruda Śląska',
    fullAddress: 'ul. Stara 1, 41-703 Ruda Śląska',
    landlineDisplay: '32 72 55 888',
    landlineE164: '+48327255888',
    mobileDisplay: '570 190 829',
    mobileE164: '+48570190829',
    mapUrl: 'https://maps.app.goo.gl/uevhCXnHGWYJm6NX8',
    geo: {
      latitude: 50.3136561,
      longitude: 18.8819304,
    },
    stationOpeningHours,
  },
  {
    id: 'bykowina',
    slug: '/bykowina',
    name: 'Auto-Bud Stacja Diagnostyczna Ruda Śląska Bykowina',
    shortName: 'Ruda Śląska (Bykowina)',
    city: 'Ruda Śląska',
    district: 'Bykowina',
    streetAddress: 'ul. Szpaków 51',
    postalCode: '41-705',
    addressLocality: 'Ruda Śląska',
    fullAddress: 'ul. Szpaków 51, 41-705 Ruda Śląska',
    landlineDisplay: '32 74 09 221',
    landlineE164: '+48327409221',
    mobileDisplay: '510 049 787',
    mobileE164: '+48510049787',
    mapUrl: 'https://maps.app.goo.gl/UFvFUSnpor4dTKHd6',
    geo: {
      latitude: 50.2700585,
      longitude: 18.8887763,
    },
    stationOpeningHours,
  },
];

export const serviceAreaCities = [
  'Katowice',
  'Świętochłowice',
  'Ruda Śląska',
  'Chorzów',
  'Siemianowice Śląskie',
  'Bytom',
  'Zabrze',
  'Mikołów',
  'Mysłowice',
  'Tychy',
];
