import { NextResponse } from 'next/server'

import { landingServices } from '@/lib/data/services'

const SITE_NAME = 'Крутой Сервис'
const CATEGORY_ID = 111
const SET_ID = 'phone-repair-vladimir'

function getBaseUrl() {
	return (process.env.NEXT_PUBLIC_SITE_URL || 'https://krutoyservice.ru')
		.replace(/\/$/, '')
		.trim()
}

function formatYmlDate(date: Date) {
	const pad = (value: number) => value.toString().padStart(2, '0')

	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
		date.getDate()
	)} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

function escapeXml(value: string | number | boolean) {
	return String(value)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;')
}

export function GET() {
	const baseUrl = getBaseUrl()

	const offers = landingServices
		.map(service => {
			const offerUrl = `${baseUrl}/?service=${service.slug}`
			const pictureUrl = `${baseUrl}${service.image}`

			return `
			<offer id="${escapeXml(service.slug)}">
				<url>${escapeXml(offerUrl)}</url>
				<name>${escapeXml(service.title)}</name>
				<picture>${escapeXml(pictureUrl)}</picture>
				<description>${escapeXml(
					`${service.title}. ${service.description} Срок ремонта: ${service.duration}. Гарантия: 12 месяцев. Бесплатная диагностика.`
				)}</description>
				<set-ids>${SET_ID}</set-ids>
				<categoryId>${CATEGORY_ID}</categoryId>
				<price>${service.priceFrom}</price>
				<currencyId>RUR</currencyId>
				<param name="Гарантия">12 месяцев</param>
				<param name="Срок ремонта">${escapeXml(service.duration)}</param>
				<param name="Бесплатная диагностика">Да</param>
			</offer>`
		})
		.join('')

	const yml = `<?xml version="1.0" encoding="utf-8"?>
<yml_catalog date="${formatYmlDate(new Date())}">
	<shop>
		<name>${escapeXml(SITE_NAME)}</name>
		<company>${escapeXml(SITE_NAME)}</company>
		<url>${escapeXml(baseUrl)}</url>
		<currencies>
			<currency id="RUR" rate="1"/>
		</currencies>
		<sets>
			<set id="${SET_ID}">
				<name>Ремонт телефонов во Владимире</name>
				<url>${escapeXml(baseUrl)}</url>
			</set>
		</sets>
		<categories>
			<category id="1">Исполнитель</category>
			<category id="12" parentId="1">Ремонт и установка техники</category>
			<category id="${CATEGORY_ID}" parentId="12">Мобильные телефоны и планшеты</category>
		</categories>
		<offers>${offers}
		</offers>
	</shop>
</yml_catalog>
`

	return new NextResponse(yml, {
		headers: {
			'Cache-Control':
				'public, max-age=3600, stale-while-revalidate=86400',
			'Content-Type': 'application/xml; charset=utf-8'
		}
	})
}
