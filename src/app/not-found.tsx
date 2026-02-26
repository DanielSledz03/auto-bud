import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Nie znaleziono strony | Auto-Bud Bosch Car Service',
  description: 'Strona, której szukasz, nie istnieje lub została przeniesiona.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="px-5 pb-12 pt-[84px] text-darkGray md:px-10 md:pt-[116px] lg:px-20 lg:pt-[102px] xl:px-48 2xl:px-64">
      <p className="text-sm font-medium text-red">Błąd 404</p>
      <h1 className="mt-2 text-3xl font-semibold lg:text-5xl">
        Nie znaleziono strony
      </h1>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-mediumGray lg:text-base">
        Link może być nieaktualny albo adres został wpisany z literówką. Przejdź
        do strony głównej, usług lub umów wizytę online.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-md bg-darkGray px-5 py-3 text-sm font-medium text-white"
        >
          Strona główna
        </Link>
        <Link
          href="/uslugi"
          className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium"
        >
          Zobacz usługi
        </Link>
        <Link
          href="/wizyta"
          className="rounded-md border border-lightGray2 px-5 py-3 text-sm font-medium"
        >
          Umów wizytę
        </Link>
      </div>
    </section>
  );
}
