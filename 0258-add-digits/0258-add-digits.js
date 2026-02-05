/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let sum, org = num
    if (num < 10) {
        return num
    }
    else {
        while (true) {
            sum = 0
            while (org !== 0) {
                let res = org % 10
                sum = sum + res
                org = Math.floor(org / 10)
            }
            if (sum < 10) {
                return sum
            }
            else {
                org = sum
            }
        }
    }
};