import type { Metadata } from 'next'

import { ContactsSection } from '@/components/landing/contacts-section'
import { FAQ } from '@/components/landing/faq'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { HeroHighlight } from '@/components/landing/hero-highlight'
import { MobileContactBar } from '@/components/landing/mobile-contact-bar'
import { Reviews } from '@/components/landing/reviews'
import { Services } from '@/components/landing/services'
import { Trust } from '@/components/landing/trust'
import { StructuredData } from '@/components/seo/structured-data'

export const metadata: Metadata = {
	title: 'Ремонт телефонов во Владимире - Крутой Сервис',
	description:
		'Ремонт телефонов во Владимире: экран, аккумулятор, разъём и последствия воды. Цены до начала работ, гарантия до 12 месяцев.',
	keywords: [
		'ремонт смартфонов',
		'ремонт телефонов',
		'ремонт смартфонов во Владимире',
		'ремонт телефонов во Владимире',
		'замена экрана iPhone',
		'замена аккумулятора',
		'ремонт Samsung',
		'сервисный центр',
		'срочный ремонт телефонов',
		'ремонт после воды'
	],
	formatDetection: {
		telephone: false
	},
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: '/',
		siteName: 'Крутой Сервис',
		title: 'Крутой Сервис - Ремонт телефонов во Владимире',
		description:
			'Ремонт телефонов всех брендов во Владимире. Замена экрана, аккумулятора, разъемов. Гарантия 12 месяцев. Бесплатная диагностика. Срочный ремонт за 30-90 минут.',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoyservice.ru'}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: 'Крутой Сервис - Ремонт телефонов'
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
		canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoyservice.ru'}/`
	}
}

export default function Home() {
	return (
		<>
			<StructuredData />
			<main className='flex min-h-screen flex-col pb-16 md:pb-0'>
				<Header />
				<HeroHighlight />
				<Services />
				<Trust />
				<Reviews />
				<FAQ />
				<ContactsSection />
				<Footer />
			</main>
			<MobileContactBar />
		</>
	)
}
