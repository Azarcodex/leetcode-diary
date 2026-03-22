/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
    let org = n
    let res = 0
    while (n > 0) {
        res = res * 10 + n % 10
        n = Math.floor(n / 10)
    }
    return Math.abs(org - res)
};