'use client'

import { Menu, Phone, X } from 'lucide-react'
import { useMetrica } from 'next-yandex-metrica'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { useFocusTrap } from '@/lib/a11y/use-focus-trap'

const reviewsLink =
	'https://yandex.ru/maps/org/krutoy_servis/124779220273/reviews/?from=mapframe&indoorLevel=1&ll=40.384258%2C56.148629&z=17'

const navLinks = [
	{ href: '/pricing', label: 'Цены' },
	{ href: reviewsLink, label: 'Отзывы', external: true },
	{ href: '/#contacts', label: 'Контакты' }
]

export function Header() {
	const { reachGoal } = useMetrica()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const menuId = useId()
	const menuButtonRef = useRef<HTMLButtonElement>(null)
	const menuPanelRef = useRef<HTMLDivElement>(null)

	useFocusTrap(menuPanelRef, mobileMenuOpen)

	useEffect(() => {
		if (!mobileMenuOpen) return

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setMobileMenuOpen(false)
				menuButtonRef.current?.focus()
			}
		}

		document.addEventListener('keydown', onKeyDown)
		menuPanelRef.current?.querySelector<HTMLElement>('a, button')?.focus()

		return () => document.removeEventListener('keydown', onKeyDown)
	}, [mobileMenuOpen])

	return (
		<header className='border-border/50 bg-background sticky top-0 z-50 w-full border-b'>
			<div className='container mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8'>
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

				<nav
					className='hidden items-center gap-8 md:flex'
					aria-label='Основная навигация'
				>
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

				<div className='flex items-center gap-3'>
					<Button
						asChild
						variant='default'
						size='sm'
						className='hidden gap-2 rounded-full px-5 sm:inline-flex'
					>
						<a
							href='tel:+79066150006'
							onClick={() => reachGoal('CALL_CLICK')}
						>
							<Phone className='h-4 w-4' />
							<span>+7 906 615-00-06</span>
						</a>
					</Button>

					<Button
						asChild
						variant='default'
						size='icon'
						className='h-11 w-11 rounded-full sm:hidden'
					>
						<a
							href='tel:+79066150006'
							onClick={() => reachGoal('CALL_CLICK')}
							aria-label='Позвонить +7 906 615-00-06'
						>
							<Phone className='h-4 w-4' />
						</a>
					</Button>

					<button
						ref={menuButtonRef}
						type='button'
						onClick={() => setMobileMenuOpen(open => !open)}
						className='text-foreground flex h-11 w-11 items-center justify-center rounded-full md:hidden'
						aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
						aria-expanded={mobileMenuOpen}
						aria-controls={menuId}
					>
						{mobileMenuOpen ? (
							<X className='h-5 w-5' aria-hidden />
						) : (
							<Menu className='h-5 w-5' aria-hidden />
						)}
					</button>
				</div>
			</div>

			{mobileMenuOpen && (
				<div
					ref={menuPanelRef}
					role='dialog'
					aria-modal='true'
					aria-label='Мобильное меню'
					className='bg-background border-border/50 border-t md:hidden'
				>
					<nav
						id={menuId}
						className='container mx-auto flex flex-col gap-1 px-5 py-4'
						aria-label='Мобильная навигация'
					>
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
