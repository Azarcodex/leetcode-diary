/**
 * @param {string} word
 * @return {boolean}
 */
function NDigits(len) {
    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += i
    }
    return sum
}
var detectCapitalUse = function (word) {
    let index = 0, sum = 0
    let str = word.split("")
    while (index < str.length) {
        let code = str[index].charCodeAt(0)
        if (code >= 65 && code <= 90) {
            sum += index
        }
        else {
            sum += 0
        }
        index++
    }
    if (sum === 0) {
        return true
    }
};

