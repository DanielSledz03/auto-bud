import { AvailableServices, LocationHeader, ServiceCard } from '@/components';
import { availableServicesProps, serviceCardProps } from '@/constants/bykowina';
import { locationHeaderProps } from '@/constants/swietochlowice';
import { Packages } from '@/view';

const BykowinaPage = () => {
  return (
    <>
      <LocationHeader {...locationHeaderProps} />
      <AvailableServices {...availableServicesProps} />
      <ServiceCard {...serviceCardProps} />
      <Packages />
    </>
  );
};

export default BykowinaPage;
