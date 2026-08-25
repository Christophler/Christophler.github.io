import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date(),
    featured: z.boolean().default(false),
    thumbnail: z.string().optional(),
    stack: z.array(z.string()),
    github: z.string().url().optional(),
    draft: z.boolean().default(false),
    relatedTags: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
