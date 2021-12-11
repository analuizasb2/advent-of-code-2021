import { SonarSweep } from "./SonarSweep.js";
import { numberArrayFromFile } from "../utils/FileReader.js";

const inputSonarSweep = numberArrayFromFile("../inputs/1.txt");
export const printSolutionSonarSweep = () => {
  console.log(
    "Day 1: Sonar Sweep, 1st",
    SonarSweep.calculateIncreases(inputSonarSweep)
  );
  console.log(
    "Day 1: Sonar Sweep, 2nd",
    SonarSweep.calculateIncreasesWithSlidingWindow(inputSonarSweep)
  );
};
