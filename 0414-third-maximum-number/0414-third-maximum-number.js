/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let len = nums.length - 1
    let swap
    //descending
    for (let i = 0; i < len; i++) {
        swap = false
        for (let j = 0; j < len - i; j++) {
            if (nums[j] < nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                swap = true
            }
        }
        if (swap === false) break
    }

    let set = new Set(nums)

    let res = [...set]

    if (res.length > 2) {
        return res[2]
    }

    return res[0]

};