/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let sum = 0
    let idx = 0

    let max = Math.max(...nums)
    while (idx < k) {
        sum += max + idx
        idx++
    }
    return sum
};