/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let num = n.toString(2)
    let arr = num.split("")
    let obj = {}

    for (let i of arr) {
        if (obj[i] === undefined) {
            obj[i] = 1
        }
        else {
            obj[i] = obj[i] + 1
        }
    }
    let res = obj[1]
    return Number(res)
};