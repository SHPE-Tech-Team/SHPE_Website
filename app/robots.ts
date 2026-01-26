import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/studio/', '/admin/'], // Hide CMS/admin paths
        },
        sitemap: 'https://shpe-website-ten.vercel.app/sitemap.xml',
    };
}
