import { MessageCircle, Phone, Tags } from 'lucide-react'

import { TrackedLink } from '@/components/analytics/tracked-link'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

type ContactActionsProps = {
	placement: 'hero' | 'pricing' | 'service'
	showPricing?: boolean
}

export function ContactActions({
	placement,
	showPricing = false
}: ContactActionsProps) {
	const goalSuffix = placement.toUpperCase()

	return (
		<div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
			<Button asChild size='lg' className='bg-accent hover:bg-accent/90'>
				<TrackedLink
					href={siteConfig.phoneHref}
					goal={`CALL_${goalSuffix}`}
				>
					<Phone />
					Позвонить
				</TrackedLink>
			</Button>
			<Button asChild size='lg' variant='outline'>
				<TrackedLink
					href={siteConfig.telegramUrl}
					target='_blank'
					rel='noopener noreferrer'
					goal={`TELEGRAM_${goalSuffix}`}
				>
					<MessageCircle />
					Написать в Telegram
				</TrackedLink>
			</Button>
			{showPricing && (
				<Button asChild size='lg' variant='secondary'>
					<TrackedLink
						href='/pricing/'
						goal={`PRICING_${goalSuffix}`}
					>
						<Tags />
						Узнать стоимость
					</TrackedLink>
				</Button>
			)}
		</div>
	)
}
