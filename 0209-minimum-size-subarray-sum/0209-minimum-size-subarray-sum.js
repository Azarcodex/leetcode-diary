/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let l = 0
    let total = 0, maxIdx = Infinity
    for (let r = 0; r < nums.length; r++) {
        total += nums[r]
        while (total >= target) {
            maxIdx = Math.min(maxIdx, (r - l) + 1)
            total -= nums[l]
            l++
        }
    }
    return maxIdx === Infinity ? 0 : maxIdx
};