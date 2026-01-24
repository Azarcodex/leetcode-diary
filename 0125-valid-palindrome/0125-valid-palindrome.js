/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.trim() === "") {
        return true
    }

    let arr = s.split("").map(s => s.toLowerCase())
    let x = arr.filter(a => a >= "a" && a <= "z")
    let left = 0, right = x.length - 1

    while (left <= right) {
        if (x[left] !== x[right]) {
            return false
        }
        left++
        right--
    }
    return true
};