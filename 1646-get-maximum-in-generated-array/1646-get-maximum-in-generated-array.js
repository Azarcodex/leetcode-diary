/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    let i = 2, nums = [], odd_mark = 1
    nums[0] = 0
    nums[1] = 1
    if(n === 0){
        return 0
    }
    while (i < n + 1) {
        if (i % 2 === 0) {
            nums[i] = nums[i / 2]
        }
        else {
            odd_mark++
            nums[i] = nums[i - odd_mark] + nums[i - odd_mark + 1]
        }
        i++
    }

    return Math.max(...nums)



};