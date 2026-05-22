import type { Metadata } from 'next'

import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { PricingTable } from '@/components/pricing/pricing-table'
import { StructuredData } from '@/components/seo/structured-data'

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoyservice.ru'

export const metadata: Metadata = {
	title: 'Цены на ремонт телефонов во Владимире — от 1790 ₽ | Прайс',
	description:
		'Прайс ремонта телефонов во Владимире: экран от 3490 ₽, аккумулятор от 2190 ₽, разъём от 1790 ₽. Диагностика бесплатно, гарантия 12 мес. Уточните цену по телефону.',
	keywords: [
		'прайс ремонт телефонов',
		'цены на ремонт телефонов во Владимире',
		'стоимость замены экрана iPhone',
		'цена замены аккумулятора',
		'прайс-лист сервисный центр'
	],
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: `${siteUrl}/pricing`,
		siteName: 'Крутой Сервис',
		title: 'Прайс на ремонт телефонов во Владимире',
		description:
			'Экран от 3490 ₽, аккумулятор от 2190 ₽. Бесплатная диагностика.',
		images: [
			{
				url: `${siteUrl}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: 'Прайс Крутой Сервис'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Цены на ремонт телефонов во Владимире',
		description: 'Прозрачный прайс. Диагностика бесплатно.',
		images: [`${siteUrl}/og-image.jpg`]
	},
	robots: {
		index: true,
		follow: true
	},
	alternates: {
		canonical: `${siteUrl}/pricing`
	}
}

export default function PricingPage() {
	return (
		<>
			<StructuredData page='pricing' />
			<main
				id='main-content'
				className='flex min-h-screen flex-col scroll-mt-20'
			>
				<Header />
			<section className='bg-background w-full'>
				<div className='container mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:gap-8 md:px-8 md:py-24'>
					<div className='flex flex-col gap-3 md:gap-4'>
						<h1 className='text-foreground text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl'>
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
		</>
	)
}
