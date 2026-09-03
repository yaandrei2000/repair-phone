import { JsonLd } from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/site-config'

const offers = [
	{ name: 'Замена дисплея', price: '3490' },
	{ name: 'Замена аккумулятора', price: '1990' },
	{ name: 'Замена разъёма зарядки', price: '1490' },
	{ name: 'Диагностика после воды', price: '990' }
]

export function PricingStructuredData() {
	return (
		<JsonLd
			data={{
				'@context': 'https://schema.org',
				'@graph': [
					{
						'@type': 'WebPage',
						'@id': `${siteConfig.url}/pricing/#webpage`,
						url: `${siteConfig.url}/pricing/`,
						name: 'Цены на ремонт телефонов во Владимире',
						isPartOf: { '@id': `${siteConfig.url}/#website` },
						breadcrumb: {
							'@id': `${siteConfig.url}/pricing/#breadcrumb`
						}
					},
					{
						'@type': 'Service',
						name: 'Ремонт телефонов',
						provider: { '@id': `${siteConfig.url}/#organization` },
						areaServed: { '@type': 'City', name: 'Владимир' },
						hasOfferCatalog: {
							'@type': 'OfferCatalog',
							name: 'Цены на ремонт телефонов',
							itemListElement: offers.map(offer => ({
								'@type': 'Offer',
								priceCurrency: 'RUB',
								price: offer.price,
								itemOffered: {
									'@type': 'Service',
									name: offer.name
								}
							}))
						}
					},
					{
						'@type': 'BreadcrumbList',
						'@id': `${siteConfig.url}/pricing/#breadcrumb`,
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
								name: 'Цены',
								item: `${siteConfig.url}/pricing/`
							}
						]
					}
				]
			}}
		/>
	)
}
