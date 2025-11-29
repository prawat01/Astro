import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
   menus: defineCollection ({
    loader: glob({ pattern: '**/*.md', base: './src/content/menus' }),
    schema: z.object({
        title: z.string(),
        url: z.string(),
        order: z.number(),
        list_at: z.number().optional()
    })
   }),
pets: defineCollection ({
    loader: file('./src/content/pets.json'),
    schema: z.object({
            name: z.string(),
            description: z.string(),
            price: z.number(),
            ishide: z.boolean().optional()
        })
    })
};
