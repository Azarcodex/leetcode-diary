/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    let count = 0
    let sorted = amount.sort((a, b) => b - a)
    while (sorted[0] !== 0 || sorted[1] !== 0 || sorted[2] !== 0) {
        sorted = amount.sort((a, b) => b - a)
        if (sorted[0] !== 0) {
            sorted[0] = sorted[0] - 1
        }
        if (sorted[1] !== 0) {
            sorted[1] = sorted[1] - 1
        }

        count++
    }
    return count


};