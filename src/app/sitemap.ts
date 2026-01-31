import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://simgeuzunkaya.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // İleride blog eklenirse buraya dinamik listeler gelecek
    ];
}
