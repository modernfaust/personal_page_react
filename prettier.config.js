module.exports = {
	plugins: [
		require('@trivago/prettier-plugin-sort-imports'),
		require('prettier-plugin-tailwindcss'),
	],
	arrowParens: 'always',
	bracketSpacing: true,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: 'preserve',
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	tailwindConfig: './tailwind.config.js',
	useTabs: true,
	importOrder: [
		'^[./]',
		'^@components/(.*)$',
		'^@hooks/(.*)$',
		'^@lib/(.*)$',
		'^@mockdata/(.*)$',
		'^@schemas/(.*)$',
		'^@styles/(.*)$',
		'^@types/(.*)$',
		'<THIRD_PARTY_MODULES>',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};