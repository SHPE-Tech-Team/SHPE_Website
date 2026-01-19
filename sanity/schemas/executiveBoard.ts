import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'executiveBoard',
    title: 'Executive Board',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role (Title)',
            type: 'string',
            description: 'e.g. President, Treasurer',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'pronouns',
            title: 'Pronouns',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
            description: 'e.g. Senior, Junior',
        }),
        defineField({
            name: 'major',
            title: 'Major',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'note',
            title: 'Note',
            type: 'string',
            description: 'e.g. Reach out to me on Slack',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Used to sort the members on the page',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
        },
    },
})
