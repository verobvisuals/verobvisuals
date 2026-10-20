import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Empty strings from the dashboard become "not set"
const blank = (v: unknown) => (typeof v === 'string' && v.trim() === '' ? undefined : v);
const optText = z.preprocess(blank, z.string().optional());

export const CATEGORIES = ['Seniors', 'Portraits', 'Couples', 'Friends & Groups', 'Milestones'] as const;

const settings = defineCollection({
  loader: glob({ pattern: 'site.yaml', base: './src/content/settings' }),
  schema: ({ image }) =>
    z.object({
      site_title: z.string(),
      site_description: z.string(),
      business_name: z.string().default('Verobvisuals'),
      logo: z.preprocess(blank, image().optional()),
      announcement: optText,
      location: optText,
      instagram_username: z.preprocess(
        (v) => (typeof v === 'string' ? v.trim().replace(/^@/, '').replace(/^https?:\/\/(www\.)?instagram\.com\//, '').replace(/\/.*$/, '') : v),
        z.string().optional()
      ),
      email: optText,
      share_image: z.preprocess(blank, image().optional()),
    }),
});

const home = defineCollection({
  loader: glob({ pattern: 'home.yaml', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      hero_image: image(),
      hero_image_alt: z.string().default(''),
      hero_label: optText,
      hero_heading: z.string(),
      intro_label: optText,
      intro_text: optText,
      featured_heading: z.string().default('Selected work'),
      about_heading: z.string(),
      about_text: optText,
      about_image: image(),
      about_image_alt: z.string().default(''),
      services_heading: z.string().default('Sessions'),
      statement_text: optText,
      statement_image: z.preprocess(blank, image().optional()),
      instagram_heading: z.string().default('Follow along'),
    }),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.yaml', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      seo_description: optText,
      heading: z.string(),
      photo: image(),
      photo_alt: z.string().default(''),
      intro: optText,
      sections: z.array(z.object({ title: z.string(), text: z.string().default('') })).default([]),
      second_photo: z.preprocess(blank, image().optional()),
      second_photo_alt: z.string().default(''),
    }),
});

const contact = defineCollection({
  loader: glob({ pattern: 'contact.yaml', base: './src/content/pages' }),
  schema: z.object({
    seo_description: optText,
    heading: z.string(),
    intro: optText,
    availability: optText,
  }),
});

const galleries = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/galleries' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(CATEGORIES),
      description: optText,
      cover: image(),
      featured: z.boolean().default(false),
      hidden: z.boolean().default(false),
      order: z.number().default(100),
      photos: z.array(z.object({ image: image(), alt: z.string().default('') })).default([]),
    }),
});

const sessions = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sessions' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().default(100),
      hidden: z.boolean().default(false),
      image: z.preprocess(blank, image().optional()),
      summary: optText,
      duration: optText,
      price: optText,
      locations: optText,
      delivery: optText,
      includes: z.array(z.string()).default([]),
      details: optText,
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    session: optText,
    order: z.number().default(100),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(100),
  }),
});

export const collections = { settings, home, about, contact, galleries, sessions, testimonials, faq };
