/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0, max = -Infinity
    for (let i of nums) {
        count = (i !== 0) ? count + 1 : 0;
        if (count > max) {
            max = count
        }
    }
    return max

};