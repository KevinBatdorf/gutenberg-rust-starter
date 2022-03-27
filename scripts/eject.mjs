import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { deleteFile, loadFileData } from './utils.mjs'

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
    deleteFile('./tailwind.config.js')
    deleteFile('./postcss.config.js')
    const editorCss = `${__rootDir}/src/editor/editor.css`
    const editorData = loadFileData(editorCss).replace(
        /(@tailwind|--tw).*\n/g,
        '',
    )
    fs.writeFileSync(editorCss, editorData)
    const frontCss = `${__rootDir}/src/front/style.css`
    const frontData = loadFileData(frontCss).replace(
        /(\/\* --tw-ring|@tailwind|--tw).*\n/g,
        '',
    )
    fs.writeFileSync(frontCss, frontData)
    console.log('Removed Tailwind files.')
    process.exit(0)
}

if (['rust', 'r'].includes(command)) {
    deleteFile(`${__rootDir}/Cargo.toml`)
    deleteFile(`${__rootDir}/Cargo.lock`)
    deleteFile(`${__rootDir}/webpack.config.js`)
    deleteFile(`${__rootDir}/server`)
    console.log('Removed Rust files.')
    process.exit(0)
}
