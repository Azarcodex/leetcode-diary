/**
 * @param {string} s
 * @return {number}
 */

var secondHighest = function (s) {
    let first = -Infinity, second = -Infinity

    for (let i of s) {
        if (i >= 0) {
            if (i > first) {
                second = first
                first = i
                console.log(first, second)
            }
            else if (i < first && i > second) {
                second = i
                console.log(second)
            }
        }
    }
    if (second === -Infinity) return -1
    return Number(second)
};