const tailwind = require('./tailwind.config')

module.exports = ({ mode, file }) => ({
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')({
            ...tailwind,
            // Scope the editor css separately from the frontend css.
            content: file.endsWith('editor.css')
                ? ['./src/editor/*.{ts,tsx}']
                : ['./src/front/*.{ts,tsx}'],
        }),
        (css) =>
            css.walkRules((rule) => {
                // Removes top level TW styles like *::before {}
                rule.selector.startsWith('*') && rule.remove()

                // This will allow users to override something like
                // padding within the block styles
                if (file.endsWith('style.css')) {
                    // This appends the :not() exception to padding and margins
                    if (new RegExp('[:]?[^a-z]-?p[a-z]?-.+').test(rule)) {
                        rule.selector += ':not([style*="padding"])'
                    }
                    if (new RegExp('[:]?[^a-z]-?m[a-z]?-.+').test(rule)) {
                        rule.selector += ':not([style*="margin"])'
                    }
                }
            }),
        require('autoprefixer'),
        mode === 'production' ? require('cssnano') : () => {},
    ],
})
