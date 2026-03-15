/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let count = 0
    nums = nums.sort((a, b) => a - b)
    console.log(nums)
    let i = 0, j = nums.length - 1
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    if (max - min === 1) return nums.length
    if (min === max) return 0


};

// 1 2 3

// 1 2 3 4 


