import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  draft: z.boolean().optional().default(false),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: postSchema,
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teaching' }),
  schema: postSchema,
});

const ai = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ai' }),
  schema: postSchema,
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: postSchema,
});

export const collections = { research, teaching, ai, essays };
