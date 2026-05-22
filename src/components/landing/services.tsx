'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { formatRubPrice, landingServices } from '@/lib/data/services'
import { cn } from '@/lib/utils'
import { fadeInView, useReducedMotion } from '@/lib/motion/use-reduced-motion'

export function Services() {
	const reducedMotion = useReducedMotion()
	const [featured, ...rest] = landingServices

	return (
		<section className='bg-card w-full'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='mb-12 md:mb-16'>
					<motion.h2
						{...fadeInView(reducedMotion)}
						className='text-foreground mb-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl'
					>
						Популярные услуги
					</motion.h2>
					<motion.p
						{...fadeInView(reducedMotion, 0.1)}
						className='text-muted-foreground max-w-lg text-base md:text-lg'
					>
						Быстро устраняем типовые и сложные поломки с
						оригинальными или проверенными аналоговыми запчастями.
					</motion.p>
				</div>

				<div className='flex flex-col gap-6'>
					<motion.article
						{...fadeInView(reducedMotion, 0.05)}
						className='bg-background border-border/50 flex flex-col overflow-hidden rounded-2xl border md:flex-row'
					>
						<div className='bg-secondary/50 relative flex h-56 flex-none items-center justify-center md:h-auto md:w-2/5'>
							<div className='relative h-44 w-44 md:h-52 md:w-52'>
								<Image
									src={featured.image}
									alt={featured.title}
									fill
									className='object-contain'
									priority
								/>
							</div>
						</div>
						<div className='flex flex-1 flex-col justify-center p-6 md:p-8'>
							<p className='text-accent mb-2 text-xs font-medium tracking-wider uppercase'>
								Чаще всего
							</p>
							<h3 className='text-foreground mb-3 text-2xl font-medium md:text-3xl'>
								{featured.title}
							</h3>
							<p className='text-muted-foreground mb-6 max-w-xl text-sm leading-relaxed md:text-base'>
								{featured.description}
							</p>
							<div className='flex flex-wrap items-center gap-4'>
								<span className='text-foreground text-xl font-medium'>
									{formatRubPrice(featured.priceFrom)}
								</span>
								<span className='text-muted-foreground bg-secondary rounded-full px-3 py-1 text-xs font-medium'>
									{featured.duration}
								</span>
								<Button asChild variant='outline' className='rounded-full'>
									<Link href='/pricing'>Все цены</Link>
								</Button>
							</div>
						</div>
					</motion.article>

					<div className='grid gap-4 md:grid-cols-2'>
						{rest.map((service, index) => (
							<motion.article
								key={service.slug}
								{...fadeInView(reducedMotion, 0.12 + index * 0.08)}
								className={cn(
									'bg-background border-border/50 flex gap-4 rounded-2xl border p-5 transition-shadow hover:shadow-md md:p-6',
									index === 1 && 'md:flex-row-reverse'
								)}
							>
								<div className='bg-secondary/50 relative h-24 w-24 flex-none overflow-hidden rounded-xl'>
									<Image
										src={service.image}
										alt={service.title}
										fill
										className='object-contain p-2'
										loading='lazy'
									/>
								</div>
								<div className='flex min-w-0 flex-1 flex-col'>
									<h3 className='text-foreground mb-1 text-lg font-medium'>
										{service.title}
									</h3>
									<p className='text-muted-foreground mb-3 flex-1 text-sm leading-relaxed'>
										{service.description}
									</p>
									<div className='flex items-center justify-between gap-2'>
										<span className='text-foreground font-medium'>
											{formatRubPrice(service.priceFrom)}
										</span>
										<span className='text-muted-foreground text-xs'>
											{service.duration}
										</span>
									</div>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
