import fs from 'fs'
export const deleteFile = (filePath) => {
    fs.rmSync(filePath, { recursive: true, force: true })
}
export const loadFileData = (filePath) => {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, { encoding: 'utf8' })
    }
    return ''
}
