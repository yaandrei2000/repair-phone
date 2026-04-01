import { Badge } from '@/components/ui/badge'

const pricingCategories = [
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

export function PricingTable() {
	return (
		<div className='flex flex-col gap-10 md:gap-12'>
			{pricingCategories.map((category, categoryIndex) => (
				<div key={categoryIndex} className='flex flex-col gap-4'>
					<h2 className='text-foreground text-[22px] font-medium md:text-[28px]'>
						{category.category}
					</h2>
					<div className='flex flex-col'>
						{category.services.map((service, serviceIndex) => (
							<div
								key={serviceIndex}
								className='border-border/50 flex flex-col gap-2 border-b py-4 first:pt-0 last:border-b-0 last:pb-0 md:flex-row md:items-center md:justify-between md:gap-4'
							>
								<div className='flex flex-col gap-0.5 md:flex-1'>
									<h3 className='text-foreground text-base font-medium'>
										{service.device}
									</h3>
									<p className='text-muted-foreground text-sm'>
										{service.description}
									</p>
								</div>
								<div className='flex items-center gap-4 md:justify-end'>
									<Badge variant='secondary' className='w-fit'>
										{service.duration}
									</Badge>
									<p className='text-foreground text-lg font-semibold md:text-xl'>
										{service.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
