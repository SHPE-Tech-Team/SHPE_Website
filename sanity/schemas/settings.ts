import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'googleCalendarId',
            title: 'Google Calendar ID',
            type: 'string',
            description: 'The ID of the public Google Calendar to display on the Events page (e.g., "exec.shpe.uiuc@gmail.com").',
        }),
    ],
})
