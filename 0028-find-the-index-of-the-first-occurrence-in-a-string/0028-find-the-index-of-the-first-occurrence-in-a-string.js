/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    let k = needle.length
    let j = 0, res = [], flag = false

    while (flag !== true && j <= haystack.length - needle.length) {
        res = []
        for (let i = j; i < k; i++) {
            res.push(haystack[i])
        }
        console.log(res)
        if (res.join("") === needle) {
            flag = true
            return j
        }
        j++
        k++
    }
    return -1

};