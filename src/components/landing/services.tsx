'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

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
		title: 'Замена разъёма',
		description:
			'Устраним проблему с зарядкой, заменим порт и проверим систему питания.',
		price: 'от 1 790 ₽',
		duration: '30-60 мин',
		image: '/phone-charging-port-connected.png'
	}
]

export function Services() {
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
						Точная цена до начала работ. Быстро устраняем типовые и
						сложные поломки.
					</motion.p>
				</div>

				{/* Services grid */}
				<div className='grid gap-6 md:grid-cols-3 md:gap-8'>
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1
							}}
							className='group bg-background border-border/50 relative flex flex-col overflow-hidden rounded-2xl border transition-shadow hover:shadow-lg'
						>
							{/* Image container */}
							<div className='bg-secondary/50 relative flex h-48 items-center justify-center overflow-hidden md:h-56'>
								<div className='relative h-40 w-40 transition-transform duration-500 group-hover:scale-105 md:h-48 md:w-48'>
									<Image
										src={service.image}
										alt={service.title}
										fill
										className='object-contain'
									/>
								</div>
							</div>

							{/* Content */}
							<div className='flex flex-1 flex-col p-5 md:p-6'>
								<h3 className='text-foreground mb-2 text-lg font-medium md:text-xl'>
									{service.title}
								</h3>
								<p className='text-muted-foreground mb-4 flex-1 text-sm leading-relaxed'>
									{service.description}
								</p>

								{/* Price and duration */}
								<div className='flex items-center justify-between'>
									<span className='text-foreground text-lg font-medium'>
										{service.price}
									</span>
									<span className='text-muted-foreground bg-secondary rounded-full px-3 py-1 text-xs font-medium'>
										{service.duration}
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
