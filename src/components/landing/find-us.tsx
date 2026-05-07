'use client'

import { MapPin, Footprints } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export function FindUs() {
	return (
		<section className='bg-foreground w-full overflow-hidden'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16'>
					{/* Left side - Image with decorative elements */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='relative lg:w-1/2'
					>
						{/* Main image */}
						<div className='relative overflow-hidden rounded-3xl shadow-2xl'>
							<Image
								src='/images/entrance.png'
								alt='Вход в сервис Крутой Сервис - ремонт телефонов во Владимире'
								width={600}
								height={800}
								className='aspect-[3/4] w-full object-cover'
							/>
							{/* Gradient overlay for depth */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
							
							{/* Floating badge */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className='absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 p-4 backdrop-blur-sm md:bottom-6 md:left-6 md:right-6'
							>
								<div className='flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent'>
									<Footprints className='h-5 w-5 text-white' />
								</div>
								<div>
									<p className='text-sm font-medium text-foreground'>Легко найти</p>
									<p className='text-xs text-muted-foreground'>Вход со стороны пешеходного перехода</p>
								</div>
							</motion.div>
						</div>

						{/* Decorative glow */}
						<div className='absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl' />
						<div className='absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl' />
					</motion.div>

					{/* Right side - Content */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='lg:w-1/2'
					>
						<div className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2'>
							<MapPin className='h-4 w-4 text-accent' />
							<span className='text-sm font-medium text-white/80'>Владимир</span>
						</div>

						<h2 className='mt-6 text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl'>
							Заходите к нам
						</h2>
						
						<p className='mt-4 text-lg leading-relaxed text-white/70'>
							Уютная мастерская с теплой атмосферой, где ваш телефон в надежных руках. 
							Приходите на диагностику - это бесплатно!
						</p>

						{/* Address block */}
						<div className='mt-8 rounded-2xl bg-white/5 p-6 backdrop-blur-sm'>
							<p className='text-sm font-medium uppercase tracking-wider text-white/50'>
								Адрес мастерской
							</p>
							<p className='mt-2 text-xl font-medium text-white'>
								ул. Тракторная, д. 46/1
							</p>
							<p className='mt-1 text-white/60'>
								-1 этаж, вход со стороны пешеходного перехода
							</p>
						</div>

						{/* Features */}
						<div className='mt-8 grid grid-cols-2 gap-4'>
							<div className='rounded-xl bg-white/5 p-4'>
								<p className='text-2xl font-medium text-white'>2 мин</p>
								<p className='text-sm text-white/60'>от остановки</p>
							</div>
							<div className='rounded-xl bg-white/5 p-4'>
								<p className='text-2xl font-medium text-white'>Бесплатно</p>
								<p className='text-sm text-white/60'>парковка рядом</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
