import type { Metadata } from 'next'

import { ContactsSection } from '@/components/landing/contacts-section'
import { FAQ } from '@/components/landing/faq'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { HeroHighlight } from '@/components/landing/hero-highlight'
import { RepairCalculator } from '@/components/landing/repair-calculator'
import { Services } from '@/components/landing/services'
import { Trust } from '@/components/landing/trust'
import { StructuredData } from '@/components/seo/structured-data'

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoyservice.ru'

export const metadata: Metadata = {
	title: 'Ремонт телефонов во Владимире — за 30–90 мин | Крутой Сервис',
	description:
		'Ремонт телефонов во Владимире: экран, батарея, вода, разъёмы. Работаем 30–90 мин, гарантия 12 месяцев, диагностика бесплатно. Рейтинг 4,9 — звоните сейчас.',
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
		url: `${siteUrl}/`,
		siteName: 'Крутой Сервис',
		title: 'Ремонт телефонов во Владимире — Крутой Сервис',
		description:
			'Экран, батарея, вода, разъёмы. 30–90 мин, гарантия 12 мес, бесплатная диагностика.',
		images: [
			{
				url: `${siteUrl}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: 'Крутой Сервис — ремонт телефонов во Владимире'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ремонт телефонов во Владимире | Крутой Сервис',
		description:
			'Срочный ремонт с гарантией 12 мес. Бесплатная диагностика.',
		images: [`${siteUrl}/og-image.jpg`]
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
		canonical: `${siteUrl}/`
	}
}

export default function Home() {
	return (
		<>
			<StructuredData />
			<main
				id='main-content'
				className='flex min-h-screen flex-col scroll-mt-20'
			>
				<Header />
				<HeroHighlight />
				<Services />
				<RepairCalculator />
				<Trust />
				<FAQ />
				<ContactsSection />
				<Footer />
			</main>
		</>
	)
}
