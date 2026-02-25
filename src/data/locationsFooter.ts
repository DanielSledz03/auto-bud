import { businessLocations } from './businessLocations';

export interface Location {
  name: string;
  address: string;
  zipCode: string;
  linkToGoogleMaps: string;
}

export const locations: Location[] = businessLocations.map(location => ({
  name: location.shortName,
  address: location.streetAddress,
  zipCode: `${location.postalCode} ${location.addressLocality}`,
  linkToGoogleMaps: location.mapUrl,
}));
