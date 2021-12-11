export class SonarSweep {
  public static calculateIncreases = (measurements: number[]): number => {
    let increases = 0;
    measurements.forEach((element, index) => {
      if (element > measurements[index - 1]) {
        increases++;
      }
    });
    return increases;
  };

  private static convertSlidingWindowArray = (
    measurements: number[]
  ): number[] => {
    let outputarray: number[] = [];
    measurements.forEach((element, index) => {
      if (index < measurements.length + 2) {
        outputarray.push(
          element + measurements[index + 1] + measurements[index + 2]
        );
      }
    });
    return outputarray;
  };

  public static calculateIncreasesWithSlidingWindow = (
    measurements: number[]
  ): number => {
    return this.calculateIncreases(
      this.convertSlidingWindowArray(measurements)
    );
  };
}
