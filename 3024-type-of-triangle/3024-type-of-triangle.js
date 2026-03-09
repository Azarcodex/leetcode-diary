/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
    if ([...new Set(nums)].length === 1) return "equilateral"
    let total = nums.reduce((acc, val) => acc + val)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j]
            if (total - sum >= sum) return "none"
        }
    }
    if ([...new Set(nums)].length === 2) return "isosceles"
    return "scalene"
};