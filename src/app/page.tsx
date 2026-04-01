import type { Metadata } from 'next'

import { ContactsSection } from '@/components/landing/contacts-section'
import { FAQ } from '@/components/landing/faq'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { HeroHighlight } from '@/components/landing/hero-highlight'
import { Services } from '@/components/landing/services'
import { Trust } from '@/components/landing/trust'
import { StructuredData } from '@/components/seo/structured-data'

export const metadata: Metadata = {
	title: 'Ремонт смартфонов во Владимире - Крутой Сервис',
	description:
		'Профессиональный ремонт смартфонов всех брендов во Владимире. Замена экрана, аккумулятора, разъемов за 30-90 минут. Гарантия 12 месяцев. Бесплатная диагностика. Рейтинг 4.9/5. ул. Тракторная, д. 46/1',
	keywords: [
		'ремонт смартфонов Владимир',
		'ремонт телефонов Владимир',
		'замена экрана iPhone Владимир',
		'замена аккумулятора Владимир',
		'ремонт Samsung Владимир',
		'сервисный центр Владимир',
		'срочный ремонт телефонов Владимир',
		'ремонт после воды Владимир'
	],
	formatDetection: {
		telephone: false
	},
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: '/',
		siteName: 'Крутой Сервис',
		title: 'Крутой Сервис - Ремонт смартфонов во Владимире',
		description:
			'Ремонт смартфонов всех брендов во Владимире. Замена экрана, аккумулятора, разъемов. Гарантия 12 месяцев. Бесплатная диагностика. Срочный ремонт за 30-90 минут.',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoiservis.ru'}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: 'Крутой Сервис - Ремонт смартфонов'
			}
		]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoiservis.ru'}/`
	}
	// verification: {
	//   yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
	//   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
	// },
}

export default function Home() {
	return (
		<>
			<StructuredData />
			<main className='flex min-h-screen flex-col'>
				<Header />
				<HeroHighlight />
				<Services />
				<Trust />
				<FAQ />
				<ContactsSection />
				<Footer />
			</main>
		</>
	)
}
