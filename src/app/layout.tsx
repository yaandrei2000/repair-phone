import { YandexMetricaProvider } from 'next-yandex-metrica'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-inter',
	display: 'swap',
	preload: true
})

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.ico',
	},
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' className={inter.variable}>
			<body className='antialiased'>
				<YandexMetricaProvider
					tagID={108331438}
					router='app'
					initParameters={{
						accurateTrackBounce: true,
						trackLinks: true,
						clickmap: true,
						webvisor: true
					}}
				>
					{children}
				</YandexMetricaProvider>
			</body>
		</html>
	)
}
