import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __rootDir = dirname(__dirname)

const command = process.argv[2]
if (!command) {
    console.error('No command provided')
    console.error('Usage: npm run eject <command>')
    process.exit(1)
}
console.log(`Running command: ${command}`)

if (['tw', 'tailwind'].includes(command)) {
    fs.unlinkSync('./tailwind.config.js')
    fs.unlinkSync('./postcss.config.js')
    const editorData = fs
        .readFileSync(`${__rootDir}/src/editor/editor.css`, {
            encoding: 'utf8',
        })
        .replace(/(@tailwind|--tw).*\n/g, '')
    fs.writeFileSync(`${__rootDir}/src/editor/editor.css`, editorData)
    const frontData = fs
        .readFileSync(`${__rootDir}/src/front/style.css`, { encoding: 'utf8' })
        .replace(/(@tailwind|--tw).*\n/g, '')
    fs.writeFileSync(`${__rootDir}/src/front/style.css`, frontData)
    console.log(
        'Removed Tailwind files and config. Make sure to update your stylesheets accordingly.',
    )
    process.exit(0)
}
