'use client'

import { Navigation } from 'lucide-react'
import { motion } from 'motion/react'

import { TrackedLink } from '@/components/analytics/tracked-link'
import { Button } from '@/components/ui/button'
import { YandexMapOrganization } from '@/components/yandex-map'
import { siteConfig } from '@/lib/site-config'

export function MapSection() {
	const organizationId = '124779220273'

	return (
		<section className='bg-secondary/30 w-full'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'
				>
					<div>
						<h2 className='text-foreground text-2xl font-medium tracking-tight md:text-3xl'>
							Как нас найти
						</h2>
						<p className='text-muted-foreground mt-2 text-base'>
							ул. Тракторная, д. 46/1 — рядом с остановкой
						</p>
					</div>
					<Button
						asChild
						variant='outline'
						className='gap-2 rounded-full'
					>
						<TrackedLink
							href={siteConfig.routeUrl}
							target='_blank'
							rel='noopener noreferrer'
							goal='YANDEX_ROUTE_OPEN'
						>
							<Navigation className='h-4 w-4' />
							Построить маршрут
						</TrackedLink>
					</Button>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className='overflow-hidden rounded-2xl'
				>
					<div className='h-[350px] md:h-[450px]'>
						<YandexMapOrganization
							zoom={17}
							organizationId={organizationId}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
