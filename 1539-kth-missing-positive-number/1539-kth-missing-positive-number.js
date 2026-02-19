/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let i = 1, res = []


    while (k !== 0) {
        if (!arr.includes(i)) {
            res.push(i)
            k--
        }
        i++
    }
    return res[res.length - 1]
};