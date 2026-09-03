import { ArrowUpRight, Star } from 'lucide-react'

import { TrackedLink } from '@/components/analytics/tracked-link'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

const reviewAdvantages = [
	'Реальные отзывы клиентов на независимой площадке',
	'Можно посмотреть свежие оценки и ответы компании',
	'Карточка содержит фотографии, часы работы и маршрут'
]

export function Reviews() {
	return (
		<section id='reviews' className='bg-background w-full scroll-mt-20'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='bg-primary text-primary-foreground grid gap-10 rounded-3xl p-7 md:grid-cols-[0.75fr_1.25fr] md:p-12'>
					<div>
						<div className='flex items-end gap-3'>
							<span className='text-6xl font-medium tracking-tight'>
								4,9
							</span>
							<div className='pb-2'>
								<div
									className='flex gap-1'
									aria-label='Рейтинг 4,9 из 5'
								>
									{Array.from({ length: 5 }).map(
										(_, index) => (
											<Star
												key={index}
												className='h-4 w-4 fill-yellow-400 text-yellow-400'
											/>
										)
									)}
								</div>
								<p className='text-primary-foreground/60 mt-1 text-sm'>
									на Яндекс Картах
								</p>
							</div>
						</div>
						<p className='text-primary-foreground/70 mt-5 leading-relaxed'>
							Не переносим отзывы вручную и не скрываем неудобные
							оценки — показываем независимую карточку компании.
						</p>
					</div>
					<div>
						<h2 className='text-3xl font-medium md:text-4xl'>
							Отзывы о «Крутом Сервисе»
						</h2>
						<ul className='text-primary-foreground/75 mt-6 flex flex-col gap-3'>
							{reviewAdvantages.map(item => (
								<li
									key={item}
									className='flex items-start gap-3'
								>
									<span className='bg-accent mt-2 h-2 w-2 shrink-0 rounded-full' />
									{item}
								</li>
							))}
						</ul>
						<Button
							asChild
							size='lg'
							className='bg-background text-foreground hover:bg-background/90 mt-8'
						>
							<TrackedLink
								href={siteConfig.reviewsUrl}
								target='_blank'
								rel='noopener noreferrer'
								goal='YANDEX_REVIEWS_OPEN'
							>
								Посмотреть отзывы
								<ArrowUpRight />
							</TrackedLink>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
