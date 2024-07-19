import { ObjectInfoCard, ServiceCard, TextHeader } from '@/components';
import {
  carWashProps,
  galleryProps,
  mechanicWorkshopProps,
  rentCarProps,
  roadAssistanceProps,
  stationControlProps,
  servicesHeader,
} from '@/constants/services';
import { LocationGallery } from '@/view';

const services = [
  stationControlProps,
  mechanicWorkshopProps,
  carWashProps,
  rentCarProps,
];

const Uslugi = () => (
  <>
    <TextHeader title={servicesHeader.title}>
      {servicesHeader.description}
    </TextHeader>
    {services.map((props, index) => (
      <ObjectInfoCard key={index} {...props} />
    ))}
    <LocationGallery {...galleryProps} />
    <ServiceCard {...roadAssistanceProps} />
  </>
);

export default Uslugi;
