import { Inter } from 'next/font/google'

import { TooltipProvider } from '@/components/ui/tooltip'

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
			<body className='antialiased'>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	)
}
