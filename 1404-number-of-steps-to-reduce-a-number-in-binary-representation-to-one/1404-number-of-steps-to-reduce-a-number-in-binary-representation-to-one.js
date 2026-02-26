/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
let num = BigInt("0b" + s);

    let count = 0

    while (num !== 1) {
        if (num % 2 !== 0) {
            num++
            count++
        }
        else {
            num = num / 2
            count++
        }
    }
    return count
};