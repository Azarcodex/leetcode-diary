/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let min, res = []
    for (let arr of matrix) {
        min = Math.min(...arr)
        let idx = arr.indexOf(min)
        let k = 0
        while (k < matrix.length) {
            if (min >= matrix[k][idx]) {
                k++
            }
            else {
                break
            }
        }
        if (k === matrix.length) {
            res.push(min)
        }
    }
    return res


};