import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Eğer ilerde gizli bir alan olursa diye
        },
        sitemap: 'https://simgeuzunkaya.com/sitemap.xml',
    };
}
