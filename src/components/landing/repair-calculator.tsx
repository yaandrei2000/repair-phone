'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Fragment, useId, useState } from 'react'

import { fadeInView, useReducedMotion } from '@/lib/motion/use-reduced-motion'

// ─── данные ───────────────────────────────────────────────────────────────────

const BRANDS = {
	Apple: {
		sub: 'iPhone',
		models: [
			'iPhone 12 / 12 Pro',
			'iPhone 13 / 13 Pro',
			'iPhone 14 / 14 Pro',
			'iPhone 15 / 15 Pro',
			'iPhone SE'
		],
		services: {
			'Замена дисплея': {
				prices: [4490, 5290, 5990, 6490, 3290],
				time: '40–60 мин'
			},
			'Замена аккумулятора': {
				prices: [2490, 2690, 2990, 3290, 1990],
				time: '30–45 мин'
			},
			'Замена задней крышки': {
				prices: [2990, 3290, 3590, 3990, 1990],
				time: '50–70 мин'
			},
			'Замена разъёма зарядки': {
				prices: [2290, 2490, 2690, 2990, 1790],
				time: '35–55 мин'
			},
			'Замена камеры': {
				prices: [3290, 3690, 4290, 4990, 2490],
				time: '45–65 мин'
			}
		}
	},
	Samsung: {
		sub: 'Galaxy S / A',
		models: [
			'Galaxy S21 / S22',
			'Galaxy S23 / S24',
			'Galaxy A54',
			'Galaxy A34'
		],
		services: {
			'Замена дисплея': {
				prices: [5490, 6490, 3990, 3290],
				time: '50–70 мин'
			},
			'Замена аккумулятора': {
				prices: [2490, 2790, 1990, 1790],
				time: '35–50 мин'
			},
			'Замена задней крышки': {
				prices: [2990, 3290, 2290, 1990],
				time: '45–65 мин'
			},
			'Замена разъёма зарядки': {
				prices: [2190, 2490, 1890, 1690],
				time: '35–50 мин'
			},
			'Замена камеры': {
				prices: [3490, 4290, 2890, 2490],
				time: '45–65 мин'
			}
		}
	},
	Xiaomi: {
		sub: 'Xiaomi / Redmi',
		models: [
			'Xiaomi 12 / 12 Pro',
			'Xiaomi 13 / 13 Pro',
			'Redmi Note 12',
			'Redmi Note 13'
		],
		services: {
			'Замена дисплея': {
				prices: [3990, 4490, 2990, 3190],
				time: '40–60 мин'
			},
			'Замена аккумулятора': {
				prices: [1990, 2190, 1590, 1690],
				time: '30–45 мин'
			},
			'Замена задней крышки': {
				prices: [2490, 2790, 1790, 1990],
				time: '40–60 мин'
			},
			'Замена разъёма зарядки': {
				prices: [1790, 1990, 1490, 1590],
				time: '30–45 мин'
			},
			'Замена камеры': {
				prices: [2490, 2990, 2190, 2290],
				time: '40–60 мин'
			}
		}
	}
} as const

type Brand = keyof typeof BRANDS

const BRAND_ICONS: Record<Brand, React.ReactNode> = {
	Apple: (
		<svg viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6'>
			<path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
		</svg>
	),
	Samsung: (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth={1.5}
			className='h-6 w-6'
		>
			<rect x='5' y='2' width='14' height='20' rx='3' />
			<circle cx='12' cy='18' r='1' fill='currentColor' stroke='none' />
		</svg>
	),
	Xiaomi: (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth={1.5}
			className='h-6 w-6'
		>
			<rect x='5' y='2' width='14' height='20' rx='3' />
			<path d='M9 9h2v6M13 9h2v6' strokeLinecap='round' />
		</svg>
	)
}

function fmt(n: number) {
	return `от ${new Intl.NumberFormat('ru-RU').format(n)} ₽`
}

// ─── степпер ──────────────────────────────────────────────────────────────────

function Stepper({ phase }: { phase: 0 | 1 | 2 }) {
	const steps = ['Бренд', 'Модель', 'Услуги']
	return (
		<div
			className='mb-10 flex items-center'
			role='list'
			aria-label='Шаги калькулятора'
		>
			{steps.map((label, i) => (
				<Fragment key={label}>
					<div className='flex items-center gap-2' role='listitem'>
						<span
							className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors duration-200 ${
								i < phase
									? 'bg-foreground text-background border-foreground'
									: i === phase
										? 'border-foreground text-foreground'
										: 'border-border text-muted-foreground'
							}`}
						>
							{i < phase ? (
								<svg
									width='10'
									height='8'
									viewBox='0 0 10 8'
									fill='none'
								>
									<path
										d='M1 4l3 3 5-6'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							) : (
								i + 1
							)}
						</span>
						<span
							className={`text-xs font-medium ${
								i <= phase
									? 'text-foreground'
									: 'text-muted-foreground'
							}`}
						>
							{label}
						</span>
					</div>
					{i < 2 && (
						<div
							className={`mx-3 h-px flex-1 transition-colors duration-300 ${
								i < phase ? 'bg-foreground' : 'bg-border'
							}`}
							aria-hidden
						/>
					)}
				</Fragment>
			))}
		</div>
	)
}

// ─── чекмарк ──────────────────────────────────────────────────────────────────

function Check() {
	return (
		<svg width='10' height='8' viewBox='0 0 10 8' fill='none'>
			<path
				d='M1 4l3 3 5-6'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

// ─── иконка часов ─────────────────────────────────────────────────────────────

function ClockIcon() {
	return (
		<svg
			width='11'
			height='11'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
		>
			<circle cx='12' cy='12' r='9' />
			<path d='M12 7v5l3 3' />
		</svg>
	)
}

// ─── основной компонент ───────────────────────────────────────────────────────

export function RepairCalculator() {
	const reducedMotion = useReducedMotion()
	const servicesGroupId = useId()
	const [selBrand, setSelBrand] = useState<Brand | null>(null)
	const [selModelIdx, setSelModelIdx] = useState<number | null>(null)
	const [selServices, setSelServices] = useState<Set<string>>(new Set())

	const phase: 0 | 1 | 2 =
		selBrand === null ? 0 : selModelIdx === null ? 1 : 2

	function pickBrand(b: Brand) {
		setSelBrand(b)
		setSelModelIdx(null)
		setSelServices(new Set())
	}

	function pickModel(i: number) {
		setSelModelIdx(i)
		setSelServices(new Set())
	}

	function toggleService(name: string) {
		setSelServices(prev => {
			const next = new Set(prev)
			next.has(name) ? next.delete(name) : next.add(name)
			return next
		})
	}

	function reset() {
		setSelBrand(null)
		setSelModelIdx(null)
		setSelServices(new Set())
	}

	const total =
		selBrand && selModelIdx !== null
			? [...selServices].reduce((sum, name) => {
					const svc =
						BRANDS[selBrand].services[
							name as keyof (typeof BRANDS)[Brand]['services']
						]
					return sum + (svc?.prices[selModelIdx] ?? 0)
				}, 0)
			: 0

	return (
		<section className='bg-background w-full'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='flex flex-col gap-10 lg:flex-row lg:gap-20'>
					{/* Заголовок */}
					<motion.div
						{...fadeInView(reducedMotion)}
						className='lg:w-2/5'
					>
						<h2 className='text-foreground mb-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl'>
							Сколько стоит ваш ремонт?
						</h2>
						<p className='text-muted-foreground text-base leading-relaxed'>
							Выберите устройство и нужные услуги — получите
							предварительную цену за несколько кликов. Точная
							стоимость — после бесплатной диагностики.
						</p>
					</motion.div>

					{/* Калькулятор */}
					<motion.div
						{...fadeInView(reducedMotion, 0.1)}
						className='flex-1'
					>
						<Stepper phase={phase} />

						{/* Шаг 1 — бренд */}
						<div className='mb-6'>
							<p className='text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase'>
								Производитель
							</p>
							<div className='grid grid-cols-3 gap-3'>
								{(Object.keys(BRANDS) as Brand[]).map(b => (
									<button
										key={b}
										type='button'
										onClick={() => pickBrand(b)}
										className={`flex min-h-11 flex-col items-center justify-center gap-2 rounded-2xl border px-2 py-4 transition-colors duration-150 sm:py-5 ${
											selBrand === b
												? 'border-foreground bg-foreground text-background'
												: 'border-border text-foreground hover:bg-secondary'
										}`}
									>
										<span
											className={
												selBrand === b
													? 'text-background'
													: 'text-muted-foreground'
											}
										>
											{BRAND_ICONS[b]}
										</span>
										<span className='text-sm font-medium'>
											{b}
										</span>
										<span
											className={`text-xs ${selBrand === b ? 'text-background/70' : 'text-muted-foreground'}`}
										>
											{BRANDS[b].sub}
										</span>
									</button>
								))}
							</div>
						</div>

						{/* Шаг 2 — модель */}
						<AnimatePresence initial={false}>
							{selBrand && (
								<motion.div
									key='models'
									initial={
										reducedMotion
											? false
											: { opacity: 0, y: 8 }
									}
									animate={{ opacity: 1, y: 0 }}
									exit={
										reducedMotion
											? undefined
											: { opacity: 0, y: -4 }
									}
									transition={{ duration: reducedMotion ? 0 : 0.2 }}
									className='mb-6'
								>
									<p className='text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase'>
										Модель {selBrand}
									</p>
									<div className='flex flex-wrap gap-2'>
										{BRANDS[selBrand].models.map((m, i) => (
											<button
												key={m}
												type='button'
												onClick={() => pickModel(i)}
												className={`rounded-full border px-4 py-2 text-sm transition-colors duration-150 ${
													selModelIdx === i
														? 'border-foreground bg-foreground text-background'
														: 'border-border text-foreground hover:bg-secondary'
												}`}
											>
												{m}
											</button>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>

						{/* Шаг 3 — услуги */}
						<AnimatePresence initial={false}>
							{selBrand && selModelIdx !== null && (
								<motion.div
									key='services'
									initial={
										reducedMotion
											? false
											: { opacity: 0, y: 8 }
									}
									animate={{ opacity: 1, y: 0 }}
									exit={
										reducedMotion
											? undefined
											: { opacity: 0, y: -4 }
									}
									transition={{ duration: reducedMotion ? 0 : 0.2 }}
									className='mb-6'
								>
									<p
										id={servicesGroupId}
										className='text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase'
									>
										Что нужно сделать?
									</p>
									<div
										className='flex flex-col gap-2'
										role='group'
										aria-labelledby={servicesGroupId}
									>
										{Object.entries(
											BRANDS[selBrand].services
										).map(([name, info]) => {
											const price =
												info.prices[selModelIdx]
											const checked =
												selServices.has(name)
											return (
												<button
													key={name}
													type='button'
													role='checkbox'
													aria-checked={checked}
													onClick={() =>
														toggleService(name)
													}
													className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-150 ${
														checked
															? 'border-border bg-secondary'
															: 'border-border/50 hover:bg-secondary/50 bg-transparent'
													}`}
												>
													<span
														className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border transition-colors ${
															checked
																? 'bg-foreground border-foreground text-background'
																: 'border-border/70'
														}`}
													>
														{checked && <Check />}
													</span>
													<span className='text-foreground flex-1 text-sm'>
														{name}
													</span>
													<span className='text-muted-foreground flex items-center gap-1 text-xs'>
														<ClockIcon />
														{info.time}
													</span>
													<span className='text-foreground min-w-[90px] text-right text-sm font-medium'>
														{fmt(price)}
													</span>
												</button>
											)
										})}
									</div>
								</motion.div>
							)}
						</AnimatePresence>

						{/* Итог */}
						<AnimatePresence initial={false}>
							{selServices.size > 0 && (
								<motion.div
									key='result'
									initial={
										reducedMotion
											? false
											: { opacity: 0, y: 10 }
									}
									animate={{ opacity: 1, y: 0 }}
									exit={
										reducedMotion
											? undefined
											: { opacity: 0, y: 6 }
									}
									transition={{ duration: reducedMotion ? 0 : 0.25 }}
									className='border-border/50 bg-card rounded-2xl border p-5'
								>
									<div className='mb-4 flex flex-col gap-1.5'>
										{[...selServices].map(name => {
											const price =
												selBrand && selModelIdx !== null
													? BRANDS[selBrand].services[
															name as keyof (typeof BRANDS)[Brand]['services']
														]?.prices[selModelIdx]
													: 0
											return (
												<div
													key={name}
													className='flex justify-between text-sm'
												>
													<span className='text-muted-foreground'>
														{name}
													</span>
													<span className='text-foreground font-medium'>
														{fmt(price ?? 0)}
													</span>
												</div>
											)
										})}
									</div>
									<div className='border-border/50 flex items-baseline justify-between border-t pt-4'>
										<span className='text-foreground text-sm font-medium'>
											Итого
										</span>
										<motion.span
											key={total}
											initial={
												reducedMotion
													? false
													: {
															scale: 0.94,
															opacity: 0.5
														}
											}
											animate={{ scale: 1, opacity: 1 }}
											transition={{
												duration: reducedMotion ? 0 : 0.15
											}}
											className='text-foreground text-3xl font-medium tracking-tight'
										>
											{fmt(total)}
										</motion.span>
									</div>
									<div className='mt-4 flex gap-3'>
										<a
											href='tel:+79066150006'
											className='bg-accent text-accent-foreground hover:bg-accent/90 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium transition-colors'
										>
											<svg
												className='h-4 w-4'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												strokeWidth={2}
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z'
												/>
											</svg>
											Позвонить
										</a>
										<button
											onClick={reset}
											className='border-border text-muted-foreground hover:bg-secondary rounded-full border px-5 py-2.5 text-sm transition-colors'
										>
											Сбросить
										</button>
									</div>
									<p className='text-muted-foreground mt-3 text-center text-xs'>
										Точная цена — после бесплатной
										диагностики
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
