module.exports = {
    trailingComma: 'all',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    bracketSameLine: true,
    overrides: [
        {
            files: ['**/*.html'],
            options: {
                singleQuote: false,
            },
        },
    ],
}
