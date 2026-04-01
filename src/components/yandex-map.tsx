'use client'

interface YandexMapProps {
	zoom?: number
	organizationId?: string
}

export function YandexMapOrganization({
	zoom = 17,
	organizationId = '124779220273'
}: YandexMapProps) {
	// Используем виджет организации Яндекс.Карт
	const mapUrl = `https://yandex.ru/map-widget/v1/?from=mapframe&indoorLevel=1&mode=search&oid=${organizationId}&ol=biz&z=${zoom}`

	return (
		<div className='border-border h-[400px] w-full overflow-hidden rounded-xl border md:h-[500px]'>
			<iframe
				src={mapUrl}
				width='100%'
				height='100%'
				frameBorder='0'
				allowFullScreen
				style={{ border: 0 }}
				title='Карта расположения Крутой Сервис'
			/>
		</div>
	)
}
