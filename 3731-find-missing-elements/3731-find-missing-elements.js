/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let res = []
    nums = nums.map(n => String(n))
    // console.log(nums)
    for (let i = min; i <= max; i++) {
        if (!nums.includes(String(i))) {
            res.push(i)
        }
    }
    return res
};