/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    if (n > 10) {
        return [2, n - 2]
    }
    else {
        return [1, n - 1]
    }
};