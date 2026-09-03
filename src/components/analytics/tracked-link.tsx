'use client'

import { useMetrica } from 'next-yandex-metrica'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	goal: string
	children: ReactNode
}

export function TrackedLink({
	goal,
	children,
	onClick,
	...props
}: TrackedLinkProps) {
	const { reachGoal } = useMetrica()

	return (
		<a
			{...props}
			onClick={event => {
				reachGoal(goal)
				onClick?.(event)
			}}
		>
			{children}
		</a>
	)
}
