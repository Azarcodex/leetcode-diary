/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    let map = new Map()
    let evenMax = 0, evenMin = Infinity, oddMax = 0, oddMin = Infinity
    for (let i of s) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        }
        else {
            map.set(i, 1)
        }
    }
    for (let i of map.values()) {
        if (i % 2 === 0) {
            if (i > evenMax) {
                evenMax = i
            }
            if (i < evenMin) {
                evenMin = i
            }
        }
        else {
            if (i > oddMax) {
                oddMax = i
            }
            if (i < oddMin) {
                oddMin = i
            }
        }
    }
    console.log(evenMax, evenMin, oddMax, oddMin)
    if (oddMax > evenMax) {
        return oddMax - evenMin
    }
    else {
        return oddMax - evenMin
    }
};