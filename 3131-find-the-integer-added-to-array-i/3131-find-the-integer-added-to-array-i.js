/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
    let min1 = Math.min(...nums1)
    let min2 = Math.min(...nums2)

    let ans

    if (min1 <= min2) {
        ans = Math.abs(min1 - min2)
    }
    else {
        ans = min2 - min1
    }
    return ans
};