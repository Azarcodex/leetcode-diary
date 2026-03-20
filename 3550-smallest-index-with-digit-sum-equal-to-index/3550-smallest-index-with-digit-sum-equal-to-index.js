/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let sum = 0
        while (num !== 0) {
            let res = num % 10
            sum += res
            num = Math.floor(num / 10)
        }
        if (sum === i) {
            return i
        }
    }
    return -1
};