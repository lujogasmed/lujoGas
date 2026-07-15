import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().min(125).max(165),
      publishDate: z.date(),
      updatedDate: z.date().optional(),
      author: z.string().default('Luis Guillermo Muñoz Vélez'),
      readingTime: z.number(),
      category: z.enum(['seguridad', 'certificacion', 'instalacion', 'mantenimiento', 'precios']),
      tags: z.array(z.string()),
      intent: z.enum(['informacional', 'educativa', 'comercial', 'transaccional', 'emergencia']),
      funnel: z.enum(['tofu', 'mofu', 'bofu', 'retencion']),
      pillar: z.number().min(1).max(4),
      coverImage: z.string().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      faq: z
        .array(z.object({ q: z.string(), a: z.string() }))
        .optional(),
    }),
});

export const collections = { blog };
