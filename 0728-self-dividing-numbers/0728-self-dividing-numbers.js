/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = []
    let start = left
    let limit = right

    while (start <= limit) {
        if (start < 10) {
            result.push(start)
        }
        else {
            let org = start
            let data = start
            let flag
            while (data !== 0) {
                flag = false
                let rem = data % 10
                if (org % rem === 0) {
                    data = Math.floor(data / 10)
                    flag = true
                }
                else {
                    break
                }
            }
            if (flag !== false) {
                result.push(org)
            }
        }
        start++
    }
    return result
};