'use client'

import { Clock, MapPin, Phone } from 'lucide-react'

import { YandexMapOrganization } from '@/components/yandex-map'

const contactInfo = [
	{
		icon: MapPin,
		label: 'Адресс:',
		content: 'г. Владимир, ул. Тракторная, д. 46/1',
		description: 'Вход со стороны пешеходного перехода, -1 этаж'
	},
	{
		icon: Phone,
		label: 'Телефон:',
		content: '+7 (906) 615-00-06'
	},
	{
		icon: Clock,
		label: 'Время работы:',
		content: ['Пн-Пт: 10:00-19:00', 'Сб-Вс: 12:00-16:00']
	}
]

export function ContactsSection() {
	const organizationId = '124779220273'

	return (
		<section id='contacts' className='bg-background w-full'>
			<div className='container mx-auto flex max-w-[1440px] flex-col gap-6 px-[18px] py-7 md:flex-row md:gap-12 md:px-16 md:py-14'>
				{/* Left side - Contact information */}
				<div className='flex flex-1 flex-col gap-6'>
					<h2 className='text-foreground text-[30px] font-normal md:text-[44px]'>
						Контакты
					</h2>

					<div className='flex flex-col gap-5'>
						{contactInfo.map((info, index) => {
							const Icon = info.icon
							return (
								<div
									key={index}
									className='flex flex-col gap-1'
								>
									<div className='flex items-center gap-2'>
										<Icon className='text-foreground h-5 w-5 md:h-6 md:w-6' />
										<span className='text-muted-foreground font-sans text-sm md:text-base'>
											{info.label}
										</span>
									</div>
									{Array.isArray(info.content) ? (
										<div className='flex flex-col gap-0.5'>
											{info.content.map(
												(line, lineIndex) => (
													<p
														key={lineIndex}
														className='text-foreground font-sans text-base font-medium md:text-lg'
													>
														{line}
													</p>
												)
											)}
										</div>
									) : (
										<p className='text-foreground font-sans text-base font-medium md:text-lg'>
											{info.content}
										</p>
									)}
									{info.description && (
										<p className='text-muted-foreground font-sans text-sm md:text-base'>
											{info.description}
										</p>
									)}
								</div>
							)
						})}
					</div>
				</div>

				{/* Right side - Map */}
				<div className='flex flex-1 flex-col'>
					<YandexMapOrganization
						zoom={17}
						organizationId={organizationId}
					/>
				</div>
			</div>
		</section>
	)
}
