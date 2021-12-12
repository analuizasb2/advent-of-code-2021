import { stringArrayFromFile } from "../utils/FileReader.js";
import { BinaryDiagnostic } from "./BinaryDiagnostic.js";

const inputBinaryDiagnostic = stringArrayFromFile("../inputs/3.txt");
export const printSolutionBinaryDiagnostic = () => {
  console.log(
    "Day 3: Binary Diagnostic, 1st:",
    BinaryDiagnostic.calculatePowerConsumptionDecimal(inputBinaryDiagnostic)
  );
};
