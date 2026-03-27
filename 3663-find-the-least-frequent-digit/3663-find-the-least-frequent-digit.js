/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function (n) {
    let map = new Map()
    let elm = Infinity
    let arr = n.toString().split("")

    for (let i of arr) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        }
        else {
            map.set(i, 1)
        }
    }
    let res = Array.from(map.values())
    let min = Math.min(...res)
    for (let [key, value] of map) {
        if (value === min) {
            if (elm > Number(key)) {
                elm = Number(key)
            }
        }
    }
    return elm
};