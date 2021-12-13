enum SearchCriteria {
  "fewerCommonBitsAndPrefer0",
  "moreCommonBitsAndPrefer1",
}

export enum ReportType {
  "OxygenGeneratorRating",
  "CO2ScrubberRating",
}
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

  public static calculateRatingDecimal = (
    inputReport: string[],
    typeOfReport: ReportType
  ): number => {
    let remainingReportArray: string[] = inputReport;
    const zeroCountPerPosition = this.countZerosPerPosition(inputReport);
    zeroCountPerPosition.every((positionZeroCount, position) => {
      const criteria = this.getMatchCriteria(
        typeOfReport === ReportType.OxygenGeneratorRating
          ? SearchCriteria.moreCommonBitsAndPrefer1
          : SearchCriteria.fewerCommonBitsAndPrefer0,
        remainingReportArray,
        position
      );
      remainingReportArray = remainingReportArray.filter(
        (number) => number.split("")[position] === criteria
      );
      return remainingReportArray.length !== 1;
    });
    return parseInt(remainingReportArray[0], 2);
  };

  public static calculateLifeSupportRating = (
    inputReport: string[]
  ): number => {
    const CO2Rating = BinaryDiagnostic.calculateRatingDecimal(
      inputReport,
      ReportType.CO2ScrubberRating
    );
    const oxygenRating = BinaryDiagnostic.calculateRatingDecimal(
      inputReport,
      ReportType.OxygenGeneratorRating
    );
    return CO2Rating * oxygenRating;
  };

  private static getMatchCriteria = (
    criteria: SearchCriteria,
    remainingArray: string[],
    position: number
  ): string => {
    const positionZeroCount =
      this.countZerosPerPosition(remainingArray)[position];

    switch (criteria) {
      case SearchCriteria.fewerCommonBitsAndPrefer0: {
        return positionZeroCount <= remainingArray.length / 2 ? "0" : "1";
      }
      case SearchCriteria.moreCommonBitsAndPrefer1: {
        return positionZeroCount > remainingArray.length / 2 ? "0" : "1";
      }
    }
  };
}
