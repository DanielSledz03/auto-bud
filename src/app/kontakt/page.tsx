import Link from 'next/link';

import { TextHeader } from '@/components';
import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import { businessLocations } from '@/data/businessLocations';
import ContactWithUs from '@/form/ContactWithUs/ContactWithUs';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title:
    'Kontakt i lokalizacje | Auto-Bud Bosch Car Service - Świętochłowice, Ruda Śląska',
  description:
    'Kontakt do Auto-Bud Bosch Car Service: ul. Katowicka 73, 41-600 Świętochłowice; ul. Stara 1, 41-703 Ruda Śląska (Godula); ul. Szpaków 51, 41-705 Ruda Śląska (Bykowina).',
  path: '/kontakt',
  keywords: [
    'kontakt auto-bud',
    'warsztat samochodowy świętochłowice telefon',
    'stacja diagnostyczna ruda śląska kontakt',
    'umów wizytę auto-bud',
  ],
});

const KontaktPage = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Strona główna', path: '/' },
          { name: 'Kontakt', path: '/kontakt' },
        ]}
      />
      <TextHeader title="Kontakt">
        Masz pytania o zakres naprawy, dojazd lub najbliższy termin? Skontaktuj
        się z nami telefonicznie albo umów wizytę online.
      </TextHeader>

      <section className="px-5 md:px-10 lg:px-20 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Dane kontaktowe i lokalizacje
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {businessLocations.map(location => (
            <article
              key={location.id}
              className="rounded-[10px] border border-lightGray2 p-4"
            >
              <h3 className="text-lg font-semibold text-darkGray">
                {location.city}, {location.district}
              </h3>
              <p className="mt-3 text-sm text-mediumGray">
                {location.fullAddress}
              </p>
              <p className="mt-2 text-sm text-mediumGray">
                tel.{' '}
                <Link
                  href={`tel:${location.landlineE164}`}
                  className="font-medium text-darkGray"
                >
                  {location.landlineDisplay}
                </Link>
              </p>
              <p className="text-sm text-mediumGray">
                kom.{' '}
                <Link
                  href={`tel:${location.mobileE164}`}
                  className="font-medium text-darkGray"
                >
                  {location.mobileDisplay}
                </Link>
              </p>
              <Link
                href={location.mapUrl}
                target="_blank"
                className="mt-3 inline-block text-sm font-medium text-red"
              >
                Otwórz mapę
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 px-5 pb-4 md:px-10 lg:mt-12 lg:px-20 lg:pb-6 xl:px-48 2xl:px-64">
        <div className="rounded-[10px] border border-lightGray2 bg-lightGray p-5 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:p-6">
          <div>
            <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
              Wolisz zgłosić termin online?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-mediumGray lg:text-base">
              Przejdź do formularza wizyty i zostaw preferowany dzień oraz porę
              kontaktu. Oddzwonimy i potwierdzimy termin.
            </p>
          </div>
          <Link
            href="/wizyta"
            className="mt-5 inline-flex rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white lg:mt-0"
          >
            Przejdź do formularza wizyty
          </Link>
        </div>
      </section>

      <section className="px-5 pb-4 md:px-10 lg:px-20 lg:pb-6 xl:px-48 2xl:px-64">
        <h2 className="text-2xl font-semibold text-darkGray lg:text-3xl">
          Najczęściej wybierane strony lokalne
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/mechanik-swietochlowice"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Mechanik Świętochłowice
          </Link>
          <Link
            href="/stacja-diagnostyczna-ruda-slaska"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Stacja diagnostyczna Ruda Śląska
          </Link>
          <Link
            href="/uslugi"
            className="rounded-md border border-lightGray2 px-4 py-2 text-sm text-darkGray hover:text-red"
          >
            Usługi i cennik
          </Link>
        </div>
      </section>

      <ContactWithUs />
    </>
  );
};

export default KontaktPage;
