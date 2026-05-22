'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Pause, Play } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { useReducedMotion } from '@/lib/motion/use-reduced-motion'

const repairCards = [
	{
		device: 'iPhone 14 Pro',
		service: 'Замена аккумулятора',
		time: '45 мин',
		image: '/iphone-14-pro-disassembled.png'
	},
	{
		device: 'iPhone 13',
		service: 'Замена задней крышки',
		time: 'от 1 часа',
		image: '/iphone-14-back-cracked.png'
	},
	{
		device: 'Samsung S24 Ultra',
		service: 'Замена дисплея',
		time: '60 мин',
		image: '/samsung-s24-ultra-disassembled.png'
	}
]

const slideCount = repairCards.length

export function HeroHighlight() {
	const reducedMotion = useReducedMotion()
	const [currentIndex, setCurrentIndex] = useState(0)
	const [paused, setPaused] = useState(false)

	useEffect(() => {
		if (reducedMotion || paused) return

		const interval = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % slideCount)
		}, 5000)
		return () => clearInterval(interval)
	}, [reducedMotion, paused])

	const motionProps = reducedMotion
		? { initial: false, animate: undefined, exit: undefined, transition: { duration: 0 } }
		: {
				initial: { opacity: 0, scale: 0.95 },
				animate: { opacity: 1, scale: 1 },
				exit: { opacity: 0, scale: 1.05 },
				transition: { duration: 0.5, ease: 'easeOut' as const }
			}

	const cardMotionProps = reducedMotion
		? { initial: false, animate: undefined, exit: undefined, transition: { duration: 0 } }
		: {
				initial: { opacity: 0, y: 20 },
				animate: { opacity: 1, y: 0 },
				exit: { opacity: 0, y: -20 },
				transition: { duration: 0.4, delay: 0.2, ease: 'easeOut' as const }
			}

	return (
		<section className='bg-background w-full overflow-hidden'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24'>
					<div className='flex flex-1 flex-col items-center text-center md:items-start md:text-left'>
						<Badge
							variant='secondary'
							className='bg-secondary mb-6 rounded-full border-0 px-4 py-1.5 text-sm font-medium'
						>
							г. Владимир • Сервис по ремонту телефонов
						</Badge>

						<h1 className='text-foreground mb-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl'>
							<span className='block'>Ремонт телефонов</span>
							<span className='text-muted-foreground block font-normal'>
								с гарантией до 12 месяцев
							</span>
						</h1>

						<p className='text-muted-foreground mb-8 max-w-[65ch] text-base leading-relaxed md:text-lg'>
							Восстанавливаем технику после любых поломок:
							разбитый экран, батарея, вода, разъёмы. Диагностика
							в день обращения и честная цена до старта работ.
						</p>

						<div className='border-border hidden border-t pt-6 md:block'>
							<p className='text-foreground text-sm font-medium'>
								ул. Тракторная, д. 46/1
							</p>
							<p className='text-muted-foreground text-sm'>
								Вход со стороны пешеходного перехода, -1 этаж
							</p>
						</div>
					</div>

					<div
						className='relative flex flex-1 flex-col items-center justify-center'
						aria-roledescription='карусель'
						aria-label='Примеры выполненных ремонтов'
					>
						<div className='bg-secondary absolute h-72 w-72 rounded-full md:h-80 md:w-80 lg:h-96 lg:w-96' />

						<div
							className='relative z-10 h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96'
							aria-live='polite'
							aria-atomic='true'
						>
							{reducedMotion ? (
								<div className='relative h-full w-full'>
									<Image
										src={repairCards[currentIndex].image}
										alt={`Ремонт ${repairCards[currentIndex].device}`}
										fill
										className='object-contain drop-shadow-2xl'
										priority
									/>
								</div>
							) : (
								<AnimatePresence mode='wait'>
									<motion.div
										key={currentIndex}
										{...motionProps}
										className='relative h-full w-full'
									>
										<Image
											src={repairCards[currentIndex].image}
											alt={`Ремонт ${repairCards[currentIndex].device}`}
											fill
											className='object-contain drop-shadow-2xl'
											priority={currentIndex === 0}
											loading={
												currentIndex === 0 ? undefined : 'lazy'
											}
										/>
									</motion.div>
								</AnimatePresence>
							)}
						</div>

						{reducedMotion ? (
							<div className='bg-card absolute -right-4 bottom-4 z-20 rounded-2xl px-5 py-4 shadow-xl md:right-0 md:bottom-8'>
								<div className='flex items-center gap-3'>
									<div className='bg-accent h-2.5 w-2.5 rounded-full' />
									<div>
										<p className='text-foreground text-sm font-medium'>
											{repairCards[currentIndex].device}
										</p>
										<p className='text-muted-foreground text-xs'>
											{repairCards[currentIndex].service}{' '}
											&bull; {repairCards[currentIndex].time}
										</p>
									</div>
								</div>
							</div>
						) : (
							<AnimatePresence mode='wait'>
								<motion.div
									key={currentIndex}
									{...cardMotionProps}
									className='bg-card absolute -right-4 bottom-4 z-20 rounded-2xl px-5 py-4 shadow-xl md:right-0 md:bottom-8'
								>
									<div className='flex items-center gap-3'>
										<div className='bg-accent h-2.5 w-2.5 rounded-full' />
										<div>
											<p className='text-foreground text-sm font-medium'>
												{repairCards[currentIndex].device}
											</p>
											<p className='text-muted-foreground text-xs'>
												{repairCards[currentIndex].service}{' '}
												&bull; {repairCards[currentIndex].time}
											</p>
										</div>
									</div>
								</motion.div>
							</AnimatePresence>
						)}

						<div className='absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-1'>
							{repairCards.map((_, index) => (
								<button
									key={index}
									type='button'
									onClick={() => setCurrentIndex(index)}
									className='flex h-11 w-11 items-center justify-center rounded-full'
									aria-label={`Слайд ${index + 1} из ${slideCount}`}
									aria-current={
										index === currentIndex ? 'true' : undefined
									}
								>
									<span
										className={`block rounded-full transition-[width,background-color] duration-200 ${
											index === currentIndex
												? 'bg-foreground h-1.5 w-6'
												: 'bg-border hover:bg-muted-foreground/50 h-1.5 w-1.5'
										}`}
										aria-hidden
									/>
								</button>
							))}
							{!reducedMotion && (
								<button
									type='button'
									onClick={() => setPaused(p => !p)}
									className='text-muted-foreground hover:text-foreground ml-1 flex h-11 w-11 items-center justify-center rounded-full transition-colors'
									aria-label={
										paused
											? 'Возобновить автопрокрутку'
											: 'Остановить автопрокрутку'
									}
								>
									{paused ? (
										<Play className='h-4 w-4' aria-hidden />
									) : (
										<Pause className='h-4 w-4' aria-hidden />
									)}
								</button>
							)}
						</div>
					</div>
				</div>

				<div className='border-border mt-16 border-t pt-6 text-center md:hidden'>
					<p className='text-foreground text-sm font-medium'>
						ул. Тракторная, д. 46/1
					</p>
					<p className='text-muted-foreground text-sm'>
						Вход со стороны пешеходного перехода, -1 этаж
					</p>
				</div>
			</div>
		</section>
	)
}
