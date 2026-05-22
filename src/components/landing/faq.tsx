'use client'

import { motion } from 'motion/react'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { fadeInView, useReducedMotion } from '@/lib/motion/use-reduced-motion'
import { siteFaqs } from '@/lib/seo/faqs'

export function FAQ() {
	const reducedMotion = useReducedMotion()

	return (
		<section className='bg-card w-full'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='flex flex-col gap-10 lg:flex-row lg:gap-20'>
					<motion.div
						{...fadeInView(reducedMotion)}
						className='lg:w-1/3'
					>
						<h2 className='text-foreground text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl'>
							Частые вопросы
						</h2>
						<p className='text-muted-foreground mt-4 text-base'>
							Не нашли ответ? Звоните, всё расскажем.
						</p>
					</motion.div>

					<motion.div
						{...fadeInView(reducedMotion, 0.1)}
						className='flex-1'
					>
						<Accordion type='single' collapsible className='w-full'>
							{siteFaqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className='border-border/50 border-b py-2'
								>
									<AccordionTrigger className='text-foreground py-4 text-left text-base font-medium hover:no-underline md:text-lg'>
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className='text-muted-foreground pb-4 text-sm leading-relaxed md:text-base'>
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
