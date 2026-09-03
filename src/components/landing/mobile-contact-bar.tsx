import { MessageCircle, Phone } from 'lucide-react'

import { TrackedLink } from '@/components/analytics/tracked-link'
import { siteConfig } from '@/lib/site-config'

export function MobileContactBar() {
	return (
		<div className='border-border/70 bg-background/95 fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur md:hidden'>
			<TrackedLink
				href={siteConfig.phoneHref}
				goal='CALL_MOBILE_BAR'
				className='bg-accent text-accent-foreground flex h-11 items-center justify-center gap-2 rounded-full text-sm font-medium'
			>
				<Phone className='h-4 w-4' />
				Позвонить
			</TrackedLink>
			<TrackedLink
				href={siteConfig.telegramUrl}
				target='_blank'
				rel='noopener noreferrer'
				goal='TELEGRAM_MOBILE_BAR'
				className='bg-primary text-primary-foreground flex h-11 items-center justify-center gap-2 rounded-full text-sm font-medium'
			>
				<MessageCircle className='h-4 w-4' />
				Написать
			</TrackedLink>
		</div>
	)
}
