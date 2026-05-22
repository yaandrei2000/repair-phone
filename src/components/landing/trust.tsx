'use client'

import { motion } from 'motion/react'

import { fadeInView, useReducedMotion } from '@/lib/motion/use-reduced-motion'

const reasons = [
	{
		number: '01',
		title: 'Опыт в ремонте популярных брендов',
		description:
			'Больше 5 лет чиним iPhone, Samsung, Xiaomi, Huawei. Хорошо знаем типовые поломки и слабые места.'
	},
	{
		number: '02',
		title: 'Квалификация и обучение',
		description:
			'Проходил обучение в профессиональных сервисах. Постоянно обновляю знания и слежу за технологиями.'
	},
	{
		number: '03',
		title: 'Гарантия и индивидуальный подход',
		description:
			'Даём гарантию на работы и запчасти. Подбираем решение под ваш бюджет и остаёмся на связи.'
	}
]

const highlights = [
	'Работаем с iPhone, Samsung, Xiaomi, Huawei',
	'Бесплатная диагностика перед ремонтом',
	'Гарантия на работы и установленные детали'
]

export function Trust() {
	const reducedMotion = useReducedMotion()

	return (
		<section className='bg-background w-full'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='flex flex-col gap-12 lg:flex-row lg:gap-20'>
					<motion.div
						{...fadeInView(reducedMotion)}
						className='lg:w-2/5'
					>
						<div className='border-border bg-secondary/40 rounded-2xl border p-6 md:p-8 lg:sticky lg:top-32'>
							<p className='text-accent mb-3 text-xs font-medium tracking-wider uppercase'>
								О мастерской
							</p>
							<p className='text-foreground text-lg leading-relaxed font-medium md:text-xl'>
								Сервис во Владимире, где сначала объясняем
								поломку и цену, а потом берёмся за ремонт.
							</p>
							<ul className='text-muted-foreground mt-6 flex flex-col gap-3 text-sm leading-relaxed'>
								{highlights.map(item => (
									<li key={item} className='flex gap-3'>
										<span
											className='bg-accent mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full'
											aria-hidden
										/>
										{item}
									</li>
								))}
							</ul>
						</div>
					</motion.div>

					<div className='flex flex-1 flex-col gap-6 lg:gap-8'>
						<motion.h2
							{...fadeInView(reducedMotion)}
							className='text-foreground text-3xl font-medium tracking-tight md:text-4xl'
						>
							Почему выбирают нас
						</motion.h2>

						<div className='flex flex-col gap-4'>
							{reasons.map((reason, index) => (
								<motion.div
									key={reason.number}
									{...fadeInView(reducedMotion, index * 0.08)}
									className='group border-border/50 hover:bg-secondary/50 rounded-2xl border p-6 transition-colors md:p-8'
								>
									<div className='flex gap-4 md:gap-6'>
										<span className='text-accent text-sm font-medium tabular-nums'>
											{reason.number}
										</span>
										<div>
											<h3 className='text-foreground mb-2 text-lg font-medium'>
												{reason.title}
											</h3>
											<p className='text-muted-foreground text-sm leading-relaxed'>
												{reason.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
