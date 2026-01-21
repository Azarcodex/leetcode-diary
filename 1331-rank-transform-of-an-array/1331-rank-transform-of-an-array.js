/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let obj = {}

    let sorted = [...arr].sort((a, b) => a - b)
    let rank = 1

    for (let i of sorted) {
        if (obj[i] === undefined) {
            obj[i] = rank++
        }
    }
    return arr.map(num => obj[num])
};