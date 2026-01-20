/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            nums[i] = Math.abs(nums[i])
        }
    }
    return nums.sort((a, b) => a - b).map(n => n * n)
};