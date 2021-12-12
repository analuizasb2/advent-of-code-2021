import { BinaryDiagnostic } from "./BinaryDiagnostic";
describe("Binary Diagnostic", function () {
    var testInput = [
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
    test("Should count number of zeros per position", function () {
        var zeroCountPerPosition = BinaryDiagnostic.countZerosPerPosition(testInput);
        var expectedZeroCount = [5, 7, 4, 5, 7];
        expect(zeroCountPerPosition).toStrictEqual(expectedZeroCount);
    });
    test("Should return gama of 10110 and epsilon of 01001 fot test array", function () {
        var gammaRate = BinaryDiagnostic.calculateGamaRate(testInput);
        var epsilonRate = BinaryDiagnostic.calculateEpsilonRate(gammaRate);
        expect(gammaRate).toBe("10110");
        expect(epsilonRate).toBe("01001");
    });
    test("Should return power consumption for test array", function () {
        var gammaRateDecimal = BinaryDiagnostic.calculatePowerConsumptionDecimal(testInput);
        expect(gammaRateDecimal).toBe(198);
    });
});
