/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let left = 0
    let total = nums.reduce((acc, val) => acc + val, 0)

    for (let i = 0; i < nums.length; i++) {
        let right = total - left - nums[i]
        if (left === right) {
            return i
        }
        left += nums[i]
    }
    return -1
};