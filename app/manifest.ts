import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'SHPE UIUC',
        short_name: 'SHPE UIUC',
        description: 'Society of Hispanic Professional Engineers at the University of Illinois at Urbana-Champaign',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#00205B', // UIUC Blue approximation
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/logo.png', // Assuming this exists from the File Listing
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            }
        ],
    };
}
