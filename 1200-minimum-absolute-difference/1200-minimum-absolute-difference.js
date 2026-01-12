/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    let sorted = arr.sort((a, b) => a - b)
    let res = [], min = Infinity, j = 0

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i + 1] - sorted[i] <= min) {
            min = sorted[i + 1] - sorted[i]
        }
    }

    while (j < sorted.length) {
        if (sorted[j] <= sorted[j + 1] && sorted[j + 1] - sorted[j] === min) {
            res.push([sorted[j], sorted[j + 1]])
        }
        j++
    }

    return res

};