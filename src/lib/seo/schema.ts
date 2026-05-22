import { landingServices } from '@/lib/data/services'
import {
	parseMinPrice,
	pricingCategories,
	type PricingCategory
} from '@/lib/data/pricing'

import { siteFaqs } from './faqs'
import { getSiteUrl } from './site-url'

const ORG_ID_SUFFIX = '#organization'
const BUSINESS_DESCRIPTION =
	'Ремонт телефонов во Владимире: экран, батарея, вода, разъёмы. Работаем 30–90 мин, гарантия 12 месяцев, диагностика бесплатно.'

const YANDEX_MAPS_URL =
	'https://yandex.ru/maps/org/krutoy_servis/124779220273/'
const TELEGRAM_URL = 'https://t.me/krutoyservis'

function organizationId(siteUrl: string) {
	return `${siteUrl}${ORG_ID_SUFFIX}`
}

function buildLocalBusiness(siteUrl: string) {
	return {
		'@type': ['LocalBusiness', 'ProfessionalService'],
		'@id': organizationId(siteUrl),
		name: 'Крутой Сервис',
		description: BUSINESS_DESCRIPTION,
		url: siteUrl,
		telephone: '+79066150006',
		priceRange: '₽₽',
		image: [`${siteUrl}/logo.png`, `${siteUrl}/og-image.jpg`],
		logo: {
			'@type': 'ImageObject',
			url: `${siteUrl}/logo.png`,
			width: 400,
			height: 400
		},
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'ул. Тракторная, д. 46/1',
			addressLocality: 'Владимир',
			addressRegion: 'Владимирская область',
			postalCode: '600000',
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
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '4.9',
			reviewCount: '250',
			bestRating: '5',
			worstRating: '1'
		},
		sameAs: [YANDEX_MAPS_URL, TELEGRAM_URL],
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+79066150006',
			contactType: 'customer service',
			availableLanguage: ['Russian'],
			areaServed: 'RU-VLA'
		}
	}
}

function buildOffer(price: number, siteUrl: string) {
	return {
		'@type': 'Offer',
		price: String(price),
		priceCurrency: 'RUB',
		availability: 'https://schema.org/InStock',
		url: `${siteUrl}/pricing`,
		priceSpecification: {
			'@type': 'PriceSpecification',
			minPrice: price,
			priceCurrency: 'RUB'
		}
	}
}

function buildLandingServiceCatalog(siteUrl: string) {
	return {
		'@type': 'Service',
		'@id': `${siteUrl}#service-repair`,
		name: 'Ремонт телефонов',
		serviceType: 'Ремонт смартфонов',
		provider: { '@id': organizationId(siteUrl) },
		areaServed: {
			'@type': 'City',
			name: 'Владимир'
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Популярные услуги',
			itemListElement: landingServices.map(service => ({
				...buildOffer(service.priceFrom, siteUrl),
				itemOffered: {
					'@type': 'Service',
					name: service.title,
					description: service.description
				}
			}))
		}
	}
}

function buildPricingOffers(
	categories: PricingCategory[],
	siteUrl: string,
	limit?: number
) {
	const offers: object[] = []

	for (const { category, services } of categories) {
		for (const service of services) {
			const price = parseMinPrice(service.price)
			if (price === null) continue

			offers.push({
				...buildOffer(price, siteUrl),
				name: `${category}: ${service.device}`,
				description: service.description,
				itemOffered: {
					'@type': 'Service',
					name: `${category} — ${service.device}`,
					description: `${service.description}. Срок: ${service.duration}.`
				}
			})

			if (limit && offers.length >= limit) return offers
		}
	}

	return offers
}

function buildFaqPage() {
	return {
		'@type': 'FAQPage',
		'@id': `${getSiteUrl()}#faq`,
		mainEntity: siteFaqs.map(faq => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	}
}

function buildBreadcrumb(items: { name: string; item: string }[]) {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((entry, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: entry.name,
			item: entry.item
		}))
	}
}

export function buildHomeSchemaGraph() {
	const siteUrl = getSiteUrl()

	return {
		'@context': 'https://schema.org',
		'@graph': [
			buildLocalBusiness(siteUrl),
			buildLandingServiceCatalog(siteUrl),
			buildFaqPage(),
			buildBreadcrumb([{ name: 'Главная', item: siteUrl }])
		]
	}
}

export function buildPricingSchemaGraph() {
	const siteUrl = getSiteUrl()
	const pricingUrl = `${siteUrl}/pricing`

	return {
		'@context': 'https://schema.org',
		'@graph': [
			buildLocalBusiness(siteUrl),
			{
				'@type': 'WebPage',
				'@id': `${pricingUrl}#webpage`,
				url: pricingUrl,
				name: 'Цены на ремонт телефонов во Владимире',
				description:
					'Прайс ремонта телефонов во Владимире: экран от 3490 ₽, аккумулятор от 2190 ₽, разъём от 1790 ₽. Диагностика бесплатно.',
				isPartOf: { '@id': siteUrl },
				about: { '@id': organizationId(siteUrl) },
				breadcrumb: { '@id': `${pricingUrl}#breadcrumb` }
			},
			{
				'@type': 'OfferCatalog',
				'@id': `${pricingUrl}#catalog`,
				name: 'Прайс-лист ремонта телефонов',
				url: pricingUrl,
				provider: { '@id': organizationId(siteUrl) },
				itemListElement: buildPricingOffers(pricingCategories, siteUrl)
			},
			{
				...buildBreadcrumb([
					{ name: 'Главная', item: siteUrl },
					{ name: 'Прайс-лист', item: pricingUrl }
				]),
				'@id': `${pricingUrl}#breadcrumb`
			}
		]
	}
}
