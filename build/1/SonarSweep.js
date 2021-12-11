var SonarSweep = /** @class */ (function () {
    function SonarSweep() {
    }
    var _a;
    _a = SonarSweep;
    SonarSweep.calculateIncreases = function (measurements) {
        var increases = 0;
        measurements.forEach(function (element, index) {
            if (element > measurements[index - 1]) {
                increases++;
            }
        });
        return increases;
    };
    SonarSweep.convertSlidingWindowArray = function (measurements) {
        var outputarray = [];
        measurements.forEach(function (element, index) {
            if (index < measurements.length + 2) {
                outputarray.push(element + measurements[index + 1] + measurements[index + 2]);
            }
        });
        return outputarray;
    };
    SonarSweep.calculateIncreasesWithSlidingWindow = function (measurements) {
        return _a.calculateIncreases(_a.convertSlidingWindowArray(measurements));
    };
    return SonarSweep;
}());
export { SonarSweep };
