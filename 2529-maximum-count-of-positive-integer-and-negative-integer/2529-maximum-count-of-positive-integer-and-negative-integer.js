/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let count1 = 0, count2 = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (nums[i] < 0) {
                count1++
            }
            else {
                count2++
            }
        }
    }
    let max = Math.max(count1, count2)
    return max
};