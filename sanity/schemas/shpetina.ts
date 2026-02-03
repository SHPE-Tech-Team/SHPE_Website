import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'shpetina',
    title: 'SHPEtina Gallery',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'A short title or caption for the image.',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility.',
                })
            ]
        }),
    ],
})
