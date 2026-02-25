import FaqSection from '@/components/Seo/FaqSection';

import { homeFaqData } from '@/data/homeFaq';

export const HomeFAQ = () => {
  return (
    <FaqSection
      label="Często zadawane pytania"
      title="Odpowiedzi na pytania"
      items={homeFaqData}
    />
  );
};
