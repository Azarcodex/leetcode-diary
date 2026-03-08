/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let binary = num.toString(2)
    let rev = ""
    for (let i of binary) {
        rev += (i === "1" ? "0" : "1")
    }
    return parseInt(rev, 2)
};