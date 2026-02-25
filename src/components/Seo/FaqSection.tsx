'use client';

import { useState } from 'react';

import { FaqItem, createFaqJsonLd } from '@/lib/seo';

import styles from './FaqSection.module.scss';

interface FaqSectionProps {
  label?: string;
  title: string;
  description?: string;
  items: FaqItem[];
}

const FaqSection = ({
  label = 'FAQ',
  title,
  description,
  items,
}: FaqSectionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const jsonLd = createFaqJsonLd(items);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index],
    );
  };

  return (
    <section className={styles.faq}>
      <div className={styles.faq__header}>
        <p className={styles.faq__title}>{label}</p>
        <h2 className={styles.faq__subtitle}>{title}</h2>
        <hr className={styles.faq__divider} />
        {description && (
          <p className={styles.faq__description}>{description}</p>
        )}
      </div>

      <div className={styles.faq__list}>
        {items.map((item, index) => (
          <div key={`${item.question}-${index}`} className={styles.faq__item}>
            <button
              type="button"
              className={styles.faq__question}
              onClick={() => toggleItem(index)}
              aria-expanded={openItems.includes(index)}
            >
              <span>{item.question}</span>
              <span className={styles.faq__icon}>
                {openItems.includes(index) ? '−' : '+'}
              </span>
            </button>
            {openItems.includes(index) && (
              <>
                <div className={styles.faq__separator} />
                <div className={styles.faq__answer}>
                  <p>{item.answer}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default FaqSection;
