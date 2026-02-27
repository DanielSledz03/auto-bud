import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CarWashGalleryLightbox from '@/components/CarWashGalleryLightbox';
import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import {
  workshopPricing,
  type WorkshopPricingItem,
} from '@/constants/workshopPricing';
import CarWashDesktopImage from '@/images/godula/myjnia/1.png';
import CarWashMobileImage from '@/images/godula/myjnia/1-mobile.png';
import CarWashGalleryImage1 from '@/images/godula/myjnia/5BE946CA-3FD7-491E-992B-BB33E1F307EF.jpg';
import CarWashGalleryImage2 from '@/images/godula/myjnia/0279BBB1-7446-4C83-912A-B419050B5FF5.jpg';
import CarWashGalleryImage3 from '@/images/godula/myjnia/BC468687-5867-4139-B8A4-AE1FFBA737EB.jpg';
import CarWashGalleryImage4 from '@/images/godula/myjnia/BC776048-FA6B-472F-B29E-CB7AAB0762A8.jpg';
import CarWashGalleryImage5 from '@/images/godula/myjnia/F021BBE2-0481-491E-8A56-294345836651.jpg';
import CarWashGalleryImage6 from '@/images/godula/myjnia/F0525694-CD9F-47AF-85C0-EF63C8788843.jpg';
import { buildPageMetadata } from '@/lib/seo';

type ServiceEntry = {
  slug: string;
  navName: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  localContext: string;
  benefits: string[];
  faqTitle: string;
  faqDescription: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  keywords: string[];
  hidePricing?: boolean;
  pricingHeading?: string;
  pricingDescription?: string;
  pricingItems?: WorkshopPricingItem[];
  pricingNote?: string;
};

const carWashGalleryImages = [
  {
    src: CarWashGalleryImage1,
    alt: 'Myjnia bezdotykowa Auto-Bud Godula - stanowisko mycia',
  },
  {
    src: CarWashGalleryImage2,
    alt: 'Myjnia bezdotykowa Auto-Bud Godula - widok stanowisk',
  },
  {
    src: CarWashGalleryImage3,
    alt: 'Myjnia bezdotykowa Auto-Bud Godula - widok obiektu',
  },
  {
    src: CarWashGalleryImage4,
    alt: 'Myjnia bezdotykowa Auto-Bud Godula - panel programów mycia',
  },
  {
    src: CarWashGalleryImage5,
    alt: 'Myjnia bezdotykowa Auto-Bud Godula - regulamin i zasady',
  },
  {
    src: CarWashGalleryImage6,
    alt: 'Myjnia bezdotykowa Auto-Bud Godula - dodatkowe ujęcie obiektu',
  },
];

const carWashProgramSteps = [
  {
    program: 'Piana aktywna',
    description: 'Wstępny oprysk rozpuszczający brud.',
  },
  {
    program: 'Mycie zasadnicze',
    description: 'Ciepła, zmiękczona woda z proszkiem do mycia.',
  },
  {
    program: 'Piano szczotka',
    description: 'Mycie szczotką z aktywnym szamponem.',
  },
  {
    program: 'Spłukiwanie',
    description: 'Czysta woda pod wysokim ciśnieniem.',
  },
  {
    program: 'Woskowanie',
    description: 'Polimerowa ochrona lakieru na gorąco.',
  },
  {
    program: 'Nabłyszczanie',
    description: 'Woda demineralizowana i suszenie bez zacieków.',
  },
];

const carWashRulesGeneral = [
  'Myjnia jest czynna codziennie w godzinach 07:00-22:00.',
  'Teren obiektu jest monitorowany i chroniony.',
  'Myjnia obsługuje pojazdy o masie całkowitej do 3,5 t (samochody, motocykle, quady).',
  'Na terenie obiektu obowiązują zasady ruchu drogowego.',
  'Wjazd na myjnię oznacza pełną akceptację regulaminu.',
];

const carWashRulesSafety = [
  'Na jednym stanowisku może przebywać tylko jeden pojazd.',
  'Przed myciem wyłącz silnik, zaciągnij hamulec ręczny oraz domknij szyby i drzwi.',
  'Stosuj programy po kolei: od 1 do ostatniego, zgodnie z instrukcją panelu.',
];

const carWashRulesRestrictions = [
  'Zakaz mycia ręcznego na stanowisku (np. gąbką i wiadrem).',
  'Zakaz mycia silników oraz używania własnej chemii.',
  'Zakaz kierowania lancy z wodą w stronę ludzi i zwierząt.',
];

const carWashRulesLiability = [
  'Myjnia nie odpowiada za zalanie wnętrza pojazdu wynikające z niedomknięcia szyb lub drzwi.',
  'Myjnia nie ponosi odpowiedzialności za uszkodzenia elementów z ukrytymi wadami (np. odpryski lakieru, korozja, szpachla) poddanych działaniu wody pod wysokim ciśnieniem.',
];

const services: ServiceEntry[] = [
  {
    slug: 'diagnostyka-komputerowa',
    navName: 'Diagnostyka komputerowa',
    h1: 'Diagnostyka komputerowa - Świętochłowice i okolice',
    title: 'Diagnostyka komputerowa | Auto-Bud Bosch Car Service',
    description:
      'Diagnostyka komputerowa w Auto-Bud Bosch Car Service dla kierowców ze Świętochłowic, Katowic i całego Śląska.',
    intro:
      'Nowoczesna diagnostyka komputerowa pozwala szybko wykryć usterki silnika, układów elektronicznych i systemów bezpieczeństwa.',
    localContext:
      'Usługę realizujemy przede wszystkim w lokalizacji Świętochłowice (ul. Katowicka 73), z dogodnym dojazdem z Katowic i Chorzowa.',
    benefits: [
      'Odczyt i interpretacja kodów błędów z wielu sterowników.',
      'Weryfikacja parametrów pracy silnika i osprzętu w czasie rzeczywistym.',
      'Rekomendacja dalszych napraw w oparciu o wyniki pomiarów.',
    ],
    faqTitle: 'FAQ: diagnostyka komputerowa',
    faqDescription:
      'Najczęstsze pytania o przebieg diagnostyki komputerowej i przygotowanie auta do wizyty.',
    faq: [
      {
        question: 'Ile trwa diagnostyka komputerowa?',
        answer:
          'Czas zależy od zakresu problemu, ale podstawowa diagnostyka zwykle trwa od kilkunastu do kilkudziesięciu minut.',
      },
      {
        question: 'Czy po diagnostyce dostanę informację o kolejnych krokach?',
        answer:
          'Tak. Po odczycie błędów omawiamy wyniki i rekomendujemy dalsze działania serwisowe.',
      },
      {
        question: 'Czy obsługujecie auta klientów z Katowic?',
        answer:
          'Tak. Wielu klientów z Katowic korzysta z diagnostyki w naszej lokalizacji w Świętochłowicach.',
      },
    ],
    keywords: [
      'diagnostyka komputerowa świętochłowice',
      'diagnostyka komputerowa katowice',
      'diagnostyka samochodowa śląsk',
    ],
  },
  {
    slug: 'serwis-klimatyzacji',
    navName: 'Serwis klimatyzacji',
    h1: 'Serwis klimatyzacji - Śląsk (Świętochłowice, Katowice i okolice)',
    title: 'Serwis klimatyzacji | Auto-Bud Bosch Car Service',
    description:
      'Serwis klimatyzacji samochodowej: odgrzybianie, kontrola szczelności i napełnianie czynnika w Auto-Bud Bosch Car Service.',
    intro:
      'Sprawna klimatyzacja to komfort i bezpieczeństwo jazdy. Wykonujemy kompleksowy serwis układu zgodnie z wymaganiami producenta pojazdu.',
    localContext:
      'Klienci z Katowic, Chorzowa i Rudy Śląskiej regularnie wybierają nasz serwis klimatyzacji w Świętochłowicach.',
    benefits: [
      'Kontrola szczelności i sprawdzenie ciśnień roboczych.',
      'Odgrzybianie i wymiana filtra kabinowego.',
      'Uzupełnienie czynnika chłodniczego i oleju sprężarki.',
    ],
    faqTitle: 'FAQ: serwis klimatyzacji',
    faqDescription:
      'Pytania o terminy serwisu klimatyzacji i częstotliwość przeglądów.',
    faq: [
      {
        question: 'Jak często wykonywać serwis klimatyzacji?',
        answer:
          'Rekomendujemy kontrolę minimum raz w roku, najlepiej przed sezonem letnim.',
      },
      {
        question: 'Czy odgrzybianie jest konieczne przy każdym przeglądzie?',
        answer:
          'W praktyce tak, ponieważ ogranicza rozwój drobnoustrojów i poprawia jakość powietrza w kabinie.',
      },
      {
        question: 'Czy mogę umówić serwis klimatyzacji online?',
        answer:
          'Tak. Wystarczy skorzystać z formularza umawiania wizyty i zaznaczyć zakres usługi.',
      },
    ],
    keywords: [
      'serwis klimatyzacji śląsk',
      'serwis klimatyzacji katowice',
      'odgrzybianie klimatyzacji świętochłowice',
    ],
  },
  {
    slug: 'wymiana-oleju',
    navName: 'Wymiana oleju',
    h1: 'Wymiana oleju i filtrów - warsztat samochodowy Śląsk',
    title: 'Wymiana oleju i filtrów | Auto-Bud Bosch Car Service',
    description:
      'Profesjonalna wymiana oleju i filtrów w Auto-Bud Bosch Car Service. Obsługa kierowców ze Świętochłowic, Katowic i okolic.',
    intro:
      'Regularna wymiana oleju i filtrów to podstawa długiej żywotności silnika. Dobieramy olej według specyfikacji producenta i przebiegu auta.',
    localContext:
      'Usługę realizujemy w dogodnej lokalizacji w Świętochłowicach oraz dla klientów z całej aglomeracji śląskiej.',
    benefits: [
      'Dobór lepkości i norm producenta dla konkretnego silnika.',
      'Wymiana filtra oleju oraz kontrola podstawowych punktów eksploatacyjnych.',
      'Rekomendacja terminu kolejnego przeglądu olejowego.',
    ],
    faqTitle: 'FAQ: wymiana oleju',
    faqDescription:
      'Najczęstsze pytania o częstotliwość i zakres wymiany oleju.',
    faq: [
      {
        question: 'Co ile kilometrów wymieniać olej?',
        answer:
          'Najczęściej co 10-15 tys. km lub raz w roku, zgodnie z zaleceniami producenta i stylem jazdy.',
      },
      {
        question: 'Czy wymieniacie również filtry?',
        answer:
          'Tak, przy wymianie oleju standardowo wymieniamy filtr oleju, a w razie potrzeby także filtry powietrza i kabinowy.',
      },
      {
        question: 'Czy mogę przyjechać autem z Katowic?',
        answer:
          'Tak. Obsługujemy wielu klientów z Katowic i okolic, z szybkim dojazdem do naszego serwisu.',
      },
    ],
    keywords: [
      'wymiana oleju świętochłowice',
      'wymiana oleju katowice',
      'wymiana filtrów śląsk',
    ],
  },
  {
    slug: 'serwis-hamulcow',
    navName: 'Serwis hamulców',
    h1: 'Serwis hamulców - Świętochłowice, Katowice, Śląsk',
    title: 'Serwis hamulców | Auto-Bud Bosch Car Service',
    description:
      'Serwis układu hamulcowego: kontrola, wymiana klocków i tarcz, wymiana płynu hamulcowego w Auto-Bud Bosch Car Service.',
    intro:
      'Układ hamulcowy to kluczowy element bezpieczeństwa. Kontrolujemy jego stan i wykonujemy naprawy zgodnie z procedurami serwisowymi.',
    localContext:
      'Z usługi korzystają kierowcy ze Świętochłowic, Katowic, Chorzowa i pozostałych miast regionu.',
    benefits: [
      'Kontrola zużycia klocków i tarcz hamulcowych.',
      'Wymiana elementów eksploatacyjnych układu hamulcowego.',
      'Weryfikacja działania hamulca ręcznego i skuteczności hamowania.',
    ],
    faqTitle: 'FAQ: serwis hamulców',
    faqDescription:
      'Odpowiedzi na pytania dotyczące objawów zużytych hamulców.',
    faq: [
      {
        question: 'Po czym poznać, że trzeba wymienić klocki hamulcowe?',
        answer:
          'Typowe objawy to piski podczas hamowania, wydłużona droga hamowania i komunikaty serwisowe w aucie.',
      },
      {
        question: 'Czy wymieniacie płyn hamulcowy?',
        answer:
          'Tak. Sprawdzamy parametry płynu i wykonujemy jego wymianę zgodnie z harmonogramem serwisowym.',
      },
      {
        question: 'Czy wykonujecie kontrolę hamulców przed wyjazdem?',
        answer:
          'Tak, możemy wykonać kontrolę układu hamulcowego przed dłuższą trasą lub przeglądem okresowym.',
      },
    ],
    keywords: [
      'serwis hamulców śląsk',
      'wymiana klocków świętochłowice',
      'wymiana tarcz hamulcowych katowice',
    ],
  },
  {
    slug: 'przeglad-techniczny',
    navName: 'Przegląd techniczny',
    h1: 'Przegląd techniczny - stacje kontroli pojazdów Auto-Bud',
    title: 'Przegląd techniczny | Auto-Bud Bosch Car Service',
    description:
      'Przeglądy techniczne na stacjach kontroli pojazdów Auto-Bud: Świętochłowice, Ruda Śląska Godula i Bykowina.',
    intro:
      'Wykonujemy okresowe badania techniczne pojazdów osobowych i dostawczych zgodnie z obowiązującymi przepisami.',
    localContext:
      'Do wyboru masz trzy lokalizacje na Śląsku, dzięki czemu łatwo dopasujesz punkt do miejsca zamieszkania. Na przegląd techniczny podjeżdżasz bez wcześniejszego umawiania.',
    benefits: [
      'Badania okresowe i dodatkowe zgodne z zakresem uprawnień stacji.',
      'Sprawna obsługa i jasna informacja o stanie technicznym pojazdu.',
      'Możliwość połączenia przeglądu z dodatkowymi usługami serwisowymi.',
    ],
    faqTitle: 'FAQ: przegląd techniczny',
    faqDescription:
      'Najczęściej zadawane pytania o badania techniczne pojazdów.',
    faq: [
      {
        question: 'Czy mogę wykonać przegląd auta z instalacją LPG?',
        answer:
          'Tak, wykonujemy badania techniczne pojazdów wyposażonych w instalację LPG.',
      },
      {
        question: 'W których lokalizacjach wykonujecie przeglądy?',
        answer:
          'Badania techniczne realizujemy w Świętochłowicach oraz w Rudzie Śląskiej (Godula i Bykowina).',
      },
      {
        question: 'Czy muszę się wcześniej umówić?',
        answer:
          'Nie. Na przegląd techniczny nie trzeba się wcześniej umawiać. Wystarczy podjechać na dowolną stację Auto-Bud w godzinach pracy.',
      },
    ],
    keywords: [
      'przegląd techniczny śląsk',
      'stacja kontroli pojazdów świętochłowice',
      'stacja diagnostyczna ruda śląska',
    ],
  },
  {
    slug: 'myjnia-ruda-slaska-godula',
    navName: 'Myjnia bezdotykowa',
    h1: 'Myjnia bezdotykowa Ruda Śląska (Godula)',
    title: 'Myjnia bezdotykowa Ruda Śląska (Godula) | Auto-Bud',
    description:
      'Myjnia bezdotykowa Auto-Bud w Rudzie Śląskiej (Godula), ul. Stara 1. 6 programów mycia i wygodny dojazd dla kierowców z całego Śląska.',
    intro:
      'Szukasz frazy "myjnia Ruda Śląska"? W Goduli działa myjnia bezdotykowa Auto-Bud z 6 programami mycia, dzięki którym szybko odświeżysz auto bez ryzyka zarysowań.',
    localContext:
      'Lokalizacja: Ruda Śląska, Godula, ul. Stara 1. Myjnia czynna codziennie 07:00-22:00 i wygodna dla kierowców z Rudy Śląskiej, Bytomia, Chorzowa i Katowic. Za mycie można zapłacić kartą.',
    benefits: [
      'Mycie bezdotykowe z 6 programami dopasowanymi do stopnia zabrudzenia auta.',
      'Codzienna dostępność od 07:00 do 22:00.',
      'Myjnia znajduje się w tej samej lokalizacji co stacja diagnostyczna Auto-Bud Godula.',
      'Możliwa płatność kartą lub monetami.',
    ],
    faqTitle: 'FAQ: myjnia bezdotykowa Ruda Śląska Godula',
    faqDescription:
      'Najczęstsze pytania o działanie myjni bezdotykowej Auto-Bud w Goduli.',
    faq: [
      {
        question: 'Gdzie znajduje się myjnia bezdotykowa Auto-Bud?',
        answer:
          'Myjnia działa w Rudzie Śląskiej (Godula), przy ul. Starej 1, w lokalizacji Auto-Bud.',
      },
      {
        question: 'W jakich godzinach działa myjnia bezdotykowa?',
        answer:
          'Myjnia bezdotykowa jest czynna codziennie w godzinach 07:00-22:00.',
      },
      {
        question: 'W jakiej kolejności najlepiej uruchamiać programy mycia?',
        answer:
          'Rekomendujemy korzystanie z programów po kolei: od 1 do ostatniego, zgodnie z instrukcją panelu sterowania na stanowisku.',
      },
      {
        question: 'Czy na myjni można płacić kartą?',
        answer:
          'Tak. Na myjni bezdotykowej w Goduli możliwa jest płatność kartą lub monetami.',
      },
    ],
    keywords: [
      'myjnia ruda śląska',
      'myjnia bezdotykowa ruda śląska',
      'myjnia godula',
      'myjnia samochodowa ruda śląska',
      'myjnia ruda slaska godula',
    ],
    hidePricing: true,
  },
  {
    slug: 'mycie-reczne-swietochlowice',
    navName: 'Mycie ręczne',
    h1: 'Mycie ręczne samochodu Świętochłowice',
    title: 'Mycie ręczne samochodu Świętochłowice | Auto-Bud',
    description:
      'Nowa usługa Auto-Bud: mycie ręczne samochodu w Świętochłowicach. Dostępne m.in. czyszczenie wnętrza, pranie tapicerki i renowacja reflektorów.',
    intro:
      'Wprowadziliśmy nową usługę: myjnię ręczną. To wygodna opcja dla kierowców, którzy szukają dokładniejszego mycia i pielęgnacji pojazdu.',
    localContext:
      'Usługa jest dostępna w Świętochłowicach, ul. Katowicka 73. Zakres i termin realizacji potwierdzamy telefonicznie przed wizytą.',
    benefits: [
      'Podstawowe mycie zewnętrzne samochodu od 100 zł.',
      'Odkurzanie i czyszczenie wnętrza samochodu od 150 zł.',
      'Dodatkowe usługi pielęgnacyjne, w tym renowacja reflektorów i pranie tapicerki.',
    ],
    faqTitle: 'FAQ: mycie ręczne Świętochłowice',
    faqDescription:
      'Pytania o nową usługę myjni ręcznej w lokalizacji Auto-Bud Świętochłowice.',
    faq: [
      {
        question: 'Czy na mycie ręczne trzeba się wcześniej umówić?',
        answer:
          'Rekomendujemy wcześniejszy kontakt telefoniczny, aby potwierdzić dostępny termin i zakres usługi.',
      },
      {
        question: 'Czy podane ceny są ostateczne?',
        answer:
          'Podane kwoty są cenami od i zależą od wielkości auta oraz stopnia zabrudzenia.',
      },
      {
        question:
          'Czy wykonujecie także pranie tapicerki i renowację reflektorów?',
        answer:
          'Tak. W myjni ręcznej oferujemy również pranie tapicerki materiałowej i skórzanej oraz renowację reflektorów.',
      },
    ],
    keywords: [
      'mycie ręczne świętochłowice',
      'myjnia ręczna świętochłowice',
      'pranie tapicerki świętochłowice',
      'renowacja reflektorów świętochłowice',
      'detailing świętochłowice',
    ],
    pricingHeading: 'Cennik myjni ręcznej (ceny od)',
    pricingDescription:
      'Poniższe pozycje pochodzą z aktualnej informacji o usłudze mycia ręcznego w punkcie Świętochłowice.',
    pricingItems: [
      { service: 'Podstawowe mycie zewnętrzne samochodu', price: 'od 100 zł' },
      {
        service: 'Odkurzanie i czyszczenie wnętrza samochodu',
        price: 'od 150 zł',
      },
      {
        service: 'Renowacja reflektorów (2 szt., przód)',
        price: 'od 300 zł',
      },
      { service: 'Pranie tapicerki materiałowej', price: 'od 400 zł' },
      { service: 'Czyszczenie tapicerki skórzanej', price: 'od 450 zł' },
      {
        service: 'Niewidzialna wycieraczka (przednia szyba)',
        price: 'od 100 zł',
      },
    ],
    pricingNote:
      'Końcowa cena zależy od wielkości auta, stopnia zabrudzenia i zakresu prac.',
  },
];

const servicesBySlug = Object.fromEntries(
  services.map(service => [service.slug, service]),
) as Record<string, ServiceEntry>;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  return buildPageMetadata({
    title: service.title,
    description: service.description,
    path: `/uslugi/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }
  const isTechnicalInspection = service.slug === 'przeglad-techniczny';
  const isCarWash = service.slug === 'myjnia-ruda-slaska-godula';
  const isHandWash = service.slug === 'mycie-reczne-swietochlowice';
  const isGodulaWashService = isCarWash;
  const isSwietochlowiceHandWashService = isHandWash;
  const shouldShowPricing = !service.hidePricing;
  const pricingItems = service.pricingItems ?? workshopPricing;
  const pricingHeading = service.pricingHeading ?? 'Cennik orientacyjny';
  const pricingDescription =
    service.pricingDescription ??
    'Podane ceny mają charakter orientacyjny i dotyczą podstawowego zakresu prac. Końcowy koszt potwierdzamy po diagnostyce.';
  const benefitsGridClasses = isCarWash
    ? 'mt-6 grid gap-3 text-sm leading-7 text-mediumGray lg:grid-cols-2 xl:grid-cols-4 lg:text-base'
    : 'mt-6 grid gap-3 text-sm leading-7 text-mediumGray lg:grid-cols-2 lg:text-base';
  const benefitsSectionTitle = isCarWash
    ? 'Najważniejsze informacje o myjni'
    : 'Co obejmuje usługa';
  const carWashGalleryItems = carWashGalleryImages.map(image => ({
    src: image.src.src,
    alt: image.alt,
    width: image.src.width,
    height: image.src.height,
  }));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          { name: 'Usługi', path: '/uslugi' },
          { name: service.navName, path: `/uslugi/${service.slug}` },
        ]}
      />

      <section className="mt-8 px-5 md:px-10 lg:mt-10 lg:px-20 xl:px-48 2xl:px-64">
        <p className="text-sm text-red">Usługa</p>
        <h1 className="mt-2 text-3xl font-semibold text-darkGray lg:text-5xl">
          {service.h1}
        </h1>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          {service.intro}
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          {service.localContext}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={
              isTechnicalInspection
                ? '/stacja-diagnostyczna-ruda-slaska'
                : isGodulaWashService
                  ? '/godula'
                  : isSwietochlowiceHandWashService
                    ? '/swietochlowice'
                    : '/wizyta'
            }
            className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
          >
            {isTechnicalInspection
              ? 'Wybierz stację i podjedź'
              : isGodulaWashService
                ? 'Dojazd do Goduli'
                : isSwietochlowiceHandWashService
                  ? 'Dojazd do Świętochłowic'
                  : 'Umów wizytę'}
          </Link>
          <Link
            href="/kontakt"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Kontakt i telefony
          </Link>
          <Link
            href={
              isTechnicalInspection
                ? '/stacja-diagnostyczna-ruda-slaska#lokalizacje-stacji'
                : isGodulaWashService
                  ? '/godula'
                  : isSwietochlowiceHandWashService
                    ? '/swietochlowice'
                    : '/slask#katowice-dojazd'
            }
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            {isTechnicalInspection
              ? 'Godula i Bykowina'
              : isGodulaWashService
                ? 'Godziny i kontakt Godula'
                : isSwietochlowiceHandWashService
                  ? 'Warsztat Świętochłowice'
                  : 'Obsługa Katowic'}
          </Link>
        </div>
      </section>

      {isCarWash && (
        <section className="mt-8 px-5 md:px-10 lg:mt-10 lg:px-20 xl:px-48 2xl:px-64">
          <div className="overflow-hidden rounded-[10px] border border-lightGray2">
            <div className="relative h-56 w-full md:hidden">
              <Image
                src={CarWashMobileImage}
                alt="Myjnia bezdotykowa Auto-Bud w Rudzie Śląskiej Goduli"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="relative hidden h-72 w-full md:block lg:h-80">
              <Image
                src={CarWashDesktopImage}
                alt="Myjnia bezdotykowa Auto-Bud w Rudzie Śląskiej Goduli"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
          </div>
        </section>
      )}

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          {benefitsSectionTitle}
        </h2>
        <ul className={benefitsGridClasses}>
          {service.benefits.map(item => (
            <li key={item} className="h-full rounded-md bg-lightGray p-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {isCarWash && (
        <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
          <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
            Programy mycia i rekomendowana kolejność
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
            Najlepszy efekt uzyskasz, uruchamiając programy po kolei, od 1 do 6.
          </p>
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {carWashProgramSteps.map((step, index) => (
              <article
                key={step.program}
                className="rounded-[10px] border border-lightGray2 p-4"
              >
                <p className="text-xs font-semibold text-red">
                  Program {index + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-darkGray">
                  {step.program}
                </h3>
                <p className="mt-2 text-sm leading-7 text-mediumGray">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {isCarWash && (
        <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
          <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
            Regulamin i bezpieczeństwo myjni
          </h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[10px] border border-lightGray2 p-5">
              <h3 className="text-lg font-semibold text-darkGray">
                Zasady ogólne
              </h3>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-mediumGray">
                {carWashRulesGeneral.map(rule => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[10px] border border-lightGray2 p-5">
              <h3 className="text-lg font-semibold text-darkGray">
                Instrukcja i bezpieczeństwo
              </h3>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-mediumGray">
                {carWashRulesSafety.map(rule => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[10px] border border-lightGray2 p-5">
              <h3 className="text-lg font-semibold text-darkGray">
                Zakazy na stanowisku
              </h3>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-mediumGray">
                {carWashRulesRestrictions.map(rule => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[10px] border border-lightGray2 p-5">
              <h3 className="text-lg font-semibold text-darkGray">
                Odpowiedzialność
              </h3>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-mediumGray">
                {carWashRulesLiability.map(rule => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      )}

      {shouldShowPricing && (
        <section
          id="cennik"
          className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64"
        >
          <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
            {pricingHeading}
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
            {pricingDescription}
          </p>

          <div className="mt-5 overflow-hidden rounded-[10px] border border-lightGray2">
            <div className="grid grid-cols-[1fr_auto] gap-3 bg-lightGray px-4 py-3 text-sm font-semibold text-darkGray lg:px-5">
              <p>Usługa</p>
              <p>Cena</p>
            </div>
            {pricingItems.map(item => (
              <div
                key={item.service}
                className="grid grid-cols-[1fr_auto] gap-3 border-t border-lightGray2 px-4 py-3 text-sm text-darkGray lg:px-5"
              >
                <p>{item.service}</p>
                <p className="whitespace-nowrap font-medium">{item.price}</p>
              </div>
            ))}
          </div>

          {service.pricingNote && (
            <p className="mt-3 text-sm leading-6 text-mediumGray">
              {service.pricingNote}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/uslugi#cennik"
              className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
            >
              Zobacz cennik na stronie usług
            </Link>
          </div>
        </section>
      )}

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Powiązane usługi
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {services
            .filter(candidate => candidate.slug !== service.slug)
            .slice(0, 6)
            .map(candidate => (
              <Link
                key={candidate.slug}
                href={`/uslugi/${candidate.slug}`}
                className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
              >
                {candidate.navName}
              </Link>
            ))}
        </div>
      </section>

      {isCarWash && (
        <section className="mt-10 px-5 pb-8 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
          <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
            Galeria myjni bezdotykowej
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
            Zobacz zdjęcia myjni bezdotykowej Auto-Bud w lokalizacji Ruda Śląska
            Godula.
          </p>
          <CarWashGalleryLightbox images={carWashGalleryItems} />
        </section>
      )}

      <FaqSection
        title={service.faqTitle}
        description={service.faqDescription}
        items={service.faq}
      />
    </>
  );
}
