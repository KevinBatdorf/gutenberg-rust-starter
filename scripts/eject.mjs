// import fs from 'fs'
// import { fileURLToPath } from 'url'
// import { dirname } from 'path'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const command = process.argv[2]
if (!command) {
    console.error('No command provided')
    console.error('Usage: npm run eject <command>')
    process.exit(1)
}
console.log(`Running command: ${command}`)

if (['tw', 'tailwind'].includes(command)) {
    // Remove all Tailwind files and config
}
