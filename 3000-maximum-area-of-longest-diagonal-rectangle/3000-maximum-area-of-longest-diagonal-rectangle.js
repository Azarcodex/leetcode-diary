/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let max = -Infinity
    let idx, res = [], dim, area, largest = 0, flag
    for (let i of dimensions) {
        flag = false
        let dim = Math.sqrt((i[0] * i[0]) + (i[1] * i[1]))
        area = i[0] * i[1]
        if (dim === max) {
            flag = true
        }
        if (dim > max) {
            max = dim
            idx = i
        }
        largest = Math.max(largest, area)
    }
    if (flag) return largest
    return idx[0] * idx[1]

};

// return the area