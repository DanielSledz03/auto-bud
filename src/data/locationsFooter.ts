export interface Location {
  name: string;
  address: string;
  zipCode: string;

  linkToGoogleMaps: string;
}

export const locations: Location[] = [
  {
    name: 'Świętochłowice',
    address: 'ul. Katowicka 73',
    zipCode: '41-600 Świętochłowice',

    linkToGoogleMaps: 'https://maps.app.goo.gl/yWE435PCa9u4jyqeA',
  },
  {
    name: 'Ruda Śląska - Godula',
    address: 'ul. Stara 1',
    zipCode: '41-703 Ruda Śląska',
    linkToGoogleMaps: 'https://maps.app.goo.gl/d87RTFWxaD1iZUTo8',
  },
  {
    name: 'Ruda Śląska - Bykownia',
    address: 'ul. Szpaków 51',
    zipCode: '41-705 Ruda Śląska',

    linkToGoogleMaps: 'https://maps.app.goo.gl/S5x1m6WPYF8rcDYF9',
  },
];
