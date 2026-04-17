export function StructuredData() {
	const siteUrl =
		process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoyservice.ru'

	// Структурированные данные для организации (LocalBusiness)
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${siteUrl}#organization`,
		name: 'Крутой Сервис',
		description:
			'Сервисный центр по ремонту смартфонов всех брендов во Владимире. Замена экрана, аккумулятора, разъемов. Гарантия 12 месяцев.',
		image: `${siteUrl}/logo.png`,
		telephone: '+79066150006',
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'ул. Тракторная, д. 46/1',
			addressLocality: 'Владимир',
			addressRegion: 'Владимирская область',
			addressCountry: 'RU'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: '56.148629',
			longitude: '40.384258'
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
		sameAs: ['https://yandex.ru/maps/org/krutoy_servis/124779220273/']
	}

	// Структурированные данные для услуг
	const servicesSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		serviceType: 'Ремонт смартфонов',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Крутой Сервис'
		},
		areaServed: {
			'@type': 'City',
			name: 'Владимир'
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Услуги по ремонту смартфонов',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Замена дисплея',
						description:
							'Оригинальные и качественные OLED/LCD модули для iPhone, Samsung, Xiaomi',
						offers: {
							'@type': 'Offer',
							price: '3490',
							priceCurrency: 'RUB'
						}
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Замена аккумулятора',
						description:
							'Быстрое восстановление автономности устройства и проверка контроллера питания',
						offers: {
							'@type': 'Offer',
							price: '2190',
							priceCurrency: 'RUB'
						}
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Замена разъёма зарядки',
						description:
							'Устранение проблемы с зарядкой, замена порта и проверка системы питания устройства',
						offers: {
							'@type': 'Offer',
							price: '1790',
							priceCurrency: 'RUB'
						}
					}
				}
			]
		}
	}

	// Структурированные данные для FAQ
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Сколько длится ремонт?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Большинство работ выполняем в течение 30-90 минут. Сложные случаи по плате занимают 1-3 дня.'
				}
			},
			{
				'@type': 'Question',
				name: 'Вы используете оригинальные запчасти?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Да, по возможности ставим оригинал. Также можем предложить качественные аналоги в нескольких ценовых категориях.'
				}
			},
			{
				'@type': 'Question',
				name: 'Что если телефон не включается после воды?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Сразу отключите устройство и не ставьте на зарядку. Привозите к нам на срочную диагностику и сушку платы.'
				}
			}
		]
	}

	// BreadcrumbList для навигации
	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Главная',
				item: siteUrl
			}
		]
	}

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationSchema)
				}}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(servicesSchema)
				}}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqSchema)
				}}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbSchema)
				}}
			/>
		</>
	)
}
