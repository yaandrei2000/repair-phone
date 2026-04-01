'use client'

import { motion } from 'motion/react'

const reasons = [
	{
		title: 'Опыт в ремонте смартфонов популярных брендов',
		description:
			'Больше 5 лет чиним iPhone, Samsung, Xiaomi, Huawei и другие модели. Хорошо знаем их типовые поломки и слабые места, поэтому быстро находим причину и предлагаем понятные варианты ремонта.'
	},
	{
		title: 'Квалификация и обучение в сервисных центрах',
		description:
			'Проходил обучение и сертификацию в профессиональных сервисах. Постоянно обновляю знания, слежу за технологиями и методами ремонта, чтобы ваш смартфон обслуживался по актуальным стандартам.'
	},
	{
		title: 'Гарантия и индивидуальный подход',
		description:
			'Даём гарантию на работы и установленные запчасти. Подбираем решение под ваш бюджет: объясняем, где можно сэкономить, а где лучше выбрать оригинал, и всегда остаёмся на связи, если после ремонта возникнут вопросы.'
	}
]

const stats = [
	{ value: '5+', label: 'лет опыта' },
	{ value: '2000+', label: 'ремонтов' },
	{ value: '12', label: 'мес. гарантии' }
]

export function Trust() {
	return (
		<section className='bg-background w-full'>
			<div className='container mx-auto flex max-w-[1440px] flex-col gap-8 px-[18px] pt-[30px] pb-[34px] md:gap-12 md:px-16 md:pt-14 md:pb-20'>
				{/* Заголовок */}
				<div className='flex flex-col gap-2 md:gap-3'>
					<h2 className='text-foreground text-[28px] leading-tight font-normal md:text-[42px]'>
						Почему выбирают нас
					</h2>

					<p className='text-muted-foreground max-w-[620px] text-[14px] leading-relaxed md:text-base'>
						Объясняем, что именно делаем с телефоном, подбираем
						запчасти под ваш бюджет и даём гарантию на результат.
					</p>
				</div>

				{/* Основной контент */}
				<div className='flex flex-col gap-10 md:flex-row md:items-start md:gap-16 lg:gap-20'>
					{/* Левая часть: большое число и статистика */}
					<div className='flex flex-col gap-6 md:flex-1'>
						{/* Большое акцентное число */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='relative'
						>
							<div className='flex items-baseline gap-2'>
								<span className='text-primary text-[100px] font-bold leading-none md:text-[140px]'>
									5
								</span>
								<span className='text-primary text-[48px] font-light md:text-[64px]'>
									+
								</span>
							</div>
							<p className='text-foreground -mt-2 text-lg font-medium md:text-xl'>
								лет практического опыта
							</p>
							<p className='text-muted-foreground mt-1 max-w-[280px] text-sm'>
								в ремонте iPhone, Samsung, Xiaomi и других
								популярных брендов
							</p>

							{/* Декоративные линии */}
							<div className='bg-primary/20 absolute -right-4 top-8 hidden h-[1px] w-16 md:block' />
							<div className='bg-primary/30 absolute -right-4 top-12 hidden h-[1px] w-10 md:block' />
						</motion.div>

						{/* Статистика в ряд */}
						<div className='mt-4 flex gap-6 md:gap-8'>
							{stats.slice(1).map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.4,
										delay: 0.2 + index * 0.1
									}}
									className='flex flex-col'
								>
									<span className='text-foreground text-[32px] font-semibold leading-tight md:text-[40px]'>
										{stat.value}
									</span>
									<span className='text-muted-foreground text-sm'>
										{stat.label}
									</span>
								</motion.div>
							))}
						</div>
					</div>

					{/* Правая часть: причины */}
					<div className='md:flex-1'>
						<div className='flex flex-col gap-6'>
							{reasons.map((reason, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{
										once: true,
										margin: '-20% 0px'
									}}
									transition={{
										duration: 0.35,
										delay: index * 0.08
									}}
									className='group'
								>
									<div className='flex items-start gap-3'>
										<span className='bg-primary mt-2 h-2 w-2 flex-none rounded-full' />
										<div>
											<h3 className='text-foreground text-base font-medium md:text-[17px]'>
												{reason.title}
											</h3>
											<p className='text-muted-foreground mt-1.5 text-sm leading-relaxed'>
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
