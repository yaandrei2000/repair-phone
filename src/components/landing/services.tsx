import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

const services = [
	{
		title: 'Замена дисплея',
		description:
			'Оригинальные и качественные OLED/LCD модули для iPhone, Samsung, Xiaomi.',
		price: 'от 3 490 ₽',
		duration: '40-60 мин',
		image: '/phone-cracked-display.png'
	},
	{
		title: 'Замена аккумулятора',
		description:
			'Быстро восстановим автономность устройства и проверим контроллер питания.',
		price: 'от 2 190 ₽',
		duration: '30-45 мин',
		image: '/iphone-7-disassembled.png'
	},
	{
		title: 'Замена разъёма зарядки',
		description:
			'Устраним проблему с зарядкой, заменим порт и проверим систему питания устройства.',
		price: 'от 1 790 ₽',
		duration: '30-60 мин',
		image: '/phone-charging-port-connected.png'
	}
]

export function Services() {
	return (
		<section className='bg-background w-full'>
			<div className='container mx-auto flex max-w-[1440px] flex-col gap-[14px] px-[18px] pt-[30px] pb-[34px] md:gap-6 md:px-16 md:pt-14 md:pb-20'>
				<div className='flex flex-col gap-[14px] md:gap-6'>
					<h2 className='text-foreground text-[30px] font-normal md:text-[44px]'>
						Популярные услуги
					</h2>
					<p className='text-muted-foreground max-w-[860px] text-[13px] md:text-lg'>
						<span className='md:hidden'>
							Точная цена до начала работ и детали под ваш бюджет.
						</span>
						<span className='hidden md:inline'>
							Быстро устраняем типовые и сложные поломки с
							оригинальными или проверенными аналоговыми
							запчастями.
						</span>
					</p>
				</div>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
					{services.map((service, index) => (
						<div
							key={index}
							className='relative flex flex-col items-center text-center'
						>
							{/* Светлое свечение под «плашкой» — только на десктопе, чтобы на мобилке не было артефактов теней */}
							<div
								className='bg-primary/5 pointer-events-none absolute inset-x-6 -top-2 hidden h-24 rounded-full blur-2xl md:inset-x-4 md:block'
								aria-hidden='true'
							/>

							{/* Круг-фон позади телефона */}
							<div className='relative h-[200px] w-[200px] md:h-[230px] md:w-[230px]'>
								<div className='bg-primary absolute inset-5 rounded-full shadow-[0_24px_60px_rgba(15,23,42,0.22)]' />
								<Image
									src={service.image}
									alt={`${service.title} - ${service.description} в сервисе Крутой Сервис, Владимир`}
									fill
									className='relative object-contain drop-shadow-[0_18px_48px_rgba(0,0,0,0.45)]'
								/>
							</div>

							{/* Текст под фотографией */}
							<div className='mt-4 flex flex-col gap-1.5 md:mt-5'>
								<h3 className='text-foreground text-[20px] font-medium md:text-[22px]'>
									{service.title}
								</h3>
								<p className='text-muted-foreground hidden text-xs md:block md:text-sm'>
									{service.description}
								</p>
								<p className='text-foreground text-base font-semibold md:text-lg md:font-bold'>
									{service.price}
								</p>
							</div>

							{/* Бейджик со временем выполнения */}
							<Badge
								variant='secondary'
								className='text-foreground mt-2 rounded-full px-3 py-1 text-[11px] font-medium md:mt-3 md:text-xs'
							>
								<span className='bg-primary mr-1.5 inline-block h-1.5 w-1.5 rounded-full' />
								<span>{service.duration}</span>
							</Badge>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
