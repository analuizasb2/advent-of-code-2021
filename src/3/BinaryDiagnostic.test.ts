import { BinaryDiagnostic, ReportType } from "./BinaryDiagnostic";

describe("Binary Diagnostic", () => {
  const testInput = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
  ];
  test("Should count number of zeros per position", () => {
    const zeroCountPerPosition =
      BinaryDiagnostic.countZerosPerPosition(testInput);

    const expectedZeroCount = [5, 7, 4, 5, 7];
    expect(zeroCountPerPosition).toStrictEqual(expectedZeroCount);
  });

  test("Should return gama of 10110 and epsilon of 01001 fot test array", () => {
    const gammaRate = BinaryDiagnostic.calculateGamaRate(testInput);
    const epsilonRate = BinaryDiagnostic.calculateEpsilonRate(gammaRate);

    expect(gammaRate).toBe("10110");
    expect(epsilonRate).toBe("01001");
  });

  test("Should return power consumption for test array", () => {
    const gammaRateDecimal =
      BinaryDiagnostic.calculatePowerConsumptionDecimal(testInput);

    expect(gammaRateDecimal).toBe(198);
  });

  test("Should calculate oxygen generator rating", () => {
    const oxygenRating = BinaryDiagnostic.calculateRatingDecimal(
      testInput,
      ReportType.OxygenGeneratorRating
    );
    expect(oxygenRating).toBe(23);
  });
  test("Should calculate CO2 Scrubber rating", () => {
    const CO2Rating = BinaryDiagnostic.calculateRatingDecimal(
      testInput,
      ReportType.CO2ScrubberRating
    );
    expect(CO2Rating).toBe(10);
  });

  test("Should calculate life support rating", () => {
    const lifeSupportRating =
      BinaryDiagnostic.calculateLifeSupportRating(testInput);
    expect(lifeSupportRating).toBe(230);
  });
});
