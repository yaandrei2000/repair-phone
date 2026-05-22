import type { Metadata } from 'next'
import { Bitter, Golos_Text } from 'next/font/google'
import { YandexMetricaProvider } from 'next-yandex-metrica'

import '@/shared/styles/globals.css'

const bitter = Bitter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-display',
	weight: ['400', '500', '600'],
	display: 'swap'
})

const golosText = Golos_Text({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-body',
	display: 'swap'
})

export const metadata: Metadata = {
	icons: {
		icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }]
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			className={`${bitter.variable} ${golosText.variable} bg-background`}
		>
			<body className='antialiased'>
				<a
					href='#main-content'
					className='bg-foreground text-background focus:ring-ring sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:px-4 focus:py-2 focus:ring-[3px] focus:outline-none'
				>
					Перейти к содержимому
				</a>
				<YandexMetricaProvider
					tagID={108331438}
					router='app'
					initParameters={{
						accurateTrackBounce: true,
						trackLinks: true,
						clickmap: true,
						webvisor: false
					}}
				>
					{children}
				</YandexMetricaProvider>
			</body>
		</html>
	)
}
