import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
console.log(__dirname);
var numberArrayFromFile = function (fileName) {
    return stringArrayFromFile(fileName).map(function (element) { return Number(element); });
};
var stringArrayFromFile = function (fileName) {
    return readFileSync(path.join(__dirname, fileName), {
        encoding: "utf-8",
    }).split(/\r?\n/);
};
export { numberArrayFromFile, stringArrayFromFile };
