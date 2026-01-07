/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let target = 0, remaining, res = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] !== Infinity) {
                if (nums[i] === nums[j]) {
                    target++
                    nums[i] = Infinity
                    nums[j] = Infinity
                }
            }
        }
    }
    remaining = nums.filter(s => s !== Infinity).length
    res[0] = target
    res[1] = remaining
    return res
};