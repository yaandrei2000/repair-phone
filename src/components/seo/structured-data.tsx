export function StructuredData() {
	const siteUrl =
		process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoyservice.ru'

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			// 1. Основная организация
			{
				'@type': 'LocalBusiness',
				'@id': `${siteUrl}#organization`,
				name: 'Крутой Сервис',
				description:
					'Сервисный центр по ремонту смартфонов всех брендов во Владимире. Замена экрана, аккумулятора, разъемов. Гарантия 12 месяцев.',
				url: siteUrl,
				telephone: '+79066150006',
				priceRange: '$$',
				image: {
					'@type': 'ImageObject',
					url: `${siteUrl}/logo.png`,
					width: 400,
					height: 400
				},
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
					postalCode: '600000', // добавьте реальный индекс
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
					reviewCount: 250,
					bestRating: 5,
					worstRating: 1
				},
				sameAs: [
					'https://yandex.ru/maps/org/krutoy_servis/124779220273/'
					// добавьте другие ссылки: VK, Telegram, 2GIS и т.д.
				],
				contactPoint: {
					'@type': 'ContactPoint',
					telephone: '+79066150006',
					contactType: 'customer service',
					availableLanguage: ['Russian']
				}
			},

			// 2. Услуги (привязаны к организации)
			{
				'@type': 'Service',
				'@id': `${siteUrl}#service-repair`,
				serviceType: 'Ремонт смартфонов',
				provider: { '@id': `${siteUrl}#organization` },
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
			},

			// 3. FAQPage
			{
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
			},

			// 4. Breadcrumb (можно расширить при необходимости)
			{
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
		]
	}

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData, null, 2)
			}}
		/>
	)
}
