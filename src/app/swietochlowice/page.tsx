import { AvailableServices, LocationHeader, ServiceCard } from '@/components';
import {
  locationHeaderProps,
  serviceCardGammaProps,
  serviceCardLambdaProps,
  serviceCardOfficeProps,
} from '@/constants/swietochlowice';
import { Packages } from '@/view';

const SwietochlowicePage = () => {
  return (
    <>
      <LocationHeader {...locationHeaderProps} />
      <AvailableServices isOffice={true} isStation={true} isCarRepair={true} />
      <ServiceCard {...serviceCardGammaProps} />
      <Packages />
      <ServiceCard {...serviceCardLambdaProps} />
      <ServiceCard {...serviceCardOfficeProps} />
    </>
  );
};

export default SwietochlowicePage;
