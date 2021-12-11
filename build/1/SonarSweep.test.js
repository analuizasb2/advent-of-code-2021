import { SonarSweep } from "./SonarSweep";
describe("Sonar Sweep", function () {
    var testArrayMeasurements = [
        199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
    ];
    test("Should return 7 increases when from test array", function () {
        var increases = SonarSweep.calculateIncreases(testArrayMeasurements);
        expect(increases).toBe(7);
    });
    // test("Should convert to sliding window array and return 5 increases", () => {
    //   const increases = SonarSweep.calculateIncreasesWithSlidingWindow(
    //     testArrayMeasurements
    //   );
    //   expect(increases).toBe(5);
    // });
});
