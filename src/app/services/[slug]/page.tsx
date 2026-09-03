import { Check, ChevronRight, Clock, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ContactActions } from '@/components/landing/contact-actions'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { MobileContactBar } from '@/components/landing/mobile-contact-bar'
import { ServiceStructuredData } from '@/components/seo/service-structured-data'
import {
	getServicePage,
	getServiceUrl,
	servicePages,
	siteConfig
} from '@/lib/site-config'

type ServicePageProps = {
	params: Promise<{ slug: string }>
}

export function generateStaticParams() {
	return servicePages.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({
	params
}: ServicePageProps): Promise<Metadata> {
	const { slug } = await params
	const service = getServicePage(slug)

	if (!service) {
		return {}
	}

	const canonical = getServiceUrl(service.slug)

	return {
		title: service.metaTitle,
		description: service.metaDescription,
		alternates: { canonical },
		openGraph: {
			type: 'website',
			locale: 'ru_RU',
			url: canonical,
			title: service.metaTitle,
			description: service.metaDescription,
			images: [
				{
					url: '/og-image.jpg',
					width: 1200,
					height: 630,
					alt: service.title
				}
			]
		}
	}
}

export default async function ServiceLandingPage({ params }: ServicePageProps) {
	const { slug } = await params
	const service = getServicePage(slug)

	if (!service) {
		notFound()
	}

	return (
		<>
			<ServiceStructuredData service={service} />
			<main className='flex min-h-screen flex-col pb-16 md:pb-0'>
				<Header />
				<section className='bg-background'>
					<div className='container mx-auto max-w-6xl px-5 py-6 md:px-8 md:py-8'>
						<nav className='text-muted-foreground flex flex-wrap items-center gap-2 text-sm'>
							<Link href='/' className='hover:text-foreground'>
								Главная
							</Link>
							<ChevronRight className='h-4 w-4' />
							<span>Услуги</span>
							<ChevronRight className='h-4 w-4' />
							<span className='text-foreground'>
								{service.shortTitle}
							</span>
						</nav>
					</div>
				</section>

				<section className='bg-background'>
					<div className='container mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pb-24'>
						<div>
							<p className='text-accent mb-4 text-sm font-medium'>
								Сервисный центр во Владимире
							</p>
							<h1 className='text-foreground text-4xl font-medium md:text-5xl'>
								{service.title}
							</h1>
							<p className='text-muted-foreground mt-6 max-w-xl text-base leading-relaxed md:text-lg'>
								{service.lead}
							</p>
							<div className='mt-7 flex flex-wrap gap-3'>
								<span className='bg-secondary text-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium'>
									<Clock className='h-4 w-4' />
									{service.duration}
								</span>
								<span className='bg-secondary text-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium'>
									<ShieldCheck className='h-4 w-4' />
									Гарантия до 12 месяцев
								</span>
								<span className='bg-secondary text-foreground rounded-full px-4 py-2 text-sm font-medium'>
									{service.price}
								</span>
							</div>
							<div className='mt-8'>
								<ContactActions placement='service' />
							</div>
						</div>
						<div className='bg-secondary relative aspect-square overflow-hidden rounded-3xl'>
							<Image
								src={service.image}
								alt={service.imageAlt}
								fill
								priority
								className='object-contain p-8 md:p-12'
							/>
						</div>
					</div>
				</section>

				<section className='bg-card'>
					<div className='container mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24'>
						<div>
							<h2 className='text-foreground text-3xl font-medium'>
								Когда нужна диагностика
							</h2>
							<ul className='mt-7 flex flex-col gap-4'>
								{service.symptoms.map(symptom => (
									<li
										key={symptom}
										className='flex gap-3 leading-relaxed'
									>
										<span className='bg-accent/10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
											<Check className='text-accent h-4 w-4' />
										</span>
										{symptom}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h2 className='text-foreground text-3xl font-medium'>
								Как проходит ремонт
							</h2>
							<ol className='mt-7 flex flex-col gap-5'>
								{service.workSteps.map((step, index) => (
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
					<div className='container mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24'>
						<h2 className='text-foreground text-3xl font-medium md:text-4xl'>
							Что важно знать
						</h2>
						<div className='text-muted-foreground mt-7 flex flex-col gap-5 text-base leading-7'>
							{service.details.map(paragraph => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
						<div className='bg-card border-border mt-10 rounded-2xl border p-6 md:p-8'>
							<p className='text-foreground text-lg font-medium'>
								Точную стоимость определяем после диагностики
							</p>
							<p className='text-muted-foreground mt-2 leading-relaxed'>
								Цена зависит от модели, состояния устройства и
								выбранной запчасти. До начала ремонта называем
								итоговую сумму и приступаем только после
								согласования.
							</p>
							<Link
								href='/pricing/'
								className='text-accent mt-4 inline-flex font-medium hover:underline'
							>
								Посмотреть ориентировочные цены
							</Link>
						</div>
					</div>
				</section>

				<section className='bg-card'>
					<div className='container mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24'>
						<h2 className='text-foreground text-3xl font-medium md:text-4xl'>
							Частые вопросы
						</h2>
						<div className='mt-8 flex flex-col gap-4'>
							{service.faq.map(item => (
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
					</div>
				</section>

				<section className='bg-primary text-primary-foreground'>
					<div className='container mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8'>
						<div>
							<h2 className='text-3xl font-medium'>
								Уточните цену по модели
							</h2>
							<p className='text-primary-foreground/70 mt-2'>
								Позвоните или напишите — проверим наличие детали
								и срок ремонта.
							</p>
						</div>
						<ContactActions placement='service' />
					</div>
				</section>
				<Footer />
			</main>
			<MobileContactBar />
		</>
	)
}
