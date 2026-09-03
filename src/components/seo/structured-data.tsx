import { JsonLd } from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/site-config'

const mainFaq = [
	{
		question: 'Сколько длится ремонт?',
		answer: 'Большинство работ выполняем в течение 30–90 минут. Сложные случаи по плате могут занять несколько дней.'
	},
	{
		question: 'Вы используете оригинальные запчасти?',
		answer: 'По возможности предлагаем оригинальную деталь, а также качественные совместимые варианты в нескольких ценовых категориях.'
	},
	{
		question: 'Что делать, если телефон намок?',
		answer: 'Выключите устройство, не ставьте его на зарядку и как можно скорее привезите на диагностику.'
	}
]

export function StructuredData() {
	return (
		<JsonLd
			data={{
				'@context': 'https://schema.org',
				'@graph': [
					{
						'@type': 'WebSite',
						'@id': `${siteConfig.url}/#website`,
						url: `${siteConfig.url}/`,
						name: siteConfig.name,
						inLanguage: 'ru-RU'
					},
					{
						'@type': 'LocalBusiness',
						'@id': `${siteConfig.url}/#organization`,
						name: siteConfig.name,
						description:
							'Сервисный центр по ремонту телефонов во Владимире: дисплеи, аккумуляторы, разъёмы и восстановление после воды.',
						url: `${siteConfig.url}/`,
						telephone: '+79066150006',
						priceRange: '₽₽',
						image: `${siteConfig.url}/og-image.jpg`,
						logo: `${siteConfig.url}/logo.png`,
						address: {
							'@type': 'PostalAddress',
							streetAddress: 'ул. Тракторная, д. 46/1',
							addressLocality: 'Владимир',
							addressRegion: 'Владимирская область',
							addressCountry: 'RU'
						},
						geo: {
							'@type': 'GeoCoordinates',
							latitude: 56.148629,
							longitude: 40.384258
						},
						openingHoursSpecification: [
							{
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: [
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday'
								],
								opens: '10:00',
								closes: '19:00'
							},
							{
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: ['Saturday', 'Sunday'],
								opens: '12:00',
								closes: '16:00'
							}
						],
						sameAs: [
							siteConfig.yandexMapsUrl,
							siteConfig.telegramUrl
						],
						contactPoint: {
							'@type': 'ContactPoint',
							telephone: '+79066150006',
							contactType: 'customer service',
							availableLanguage: 'Russian'
						}
					},
					{
						'@type': 'Service',
						'@id': `${siteConfig.url}/#phone-repair`,
						name: 'Ремонт телефонов во Владимире',
						provider: { '@id': `${siteConfig.url}/#organization` },
						areaServed: { '@type': 'City', name: 'Владимир' },
						hasOfferCatalog: {
							'@type': 'OfferCatalog',
							name: 'Основные услуги',
							itemListElement: [
								'Замена дисплея',
								'Замена аккумулятора',
								'Замена разъёма зарядки',
								'Ремонт после воды'
							].map(name => ({
								'@type': 'Offer',
								itemOffered: { '@type': 'Service', name }
							}))
						}
					},
					{
						'@type': 'FAQPage',
						mainEntity: mainFaq.map(item => ({
							'@type': 'Question',
							name: item.question,
							acceptedAnswer: {
								'@type': 'Answer',
								text: item.answer
							}
						}))
					}
				]
			}}
		/>
	)
}
