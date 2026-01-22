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
            title: 'Event Type',
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
            name: 'dayOfWeek',
            title: '📅 Day of Week',
            type: 'string',
            options: {
                list: [
                    { title: 'Monday', value: 'Monday' },
                    { title: 'Tuesday', value: 'Tuesday' },
                    { title: 'Wednesday', value: 'Wednesday' },
                    { title: 'Thursday', value: 'Thursday' },
                    { title: 'Friday', value: 'Friday' },
                    { title: 'Saturday', value: 'Saturday' },
                    { title: 'Sunday', value: 'Sunday' },
                ],
            },
            hidden: ({ document }) => document?.badge !== 'Weekly' && document?.badge !== 'Monthly',
        }),
        defineField({
            name: 'date',
            title: '📆 Date & Time',
            type: 'datetime',
            hidden: ({ document }) => document?.badge === 'Weekly' || document?.badge === 'Monthly',
        }),
        defineField({
            name: 'startTime',
            title: '🕐 Start Time',
            type: 'string',
            description: 'Format: HH:MM AM/PM (e.g., 2:00 PM)',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'endTime',
            title: '🕑 End Time',
            type: 'string',
            description: 'Format: HH:MM AM/PM (e.g., 3:00 PM)',
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
            dayOfWeek: 'dayOfWeek',
            startTime: 'startTime',
        },
        prepare({ title, media, date, dayOfWeek, startTime }) {
            let subtitle = '';
            try {
                if (dayOfWeek && startTime) {
                    subtitle = `${dayOfWeek} ${startTime}`;
                } else if (date) {
                    // date is already an ISO string from datetime type
                    subtitle = new Date(date).toLocaleDateString();
                }
            } catch (e) {
                subtitle = '';
            }
            return {
                title,
                media,
                subtitle,
            }
        },
    },
})
