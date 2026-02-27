import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/lib/seo';

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/slask', changeFrequency: 'weekly', priority: 0.98 },
  { path: '/uslugi', changeFrequency: 'weekly', priority: 0.95 },
  {
    path: '/uslugi/diagnostyka-komputerowa',
    changeFrequency: 'monthly',
    priority: 0.92,
  },
  {
    path: '/uslugi/serwis-klimatyzacji',
    changeFrequency: 'monthly',
    priority: 0.92,
  },
  { path: '/uslugi/wymiana-oleju', changeFrequency: 'monthly', priority: 0.92 },
  {
    path: '/uslugi/serwis-hamulcow',
    changeFrequency: 'monthly',
    priority: 0.92,
  },
  {
    path: '/uslugi/przeglad-techniczny',
    changeFrequency: 'monthly',
    priority: 0.92,
  },
  {
    path: '/uslugi/myjnia-ruda-slaska-godula',
    changeFrequency: 'monthly',
    priority: 0.92,
  },
  {
    path: '/uslugi/mycie-reczne-swietochlowice',
    changeFrequency: 'monthly',
    priority: 0.92,
  },
  { path: '/swietochlowice', changeFrequency: 'weekly', priority: 0.92 },
  {
    path: '/mechanik-swietochlowice',
    changeFrequency: 'weekly',
    priority: 0.93,
  },
  { path: '/godula', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/bykowina', changeFrequency: 'weekly', priority: 0.9 },
  {
    path: '/stacja-diagnostyczna-ruda-slaska',
    changeFrequency: 'weekly',
    priority: 0.92,
  },
  { path: '/kontakt', changeFrequency: 'monthly', priority: 0.88 },
  { path: '/wizyta', changeFrequency: 'weekly', priority: 0.86 },
  { path: '/o-nas', changeFrequency: 'monthly', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(route => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
