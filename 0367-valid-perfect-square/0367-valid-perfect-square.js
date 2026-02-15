/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let x = Math.sqrt(num)

    if (Math.floor(x) - x === 0) {
        return true
    }
    return false
};