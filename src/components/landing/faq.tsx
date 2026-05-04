'use client'

import { motion } from 'motion/react'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'

const faqs = [
	{
		question: 'Сколько длится ремонт?',
		answer: 'Большинство работ выполняем в течение 30-90 минут. Сложные случаи по плате занимают 1-3 дня.'
	},
	{
		question: 'Вы используете оригинальные запчасти?',
		answer: 'Да, по возможности ставим оригинал. Также можем предложить качественные аналоги в нескольких ценовых категориях.'
	},
	{
		question: 'Что если телефон не включается после воды?',
		answer: 'Сразу отключите устройство и не ставьте на зарядку. Привозите к нам на срочную диагностику и сушку платы.'
	},
	{
		question: 'Какая гарантия на ремонт?',
		answer: 'Даём гарантию до 12 месяцев на работы и установленные запчасти. При любых проблемах обращайтесь - всё решим.'
	}
]

export function FAQ() {
	return (
		<section className='bg-card w-full'>
			<div className='container mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<div className='flex flex-col gap-10 lg:flex-row lg:gap-20'>
					{/* Left - Title */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='lg:w-1/3'
					>
						<h2 className='text-foreground text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl'>
							Частые вопросы
						</h2>
						<p className='text-muted-foreground mt-4 text-base'>
							Не нашли ответ? Звоните, всё расскажем.
						</p>
					</motion.div>

					{/* Right - Accordion */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className='flex-1'
					>
						<Accordion type='single' collapsible className='w-full'>
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className='border-border/50 border-b py-2'
								>
									<AccordionTrigger className='text-foreground hover:no-underline py-4 text-left text-base font-medium md:text-lg'>
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
