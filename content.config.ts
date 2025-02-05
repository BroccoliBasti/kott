import { defineCollection, defineContentConfig, z } from '@nuxt/content'
// import { z } from "zod";

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/*.md',
            type: 'page'
        }),
        arbete: defineCollection({
            source: 'arbete/**',
            type: 'page',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                projectDate: z.string(),
                datePublished: z.date(),
                dateModified: z.date(),
                pageURL: z.string(),
                imageURL: z.string(),
                imageDescription: z.string(),
                siteURL: z.string()
            })
        }),
        work: defineCollection({
            source: 'work/**',
            type: 'page',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                projectDate: z.string(),
                datePublished: z.date(),
                dateModified: z.date(),
                pageURL: z.string(),
                imageURL: z.string(),
                imageDescription: z.string(),
                siteURL: z.string()
            })
        })
    }
})
