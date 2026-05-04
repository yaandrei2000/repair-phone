'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const services = [
	{
		title: 'Замена дисплея',
		description:
			'Оригинальные и качественные OLED/LCD модули для iPhone, Samsung, Xiaomi.',
		price: 'от 3 490 ₽',
		duration: '40-60 мин',
		image: '/phone-cracked-display.png',
		details: {
			includes: [
				'Диагностика устройства',
				'Замена дисплейного модуля',
				'Проверка тачскрина',
				'Калибровка True Tone (iPhone)',
				'Гарантия 90 дней'
			],
			brands: ['iPhone', 'Samsung', 'Xiaomi', 'Honor', 'Huawei'],
			note: 'Используем оригинальные и качественные OEM дисплеи. Цена зависит от модели устройства.'
		}
	},
	{
		title: 'Замена аккумулятора',
		description:
			'Быстро восстановим автономность устройства и проверим контроллер питания.',
		price: 'от 2 190 ₽',
		duration: '30-45 мин',
		image: '/iphone-7-disassembled.png',
		details: {
			includes: [
				'Диагностика батареи',
				'Замена аккумулятора',
				'Проверка контроллера питания',
				'Калибровка батареи',
				'Гарантия 90 дней'
			],
			brands: ['iPhone', 'Samsung', 'Xiaomi', 'Honor', 'Huawei'],
			note: 'Устанавливаем аккумуляторы с ёмкостью не ниже оригинала. Проверяем здоровье батареи после замены.'
		}
	},
	{
		title: 'Замена разъёма',
		description:
			'Устраним проблему с зарядкой, заменим порт и проверим систему питания.',
		price: 'от 1 790 ₽',
		duration: '30-60 мин',
		image: '/phone-charging-port-connected.png',
		details: {
			includes: [
				'Диагностика разъёма',
				'Замена порта зарядки',
				'Чистка контактов',
				'Проверка системы питания',
				'Гарантия 90 дней'
			],
			brands: ['iPhone', 'Samsung', 'Xiaomi', 'Honor', 'Huawei'],
			note: 'Также ремонтируем проблемы с синхронизацией данных и работой микрофона в разъёме.'
		}
	}
]

function ServiceCard({
	service,
	isExpanded,
	onToggle
}: {
	service: (typeof services)[0]
	isExpanded: boolean
	onToggle: () => void
}) {
	return (
		<motion.div
			layout
			onClick={onToggle}
			className={`group bg-background border-border/50 relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
				isExpanded
					? 'shadow-2xl ring-2 ring-primary/20 md:col-span-2 lg:col-span-1'
					: 'hover:shadow-lg'
			}`}
		>
			{/* Image container */}
			<motion.div
				layout='position'
				className={`bg-secondary/50 relative flex items-center justify-center overflow-hidden ${
					isExpanded ? 'h-40 md:h-48' : 'h-48 md:h-56'
				}`}
			>
				<motion.div
					layout='position'
					className={`relative transition-transform duration-500 ${
						isExpanded
							? 'h-32 w-32 md:h-40 md:w-40'
							: 'h-40 w-40 group-hover:scale-105 md:h-48 md:w-48'
					}`}
				>
					<Image
						src={service.image}
						alt={service.title}
						fill
						className='object-contain'
					/>
				</motion.div>

				{/* Expand indicator */}
				<motion.div
					className='absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 backdrop-blur-sm'
					animate={{ rotate: isExpanded ? 45 : 0 }}
					transition={{ duration: 0.2 }}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='text-foreground'
					>
						<line x1='12' y1='5' x2='12' y2='19'></line>
						<line x1='5' y1='12' x2='19' y2='12'></line>
					</svg>
				</motion.div>
			</motion.div>

			{/* Content */}
			<motion.div layout='position' className='flex flex-1 flex-col p-5 md:p-6'>
				<h3 className='text-foreground mb-2 text-lg font-medium md:text-xl'>
					{service.title}
				</h3>
				<p className='text-muted-foreground mb-4 text-sm leading-relaxed'>
					{service.description}
				</p>

				{/* Expanded content */}
				<AnimatePresence>
					{isExpanded && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className='overflow-hidden'
						>
							{/* What's included */}
							<div className='mb-4'>
								<h4 className='text-foreground mb-2 text-sm font-medium'>
									Что входит:
								</h4>
								<ul className='space-y-1.5'>
									{service.details.includes.map((item, i) => (
										<motion.li
											key={item}
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												duration: 0.2,
												delay: i * 0.05
											}}
											className='text-muted-foreground flex items-center gap-2 text-sm'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='14'
												height='14'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
												className='text-accent shrink-0'
											>
												<polyline points='20 6 9 17 4 12'></polyline>
											</svg>
											{item}
										</motion.li>
									))}
								</ul>
							</div>

							{/* Supported brands */}
							<div className='mb-4'>
								<h4 className='text-foreground mb-2 text-sm font-medium'>
									Бренды:
								</h4>
								<div className='flex flex-wrap gap-1.5'>
									{service.details.brands.map((brand, i) => (
										<motion.span
											key={brand}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{
												duration: 0.2,
												delay: i * 0.03
											}}
											className='bg-secondary text-foreground rounded-full px-2.5 py-0.5 text-xs font-medium'
										>
											{brand}
										</motion.span>
									))}
								</div>
							</div>

							{/* Note */}
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
								className='text-muted-foreground mb-4 rounded-lg bg-secondary/50 p-3 text-xs leading-relaxed'
							>
								{service.details.note}
							</motion.p>

							{/* CTA */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.25 }}
							>
								<Button
									asChild
									className='w-full bg-accent text-accent-foreground hover:bg-accent/90'
									onClick={(e) => e.stopPropagation()}
								>
									<a href='tel:+79991234567'>
										Записаться на ремонт
									</a>
								</Button>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Price and duration */}
				<motion.div
					layout='position'
					className={`flex items-center justify-between ${isExpanded ? 'mt-4 border-t border-border pt-4' : 'mt-auto'}`}
				>
					<span className='text-foreground text-lg font-medium'>
						{service.price}
					</span>
					<span className='text-muted-foreground rounded-full bg-secondary px-3 py-1 text-xs font-medium'>
						{service.duration}
					</span>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export function Services() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

	const handleToggle = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index)
	}

	return (
		<section className='bg-card w-full'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				{/* Header */}
				<div className='mb-12 md:mb-16'>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='text-foreground mb-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl'
					>
						Популярные услуги
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className='text-muted-foreground max-w-lg text-base md:text-lg'
					>
						Точная цена до начала работ. Нажмите на карточку, чтобы
						узнать подробности.
					</motion.p>
				</div>

				{/* Services grid */}
				<motion.div layout className='grid gap-6 md:grid-cols-3 md:gap-8'>
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							service={service}
							isExpanded={expandedIndex === index}
							onToggle={() => handleToggle(index)}
						/>
					))}
				</motion.div>
			</div>
		</section>
	)
}
