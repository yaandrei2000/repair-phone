'use client'

import { Clock, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'

import { Button } from '@/components/ui/button'

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
	return (
		<section id='contacts' className='bg-background w-full'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='flex flex-col gap-10 lg:flex-row lg:gap-16'>
					{/* Left side - Contact information */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='lg:w-2/5'
					>
						<h2 className='text-foreground mb-2 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl'>
							Контакты
						</h2>
						<p className='text-muted-foreground mb-8 text-base'>
							Приезжайте или звоните - ответим на любые вопросы
						</p>

						<div className='flex flex-col gap-6'>
							{contactInfo.map((info, index) => {
								const Icon = info.icon
								return (
									<div
										key={index}
										className='group flex gap-4'
									>
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

						{/* CTA Button */}
						<a
							href='tel:+79066150006'
							className='mt-8 inline-block'
						>
							<Button
								size='lg'
								className='bg-accent text-accent-foreground hover:bg-accent/90 gap-2 rounded-full px-6'
							>
								<Phone className='h-4 w-4' />
								Позвонить
							</Button>
						</a>
					</motion.div>

					{/* Right side - Entrance photo */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className='relative flex-1'
					>
						<div className='bg-secondary relative overflow-hidden rounded-2xl'>
							{/* Container for vertical image - 9:16 ratio like shorts */}
							<div className='relative mx-auto aspect-[9/16] w-full max-w-[320px]'>
								<Image
									src='/images/entrance.png'
									alt='Вход в сервис Крутой Сервис - ремонт телефонов во Владимире'
									fill
									className='object-cover'
									sizes='320px'
								/>
								{/* Overlay gradient */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
								
								{/* Badge */}
								<div className='absolute bottom-4 left-4 right-4'>
									<div className='bg-background/95 backdrop-blur-sm rounded-xl p-4'>
										<p className='text-foreground font-medium text-sm'>
											Ищите вывеску с Apple и Android
										</p>
										<p className='text-muted-foreground text-xs mt-1'>
											Спуститесь по ступенькам - мы внутри!
										</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
