import { JsonLd } from '@/components/seo/json-ld'
import { getServiceUrl, type ServicePage, siteConfig } from '@/lib/site-config'

type ServiceStructuredDataProps = {
	service: ServicePage
}

export function ServiceStructuredData({ service }: ServiceStructuredDataProps) {
	const serviceUrl = `${siteConfig.url}${getServiceUrl(service.slug)}`

	return (
		<JsonLd
			data={{
				'@context': 'https://schema.org',
				'@graph': [
					{
						'@type': 'Service',
						'@id': `${serviceUrl}#service`,
						name: service.title,
						description: service.metaDescription,
						url: serviceUrl,
						image: `${siteConfig.url}${service.image}`,
						provider: { '@id': `${siteConfig.url}/#organization` },
						areaServed: { '@type': 'City', name: 'Владимир' },
						offers: {
							'@type': 'Offer',
							priceCurrency: 'RUB',
							price: service.priceValue,
							description: `Цена от ${service.priceValue} ₽, точная стоимость после диагностики`
						}
					},
					{
						'@type': 'FAQPage',
						mainEntity: service.faq.map(item => ({
							'@type': 'Question',
							name: item.question,
							acceptedAnswer: {
								'@type': 'Answer',
								text: item.answer
							}
						}))
					},
					{
						'@type': 'BreadcrumbList',
						itemListElement: [
							{
								'@type': 'ListItem',
								position: 1,
								name: 'Главная',
								item: `${siteConfig.url}/`
							},
							{
								'@type': 'ListItem',
								position: 2,
								name: 'Услуги',
								item: `${siteConfig.url}/#services`
							},
							{
								'@type': 'ListItem',
								position: 3,
								name: service.shortTitle,
								item: serviceUrl
							}
						]
					}
				]
			}}
		/>
	)
}
