'use client'

import { useEffect, type RefObject } from 'react'

const FOCUSABLE =
	'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useFocusTrap(
	containerRef: RefObject<HTMLElement | null>,
	active: boolean
) {
	useEffect(() => {
		if (!active) return

		const container = containerRef.current
		if (!container) return

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key !== 'Tab') return

			const nodes = container.querySelectorAll<HTMLElement>(FOCUSABLE)
			if (nodes.length === 0) return

			const first = nodes[0]
			const last = nodes[nodes.length - 1]

			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault()
				last.focus()
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault()
				first.focus()
			}
		}

		document.addEventListener('keydown', onKeyDown)
		return () => document.removeEventListener('keydown', onKeyDown)
	}, [active, containerRef])
}
