import { MetadataRoute } from 'next'

import { getServiceUrl, servicePages } from '@/lib/site-config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoyservice.ru'

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1
		},
		{
			url: `${baseUrl}/pricing/`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		...servicePages.map(service => ({
			url: `${baseUrl}${getServiceUrl(service.slug)}`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.8
		}))
	]
}
