import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'badge',
            title: 'Badge / Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Weekly', value: 'Weekly' },
                    { title: 'Monthly', value: 'Monthly' },
                    { title: 'Academic', value: 'Academic' },
                    { title: 'Professional', value: 'Professional' },
                    { title: 'Social', value: 'Social' },
                    { title: 'Other', value: 'Other' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date & Time',
            type: 'string', // Changed to string to support recurring events like "Tuesdays"
            description: 'e.g. "Oct 15, 6:00 PM" or "Tuesdays, 7:00 PM"',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'image',
            title: 'Event Poster/Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'rsvpLink',
            title: 'RSVP Link',
            type: 'url',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            date: 'date',
        },
        prepare({ title, media, date }) {
            return {
                title,
                media,
                subtitle: date ? new Date(date).toLocaleDateString() : '',
            }
        },
    },
})
