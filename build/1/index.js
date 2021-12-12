import { SonarSweep } from "./SonarSweep.js";
import { numberArrayFromFile } from "../utils/FileReader.js";
var inputSonarSweep = numberArrayFromFile("../inputs/1.txt");
export var printSolutionSonarSweep = function () {
    console.log("Day 1: Sonar Sweep, 1st:", SonarSweep.calculateIncreases(inputSonarSweep));
    console.log("Day 1: Sonar Sweep, 2nd:", SonarSweep.calculateIncreasesWithSlidingWindow(inputSonarSweep));
};
