/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let res = "", count = 0
    for (let i of word) {
        res += i
        if (i === ch) {
            break
        }
        count++
    }
    if (count !== word.length) {
        return res.split("").reverse().join("") + word.slice(count + 1, word.length)
    }
    return word

};