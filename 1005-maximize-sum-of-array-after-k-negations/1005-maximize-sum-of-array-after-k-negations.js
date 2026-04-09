/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i]
            k--
        }
    }
    nums = nums.sort((a, b) => a - b)
    if (k % 2 === 1) {
        nums[0] = -nums[0]
    }
    return nums.reduce((acc, val) => acc + val, 0)
};