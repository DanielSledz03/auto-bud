import Link from 'next/link';

import { BreadcrumbItem, createBreadcrumbJsonLd } from '@/lib/seo';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const jsonLd = createBreadcrumbJsonLd(items);

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="px-5 pt-[84px] text-sm text-mediumGray md:px-10 md:pt-[116px] lg:px-20 lg:pt-[102px] xl:px-48 2xl:px-64"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const key = `${item.path}-${item.name}`;

            return (
              <li key={key} className="flex items-center gap-2">
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-medium text-darkGray"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link className="hover:text-red" href={item.path}>
                    {item.name}
                  </Link>
                )}
                {!isLast && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Breadcrumbs;
