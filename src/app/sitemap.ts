import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.auto-bud.com.pl';

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/uslugi', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/swietochlowice', changeFrequency: 'weekly', priority: 0.92 },
  { path: '/godula', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/bykowina', changeFrequency: 'weekly', priority: 0.9 },
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
