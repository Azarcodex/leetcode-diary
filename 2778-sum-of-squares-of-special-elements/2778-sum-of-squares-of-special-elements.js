/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    let sumOfSquares = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums.length % (i + 1) === 0) {
            sumOfSquares += nums[i] * nums[i]
        }
    }
    return sumOfSquares
};


