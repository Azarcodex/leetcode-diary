/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let obj = {}

    for (let i = 0; i < text.length; i++) {
        let ch = text[i]

        if (obj[ch] === undefined) {
            obj[ch] = 1
        }
        else {
            obj[ch] = obj[ch] + 1
        }
    }
    return Math.min(
        obj['b'] || 0,
        obj['a'] || 0,
        Math.floor((obj['l'] || 0) / 2),
        Math.floor((obj['o'] || 0) / 2),
        obj['n'] || 0
    )
};