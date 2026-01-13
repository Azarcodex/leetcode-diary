/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let k1 = 0, k2 = 0, res = [], i = 0
    let x = Math.floor(n / 2)
    while (i < n) {
        if (i < x) {
            res[i] = -n + k1
            k1++
        }
        else if (i === x && n % 2 !== 0) {
            res[i] = 0
        }
        else {
            res[i] = n - k2
            k2++
        }
        i++
    }
    return res
};




