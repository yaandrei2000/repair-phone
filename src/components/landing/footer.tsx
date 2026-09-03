'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { TrackedLink } from '@/components/analytics/tracked-link'
import { getServiceUrl, servicePages, siteConfig } from '@/lib/site-config'

const navLinks: Array<{
	href: string
	label: string
	external?: boolean
}> = [
	{ href: '/pricing/', label: 'Цены' },
	{ href: '/#services', label: 'Услуги' },
	{ href: '/#reviews', label: 'Отзывы' },
	{ href: '/#contacts', label: 'Контакты' }
]

const socialLinks = [
	{
		href: 'https://t.me/krutoyservis',
		label: 'Telegram',
		icon: 'https://thesvg.org/icons/telegram/default.svg'
	}
	// {
	// 	href: 'https://max.ru/krutoyservis',
	// 	label: 'Max',
	// 	icon: '/icons/max.svg'
	// }
]

export function Footer() {
	return (
		<footer className='border-border/50 bg-foreground w-full border-t'>
			<div className='container mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16'>
				{/* Top section */}
				<div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
					{/* Logo and description */}
					<div className='max-w-xs'>
						<Link
							href='/'
							className='group flex items-center gap-2.5'
						>
							<Image
								src='/logo.png'
								alt='Крутой Сервис'
								width={36}
								height={36}
							/>
							<span className='text-background text-lg font-medium tracking-tight'>
								Крутой Сервис
							</span>
						</Link>
						<p className='text-background/60 mt-4 text-sm leading-relaxed'>
							Профессиональный ремонт телефонов во Владимире с
							гарантией до 12 месяцев
						</p>
					</div>

					{/* Navigation */}
					<nav className='flex flex-col gap-3'>
						<p className='text-background/40 mb-2 text-xs font-medium tracking-wider uppercase'>
							Навигация
						</p>
						{navLinks.map(link =>
							link.external ? (
								<a
									key={link.href}
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='text-background/80 hover:text-background group flex items-center gap-1 text-sm transition-colors'
								>
									{link.label}
									<ArrowUpRight className='h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100' />
								</a>
							) : (
								<Link
									key={link.href}
									href={link.href}
									className='text-background/80 hover:text-background text-sm transition-colors'
								>
									{link.label}
								</Link>
							)
						)}
					</nav>

					<nav className='flex flex-col gap-3'>
						<p className='text-background/40 mb-2 text-xs font-medium tracking-wider uppercase'>
							Услуги
						</p>
						{servicePages.slice(0, 4).map(service => (
							<Link
								key={service.slug}
								href={getServiceUrl(service.slug)}
								className='text-background/80 hover:text-background text-sm'
							>
								{service.shortTitle}
							</Link>
						))}
					</nav>

					{/* Contact */}
					<div className='flex flex-col gap-3'>
						<p className='text-background/40 mb-2 text-xs font-medium tracking-wider uppercase'>
							Контакты
						</p>
						<TrackedLink
							href={siteConfig.phoneHref}
							goal='CALL_FOOTER'
							className='text-background hover:text-background/80 text-sm font-medium transition-colors'
						>
							{siteConfig.phone}
						</TrackedLink>
						<p className='text-background/60 text-sm'>
							г. Владимир, ул. Тракторная, д. 46/1
						</p>
					</div>

					{/* Social */}
					<div className='flex flex-col gap-3'>
						<p className='text-background/40 mb-2 text-xs font-medium tracking-wider uppercase'>
							Мы в соцсетях
						</p>
						{socialLinks.map(link => (
							<a
								key={link.href}
								href={link.href}
								target='_blank'
								rel='noopener noreferrer'
								className='text-background/80 hover:text-background group flex items-center gap-2 text-sm transition-colors'
							>
								<Image
									src={link.icon}
									alt={link.label}
									width={20}
									height={20}
								/>
								{link.label}
							</a>
						))}
					</div>
				</div>

				{/* Bottom section */}
				<div className='border-background/10 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row'>
					<p className='text-background/40 text-xs'>
						© 2026 Крутой Сервис. Все права защищены.
					</p>
					<p className='text-background/40 text-xs'>
						Сделано с заботой во Владимире
					</p>
				</div>
			</div>
		</footer>
	)
}
