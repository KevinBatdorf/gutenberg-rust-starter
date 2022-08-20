import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const __rootDir = dirname(__dirname);
export const deleteFile = (filePath) => {
    fs.rmSync(filePath, { recursive: true, force: true });
};
export const loadFileData = (filePath) => {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, { encoding: 'utf8' });
    }
    return '';
};
