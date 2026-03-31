/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
    let binary = n.toString(2).split("").reverse().join("")
    let res = [0, 0]
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            (i % 2 === 0) ? res[0] += 1 : res[1] += 1
        }
    }
    return res
};

// traverse from right to left