import glob from 'glob'
import replace from 'replace-in-file'
import { __rootDir } from './utils.mjs'

const textDomain = process.argv[2]
const label = process.argv[3] ?? textDomain
if (!textDomain) {
    console.error('No name provided')
    console.error('Usage: npm run replace <text-domain> <label>')
    process.exit(1)
}
console.log(`Renaming to: ${textDomain} (${label})`)

const ignore = [
    `${__rootDir}/node_modules/**/*`,
    `${__rootDir}/scripts/**/*`,
    `${__rootDir}/build/**/*`,
    `${__rootDir}/target/**/*`,
    `${__rootDir}/pkg/**/*`,
]
glob(`${__rootDir}/**/*.*`, { ignore }, (err, files) => {
    if (err) throw err

    files.forEach((item) => {
        replace.sync({ from: 'rust-starter', to: textDomain, files: item })
        replace.sync({ from: 'Rust Starter', to: label, files: item })
    })
    console.log('Finished.')
})
