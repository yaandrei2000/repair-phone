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

export function Trust() {
	return (
		<section className='bg-background w-full'>
			<div className='container mx-auto flex max-w-[1440px] flex-col gap-6 px-[18px] pt-[30px] pb-[34px] md:gap-10 md:px-16 md:pt-14 md:pb-20'>
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

				{/* Блок с причинами и анимацией на белом фоне */}
				<div className='border-border/40 rounded-[32px] border bg-white px-4 py-6 shadow-sm md:px-8 md:py-8'>
					<div className='flex flex-col gap-6 md:flex-row md:items-start md:gap-10'>
						{/* Левая часть: только визуальный блок без текста */}
						<div className='flex-1'>
							<div className='relative flex h-[220px] items-center justify-center md:h-[260px]'>
								{/* Внешний мягкий круг */}
								<div className='bg-primary/5 absolute h-[200px] w-[200px] rounded-full blur-2xl md:h-[230px] md:w-[230px]' />
								{/* Средний круг */}
								<div className='bg-primary/10 absolute h-[150px] w-[150px] rounded-full md:h-[180px] md:w-[180px]' />
								{/* Внутренний круг */}
								<div className='bg-primary absolute h-[96px] w-[96px] rounded-full md:h-[112px] md:w-[112px]' />

								{/* Маленькие индикаторы вокруг круга */}
								<span className='absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]' />
								<span className='absolute bottom-3 left-4 h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.25)] md:left-6' />
								<span className='absolute right-6 bottom-6 h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_0_4px_rgba(252,211,77,0.3)] md:right-10' />
								<span className='bg-primary/70 absolute top-8 right-10 h-2 w-2 rounded-full md:right-14' />
							</div>
						</div>

						{/* Правая часть: колонка */}
						<div className='flex-1'>
							<div className='flex flex-col gap-4 md:gap-5'>
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
										whileHover={{ scale: 1.02, x: 2 }}
										className='group text-left'
									>
										<div className='flex items-start gap-2'>
											<span className='bg-primary mt-1 h-1.5 w-1.5 flex-none rounded-full group-hover:bg-sky-400' />
											<div>
												<h3 className='text-foreground text-[15px] font-medium md:text-[15px]'>
													{reason.title}
												</h3>
												<p className='text-muted-foreground mt-1 text-[13px] leading-relaxed md:text-sm'>
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
			</div>
		</section>
	)
}
