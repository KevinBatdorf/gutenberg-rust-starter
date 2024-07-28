import fs from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const __rootDir = dirname(__dirname);
export const deleteFile = (filePath) => {
	fs.rmSync(filePath, { recursive: true, force: true });
};
export const loadFileData = (filePath) => {
	if (fs.existsSync(filePath)) {
		return fs.readFileSync(filePath, { encoding: "utf8" });
	}
	return "";
};
