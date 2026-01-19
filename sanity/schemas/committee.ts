import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'committee',
    title: 'Committee',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'id',
            title: 'Slug (ID)',
            type: 'slug',
            description: 'The unique URL part for this committee page. Click "Generate" to create it from the title.',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            description: 'Displayed on the main "Get Involved" card. Keep it brief (1-2 sentences).',
            rows: 3,
        }),
        defineField({
            name: 'fullDescription',
            title: 'Full Description',
            type: 'array',
            description: 'The detailed content shown on the committee\'s dedicated page.',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'image',
            title: 'Committee Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'meeting',
            title: 'Meeting Details',
            type: 'string',
            description: 'e.g., "Mondays at 5pm in ECEB 1013"',
        }),
        defineField({
            name: 'contact',
            title: 'Contact Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Contact Email',
            type: 'string',
        }),
        defineField({
            name: 'leads',
            title: 'Leads',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', type: 'string' }),
                        defineField({ name: 'role', type: 'string' }),
                        defineField({ name: 'image', type: 'image' }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'links',
            title: 'Resources/Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'label', type: 'string' }),
                        defineField({ name: 'url', type: 'url' }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
})
