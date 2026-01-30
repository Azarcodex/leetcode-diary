/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = new Map()
    let symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'IV', 'IX', 'XL', 'XC', 'CD', 'CM']
    let values = [1, 5, 10, 50, 100, 500, 1000, 4, 9, 40, 90, 400, 900]

    for (let i = 0; i < symbols.length; i++) {
        map.set(symbols[i], values[i])
    }


    let i = s.length - 1
    let sum = 0
    while (i >= 0) {
        let val1 = map.get(s[i]) || 0
        let val2 = map.get(s[i - 1]) || 0

        if (val1 > val2) {
            sum = sum + (val1 - val2)
            i = i - 2
        }
        else {
            sum = sum + val1
            i--
        }
    }
    return sum




};