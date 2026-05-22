import {
	buildHomeSchemaGraph,
	buildPricingSchemaGraph
} from '@/lib/seo/schema'

type StructuredDataProps = {
	page?: 'home' | 'pricing'
}

export function StructuredData({ page = 'home' }: StructuredDataProps) {
	const structuredData =
		page === 'pricing' ? buildPricingSchemaGraph() : buildHomeSchemaGraph()

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData)
			}}
		/>
	)
}
