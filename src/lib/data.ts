import { getCollection, getEntry } from 'astro:content';

export async function getSettings() {
  const entry = await getEntry('settings', 'site');
  if (!entry) throw new Error('Missing src/content/settings/site.yaml');
  const d = entry.data;
  const u = d.instagram_username && d.instagram_username !== 'YOURUSERNAME' ? d.instagram_username : undefined;
  return {
    ...d,
    instagram: u
      ? { handle: `@${u}`, profile: `https://www.instagram.com/${u}/`, dm: `https://ig.me/m/${u}` }
      : { handle: '@[your Instagram]', profile: 'https://www.instagram.com/', dm: 'https://www.instagram.com/direct/inbox/' },
    instagramReady: !!u,
  };
}

export async function getPage<T extends 'home' | 'about' | 'contact'>(name: T) {
  const entry = await getEntry(name, name);
  if (!entry) throw new Error(`Missing src/content/pages/${name}.yaml`);
  return entry.data;
}

const byOrder = <T extends { data: { order: number } } & { id: string }>(a: T, b: T) =>
  a.data.order - b.data.order || a.id.localeCompare(b.id);

export async function getGalleries() {
  const all = await getCollection('galleries', (g) => !g.data.hidden);
  return all.sort(byOrder);
}

export async function getSessions() {
  const all = await getCollection('sessions', (s) => !s.data.hidden);
  return all.sort(byOrder);
}

export async function getTestimonials() {
  return (await getCollection('testimonials')).sort(byOrder);
}

export async function getFaq() {
  return (await getCollection('faq')).sort(byOrder);
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** A value still holding a [PLACEHOLDER] from setup */
export const isPlaceholder = (s?: string) => !!s && /^\[.*\]$/.test(s.trim());
