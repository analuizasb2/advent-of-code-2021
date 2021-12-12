import { Dive, Position } from "./Dive.js";
import { stringArrayFromFile } from "../utils/FileReader.js";

const inputDive = stringArrayFromFile("../inputs/2.txt");
export const printSolutionDive = () => {
  let position: Position = Dive.calculatePositionSimple(inputDive);
  console.log("Day 2: Dive, 1st:", position.depth * position.horizontal);
  position = Dive.calculatePositionWithAim(inputDive);
  console.log("Day 2: Dive, 2nd:", position.depth * position.horizontal);
};
