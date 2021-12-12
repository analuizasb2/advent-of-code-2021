var BinaryDiagnostic = /** @class */ (function () {
    function BinaryDiagnostic() {
    }
    var _a;
    _a = BinaryDiagnostic;
    BinaryDiagnostic.countZerosPerPosition = function (diagnosticReportRows) {
        var rowLength = diagnosticReportRows[0].length;
        var zeroCountPerPosition = Array(rowLength).fill(0);
        diagnosticReportRows.forEach(function (row) {
            var bitArray = row.split("");
            bitArray.forEach(function (bit, index) {
                if (Number(bit) === 0) {
                    zeroCountPerPosition[index]++;
                }
            });
        });
        return zeroCountPerPosition;
    };
    BinaryDiagnostic.calculateGamaRate = function (inputReport) {
        var gammaRateString = "";
        var zeroCountArray = _a.countZerosPerPosition(inputReport);
        zeroCountArray.forEach(function (bitPositionZeroCount) {
            bitPositionZeroCount > inputReport.length / 2
                ? (gammaRateString += "0")
                : (gammaRateString += "1");
        });
        return gammaRateString;
    };
    BinaryDiagnostic.calculatePowerConsumptionDecimal = function (inputReport) {
        var gammaString = _a.calculateGamaRate(inputReport);
        var gammaDecimal = parseInt(gammaString, 2);
        var epsilonDecimal = parseInt(_a.calculateEpsilonRate(gammaString), 2);
        return gammaDecimal * epsilonDecimal;
    };
    BinaryDiagnostic.calculateEpsilonRate = function (gammaRate) {
        return gammaRate
            .split("")
            .map(function (bit) { return (bit === "0" ? "1" : "0"); })
            .join("");
    };
    return BinaryDiagnostic;
}());
export { BinaryDiagnostic };
