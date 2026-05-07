'use client'

import { MapPin, Clock, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export function FindUs() {
	return (
		<section className='relative w-full'>
			<div className='flex flex-col lg:flex-row lg:min-h-[700px]'>
				{/* Left side - Full bleed image */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='relative h-[400px] w-full lg:h-auto lg:w-1/2'
				>
					<Image
						src='/images/entrance.png'
						alt='Вход в сервис Крутой Сервис - ремонт телефонов во Владимире'
						fill
						className='object-cover'
					/>
					{/* Subtle gradient overlay */}
					<div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/50 lg:to-background' />
				</motion.div>

				{/* Right side - Content */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='relative flex w-full items-center bg-background px-6 py-12 lg:w-1/2 lg:px-16 lg:py-0'
				>
					<div className='mx-auto max-w-md'>
						{/* Small label */}
						<div className='flex items-center gap-2 text-accent'>
							<MapPin className='h-4 w-4' />
							<span className='text-sm font-medium tracking-wide uppercase'>Владимир</span>
						</div>

						{/* Main heading */}
						<h2 className='mt-4 text-4xl font-medium tracking-tight text-foreground lg:text-5xl'>
							Мы здесь
						</h2>
						
						{/* Address */}
						<p className='mt-6 text-xl text-foreground'>
							ул. Тракторная, д. 46/1
						</p>
						<p className='mt-1 text-muted-foreground'>
							-1 этаж, вход со стороны пешеходного перехода
						</p>

						{/* Divider */}
						<div className='my-8 h-px w-16 bg-accent' />

						{/* Info blocks */}
						<div className='space-y-4'>
							<div className='flex items-center gap-4'>
								<Clock className='h-5 w-5 text-muted-foreground' />
								<div>
									<p className='text-foreground'>10:00 — 20:00</p>
									<p className='text-sm text-muted-foreground'>без выходных</p>
								</div>
							</div>
							
							<div className='flex items-center gap-4'>
								<Phone className='h-5 w-5 text-muted-foreground' />
								<div>
									<a 
										href='tel:+79990001234' 
										className='text-foreground transition-colors hover:text-accent'
									>
										+7 999 000-12-34
									</a>
									<p className='text-sm text-muted-foreground'>звоните, подскажем как добраться</p>
								</div>
							</div>
						</div>

						{/* CTA */}
						<a
							href='https://yandex.ru/maps/-/your-map-link'
							target='_blank'
							rel='noopener noreferrer'
							className='mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105'
						>
							Построить маршрут
							<svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
							</svg>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
