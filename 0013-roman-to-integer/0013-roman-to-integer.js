/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = new Map()
    let symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    let values = [1, 5, 10, 50, 100, 500, 1000]

    for (let i = 0; i < symbols.length; i++) {
        map.set(symbols[i], values[i])
    }
    let sum = 0
    for (let i of s) {
        let x = map.get(i)
        console.log(x)
        sum += x
    }
    return sum
};