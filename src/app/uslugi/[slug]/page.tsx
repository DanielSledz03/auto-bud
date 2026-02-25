import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import FaqSection from '@/components/Seo/FaqSection';
import { workshopPricing } from '@/constants/workshopPricing';
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
};

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
      'Do wyboru masz trzy lokalizacje na Śląsku, dzięki czemu łatwo dopasujesz punkt do miejsca zamieszkania.',
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
          'Dla wygody rekomendujemy wcześniejszy kontakt telefoniczny lub rezerwację online.',
      },
    ],
    keywords: [
      'przegląd techniczny śląsk',
      'stacja kontroli pojazdów świętochłowice',
      'stacja diagnostyczna ruda śląska',
    ],
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
    return buildPageMetadata({
      title: 'Usługa | Auto-Bud Bosch Car Service',
      description: 'Strona usługi Auto-Bud Bosch Car Service.',
      path: '/uslugi',
    });
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
            href="/wizyta"
            className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
          >
            Umów wizytę
          </Link>
          <Link
            href="/kontakt"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Kontakt i telefony
          </Link>
          <Link
            href="/slask#katowice-dojazd"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Obsługa Katowic
          </Link>
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
          Co obejmuje usługa
        </h2>
        <ul className="mt-6 grid gap-3 text-sm leading-7 text-mediumGray lg:grid-cols-2 lg:text-base">
          {service.benefits.map(item => (
            <li key={item} className="rounded-md bg-lightGray p-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="cennik"
        className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64"
      >
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
          Cennik orientacyjny
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-mediumGray lg:text-base">
          Podane ceny mają charakter orientacyjny i dotyczą podstawowego zakresu
          prac. Końcowy koszt potwierdzamy po diagnostyce.
        </p>

        <div className="mt-5 overflow-hidden rounded-[10px] border border-lightGray2">
          <div className="grid grid-cols-[1fr_auto] gap-3 bg-lightGray px-4 py-3 text-sm font-semibold text-darkGray lg:px-5">
            <p>Usługa</p>
            <p>Cena</p>
          </div>
          {workshopPricing.map(item => (
            <div
              key={item.service}
              className="grid grid-cols-[1fr_auto] gap-3 border-t border-lightGray2 px-4 py-3 text-sm text-darkGray lg:px-5"
            >
              <p>{item.service}</p>
              <p className="whitespace-nowrap font-medium">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/uslugi#cennik"
            className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium text-darkGray"
          >
            Zobacz cennik na stronie usług
          </Link>
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10 lg:mt-12 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-[32px]">
          Powiązane usługi
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {services
            .filter(candidate => candidate.slug !== service.slug)
            .slice(0, 4)
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

      <FaqSection
        title={service.faqTitle}
        description={service.faqDescription}
        items={service.faq}
      />
    </>
  );
}
