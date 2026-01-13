/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function (nums, k) {
    let sorted = nums.sort((a, b) => a - b)
    let sum1 = 0, sum2 = 0, j = 0

    while (j < k) {
        sum1 += sorted[j]
        sum2 += sorted[sorted.length - 1 - j]
        j++
    }
    return Math.abs(sum1 - sum2)
};