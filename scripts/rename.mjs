import glob from 'glob'
import fs from 'fs'
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

fs.renameSync(`${__rootDir}/rust-starter.php`, `${__rootDir}/${textDomain}.php`)

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
        const options = { files: item }
        replace.sync({ from: /rust-starter/g, to: textDomain, ...options })
        replace.sync({ from: /Rust Starter/g, to: label, ...options })
    })
})

console.log('Finished.')
process.exit(0)
