/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let xor = 0

    for (let i of s) {
        xor ^= i.charCodeAt(0)
    }
    for (let j of t) {
        xor ^= j.charCodeAt(0)
    }
    return String.fromCharCode(xor)
};