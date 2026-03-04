/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let res = []

    let size = 3, count = 0

    for (let i = 0; i < size; i++) {
        res.push(s[i])
    }

    for (let j = size; j <= s.length; j++) {
        let arr = [...new Set(res)]
        console.log(arr)
        if (arr.length === size) {
            count++
        }
        res.push(s[j])
        res.shift()
    }
    return count
};