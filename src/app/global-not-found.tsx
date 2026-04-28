import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { Button } from '@/components/ui/button'

import './globals.css'

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-inter',
	display: 'swap',
	preload: true
})

export const metadata: Metadata = {
	title: '404 - Страница не найдена | Крутой Сервис',
	description:
		'Страница не найдена. Вернитесь на главную страницу сервисного центра.',
	robots: {
		index: false,
		follow: false
	}
}

export default function GlobalNotFound() {
	return (
		<html lang='ru' className={inter.variable}>
			<body className='antialiased'>
				<main className='flex min-h-screen flex-col'>
					<Header />
					<section className='bg-background flex flex-1 items-center justify-center'>
						<div className='container mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-6 px-[18px] py-16 text-center md:gap-8 md:px-16 md:py-24'>
							<div className='flex flex-col items-center gap-4 md:gap-6'>
								<h1 className='text-foreground text-[80px] leading-none font-bold md:text-[120px]'>
									404
								</h1>
								<div className='flex flex-col gap-2 md:gap-3'>
									<h2 className='text-foreground text-[24px] font-medium md:text-[32px]'>
										Страница не найдена
									</h2>
									<p className='text-muted-foreground max-w-md text-sm md:text-base'>
										К сожалению, запрашиваемая страница не
										существует или была перемещена.
									</p>
								</div>
								<Button
									variant='default'
									size='default'
									className='mt-4'
									asChild
								>
									<a href='/'>Вернуться на главную</a>
								</Button>
							</div>
						</div>
					</section>
					<Footer />
				</main>
			</body>
		</html>
	)
}
