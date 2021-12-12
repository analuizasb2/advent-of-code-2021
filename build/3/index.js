import { stringArrayFromFile } from "../utils/FileReader.js";
import { BinaryDiagnostic } from "./BinaryDiagnostic.js";
var inputBinaryDiagnostic = stringArrayFromFile("../inputs/3.txt");
export var printSolutionBinaryDiagnostic = function () {
    console.log("Day 3: Binary Diagnostic, 1st:", BinaryDiagnostic.calculatePowerConsumptionDecimal(inputBinaryDiagnostic));
};
