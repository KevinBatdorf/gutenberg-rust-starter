import fs from 'fs'
export const deleteFile = (filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
    }
}
export const loadFileData = (filePath) => {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, { encoding: 'utf8' })
    }
    return ''
}
