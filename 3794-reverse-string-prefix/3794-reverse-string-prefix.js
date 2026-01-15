/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s, k) {
    let n = 0
    let str1 = ""
    let str2 = ""
    let res = ""
    for (let i = 0; i < s.length; i++) {
        if (n < k) {
            str1 += s[i]
            n++
        }
        else {
            str2 += s[i]
        }
    }
    str1 = str1.split("").reverse().join("")
    res = str1 + str2
    return res
};