export type LandingService = {
	slug: string
	title: string
	description: string
	priceFrom: number
	duration: string
	image: string
}

export const landingServices: LandingService[] = [
	{
		slug: 'zamena-displeya',
		title: 'Замена дисплея',
		description:
			'Оригинальные и качественные OLED/LCD модули для iPhone, Samsung, Xiaomi.',
		priceFrom: 3490,
		duration: '40-60 минут',
		image: '/phone-cracked-display.png'
	},
	{
		slug: 'zamena-akkumulyatora',
		title: 'Замена аккумулятора',
		description:
			'Быстро восстановим автономность устройства и проверим контроллер питания.',
		priceFrom: 2190,
		duration: '30-45 минут',
		image: '/iphone-7-disassembled.png'
	},
	{
		slug: 'zamena-razema',
		title: 'Замена разъёма',
		description:
			'Устраним проблему с зарядкой, заменим порт и проверим систему питания.',
		priceFrom: 1790,
		duration: '30-60 минут',
		image: '/phone-charging-port-connected.png'
	}
]

export function formatRubPrice(price: number) {
	return `от ${new Intl.NumberFormat('ru-RU').format(price)} ₽`
}
