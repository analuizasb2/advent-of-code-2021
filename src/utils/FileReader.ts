import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const numberArrayFromFile = (fileName: string) => {
  return stringArrayFromFile(fileName).map((element) => Number(element));
};

const stringArrayFromFile = (fileName: string): string[] => {
  return readFileSync(path.join(__dirname, fileName), {
    encoding: "utf-8",
  }).split(/\r?\n/);
};

export { numberArrayFromFile, stringArrayFromFile };
