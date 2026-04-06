/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let mx1 = -Infinity, mx2 = -Infinity, mx3 = -Infinity
    let min1 = Infinity, min2 = Infinity, min3 = Infinity

    for (let num of nums) {
        if (num > mx1) {
            mx3 = mx2
            mx2 = mx1
            mx1 = num
        }
        else if (num > mx2) {
            mx3 = mx2
            mx2 = num
        }
        else {
            mx3 = num
        }

        if (num < min1) {
            min3 = min2
            min2 = min1
            min1 = num
        }
        else if (num < min2) {
            min3 = min2
            min2 = num
        }
        else {
            min3 = num
        }
    }
    let res1 = mx1 * mx2 * mx3
    let res2 = min1 * min2 * mx1
    let res3 = min1 * min2 * min3

    let res = [res1, res2, res3]
    console.log(res1, res2, res3)
    return Math.max(...res)
};