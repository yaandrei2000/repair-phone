'use client'

import { Clock, MapPin, Phone, Navigation } from 'lucide-react'
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
				<div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16'>
					{/* Left side - Contact information */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='lg:w-1/2'
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

					{/* Right side - Phone mockup with entrance photo */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className='relative flex flex-1 justify-center'
					>
						{/* Phone frame */}
						<div className='relative'>
							{/* Phone outer frame */}
							<div className='relative rounded-[3rem] bg-foreground p-3 shadow-2xl'>
								{/* Phone inner bezel */}
								<div className='relative overflow-hidden rounded-[2.5rem] bg-black'>
									{/* Dynamic Island / Notch */}
									<div className='absolute top-3 left-1/2 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black' />
									
									{/* Screen content - Image */}
									<div className='relative aspect-[9/19] w-[280px]'>
										<Image
											src='/images/entrance.png'
											alt='Вход в сервис - ремонт телефонов во Владимире'
											fill
											className='object-cover'
											sizes='280px'
										/>
										
										{/* Navigator-style overlay */}
										<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30' />
										
										{/* Top bar - like maps app */}
										<div className='absolute top-12 left-4 right-4 z-10'>
											<div className='flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 backdrop-blur-sm'>
												<div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-500'>
													<Navigation className='h-3 w-3 text-white' />
												</div>
												<span className='text-xs font-medium text-gray-800'>
													Крутой Сервис
												</span>
											</div>
										</div>
										
										{/* Bottom card - arrival info */}
										<div className='absolute bottom-4 left-3 right-3 z-10'>
											<div className='rounded-2xl bg-white/95 p-4 backdrop-blur-sm'>
												<div className='mb-2 flex items-center justify-between'>
													<span className='text-lg font-bold text-gray-900'>
														Вы на месте!
													</span>
													<span className='rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700'>
														Открыто
													</span>
												</div>
												<p className='text-sm text-gray-600'>
													Ищите вывеску с Apple и Android, спуститесь по ступенькам
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							{/* Decorative elements */}
							<div className='absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl' />
							<div className='absolute -left-6 -top-6 -z-10 h-24 w-24 rounded-full bg-secondary blur-xl' />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
