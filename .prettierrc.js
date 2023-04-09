module.exports = {
	trailingComma: 'all',
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	bracketSameLine: true,
	importOrder: ['^@wordpress/(.*)$', '<THIRD_PARTY_MODULES>', '^[./]'],
	overrides: [
		{
			files: ['**/*.html'],
			options: {
				singleQuote: false,
			},
		},
	],
};
