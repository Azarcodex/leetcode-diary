/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let beg = 0, end = s.length - 1

    while (beg <= end) {
        let temp = s[beg]
        s[beg] = s[end]
        s[end] = temp

        beg++
        end--
    }
};