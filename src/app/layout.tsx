import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-inter',
	display: 'swap',
	preload: true
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' className={inter.variable}>
			<body className='antialiased'>{children}</body>
		</html>
	)
}
