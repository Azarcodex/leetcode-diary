/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = new Map()
    let flag
    for (let i = 0; i < nums2.length; i++) {
        map.set(nums2[i], i)
    }

    for (let i = 0; i < nums1.length; i++) {
        let pos = map.get(nums1[i]) + 1
        let curr = nums1[i]
        let flag = false
        while (pos < nums2.length && flag !== true) {
            if (nums2[pos] > curr) {
                nums1[i] = nums2[pos]
                flag = true
            }
            pos++
        }
        if (flag === false) {
            nums1[i] = -1
        }
    }
    return nums1
};