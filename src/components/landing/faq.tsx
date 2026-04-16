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
	}
]

export function FAQ() {
	return (
		<section className='bg-background w-full'>
			<div className='container mx-auto flex max-w-[1440px] flex-col gap-2.5 px-[18px] pt-7 pb-[42px] md:gap-4.5 md:px-16 md:pt-11 md:pb-22'>
				<h2 className='text-foreground text-[30px] font-normal md:text-[44px]'>
					Частые вопросы
				</h2>
				<Accordion type='multiple' className='w-full'>
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className='border-border border-b'
						>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}
