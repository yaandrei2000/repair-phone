import type { Metadata } from 'next'

import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { PricingTable } from '@/components/pricing/pricing-table'

export const metadata: Metadata = {
	title: 'Прайс-лист - Цены на ремонт смартфонов во Владимире',
	description:
		'Прозрачные цены на ремонт смартфонов во Владимире. Замена экрана от 3490₽, аккумулятора от 2190₽, разъема зарядки от 1790₽. Бесплатная диагностика. Гарантия 12 месяцев.',
	keywords: [
		'прайс ремонт смартфонов',
		'цены на ремонт телефонов Владимир',
		'стоимость замены экрана iPhone',
		'цена замены аккумулятора',
		'прайс-лист сервисный центр'
	],
	openGraph: {
		title: 'Прайс-лист - Цены на ремонт смартфонов во Владимире',
		description:
			'Прозрачные цены на ремонт смартфонов. Замена экрана от 3490₽, аккумулятора от 2190₽. Бесплатная диагностика.',
		url: '/pricing'
	},
	alternates: {
		canonical: '/pricing'
	}
}

export default function PricingPage() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Header />
			<section className='bg-background w-full flex-1'>
				<div className='container mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20'>
					<div className='mb-10 md:mb-14'>
						<h1 className='text-foreground mb-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl'>
							Прайс-лист
						</h1>
						<p className='text-muted-foreground max-w-xl text-base md:text-lg'>
							Прозрачные цены на все виды ремонта. Точная
							стоимость определяется после бесплатной диагностики.
						</p>
					</div>

					<PricingTable />
				</div>
			</section>
			<Footer />
		</main>
	)
}
