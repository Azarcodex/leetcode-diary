/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let neg = 0, pos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            neg += nums[i]
        }
        else {
            pos += nums[i]
        }
    }
    if (Math.abs(neg) === pos) return 1
    return 0
};