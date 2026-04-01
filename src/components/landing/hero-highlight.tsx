'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/badge'

const repairCards = [
	{
		device: 'IPhone 14 Pro',
		service: 'Замена аккумулятора • 45 мин',
		image: '/iphone-14-pro-disassembled.png'
	},
	{
		device: 'IPhone 13',
		service: 'Замена задней крышки • от 1 часа',
		image: '/iphone-14-back-cracked.png'
	},
	{
		device: 'Samsung Galaxy S24 Ultra',
		service: 'Замена дисплея • 60 мин',
		image: '/samsung-s24-ultra-disassembled.png'
	}
]

export function HeroHighlight() {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % repairCards.length)
		}, 6000) // Смена каждые 6 секунд

		return () => clearInterval(interval)
	}, [])

	return (
		<section className='bg-background w-full'>
			<div className='container mx-auto flex max-w-[1440px] flex-col gap-10 px-[18px] pt-9 pb-10 md:flex-row md:items-center md:gap-14 md:px-16 md:pt-14 md:pb-16'>
				{/* Left content */}
				<div className='relative flex flex-1 flex-col gap-5'>
					<Badge
						variant='secondary'
						className='rounded-full px-3 py-1 text-xs md:text-sm'
					>
						г. Владимир • Сервис по ремонту смартфонов
					</Badge>

					<h1 className='text-foreground text-[40px] leading-tight font-semibold md:text-[64px]'>
						Ремонт смартфонов
						<br />
						<span className='font-normal'>
							с гарантией до 12 месяцев
						</span>
					</h1>

					<p className='text-muted-foreground max-w-xl text-sm md:text-lg'>
						Восстанавливаем технику после любых поломок: разбитый
						экран, батарея, вода, разъёмы. Диагностика в день
						обращения и честная цена до старта работ.
					</p>

					{/* Address and rating - desktop only */}
					<div className='mt-4 hidden flex-col gap-3 md:flex'>
						<div className='text-muted-foreground flex flex-col gap-1 text-xs md:text-sm'>
							<p className='text-foreground font-medium'>
								ул. Тракторная, д. 46/1
							</p>
							<p>Вход со стороны пешеходного перехода, -1 этаж</p>
						</div>
						<div className='text-muted-foreground flex flex-wrap gap-4 text-xs md:text-sm'>
							<div className='flex items-center gap-2'>
								<span className='bg-primary h-2 w-2 rounded-full' />
								<span>4.9/5 по отзывам клиентов</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right visual */}
				<div className='relative flex flex-1 flex-col items-center'>
					{/* Big accent circle */}
					<div className='bg-primary relative h-[260px] w-[260px] rounded-full shadow-[0_40px_80px_rgba(0,0,0,0.18)] md:h-[360px] md:w-[360px]'>
						{/* Phone image with animation */}
						<AnimatePresence mode='wait'>
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{
									duration: 0.4,
									ease: 'easeInOut'
								}}
								className='absolute inset-[-10%]'
							>
								<Image
									src={repairCards[currentIndex].image}
									alt={`Ремонт ${repairCards[currentIndex].device} - ${repairCards[currentIndex].service} в сервисе Крутой Сервис, Владимир`}
									fill
									className='object-contain'
									priority={currentIndex === 0}
								/>
							</motion.div>
						</AnimatePresence>

						{/* Floating card with animation */}
						<AnimatePresence mode='wait'>
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, x: 50, scale: 0.8 }}
								animate={{ opacity: 1, x: 0, scale: 1 }}
								exit={{ opacity: 0, x: -50, scale: 0.8 }}
								transition={{
									duration: 0.5,
									ease: 'easeInOut'
								}}
								className='bg-card absolute right-0 -bottom-6 flex items-center gap-2 rounded-xl px-3 py-2 text-xs shadow-lg md:right-4 md:-bottom-10 md:text-sm'
							>
								<span className='bg-primary h-2 w-2 rounded-full' />
								<div className='flex flex-col'>
									<span className='font-medium'>
										{repairCards[currentIndex].device}
									</span>
									<span className='text-muted-foreground'>
										{repairCards[currentIndex].service}
									</span>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Address and rating - mobile only */}
					<div className='mt-10 flex w-full flex-col gap-3 md:hidden'>
						<div className='text-muted-foreground flex flex-col gap-1 text-xs'>
							<p className='text-foreground font-medium'>
								ул. Тракторная, д. 46/1
							</p>
							<p>Вход со стороны пешеходного перехода, -1 этаж</p>
						</div>
						<div className='text-muted-foreground flex flex-wrap gap-4 text-xs'>
							<div className='flex items-center gap-2'>
								<span className='bg-primary h-2 w-2 rounded-full' />
								<span>4.9/5 по отзывам клиентов</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
