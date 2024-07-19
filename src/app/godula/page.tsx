import { AvailableServices, LocationHeader, ServiceCard } from '@/components';
import {
  locationGalleryProps,
  serviceCardBetaProps,
  serviceCardOmegaProps,
  availableServicesProps,
  locationHeaderProps,
} from '@/constants/godula';
import { LocationGallery, Packages } from '@/view';

const GodulaPage = () => {
  return (
    <>
      <LocationHeader {...locationHeaderProps} />
      <AvailableServices {...availableServicesProps} />
      <ServiceCard {...serviceCardOmegaProps} />
      <Packages />
      <ServiceCard {...serviceCardBetaProps} />
      <LocationGallery {...locationGalleryProps} />
    </>
  );
};

export default GodulaPage;
