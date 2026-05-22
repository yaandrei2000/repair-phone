'use client'

import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
	const [reduced, setReduced] = useState(false)

	useEffect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
		const update = () => setReduced(mq.matches)
		update()
		mq.addEventListener('change', update)
		return () => mq.removeEventListener('change', update)
	}, [])

	return reduced
}

export function fadeInView(reduced: boolean, delay = 0) {
	if (reduced) {
		return {}
	}
	return {
		initial: { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.5, delay }
	}
}
