/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let res = new Set()


    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            res.add(nums[i])
        }
    }

    return [...res]
};