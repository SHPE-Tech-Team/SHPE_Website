import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'shpetinaSpotlight',
    title: 'SHPEtina Spotlight',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the person in the spotlight (e.g. Lesly Beiza Medrano)',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'Role title (e.g. SHPEtinas Lead)',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            description: 'Add links like LinkedIn, Instagram, Slack (workspace URL), etc.',
            of: [
                {
                    type: 'object',
                    title: 'Link',
                    fields: [
                        {
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'LinkedIn', value: 'linkedin' },
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'Slack', value: 'slack' },
                                    { title: 'Email', value: 'email' },
                                    { title: 'Website', value: 'website' },
                                    { title: 'Other', value: 'other' },
                                ],
                            },
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'string', // using string to allow mailto: or plain text if needed, though url is safer
                        },
                        {
                            name: 'label',
                            title: 'Label (Optional)',
                            type: 'string',
                            description: 'Override text (e.g. "Connect on LinkedIn")',
                        }
                    ],
                    preview: {
                        select: {
                            title: 'platform',
                            subtitle: 'url'
                        }
                    }
                },
            ],
        }),
    ],
})
