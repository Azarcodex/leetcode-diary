/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    function bitCount(num) {
        let count = 0
        while (num) {
            num &= (num - 1)
            count++
        }
        return count
    }
    return arr.sort((a, b) => {
        let x = bitCount(a)
        let y = bitCount(b)

        if (x === y) {
            return a - b
        }
        return x - y
    })


};