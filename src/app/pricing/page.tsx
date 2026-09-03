import type { Metadata } from 'next'
import Link from 'next/link'

import { ContactActions } from '@/components/landing/contact-actions'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { MobileContactBar } from '@/components/landing/mobile-contact-bar'
import { PricingTable } from '@/components/pricing/pricing-table'
import { PricingStructuredData } from '@/components/seo/pricing-structured-data'
import { getServiceUrl, servicePages } from '@/lib/site-config'

export const metadata: Metadata = {
	title: 'Прайс-лист - Цены на ремонт телефонов во Владимире',
	description:
		'Цены на ремонт телефонов во Владимире: экран от 3 490 ₽, аккумулятор от 1 990 ₽, разъём от 1 490 ₽. Стоимость согласуем заранее.',
	keywords: [
		'прайс ремонт телефонов',
		'цены на ремонт телефонов во Владимире',
		'стоимость замены экрана iPhone',
		'цена замены аккумулятора',
		'прайс-лист сервисный центр'
	],
	openGraph: {
		title: 'Прайс-лист - Цены на ремонт телефонов во Владимире',
		description:
			'Прозрачные цены на ремонт телефонов. Замена экрана от 3490₽, аккумулятора от 2190₽. Бесплатная диагностика.',
		url: '/pricing/',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Цены на ремонт телефонов в Крутом Сервисе'
			}
		]
	},
	alternates: {
		canonical: '/pricing/'
	}
}

export default function PricingPage() {
	return (
		<>
			<PricingStructuredData />
			<main className='flex min-h-screen flex-col pb-16 md:pb-0'>
				<Header />
				<section className='bg-background w-full'>
					<div className='container mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:px-8 md:py-20'>
						<div className='flex max-w-3xl flex-col gap-4'>
							<p className='text-accent text-sm font-medium'>
								Понятная стоимость до начала работ
							</p>
							<h1 className='text-foreground text-[36px] font-normal md:text-[52px]'>
								Цены на ремонт телефонов во Владимире
							</h1>
							<p className='text-muted-foreground text-base leading-relaxed md:text-lg'>
								В таблице указаны ориентировочные цены вместе с
								работой. Точная сумма зависит от модели,
								состояния устройства и выбранной запчасти. Перед
								ремонтом проводим диагностику и согласуем
								итоговую стоимость.
							</p>
							<div className='mt-2'>
								<ContactActions placement='pricing' />
							</div>
						</div>

						<PricingTable />
					</div>
				</section>

				<section className='bg-card'>
					<div className='container mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24'>
						<div>
							<h2 className='text-foreground text-3xl font-medium'>
								Из чего складывается цена
							</h2>
							<div className='text-muted-foreground mt-6 flex flex-col gap-4 leading-relaxed'>
								<p>
									Даже у телефонов одного бренда отличаются
									конструкция, тип дисплея и способ крепления
									деталей. Поэтому точная стоимость зависит от
									модели и характера повреждения.
								</p>
								<p>
									Для ряда ремонтов можно выбрать оригинальную
									деталь либо качественный совместимый
									вариант. Объясним различия по цене и
									характеристикам до начала работы.
								</p>
								<p>
									Если при диагностике обнаружится
									дополнительная неисправность, сначала
									сообщим об этом. Никакие работы, которые
									меняют согласованную сумму, не выполняются
									без подтверждения клиента.
								</p>
							</div>
						</div>
						<div>
							<h2 className='text-foreground text-3xl font-medium'>
								Как узнать точную стоимость
							</h2>
							<ol className='mt-6 flex flex-col gap-5'>
								{[
									'Сообщите точную модель телефона и опишите неисправность.',
									'Мы проверим наличие подходящей детали и назовём предварительный диапазон.',
									'После диагностики согласуем окончательную цену и срок.',
									'Приступим к ремонту только после вашего подтверждения.'
								].map((step, index) => (
									<li
										key={step}
										className='flex gap-4 leading-relaxed'
									>
										<span className='bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium'>
											{index + 1}
										</span>
										<span className='pt-1'>{step}</span>
									</li>
								))}
							</ol>
						</div>
					</div>
				</section>

				<section className='bg-background'>
					<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
						<h2 className='text-foreground text-3xl font-medium md:text-4xl'>
							Подробнее об услугах
						</h2>
						<p className='text-muted-foreground mt-3 max-w-2xl leading-relaxed'>
							На отдельных страницах собрали признаки
							неисправности, этапы диагностики, сроки и ответы на
							частые вопросы.
						</p>
						<div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
							{servicePages.map(service => (
								<Link
									key={service.slug}
									href={getServiceUrl(service.slug)}
									className='bg-card border-border hover:border-foreground/30 rounded-2xl border p-5 hover:shadow-sm'
								>
									<h3 className='text-foreground text-lg font-medium'>
										{service.shortTitle}
									</h3>
									<p className='text-muted-foreground mt-2 text-sm'>
										{service.price} · {service.duration}
									</p>
								</Link>
							))}
						</div>
					</div>
				</section>

				<section className='bg-card'>
					<div className='container mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24'>
						<h2 className='text-foreground text-3xl font-medium md:text-4xl'>
							Частые вопросы о стоимости
						</h2>
						<div className='mt-8 flex flex-col gap-4'>
							{[
								{
									question: 'Цена в таблице окончательная?',
									answer: 'Это ориентир для распространённых моделей. Точную сумму называем после определения модели, состояния телефона и варианта запчасти.'
								},
								{
									question: 'Вы начинаете ремонт сразу?',
									answer: 'Нет, сначала согласуем итоговую стоимость и срок. Без подтверждения клиента дополнительные работы не выполняются.'
								},
								{
									question:
										'Как быстрее узнать цену для моей модели?',
									answer: 'Напишите модель и симптомы в Telegram либо позвоните. Мы проверим наличие детали и назовём предварительную стоимость.'
								}
							].map(item => (
								<div
									key={item.question}
									className='bg-background border-border rounded-2xl border p-6'
								>
									<h3 className='text-foreground text-lg font-medium'>
										{item.question}
									</h3>
									<p className='text-muted-foreground mt-3 leading-relaxed'>
										{item.answer}
									</p>
								</div>
							))}
						</div>
						<div className='mt-10'>
							<ContactActions placement='pricing' />
						</div>
					</div>
				</section>
				<Footer />
			</main>
			<MobileContactBar />
		</>
	)
}
