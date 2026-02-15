/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let length = num.length
    let k = 0
    if (num[length - 1] % 2 !== 0) {
        return num
    }

    for (let i = length - 1; i >= 0; i--) {
        if (num[i] % 2 === 0) {
            k++
        }
        else {
            return num.slice(0, length - k)
        }
    }
    if (k === length) return ""



};