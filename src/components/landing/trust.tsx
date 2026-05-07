'use client'

import { motion } from 'motion/react'

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

export function Trust() {
	return (
		<section className='bg-background w-full'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='flex flex-col gap-12 lg:flex-row lg:gap-20'>
					{/* Left side - Big number */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='lg:w-2/5'
					>
						<div className='sticky top-32'>
							<span className='text-primary text-8xl font-medium tracking-tight md:text-9xl'>
								5+
							</span>
							<p className='text-foreground mt-2 text-xl font-medium md:text-2xl'>
								лет практического опыта
							</p>
							<p className='text-muted-foreground mt-2 text-base'>
								в ремонте iPhone, Samsung, Xiaomi и других
								популярных брендов
							</p>

							{/* Mini stats */}
							<div className='mt-8 flex gap-8'>
								<div>
									<span className='text-primary text-3xl font-medium md:text-4xl'>
										2000+
									</span>
									<p className='text-muted-foreground text-sm'>
										ремонтов
									</p>
								</div>
								<div>
									<span className='text-primary text-3xl font-medium md:text-4xl'>
										12
									</span>
									<p className='text-muted-foreground text-sm'>
										мес. гарантии
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right side - Reasons */}
					<div className='flex flex-1 flex-col gap-6 lg:gap-8'>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='text-foreground text-3xl font-medium tracking-tight md:text-4xl'
						>
							Почему выбирают нас
						</motion.h2>

						<div className='flex flex-col gap-4'>
							{reasons.map((reason, index) => (
								<motion.div
									key={reason.number}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1
									}}
									className='group bg-card hover:bg-primary/5 border-border/50 rounded-2xl border p-6 transition-colors md:p-8'
								>
									<div className='flex gap-4 md:gap-6'>
										<span className='text-primary text-sm font-medium'>
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
