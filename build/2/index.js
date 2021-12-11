import { Dive } from "./Dive.js";
import { stringArrayFromFile } from "../utils/FileReader.js";
var inputDive = stringArrayFromFile("../inputs/2.txt");
export var printSolutionDive = function () {
    var position = Dive.calculatePositionSimple(inputDive);
    console.log("Day 2: Dive, 1st", position.depth * position.horizontal);
    position = Dive.calculatePositionWithAim(inputDive);
    console.log("Day 2: Dive, 2nd", position.depth * position.horizontal);
};
