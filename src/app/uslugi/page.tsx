import CarWashIcon from '@/../public/assets/icons/locations/carWash.svg';
import MechanicIcon from '@/../public/assets/icons/locations/mechanic.svg';
import RentCarIcon from '@/../public/assets/icons/locations/rentCar.svg';
import StationIcon from '@/../public/assets/icons/locations/vehicleStation.svg';
import ObjectInfoCard from '@/components/ObjectInfoCard/ObjectInfoCard';
import TextHeader from '@/components/TextHeader/TextHeader';

const Uslugi = () => {
  return (
    <>
      <TextHeader title="Nasze usługi">
        Poznaj szeroką gamę naszych usług motoryzacyjnych, które zaspokoją
        wszystkie potrzeby Twojego pojazdu. <br /> Nasza oferta to synonim
        jakości, profesjonalizmu i zaufania.
      </TextHeader>
      <ObjectInfoCard
        title="Stacja Kontroli Pojazdów"
        locations={[
          'Ruda Śląska, Godula',
          'Ruda Śląska, Bykowina',
          'Świętochłowice',
        ]}
        description="Nasze stacje kontroli pojazdów to miejsca, gdzie bezpieczeństwo spotyka się z precyzją. Zadbaj o swoje auto w jednym z naszych profesjonalnych punktów i podróżuj bez obaw."
        services={[
          {
            name: 'Przegląd techniczny',
            price: '100zł',
          },
          {
            name: 'Diagnostyka komputerowa',
            price: '50zł',
          },
          {
            name: 'Naprawa zawieszenia',
            price: 'od 200zł',
          },
        ]}
        icon={StationIcon}
      />

      <ObjectInfoCard
        title="Warsztat Samochodowy"
        locations={['Świętochłowice']}
        description="Nasz warsztat samochodowy to królestwo mechaniki i nowoczesnych technologii. Powierz swoje auto w ręce naszych doświadczonych specjalistów i ciesz się bezproblemową jazdą."
        services={[
          {
            name: 'Przegląd techniczny',
            price: '100 zł',
          },
          {
            name: 'Diagnostyka komputerowa',
            price: '50 zł',
          },
          {
            name: 'Naprawa zawieszenia',
            price: 'od 200 zł',
          },
        ]}
        icon={MechanicIcon}
      />

      <ObjectInfoCard
        title="Myjnia bezdotykowa"
        locations={['Ruda Śląska, Godula']}
        description="Nasza myjnia bezdotykowa to idealne miejsce, by Twój samochód lśnił jak nowy. Szybko, skutecznie i bezpiecznie dla lakieru - oto nasza obietnica."
        services={[
          {
            name: '30 sekund mycia',
            price: '1 zł',
          },
        ]}
        icon={CarWashIcon}
      />

      <ObjectInfoCard
        title="Samochód zastępczy"
        description="Nie pozwól, by naprawa samochodu pokrzyżowała Twoje plany. Skorzystaj z naszej oferty wynajmu samochodu zastępczego i ciesz się mobilnością w każdej sytuacji."
        services={[
          {
            name: 'Dzień wypożyczenia',
            price: '200 zł',
          },
        ]}
        icon={RentCarIcon}
      />
    </>
  );
};

export default Uslugi;
