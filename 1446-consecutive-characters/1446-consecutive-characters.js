/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let count = 1
    let max = 1

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++
        }
        else {
            count = 1
        }
        if (count > max) {
            max = count
        }
    }
    return max
};