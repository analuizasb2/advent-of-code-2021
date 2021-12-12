export class BinaryDiagnostic {
  public static countZerosPerPosition = (
    diagnosticReportRows: string[]
  ): number[] => {
    const rowLength = diagnosticReportRows[0].length;
    let zeroCountPerPosition: number[] = Array(rowLength).fill(0);
    diagnosticReportRows.forEach((row) => {
      const bitArray = row.split("");
      bitArray.forEach((bit, index) => {
        if (Number(bit) === 0) {
          zeroCountPerPosition[index]++;
        }
      });
    });
    return zeroCountPerPosition;
  };

  public static calculateGamaRate = (inputReport: string[]): string => {
    let gammaRateString = "";
    const zeroCountArray = this.countZerosPerPosition(inputReport);
    zeroCountArray.forEach((bitPositionZeroCount) => {
      bitPositionZeroCount > inputReport.length / 2
        ? (gammaRateString += "0")
        : (gammaRateString += "1");
    });
    return gammaRateString;
  };

  public static calculatePowerConsumptionDecimal = (
    inputReport: string[]
  ): number => {
    const gammaString = this.calculateGamaRate(inputReport);
    const gammaDecimal = parseInt(gammaString, 2);
    const epsilonDecimal = parseInt(this.calculateEpsilonRate(gammaString), 2);
    return gammaDecimal * epsilonDecimal;
  };

  public static calculateEpsilonRate = (gammaRate: string): string => {
    return gammaRate
      .split("")
      .map((bit) => (bit === "0" ? "1" : "0"))
      .join("");
  };
}
