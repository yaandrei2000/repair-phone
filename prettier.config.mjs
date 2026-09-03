/** @type {import("prettier").Config} */
const prettierConfig = {
	trailingComma: 'none',
	tabWidth: 4,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^../(.*)', '^./(.*)'],
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss'
	]
}

export default prettierConfig
