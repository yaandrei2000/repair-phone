'use client'

import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { TrackedLink } from '@/components/analytics/tracked-link'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

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

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className='border-border/50 bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur-md'>
			<div className='container mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8'>
				{/* Logo */}
				<Link href='/' className='group flex items-center gap-2.5'>
					<Image
						src='/logo.png'
						alt='Крутой Сервис'
						width={36}
						height={36}
						className='h-8 w-auto transition-transform group-hover:scale-105 md:h-9'
						priority
					/>
					<span className='text-foreground text-lg font-medium tracking-tight md:text-xl'>
						Крутой Сервис
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden items-center gap-8 md:flex'>
					{navLinks.map(link =>
						link.external ? (
							<a
								key={link.href}
								href={link.href}
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-foreground text-sm font-medium transition-colors'
							>
								{link.label}
							</a>
						) : (
							<Link
								key={link.href}
								href={link.href}
								className='text-muted-foreground hover:text-foreground text-sm font-medium transition-colors'
							>
								{link.label}
							</Link>
						)
					)}
				</nav>

				{/* Actions */}
				<div className='flex items-center gap-3'>
					<Button
						asChild
						variant='default'
						size='sm'
						className='hidden gap-2 rounded-full px-5 sm:inline-flex'
					>
						<TrackedLink
							href={siteConfig.phoneHref}
							goal='CALL_HEADER'
						>
							<Phone className='h-4 w-4' />
							<span>{siteConfig.phone}</span>
						</TrackedLink>
					</Button>

					{/* Mobile call button */}
					<Button
						asChild
						variant='default'
						size='icon'
						className='h-9 w-9 rounded-full sm:hidden'
					>
						<TrackedLink
							href={siteConfig.phoneHref}
							goal='CALL_HEADER_MOBILE'
						>
							<Phone className='h-4 w-4' />
						</TrackedLink>
					</Button>

					{/* Mobile menu toggle */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className='text-foreground p-2 md:hidden'
						aria-label='Меню'
					>
						{mobileMenuOpen ? (
							<X className='h-5 w-5' />
						) : (
							<Menu className='h-5 w-5' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className='bg-background border-border/50 border-t md:hidden'>
					<nav className='container mx-auto flex flex-col gap-1 px-5 py-4'>
						{navLinks.map(link =>
							link.external ? (
								<a
									key={link.href}
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='text-foreground hover:bg-secondary rounded-lg px-4 py-3 text-base font-medium transition-colors'
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.label}
								</a>
							) : (
								<Link
									key={link.href}
									href={link.href}
									className='text-foreground hover:bg-secondary rounded-lg px-4 py-3 text-base font-medium transition-colors'
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							)
						)}
					</nav>
				</div>
			)}
		</header>
	)
}
