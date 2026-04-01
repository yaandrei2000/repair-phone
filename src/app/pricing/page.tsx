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
			<section className='bg-background w-full'>
				<div className='container mx-auto flex max-w-[1440px] flex-col gap-6 px-[18px] py-7 md:gap-8 md:px-16 md:py-14'>
					<div className='flex flex-col gap-3 md:gap-4'>
						<h1 className='text-foreground text-[30px] font-normal md:text-[44px]'>
							Прайс-лист
						</h1>
						<p className='text-muted-foreground text-sm md:text-lg'>
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
