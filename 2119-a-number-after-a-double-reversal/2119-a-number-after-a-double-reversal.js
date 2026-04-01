/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
    let org = num
    let res = 0
    while (num !== 0) {
        let rem = num % 10
        res = res * 10 + rem
        num = Math.floor(num / 10)
    }

    if (res.toString().split("").length === org.toString().length) {
        return true
    }
    return false
};