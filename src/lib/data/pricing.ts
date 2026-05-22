export type PricingService = {
	device: string
	price: string
	duration: string
	description: string
}

export type PricingCategory = {
	category: string
	services: PricingService[]
}

export const pricingCategories: PricingCategory[] = [
	{
		category: 'Замена дисплея',
		services: [
			{
				device: 'iPhone 12/13/14',
				price: 'от 4 990 ₽',
				duration: '40-60 мин',
				description: 'Оригинальный дисплей'
			},
			{
				device: 'iPhone 11/X/XS',
				price: 'от 3 490 ₽',
				duration: '40-60 мин',
				description: 'Оригинальный дисплей'
			},
			{
				device: 'Samsung S21/S22/S23',
				price: 'от 5 490 ₽',
				duration: '50-70 мин',
				description: 'Оригинальный AMOLED'
			},
			{
				device: 'Xiaomi 11/12/13',
				price: 'от 3 990 ₽',
				duration: '45-65 мин',
				description: 'Оригинальный дисплей'
			}
		]
	},
	{
		category: 'Замена аккумулятора',
		services: [
			{
				device: 'iPhone 12/13/14',
				price: 'от 2 990 ₽',
				duration: '30-45 мин',
				description: 'Оригинальный аккумулятор'
			},
			{
				device: 'iPhone 11/X/XS',
				price: 'от 2 190 ₽',
				duration: '30-45 мин',
				description: 'Оригинальный аккумулятор'
			},
			{
				device: 'Samsung S21/S22/S23',
				price: 'от 2 490 ₽',
				duration: '35-50 мин',
				description: 'Оригинальный аккумулятор'
			},
			{
				device: 'Xiaomi 11/12/13',
				price: 'от 1 990 ₽',
				duration: '30-45 мин',
				description: 'Оригинальный аккумулятор'
			}
		]
	},
	{
		category: 'Восстановление после воды',
		services: [
			{
				device: 'Диагностика',
				price: 'от 990 ₽',
				duration: '15-20 мин',
				description: 'Проверка состояния платы'
			},
			{
				device: 'Ультразвуковая чистка',
				price: 'от 1 990 ₽',
				duration: '1-2 часа',
				description: 'Чистка платы от коррозии'
			},
			{
				device: 'Замена компонентов',
				price: 'от 2 990 ₽',
				duration: '1-3 дня',
				description: 'Замена поврежденных элементов'
			},
			{
				device: 'Восстановление платы',
				price: 'от 4 990 ₽',
				duration: '2-5 дней',
				description: 'Полное восстановление'
			}
		]
	},
	{
		category: 'Замена разъемов',
		services: [
			{
				device: 'Разъем зарядки',
				price: 'от 1 490 ₽',
				duration: '30-45 мин',
				description: 'USB-C / Lightning'
			},
			{
				device: 'Разъем наушников',
				price: 'от 1 290 ₽',
				duration: '25-40 мин',
				description: '3.5mm jack'
			},
			{
				device: 'Разъем SIM-карты',
				price: 'от 990 ₽',
				duration: '20-30 мин',
				description: 'Tray replacement'
			}
		]
	},
	{
		category: 'Другие услуги',
		services: [
			{
				device: 'Замена задней крышки',
				price: 'от 1 990 ₽',
				duration: '40-60 мин',
				description: 'Стекло / Пластик'
			},
			{
				device: 'Замена кнопок',
				price: 'от 1 290 ₽',
				duration: '30-45 мин',
				description: 'Кнопка питания / Громкости'
			},
			{
				device: 'Замена камеры',
				price: 'от 2 490 ₽',
				duration: '45-60 мин',
				description: 'Основная / Фронтальная'
			},
			{
				device: 'Диагностика',
				price: 'Бесплатно',
				duration: '10-15 мин',
				description: 'При любом ремонте'
			}
		]
	}
]

/** Минимальная цена из строки вида «от 4 990 ₽» или «Бесплатно». */
export function parseMinPrice(priceLabel: string): number | null {
	if (/бесплатно/i.test(priceLabel)) return 0
	const digits = priceLabel.replace(/\D/g, '')
	if (!digits) return null
	return Number.parseInt(digits, 10)
}
