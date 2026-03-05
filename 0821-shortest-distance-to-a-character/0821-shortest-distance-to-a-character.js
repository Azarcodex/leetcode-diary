/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let start = 0
    let result = []
    while (start < s.length) {
        let left = start
        let right = start
        let leftIdx = 1
        let rightIdx = 1
        while (true) {
            if (s[left] === c) {
                result.push(0)
                break
            }
            else if (s[left - 1] === c) {
                result.push(leftIdx)
                break
            }
            else if (s[right + 1] === c) {
                result.push(rightIdx)
                break
            }
            leftIdx++
            rightIdx++
            left--
            right++
        }
        start++
    }
    return result
};