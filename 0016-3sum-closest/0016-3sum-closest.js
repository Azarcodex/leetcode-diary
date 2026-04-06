/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let closest = Infinity, res
    nums = nums.sort((a, b) => a - b)
    // console.log(nums)
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            if (Math.abs(sum - target) < closest) {
                closest = Math.abs(sum - target)
                res = sum
            }
            if (sum > target) {
                right--
            }
            else if (sum < target) {
                left++
            }
            else {
                return sum
            }
        }
    }
    return res
};

