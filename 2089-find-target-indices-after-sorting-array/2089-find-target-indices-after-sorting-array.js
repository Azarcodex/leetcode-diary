/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let sorted = nums.sort((a, b) => a - b), res = []

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === target) {
            res.push(i)
        }
    }
    return res
};