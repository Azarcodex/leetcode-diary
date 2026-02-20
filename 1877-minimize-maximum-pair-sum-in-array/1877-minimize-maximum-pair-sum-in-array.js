/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    let sorted = nums.sort((a, b) => a - b)

    let max = 0
    let length = nums.length / 2

    for (let i = 0; i < length; i++) {
        if (nums[i] + nums[nums.length - 1 - i] > max) {
            max = nums[i] + nums[nums.length - 1 - i]
        }
    }
    return max
};
