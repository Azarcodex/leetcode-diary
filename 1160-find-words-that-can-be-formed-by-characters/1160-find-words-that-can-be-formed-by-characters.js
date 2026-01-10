/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function findFreq(elm, arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elm) {
            count++
        }
    }
    return count
}
var countCharacters = function (words, chars) {
    let char_set = chars.split("")
    let sum = 0, freqA, freqB, flag
    for (let i = 0; i < words.length; i++) {
        let str = words[i].split("")
        let j = 0, flag = true
        while (j < str.length) {
            freqA = findFreq(str[j], str)
            freqB = findFreq(str[j], char_set)
            if (freqB < freqA) {
                flag = false
                break
            }
            j++
        }
        if (flag === true) {
            sum += str.length
        }
    }
    return sum
};