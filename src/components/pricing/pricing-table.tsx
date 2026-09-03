'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

import { getServiceUrl } from '@/lib/site-config'

const pricingCategories = [
	{
		category: 'Замена дисплея',
		slug: 'zamena-displeya',
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
		slug: 'zamena-akkumulyatora',
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
		slug: 'remont-posle-vody',
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
		slug: 'zamena-razema-zaryadki',
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
		slug: null,
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
		<div className='flex flex-col gap-12 md:gap-16'>
			{pricingCategories.map((category, categoryIndex) => (
				<motion.div
					key={categoryIndex}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
					className='flex flex-col gap-5'
				>
					<div className='flex items-center justify-between gap-4'>
						<h2 className='text-foreground text-xl font-medium md:text-2xl'>
							{category.category}
						</h2>
						{category.slug && (
							<Link
								href={getServiceUrl(category.slug)}
								className='text-muted-foreground hover:text-foreground text-sm font-medium'
							>
								Подробнее
							</Link>
						)}
					</div>
					<div className='bg-card border-border/50 overflow-hidden rounded-2xl border'>
						{category.services.map((service, serviceIndex) => (
							<div
								key={serviceIndex}
								className='border-border/50 hover:bg-secondary/30 flex flex-col gap-3 border-b px-5 py-4 transition-colors last:border-b-0 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 md:py-5'
							>
								<div className='flex-1'>
									<h3 className='text-foreground text-base font-medium'>
										{service.device}
									</h3>
									<p className='text-muted-foreground text-sm'>
										{service.description}
									</p>
								</div>
								<div className='flex items-center gap-4'>
									<span className='bg-secondary text-muted-foreground rounded-full px-3 py-1 text-xs font-medium'>
										{service.duration}
									</span>
									<span className='text-foreground text-lg font-medium md:text-xl'>
										{service.price}
									</span>
								</div>
							</div>
						))}
					</div>
				</motion.div>
			))}
		</div>
	)
}
