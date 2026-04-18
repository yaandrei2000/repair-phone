import Image from 'next/image'
import Link from 'next/link'

const reviewsLink =
	'https://yandex.ru/maps/org/krutoy_servis/124779220273/reviews/?from=mapframe&indoorLevel=1&ll=40.384258%2C56.148629&z=17'

export function Footer() {
	return (
		<footer className='border-border bg-background w-full border-t'>
			<div className='container mx-auto flex max-w-[1440px] flex-col gap-4 px-[18px] py-8 md:gap-5 md:px-16 md:py-12'>
				{/* Верхняя часть */}
				<div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
					{/* Лого */}
					<Link href='/' className='flex items-center gap-3'>
						<Image
							src='/logo.png'
							alt='Крутой Сервис - Сервисный центр по ремонту смартфонов во Владимире'
							width={120}
							height={40}
							className='h-8 w-auto md:h-10'
						/>
						<span className='text-foreground hidden text-xl font-medium md:block md:text-2xl md:font-bold'>
							Крутой Сервис
						</span>
					</Link>

					{/* Навигация */}
					<nav className='flex flex-col gap-2 md:flex-row md:items-center md:gap-6'>
						<Link
							href='/pricing'
							className='text-muted-foreground hover:text-foreground font-sans text-sm font-medium tracking-wider transition-colors'
						>
							Прайс
						</Link>
						<a
							href={reviewsLink}
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground font-sans text-sm font-medium tracking-wider transition-colors'
						>
							Отзывы
						</a>
						<Link
							href='/#contacts'
							className='text-muted-foreground hover:text-foreground font-sans text-sm font-medium tracking-wider transition-colors'
						>
							Контакты
						</Link>
					</nav>

					{/* Соцсети */}
					<div className='flex flex-col gap-2 md:items-end'>
						<a
							href='https://t.me/krutoyservis'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors'
						>
							<Image
								src='/telegram.svg'
								alt='Telegram'
								width={24}
								height={24}
								className='h-6 w-6'
							/>
							<span className='font-sans text-sm'>Telegram</span>
						</a>
					</div>
				</div>

				{/* Копирайт */}
				<p className='text-muted-foreground border-t pt-4 font-sans text-xs md:border-t-0 md:text-[13px]'>
					© 2026 Крутой Сервис. Все права защищены.
				</p>
			</div>
		</footer>
	)
}
