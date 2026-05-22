'use client'

import { motion } from 'motion/react'

import { pricingCategories } from '@/lib/data/pricing'
import { fadeInView, useReducedMotion } from '@/lib/motion/use-reduced-motion'

export function PricingTable() {
	const reducedMotion = useReducedMotion()

	return (
		<div className='flex flex-col gap-12 md:gap-16'>
			{pricingCategories.map((category, categoryIndex) => (
				<motion.div
					key={categoryIndex}
					{...fadeInView(reducedMotion, categoryIndex * 0.05)}
					className='flex flex-col gap-5'
				>
					<h2 className='text-foreground text-xl font-medium md:text-2xl'>
						{category.category}
					</h2>
					<div className='bg-card border-border/50 overflow-hidden rounded-2xl border'>
						{category.services.map((service, serviceIndex) => (
							<div
								key={serviceIndex}
								className='border-border/50 hover:bg-secondary/30 flex flex-col gap-3 border-b px-5 py-4 transition-colors last:border-b-0 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 md:py-5'
							>
								<div className='flex-1'>
									<h3 className='text-foreground text-base font-medium'>
										{service.device}
									</h3>
									<p className='text-muted-foreground text-sm'>
										{service.description}
									</p>
								</div>
								<div className='flex items-center gap-4'>
									<span className='bg-secondary text-muted-foreground rounded-full px-3 py-1 text-xs font-medium'>
										{service.duration}
									</span>
									<span className='text-foreground text-lg font-medium md:text-xl'>
										{service.price}
									</span>
								</div>
							</div>
						))}
					</div>
				</motion.div>
			))}
		</div>
	)
}
