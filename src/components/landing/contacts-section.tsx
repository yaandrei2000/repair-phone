'use client'

import { Clock, MapPin, Phone } from 'lucide-react'
import { motion } from 'motion/react'

import { Button } from '@/components/ui/button'
import { YandexMapOrganization } from '@/components/yandex-map'
import { fadeInView, useReducedMotion } from '@/lib/motion/use-reduced-motion'

const contactInfo = [
	{
		icon: MapPin,
		label: 'Адрес',
		content: 'г. Владимир, ул. Тракторная, д. 46/1',
		description: 'Вход со стороны пешеходного перехода, -1 этаж'
	},
	{
		icon: Phone,
		label: 'Телефон',
		content: '+7 (906) 615-00-06',
		href: 'tel:+79066150006'
	},
	{
		icon: Clock,
		label: 'Время работы',
		content: ['Пн-Пт: 10:00-19:00', 'Сб-Вс: 12:00-16:00']
	}
]

export function ContactsSection() {
	const reducedMotion = useReducedMotion()
	const organizationId = '124779220273'

	return (
		<section id='contacts' className='bg-background w-full scroll-mt-20'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='flex flex-col gap-10 lg:flex-row lg:gap-16'>
					<motion.div
						{...fadeInView(reducedMotion)}
						className='lg:w-2/5'
					>
						<h2 className='text-foreground mb-2 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl'>
							Контакты
						</h2>
						<p className='text-muted-foreground mb-8 text-base'>
							Приезжайте или звоните, ответим на любые вопросы
						</p>

						<div className='flex flex-col gap-6'>
							{contactInfo.map((info, index) => {
								const Icon = info.icon
								return (
									<div key={index} className='flex gap-4'>
										<div className='bg-secondary flex h-10 w-10 flex-none items-center justify-center rounded-xl'>
											<Icon className='text-foreground h-5 w-5' />
										</div>
										<div>
											<p className='text-muted-foreground mb-1 text-xs font-medium tracking-wider uppercase'>
												{info.label}
											</p>
											{Array.isArray(info.content) ? (
												<div className='flex flex-col'>
													{info.content.map(
														(line, lineIndex) => (
															<p
																key={lineIndex}
																className='text-foreground text-base font-medium'
															>
																{line}
															</p>
														)
													)}
												</div>
											) : info.href ? (
												<a
													href={info.href}
													className='text-foreground hover:text-accent text-base font-medium transition-colors'
												>
													{info.content}
												</a>
											) : (
												<p className='text-foreground text-base font-medium'>
													{info.content}
												</p>
											)}
											{info.description && (
												<p className='text-muted-foreground mt-1 text-sm'>
													{info.description}
												</p>
											)}
										</div>
									</div>
								)
							})}
						</div>

						<Button
							asChild
							size='lg'
							className='bg-accent text-accent-foreground hover:bg-accent/90 mt-8 gap-2 rounded-full px-6'
						>
							<a href='tel:+79066150006'>
								<Phone className='h-4 w-4' />
								Позвонить
							</a>
						</Button>
					</motion.div>

					<motion.div
						{...fadeInView(reducedMotion, 0.1)}
						className='flex-1 overflow-hidden rounded-2xl'
					>
						<YandexMapOrganization
							zoom={17}
							organizationId={organizationId}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
